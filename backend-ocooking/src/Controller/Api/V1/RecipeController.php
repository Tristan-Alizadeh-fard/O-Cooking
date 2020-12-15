<?php

namespace App\Controller\Api\V1;

use App\Entity\Ingredient;
use App\Entity\Recipe;
use App\Form\RecipeType;
use App\Repository\CategoryRepository;
use App\Repository\IngredientRepository;
use App\Repository\MeasureRepository;
use App\Repository\RecipeRepository;
use App\Repository\TagRepository;
use App\Repository\UserRepository;
use App\Service\MailerService;
use App\Service\SluggerService;
use App\Service\UploadFileService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/v1/recipes", name="api_v1_recipes_")
 */
class RecipeController extends AbstractController
{
    /**
     * @Route("/browse/user/{id}", name="browse_user", methods={"GET"}, requirements={"id":"\d+"})
     */
    public function userBrowseRecipeAll(int $id, UserRepository $userRepository, SerializerInterface $serializer): Response
    {
      // recherche toutes les recettes d'un utilisateur
       
       $users = $userRepository->find($id);
       
       $jsonUser = $serializer->serialize(
         $users,
         'json',
         ['groups' => 'show_user']
        );
        $user = json_decode($jsonUser, true);

        return $this->json([
            'user' => $user,
        ]);
    }

    /**
     * @Route("", name="browse", methods={"GET"}, requirements={"id":"\d+"})
     */
    public function browse(SerializerInterface $serializer, RecipeRepository $recipeRepository): Response
    {
      // recherche toutes les recettes

      $recipes = $recipeRepository->findall();
        
      $json = $serializer->serialize(
          $recipes,
          'json',
          ['groups' => 'show_recipe']
        );
     
      $recipes = json_decode($json, true);

      return $this->json([
        'recipes' => $recipes,
      ]);

    }

     /**
     * @Route("/{id}", name="read", methods={"GET"}, requirements={"id":"\d+"})
     */
    public function read(int $id,SerializerInterface $serializer, RecipeRepository $recipeRepository): Response
    {
      // affiche une recette

      $recipe = $recipeRepository->find($id);
        
      $jsonRecipe = $serializer->serialize(
          $recipe,
          'json',
          ['groups' => 'recipe_read']
        );
        $recipe = json_decode($jsonRecipe, true);

      // Si la recipe n'existe pas en BDD, on lève une erreur pour obtenir unr 404
      if ($recipe === null) {
          throw $this->createNotFoundException('La recette demandé n\'existe pas');
      }

      return $this->json([
        'recipes' => $recipe,
      ]);
    }

     /**
     * @Route("/search", name="search", methods={"POST"})
     */
    public function searchRecipes(Request $request, SerializerInterface $serializer, RecipeRepository $recipeRepository): Response
    {
      $json = $request->getContent();

      $userSearchData = json_decode($json, true);

      if (is_null($userSearchData)) {
        $userSearchData = [];
      }

       $result = $recipeRepository->findByPerso($userSearchData, 50);
      
       $jsonRecipes = $serializer->serialize(
         $result,
         'json',
         ['groups' => 'show_recipe']
        );
        $recipesSearch = json_decode($jsonRecipes, true);

        return $this->json([
            'recipesSearch' => $recipesSearch,
        ]);
    }

    /**
    * @Route("/add", name="needed_information_add", methods={"GET"})
    */
    public function neededInformationAdd(SerializerInterface $serializer, CategoryRepository $category, IngredientRepository $ingredient, MeasureRepository $measure, TagRepository $tag): Response
    {
        $categories = $category->findAll();
        $ingredients = $ingredient->findAll();
        $measures = $measure->findAll();
        // DOC Tag
        $tags = $tag->findAll();
        // DOC fin Tag

        
        $jsonContentCategories = $serializer->serialize($categories, 'json', [
          'groups' => 'category_needed_information_add',
        ]);
        $categoryData = json_decode($jsonContentCategories, true);
        dump($categoryData);

        $jsonContentIngredients = $serializer->serialize($ingredients, 'json', [
            'groups' => 'ingredient_needed_information_add',
        ]);
        $ingredientData = json_decode($jsonContentIngredients, true);

        $jsonContentMeasures = $serializer->serialize($measures, 'json', [
            'groups' => 'measure_needed_information_add',
        ]);
        $measureData = json_decode($jsonContentMeasures, true);

        // DOC Tag

        // DOC fin Tag
  
        return $this->json([
          'categories' => $categoryData,
          'ingredients' => $ingredientData,
          'measure' => $measureData,
          // DOC Tag
          'tag' => '',
          // DOC fin Tag
        ]);
 
    }

    /**
    * @Route("/add", name="add", methods={"POST"})
    */
    public function add(Request $request, SluggerService $slugger, UploadFileService $uploadFile, CategoryRepository $categoryRepository, MeasureRepository $measureRepository, IngredientRepository $ingredientRepository, TagRepository $tagRepository)
    {
        $json = $request->getContent();

        $recipeInformationsArray = json_decode($json, true);

        // Save picture on server
        $pictureName = $slugger->slugifyRecipeNameForPicture($recipeInformationsArray['name'], $this->getUser());
        $pictureFilePath = $uploadFile->uploadRecipePicture($recipeInformationsArray['picture'], $pictureName);
        
        // path to the picture
        $recipeInformationsArray['picture'] = $pictureFilePath;
        
        $recipe = new Recipe();

        $form = $this->createForm(RecipeType::class, $recipe);
        $form->submit($recipeInformationsArray);
        
        if ($form->isValid()) {
            // Create unknown ingredient in Ingredient Entity
            $em = $this->getDoctrine()->getManager();

            $recipeIngredients = $form->getData()->getRecipeIngredients();
            foreach ($recipeIngredients as $recipeIngredient) {
                $ingredientName = $recipeIngredient->getIngredient()->getName();
                $ingredient = $ingredientRepository->findOneBy(['name' => $ingredientName]);
                if (is_null($ingredient)) {
                    $newIngredient = new Ingredient();
                    $newIngredient->setName($ingredientName);
                    $em->persist($newIngredient);
                    $em->flush();
                }
            }
            
            // set author and favorites in $recipe
            $user = $this->getUser();
            $recipe->setAuthor($user);
            $recipe->addFavorite($user);

            // set category in $recipe
            $categoryName = $form->getData()->getCategory()->getName();
            $category = $categoryRepository->findOneBy(['name' => $categoryName]);
            if (is_null($category)) {
                throw $this->createNotFoundException('La catégorie sélectionnée n\'existe pas');
            }
            $recipe->setCategory($category);

            // DOC $recipe set tags
            $tags = $form->getData()->getTags();
            foreach ($tags as $tag) {
                $tagName = $tag->getName();
                $recipe->removeTag($tag);
                $tagToAdd = $tagRepository->findOneBy(['name' => $tagName]);
                if (is_null($tagToAdd)) {
                    throw $this->createNotFoundException('Le(s) tag(s) sélectionné(s) n\'existe(nt) pas');
                }
                $recipe->addTag($tagToAdd);
            }
            // DOC fin $recipe set tags

            // set recipe in $recipeIngredients
            $recipeIngredients = $form->getData()->getRecipeIngredients();

            foreach ($recipeIngredients as $recipeIngredient) {
                // Measure
                $measureName = $recipeIngredient->getMeasure()->getName();
                $measure = $measureRepository->findOneBy(['name' => $measureName]);
                if (is_null($measure)) {
                    throw $this->createNotFoundException('La mesure sélectionnée n\'existe pas');
                }
                $recipeIngredient->setMeasure($measure);

                // Ingredient
                $ingredientName = $recipeIngredient->getIngredient()->getName();
                $ingredient = $ingredientRepository->findOneBy(['name' => $ingredientName]);
                $recipeIngredient->setIngredient($ingredient);

                // set recipe in $recipeIngredient
                $recipeIngredient->setRecipe($recipe);
            }

            // set recipe in $steps
            $steps = $form->getData()->getsteps();
            foreach ($steps as $step) {
                $step->setRecipe($recipe);
            }
    
            // persist and flush in database
            foreach ($recipeIngredients as $recipeIngredient) {
                $em->persist($recipeIngredient);
            }

            foreach ($steps as $step) {
                $em->persist($step);
            }

            $em->persist($recipe);

            $em->flush();

            return $this->json([], 201);

        } else {
            return $this->json([
                'errors' => (string) $form->getErrors(true, false),
            ], 400);
        }
    }

    /**
     * @Route("/{id}/edit/signaled", name="signaled", methods={"PATCH", "PUT"}, requirements={"id"="\d+"})
     */
    public function signaled(Recipe $recipe, SerializerInterface $serializer, MailerService $mailerService): Response
    {
        $recipe->setSignaled(true);

        $em = $this->getDoctrine()->getManager();
        $em->persist($recipe);
        $em->flush();

        $response = new JsonResponse();
        $jsonContent = $serializer->serialize($recipe, 'json', [
            'groups' => 'recipe_read',
        ]);
        $response = JsonResponse::fromJsonString(($jsonContent));

        $from = $this->getUser()->getEmail();
        $mailerService->sendAlertAboutSignalRecipe($recipe, $from);

        return $response;
    }

    /**
     * @Route("/send/{id}", name="send_recipe", methods={"GET"}, requirements={"id"="\d+"})
     */
    public function sendRecipe(int $id, MailerService $mailerService,SerializerInterface $serializer, RecipeRepository $recipeRepository): Response
    {
      $recipe = $recipeRepository->find($id);
      $response = new JsonResponse();
      $jsonContent = $serializer->serialize($recipe, 'json', [
          'groups' => 'recipe_read',
      ]);
      $response = JsonResponse::fromJsonString(($jsonContent));

      // Si la recipe n'existe pas en BDD, on lève une erreur pour obtenir unr 404
      if ($recipe === null) {
          throw $this->createNotFoundException('La recette demandé n\'existe pas');
      }
      ;
      $from = $this->getUser()->getEmail();
      $mailerService->sendRecipe($recipe, $from);
      return $response;
    }

}

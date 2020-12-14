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
use App\Service\PictureService;
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
        // $tags = $tag->findAll();

        
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
  
        return $this->json([
          'categories' => $categoryData,
          'ingredients' => $ingredientData,
          'measure' => $measureData
        ]);
 
    }

    /**
    * @Route("/add", name="add", methods={"POST"})
    */
    public function add(Request $request, CategoryRepository $categoryRepository, MeasureRepository $measureRepository, IngredientRepository $ingredientRepository, TagRepository $tagRepository)
    {
        $json = $request->getContent();

        $recipeInformationsArray = json_decode($json, true);
        dump($recipeInformationsArray);
        // picture in base64
        $pictureBase64 = $recipeInformationsArray['picture'];
        // picture from base64 to uploaded file
        $recipeInformationsArray['picture'] = new PictureService($pictureBase64, 'test');
        dump($recipeInformationsArray);

        $recipe = new Recipe();

        $form = $this->createForm(RecipeType::class, $recipe, ['csrf_protection' => false]);
        $form->submit($recipeInformationsArray);

        // dd($form->submit($recipeInformationsArray));
        dd($form->isValid());
        
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
            
            // set $recipe for author and favorites
            $user = $this->getUser();
            $recipe->setAuthor($user);
            $recipe->addFavorite($user);

            // set $recipe for category
            $categoryName = $form->getData()->getCategory()->getName();
            $category = $categoryRepository->findOneBy(['name' => $categoryName]);
            $recipe->setCategory($category);

            // // $recipe set tags
            // $tags = $form->getData()->getTags();
            // $tagCollection = [];
            // foreach ($tags as $tag) {
            //     $tagName = $tag->getName();
            //     $tagToAdd = $tagRepository->findOneBy(['name' => $tagName]);
            //     $tagToAdd->addRecipe($recipe);
            //     $tagCollection[] = $tagToAdd;
            //     $recipe->addTag($tagToAdd);
            // }

            // $recipe set recipeIngredients
            $recipeIngredients = $form->getData()->getRecipeIngredients();
            // $ingredientCollection = [];
            foreach ($recipeIngredients as $recipeIngredient) {
                // Measure
                $measureName = $recipeIngredient->getMeasure()->getName();
                $measure = $measureRepository->findOneBy(['name' => $measureName]);
                $recipeIngredient->setMeasure($measure);

                // Ingredient
                $ingredientName = $recipeIngredient->getIngredient()->getName();
                $ingredient = $ingredientRepository->findOneBy(['name' => $ingredientName]);
                $recipeIngredient->setIngredient($ingredient);
                // if (is_null($ingredient)) {
                //     $newIngredient = new Ingredient();
                //     $newIngredient->setName($ingredientName);
                //     $ingredientCollection[] = $newIngredient;
                //     $recipeIngredient->setIngredient($ingredient);
                // } else {
                //     $recipeIngredient->setIngredient($ingredient);
                // }

                // set recipe to recipeIngredient
                $recipeIngredient->setRecipe($recipe);
                // dump($recipeIngredient);
            }
            // dd('FIN');

            // set recipe to steps
            $steps = $form->getData()->getsteps();
            foreach ($steps as $step) {
                $step->setRecipe($recipe);
            }
    
            // persist and flush in database
            // $em = $this->getDoctrine()->getManager();

            // foreach ($ingredientCollection as $ingredient) {
            //     $em->persist($ingredient);
            // }
            
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
}

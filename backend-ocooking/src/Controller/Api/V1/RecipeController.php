<?php

namespace App\Controller\Api\V1;


use App\Entity\Recipe;
use App\Form\SearchRecipesType;
use App\Repository\RecipeRepository;
use App\Repository\UserRepository;
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
     * @Route("/{id}/edit/signaled", name="signaled", methods={"PATCH", "PUT"}, requirements={"id"="\d+"})
     */
    public function signaled(Recipe $recipe, SerializerInterface $serializer): Response
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

        return $response;
    }

     /**
     * @Route("/search", name="search", methods={"POST"})
     */
    public function searchRecipes(Request $request, SerializerInterface $serializer, RecipeRepository $recipeRepository): Response
    {
      $json = $request->getContent();

      $userInformationsArray = json_decode($json, true);

      $recipes = new Recipe();

      $form = $this->createForm(SearchRecipesType::class, $recipes, ['csrf_protection' => true]);
      $form->submit($userInformationsArray);

      $name = $form->get('name')->getData();
      $category = $form->get('category')->getData();

      if($name !== null && $category == null){
        $recipes = $recipeRepository->searchRecipesByName($name);

      }elseif($category !== null && $name == null){
        $recipes = $recipeRepository->searchRecipesByCategory($category);

      }elseif($name !== null && $category !== null ){
        $recipes = $recipeRepository->searchRecipesByNameAndCategory($name, $category);
        
      }else {
        $recipes = $recipeRepository->searchRecipesAll();

      }
      
       $jsonRecipes = $serializer->serialize(
         $recipes,
         'json',
         ['groups' => 'show_recipe']
        );
        $recipesSearch = json_decode($jsonRecipes, true);

        return $this->json([
            'recipesSearch' => $recipesSearch,
        ]);
    }
}

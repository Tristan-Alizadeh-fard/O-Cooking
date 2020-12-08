<?php

namespace App\Controller\Api\V1;

use App\Entity\Recipe;
use App\Entity\ShoppingList;
use App\Repository\RecipeRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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

      // Si le recipe n'existe pas en BDD, on lève une erreur pour obtenir unr 404
      if ($recipe === null) {
          throw $this->createNotFoundException('La recette demandé n\'existe pas');
      }

      return $this->json([
        'recipes' => $recipe,
      ]);
  }
}

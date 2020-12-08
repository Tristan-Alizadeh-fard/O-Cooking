<?php

namespace App\Controller\Api\V1;

use App\Entity\Recipe;
use App\Entity\ShoppingList;
use App\Entity\User;
use App\Repository\RecipeRepository;
use App\Repository\ShoppingListRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\BrowserKit\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/v1/shoppinglist", name="api_v1_shoppinglist_")
 */
class ShoppinglistController extends AbstractController
{
    /**
     * @Route("/{id}", name="read", methods={"GET"}, requirements={"id":"\d+"})
     */
    public function userShoppingList(int $id, UserRepository $userRepository, SerializerInterface $serializer): Response
    {
      // affiche la liste de cours d'un utilisateur
       
       $users = $userRepository->find($id);
       
       $jsonUser = $serializer->serialize(
         $users,
         'json',
         ['groups' => 'show_shoppinglist']
        );
        $user = json_decode($jsonUser, true);

        return $this->json($user);
    }

       /**
     * @Route("/{id}/delete", name="delete",methods={"DELETE"})
     */
    public function DeleteRecipeShoppinglist(RecipeRepository $recipeRepository, $id): Response
    {
      $recipe = $recipeRepository->find($id);

       $em = $this->getDoctrine()->getManager();
       
       $em->remove($recipe);

       $em->flush();
       
       return $this->json([], 200);
    }
}
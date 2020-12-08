<?php

namespace App\Controller\Api\V1;

use App\Entity\Recipe;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
     * @Route("/{id}/edit", name="edit",methods={"PATCH", "PUT"}, requirements={"id":"\d+"})
     */
    public function addRecipeShoppinglist(Recipe $recipe): Response
    {
      $shoppinglist = $this->getUser()->getShoppingLists()[0];

      $shoppinglist->addRecipe($recipe);

       $em = $this->getDoctrine()->getManager();
       
       //le persist sert a modifier (sens supprimer une recette) la relation
       $em->persist($recipe);

       $em->flush();
       
       return $this->json([], 200);
    }

    /**
     * @Route("/{id}/delete", name="delete",methods={"DELETE"}, requirements={"id":"\d+"})
     */
    public function DeleteRecipeShoppinglist(Recipe $recipe): Response
    {
      $shoppinglist = $this->getUser()->getShoppingLists()[0];

      $shoppinglist->removeRecipe($recipe);

       $em = $this->getDoctrine()->getManager();
       
       //le persist sert a modifier (sens supprimer une recette) la relation
       $em->persist($recipe);

       $em->flush();
       
       return $this->json([], 200);
    }
}
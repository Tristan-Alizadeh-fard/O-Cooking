<?php

namespace App\Controller\Api\V1;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/v1/shoppinglist", name="api_v1_shopping_lists_)
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
}
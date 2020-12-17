<?php

namespace App\Controller\Api\V1;

use App\Entity\Recipe;
use App\Entity\ShoppingList;
use App\Repository\UserRepository;
use App\Service\MailerService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/v1/shoppinglist", name="api_v1_shoppinglist_")
 */
class ShoppinglistController extends AbstractController
{
    /**
     * @Route("/", name="read", methods={"GET"})
     */
    public function userShoppingList(SerializerInterface $serializer): Response
    {
      $shoppinglist = $this->getUser()->getShoppingLists()[0];
     
       $jsonshoppinglist = $serializer->serialize(
         $shoppinglist,
         'json',
         ['groups' => 'show_shoppinglist']
        );
        $userShoppinglist = json_decode($jsonshoppinglist, true);

        return $this->json($userShoppinglist);
    }

    /**
     * @Route("/edit/{id}", name="edit",methods={"PATCH", "PUT"}, requirements={"id":"\d+"})
     */
    public function addRecipeShoppinglist(Recipe $recipe, SerializerInterface $serializer): Response
    {
      $shoppinglist = $this->getUser()->getShoppingLists()[0];

      $shoppinglist->addRecipe($recipe);

       $em = $this->getDoctrine()->getManager();
       
       //le persist sert a modifier (sens supprimer une recette) la relation
       $em->persist($recipe);

       $em->flush();
       $jsonshoppinglist = $serializer->serialize(
        $shoppinglist,
        'json',
        ['groups' => 'show_shoppinglist']
       );
       $userShoppinglist = json_decode($jsonshoppinglist, true);
       return $this->json([$userShoppinglist], 200);
    }

    /**
     * @Route("/delete/{id}", name="delete",methods={"DELETE"}, requirements={"id":"\d+"})
     */
    public function deleteRecipeShoppinglist(Recipe $recipe, SerializerInterface $serializer): Response
    {
      $shoppinglist = $this->getUser()->getShoppingLists()[0];

      $shoppinglist->removeRecipe($recipe);

       $em = $this->getDoctrine()->getManager();
       
       //le persist sert a modifier (sens supprimer une recette) la relation
       $em->persist($recipe);

       $em->flush();
       
       $jsonshoppinglist = $serializer->serialize(
        $shoppinglist,
        'json',
        ['groups' => 'show_shoppinglist']
       );
       $userShoppinglist = json_decode($jsonshoppinglist, true);
       return $this->json([$userShoppinglist], 200);
    }

    /**
     * @Route("/send", name="send_shoppingList", methods={"GET"})
     */
    public function sendShoppingList(MailerService $mailerService,SerializerInterface $serializer): Response
    {

      $shoppinglist = $this->getUser()->getShoppingLists()[0];
      
      $response = new JsonResponse();
      $jsonShoppinglist = $serializer->serialize(
        $shoppinglist,
        'json',
        ['groups' => 'show_shoppinglist']
       );
      $response = JsonResponse::fromJsonString(($jsonShoppinglist));

      $from = $this->getUser()->getEmail();
      $mailerService->sendShoppinList($shoppinglist, $from);
      return $response;

    }
}
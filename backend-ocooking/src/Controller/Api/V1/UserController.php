<?php

namespace App\Controller\Api\V1;

use App\Entity\Recipe;
use App\Entity\ShoppingList;
use App\Entity\User;
use App\Form\UserType;
use App\Service\MailerService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/v1/users", name="api_v1_users_")
 */
class UserController extends AbstractController
{
    /**
      * @Route("/add", name="add", methods={"POST"})
     */
    public function add(Request $request, SerializerInterface $serializer, UserPasswordEncoderInterface $userPasswordEncoder, MailerService $mailerService): Response
    {
        $json = $request->getContent();

        $userInformationsArray = json_decode($json, true);
        // dd($userInformationsArray);

        $user = new User();

        $form = $this->createForm(UserType::class, $user, ['csrf_protection' => false]);
        $form->submit($userInformationsArray);
        
        if ($form->isValid()) {
            $password = $form->get('password')->getData();
            $user->setPassword($userPasswordEncoder->encodePassword($user, $password));

            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            
            try {
                $em->flush();
            } catch (\Exception $error) {
                $errors = $error->getMessage();
                return $this->json([
                    'error' => 'Cette adresse email existe déjà',
                ], 500);
            }
                
            $shoppingList = new ShoppingList();
            $shoppingList->setUser($user);
            
            $em-> persist($shoppingList);
            $em->flush();

            $mailerService->sendConfirmationInscriptiontoUser($user);

            return $this->json([], 201);
        } else {
            return $this->json([
                'errors' => (string) $form->getErrors(true, false),
            ], 400);
        }
    }

     /**
      * @Route("/read", name="read", methods={"GET"})
     */
    public function read(SerializerInterface $serializer): Response
    {
        $response = new JsonResponse();

        $user = $this->getUser();
        $jsonContent = $serializer->serialize($user, 'json', [
            'groups' => 'user_read',
        ]);
 
        $response = JsonResponse::fromJsonString(($jsonContent));

        return $response;
    }

    /**
     * @Route("/favorites/add/{id}", name="favorites_add", methods={"PUT", "PATCH"}, requirements={"id"="\d+"})
     */
    public function favoritesAdd(Recipe $recipe, SerializerInterface $serializer)
    {
        $user = $this->getUser();
        $user->addFavorite($recipe);

        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();

        $response = new JsonResponse();
        $jsonContent = $serializer->serialize($user, 'json', [
            'groups' => 'user_favorites',
        ]);
 
        $response = JsonResponse::fromJsonString(($jsonContent));

        return $response;
    }

    /**
     * @Route("/favorites/remove/{id}", name="favorites_remove", methods={"PUT", "PATCH"}, requirements={"id"="\d+"})
     */
    public function favoritesRemove(Recipe $recipe, SerializerInterface $serializer)
    {
        $user = $this->getUser();
        $user->removeFavorite($recipe);

        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();

        $response = new JsonResponse();
        $jsonContent = $serializer->serialize($user, 'json', [
            'groups' => 'user_favorites',
        ]);
 
        $response = JsonResponse::fromJsonString(($jsonContent));

        return $response;
    }
}

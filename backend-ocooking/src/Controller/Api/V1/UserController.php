<?php

namespace App\Controller\Api\V1;

use App\Entity\ShoppingList;
use App\Entity\User;
use App\Form\UserType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
     * @Route("/{id}/recipeAll", name="recipeAll", methods={"GET"}, requirements={"id":"\d+"})
     */
    public function userBrowseRecipeAll(User $user): Response
    {
        return $this->json([
        
            'user' => $user
        
        ]);

     /**
      * @Route("/add", name="add", methods={"POST"})
     */
    public function add(Request $request, SerializerInterface $serializer, UserPasswordEncoderInterface $userPasswordEncoder): Response
    {
        $json = $request->getContent();

        $userInformationsArray = json_decode($json, true);

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

            return $this->json([], 201);
        } else {
            return $this->json([
                'errors' => (string) $form->getErrors(true, false),
            ], 400);
        }
    }
}

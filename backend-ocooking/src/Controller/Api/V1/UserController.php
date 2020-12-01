<?php

namespace App\Controller\Api\V1;

use App\Entity\User;
use App\Form\UserType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/v1/users", name="api_v1_users_")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/add", name="add", methods={"POST"})
     */
    public function add(Request $request, SerializerInterface $serializer): Response
    {
        $json = $request->getContent();

        $userInformationsArray = json_decode($json, true);

        $user = new User();

        $form = $this->createForm(UserType::class, $user, ['csrf_protection' => false]);
        $form->submit($userInformationsArray);

        if ($form->isValid()) {
            return $this->json([
                    'test' => 'OK'
                ]);
        }
        
        return $this->json([
            
        ]);
    }
}

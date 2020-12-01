<?php

namespace App\Controller\Api\V1;

use App\Entity\User;
use App\Repository\RecipeRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/v1/users", name="api_v1_users_")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/{id}/recipeAll", name="recipeAll", methods={"GET"})
     */
    public function recipeAll(User $user): Response
    {
        return $this->json($user);
    }


}

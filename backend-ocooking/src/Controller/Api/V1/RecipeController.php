<?php

namespace App\Controller\Api\V1;

use App\Entity\Recipe;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
* @Route("/api/v1/recipes", name="api_v1_recipes_")
*/
class RecipeController extends AbstractController
{
     /**
     * @Route("/{id}", name="recipes_read", methods={"GET"}, requirements={"id":"\d+"})
     */
    public function read(Recipe $recipe): Response
    {
        return $this->json([
        
          'recipe' => $recipe,
        
        ]);
    }
}

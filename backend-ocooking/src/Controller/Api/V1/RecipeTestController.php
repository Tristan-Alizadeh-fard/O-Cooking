<?php

namespace App\Controller\Api\V1;

use App\Entity\Recipe;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RecipeTestController extends AbstractController
{
    /**
     * @Route("/api/v1/test/recipes/{id}", name="api_v1_recipe_test", methods={"GET"}, requirements={"id":"\d+"})
     */
    public function read(Recipe $recipe): Response
    {
        // dd($recipe);
        
        return $this->json([
            'recipes' => $recipe,
        ]);
    }
}

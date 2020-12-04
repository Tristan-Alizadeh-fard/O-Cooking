<?php

namespace App\Controller\Api\V1;

use App\Repository\CategoryRepository;
use App\Repository\IngredientRepository;
use App\Repository\MeasureRepository;
use App\Repository\TagRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
     * @Route("/api/v1/recipes", name="api_v1_recipes_")
     */
class RecipeController extends AbstractController
{
   /**
    * @Route("/add", name="needed_information_add", methods={"GET"})
    */
    public function neededInformationAdd(CategoryRepository $category, IngredientRepository $ingredient, MeasureRepository $measure, TagRepository $tag): Response
    {
        $categories = $category->findAll();
        $ingredients = $ingredient->findAll();
        $measures = $measure->findAll();
        $tags = $tag->findAll();

        return $this->json([
            'categories' => $categories,
            'ingredients' => $ingredients,
            'measures' => $measures,
            'tags' => $tags,
        ]);
    }

    /**
    * @Route("/add", name="add", methods={"POST"})
    */
    public function add(Request $request)
    {
        $json = $request->getContent();

        $RecipeInformationsArray = json_decode($json, true);

        dd($RecipeInformationsArray);
    }
}
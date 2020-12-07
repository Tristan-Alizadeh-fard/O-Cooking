<?php

namespace App\Controller\Api\V1;

use App\Entity\Recipe;
use App\Form\RecipeType;
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
        // TODO à décommenter pour récupérer l'auteur de la recette
        // $user = $this->getUser();
        // dd($author);
        
        $json = $request->getContent();

        $recipeInformationsArray = json_decode($json, true);
        // dd($recipeInformationsArray);

        // TODO à décommenter pour set l'auteur de la recette
        // $recipe->setAuthor($user);

        // TODO pour ajouter la recette créée en favoris du user
        // $recipe->addFavorite($user)

        $recipe = new Recipe();

        $form = $this->createForm(RecipeType::class, $recipe, ['csrf_protection' => false]);
        $form->submit($recipeInformationsArray);
        // dd($form->submit($recipeInformationsArray));


        // dd($form->isValid());

        return $this->json([
            'errors' => (string) $form->getErrors(true, false),
        ], 400);
        
        // if ($form->isValid()) {
            
        //     $em = $this->getDoctrine()->getManager();
        //     $em->persist($recipe);

        // }
        

      

    }
}
<?php

namespace App\Controller\Api\V1;

use App\Entity\Recipe;
use App\Entity\Step;
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
    public function add(Request $request, CategoryRepository $categoryRepository, TagRepository $tagRepository)
    {
        $json = $request->getContent();

        $recipeInformationsArray = json_decode($json, true);
        // dd($recipeInformationsArray);

        $recipe = new Recipe();

        $form = $this->createForm(RecipeType::class, $recipe, ['csrf_protection' => false]);
        $form->submit($recipeInformationsArray);

        // dd($form->submit($recipeInformationsArray));
        // dd($form->isValid());
        
        if ($form->isValid()) {
            // set $recipe for author and favorites
            $user = $this->getUser();
            $recipe->setAuthor($user);
            $recipe->addFavorite($user);

            // set $recipe for category
            $categoryName = $form->getData()->getCategory()->getName();
            $category = $categoryRepository->findOneBy(['name' => $categoryName]);
            $recipe->setCategory($category);

            // $recipe add tags
            $tags = $form->getData()->getTags();
            $tagCollection = [];
            foreach ($tags as $tag) {
                $tagName = $tag->getName();
                $tagToAdd = $tagRepository->findOneBy(['name' => $tagName]);
                $tagToAdd->addRecipe($recipe);
                $tagCollection[] = $tagToAdd;
                $recipe->addTag($tagToAdd);
            }

            // $recipe add recipeIngredients
            $recipeIngredients = $form->getData()->getRecipeIngredients();
            dd($recipeIngredients);

            // $recipe add steps
            $steps = $form->getData()->getsteps();
            foreach ($steps as $step) {
                $recipe->addStep($step);
            }
    
            // persist and flush in database
            $em = $this->getDoctrine()->getManager();
            $em->persist($recipe);
            
            foreach ($steps as $step) {
                $em->persist($step);
            }
            $em->flush();

            return $this->json([], 201);

        } else {
            return $this->json([
                'errors' => (string) $form->getErrors(true, false),
            ], 400);
        }
        

      

    }
}
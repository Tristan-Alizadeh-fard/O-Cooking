<?php

namespace App\Controller\Api\V1;

use App\Entity\Ingredient;
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
        // $tags = $tag->findAll();

        return $this->json([
            'categories' => $categories,
            'ingredients' => $ingredients,
            'measures' => $measures,
            // 'tags' => $tags,
        ]);
    }

    /**
    * @Route("/add", name="add", methods={"POST"})
    */
    public function add(Request $request, CategoryRepository $categoryRepository, MeasureRepository $measureRepository, IngredientRepository $ingredientRepository, TagRepository $tagRepository)
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

            // // $recipe set tags
            // $tags = $form->getData()->getTags();
            // $tagCollection = [];
            // foreach ($tags as $tag) {
            //     $tagName = $tag->getName();
            //     $tagToAdd = $tagRepository->findOneBy(['name' => $tagName]);
            //     $tagToAdd->addRecipe($recipe);
            //     $tagCollection[] = $tagToAdd;
            //     $recipe->addTag($tagToAdd);
            // }

            // $recipe set recipeIngredients
            $recipeIngredients = $form->getData()->getRecipeIngredients();
            $ingredientCollection = [];
            foreach ($recipeIngredients as $recipeIngredient) {
                // Measure
                $measureName = $recipeIngredient->getMeasure()->getName();
                $measure = $measureRepository->findOneBy(['name' => $measureName]);
                $recipeIngredient->setMeasure($measure);

                // Ingredient
                $ingredientName = $recipeIngredient->getIngredient()->getName();
                $ingredient = $ingredientRepository->findOneBy(['name' => $ingredientName]);
                if (is_null($ingredient)) {
                    $newIngredient = new Ingredient();
                    $newIngredient->setName($ingredientName);
                    $ingredientCollection[] = $newIngredient;
                    $recipeIngredient->setIngredient($ingredient);
                } else {
                    $recipeIngredient->setIngredient($ingredient);
                }

                // set recipe to recipeIngredient
                $recipeIngredient->setRecipe($recipe);
                // dump($recipeIngredient);
            }
            // dd('FIN');

            // set recipe to steps
            $steps = $form->getData()->getsteps();
            foreach ($steps as $step) {
                $step->setRecipe($recipe);
            }
    
            // persist and flush in database
            $em = $this->getDoctrine()->getManager();

            foreach ($ingredientCollection as $ingredient) {
                $em->persist($ingredient);
                dd($ingredient);
            }
            
            foreach ($recipeIngredients as $recipeIngredient) {
                $em->persist($recipeIngredient);
            }

            foreach ($steps as $step) {
                $em->persist($step);
            }

            $em->persist($recipe);

            $em->flush();

            return $this->json([], 201);

        } else {
            return $this->json([
                'errors' => (string) $form->getErrors(true, false),
            ], 400);
        }
        

      

    }
}
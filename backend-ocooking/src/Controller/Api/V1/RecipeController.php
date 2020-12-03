<?php

namespace App\Controller\Api\V1;

use App\Entity\Category;
use App\Entity\Ingredient;
use App\Entity\Recipe;
use App\Entity\RecipeIngredient;
use App\Entity\Step;
use App\Entity\Tag;
use App\Entity\User;
use App\Repository\RecipeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
     * @Route("/api/v1/recipes", name="api_v1_recipes_")
     */
class RecipeController extends AbstractController
{
      /**
     * @Route("/browse/user/{id}", name="browse_user", methods={"GET"}, requirements={"id":"\d+"})
     */
    public function userBrowseRecipeAll(int $id, User $user, Recipe $recipe): Response
    {
        //$user = $this->getUser();
        // dd($user);
        // $userId= $user->getId();

        $qb = $this->getDoctrine()->getManager()->createQueryBuilder();

        $qb->from(User::class, 'u')
            ->select('u.id')
            ->addSelect('u.email')
            ->addSelect('u.pseudo')
            ->where('u.id = :id')
            ->setParameter('id', $id,/* $userId */)
        ;
        
        $user = $qb->getQuery()->getResult();

        $qb = $this->getDoctrine()->getManager()->createQueryBuilder();

        $qb->from(Recipe::class, 'r')
            ->select('r.id')
            ->addSelect('r.name')
            ->addSelect('r.picture')
            ->addSelect('r.nbPeople')
            ->addSelect('r.cookingTime')
            ->leftJoin('r.author', 'a')
            ->addSelect('a.pseudo')
            ->where('r.author = :id')
            ->setParameter('id', $id,/* $userId */)
        ;
        
        $recipe = $qb->getQuery()->getResult();

        $qb = $this->getDoctrine()->getManager()->createQueryBuilder();

        $qb->from(Recipe::class, 'r')
            ->select('r.id')
            ->leftJoin('r.category', 'c')
            ->addSelect('c.name')
            ->where('r.author = :id')
            ->setParameter('id', $id,/* $userId */)
        ;
        $category = $qb->getQuery()->getResult();

        $qb = $this->getDoctrine()->getManager()->createQueryBuilder();

        $qb->from(Recipe::class, 'r')
            ->select('r.id')
            ->leftjoin('r.tags', 't')
            ->addSelect('t.name')
            ->where('r.author = :id')
            ->setParameter('id', $id,/* $userId */)
        ;
        $tags = $qb->getQuery()->getResult();
        return $this->json([
        
            'user' => $user,
            'category' => $category,
            'tags' => $tags,
            'recipe' => $recipe,
        
        ]);
    }
    /**
     * @Route("", name="browse", methods={"GET"}, requirements={"id":"\d+"})
     */
    // public function browse(Recipe $recipe, RecipeRepository $recipeRepository): Response
    // {
    //   // $recipe = $recipeRepository->findAll();
    //   $qb = $this->getDoctrine()->getManager()->createQueryBuilder();

    //   $qb->from(Recipe::class, 'r')
    //       ->select('r.id')
    //       ->addSelect('r.name')
    //       ->addSelect('r.picture')
    //       ->setMaxResults(5)
    //       // ->orderBy('r.createdAt', 'DESC')

    //   ;
    
    //   $recipe = $qb->getQuery()->getResult();

    //   return $this->json($recipe);
    // }

     /**
     * @Route("/{id}", name="read", methods={"GET"}, requirements={"id":"\d+"})
     */
    public function read(int $id,Recipe $recipe): Response
    {
      $qb = $this->getDoctrine()->getManager()->createQueryBuilder();

      $qb->from(Recipe::class, 'r')
          ->select('r.id')
          ->addSelect('r.name')
          ->addSelect('r.picture')
          ->addSelect('r.nbPeople')
          ->addSelect('r.preparationTime')
          ->addSelect('r.cookingTime')
          ->addSelect('r.signaled')
          ->leftJoin('r.author', 'a')
          ->addSelect('a.pseudo')
          ->where('r.id = :id')
          ->setParameter('id', $id)
      ;
    
      $recipe = $qb->getQuery()->getResult();
      
      $qb = $this->getDoctrine()->getManager()->createQueryBuilder();

      $qb->from(RecipeIngredient::class, 're')
      ->select('re.id')
      ->addSelect('re.quantity')
      ->join('re.ingredient', 'i')
      ->addSelect('i.name')
      ->where('re.recipe = :id')
      ->setParameter('id', $id)
      ;
      $recipeIngredient = $qb->getQuery()->getResult();
      $qb = $this->getDoctrine()->getManager()->createQueryBuilder();

      $qb->from(RecipeIngredient::class, 're')
      ->select('re.id')
      ->join('re.measure', 'm')
      ->addSelect('m.name')
      ->where('re.recipe = :id')
      ->setParameter('id', $id)
      ;
      $recipeIngredientMeasure = $qb->getQuery()->getResult();


      $qb = $this->getDoctrine()->getManager()->createQueryBuilder();

      $qb->from(Step::class, 's')
      ->select('s.id')
      ->addSelect('s.description')
      ->where('s.recipe = :id')
      ->setParameter('id', $id)
      ;
      $steps = $qb->getQuery()->getResult();

      $qb = $this->getDoctrine()->getManager()->createQueryBuilder();

      $qb->from(Recipe::class, 'r')
          ->leftJoin('r.category', 'c')
          ->addSelect('c.name')
          ->where('r.id = :id')
          ->setParameter('id', $id)
      ;
      $category = $qb->getQuery()->getResult();


      $qb = $this->getDoctrine()->getManager()->createQueryBuilder();

      $qb->from(Recipe::class, 'r')
          ->leftjoin('r.tags', 't')
          ->addSelect('t.name')
          ->where('r.id = :id')
          ->setParameter('id', $id)
      ;
      $tags = $qb->getQuery()->getResult();


      // Si le recipe n'existe pas en BDD, on lève une erreur pour obtenir unr 404
      if ($recipe === null) {
          throw $this->createNotFoundException('La recette demandé n\'existe pas');
      }

      return $this->json([
          'recipe' => $recipe,
          'recipeIngredient' => $recipeIngredient,
          'recipeIngredientMeasure' => $recipeIngredientMeasure,
          'step' => $steps,
          'category' => $category,
          'tags' => $tags,
      ]);
  }
}

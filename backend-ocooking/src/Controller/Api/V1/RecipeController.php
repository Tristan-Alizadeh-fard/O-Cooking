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
        $user = $this->getUser();
        // dd($user);
        $userId= $user->getId();
        
        //requête pour récupérer les information de l'utilisateur
        $qb = $this->getDoctrine()->getManager()->createQueryBuilder();
        
        $qb->from(User::class, 'u')
        ->select('u.id')
        ->addSelect('u.email')
        ->addSelect('u.pseudo')
        ->where('u.id = :id')
        ->setParameter('id', $userId)
        ;
        
        $user = $qb->getQuery()->getResult();

      //requête pour récupérer les recettes de l'utilisateur
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
        ->setParameter('id', $userId)
        ;
        // dd($qb);
        
        $recipe = $qb->getQuery()->getResult();


      //requête pour récupérer les Catégories
        $qb = $this->getDoctrine()->getManager()->createQueryBuilder();

        $qb->from(Recipe::class, 'r')
            ->select('r.id')
            ->leftJoin('r.category', 'c')
            ->addSelect('c.name')
            ->where('r.author = :id')
            ->setParameter('id', $userId)
        ;
        $category = $qb->getQuery()->getResult();

      //requête pour récupérer les Tags
        $qb = $this->getDoctrine()->getManager()->createQueryBuilder();

        $qb->from(Recipe::class, 'r')
            ->select('r.id')
            ->leftjoin('r.tags', 't')
            ->addSelect('t.name')
            ->where('r.author = :id')
            ->setParameter('id', $userId)
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
    public function browse( RecipeRepository $recipeRepository): Response
    {
      //requête pour récupérer toute les recettes de la communauté  et on limite a 10 résulta ordonné par ordre décroissant 
      $qb = $this->getDoctrine()->getManager()->createQueryBuilder();
      
      $qb->from(Recipe::class, 'r')
      ->select('r.id')
      ->addSelect('r.name')
      ->addSelect('r.picture')
      ->leftJoin('r.author', 'a')
      ->addSelect('a.pseudo')
      ->setMaxResults(10)
      ->orderBy('r.createdAt', 'DESC')
      ;
    
      $recipe = $qb->getQuery()->getResult();

      return $this->json($recipe);
    }

     /**
     * @Route("/{id}", name="read", methods={"GET"}, requirements={"id":"\d+"})
     */
    public function read(int $id,Recipe $recipe): Response
    {
      //requête pour récupérer la recette via l'id de l'utilisateur
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
      
      //requête pour récupérer la quantité et les ingredients
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

      //requête pour récupérer les type de mesure
      $qb = $this->getDoctrine()->getManager()->createQueryBuilder();

      $qb->from(RecipeIngredient::class, 're')
      ->select('re.id')
      ->join('re.measure', 'm')
      ->addSelect('m.name')
      ->where('re.recipe = :id')
      ->setParameter('id', $id)
      ;
      $recipeIngredientMeasure = $qb->getQuery()->getResult();

      //requête pour récupérer  les étapes
      $qb = $this->getDoctrine()->getManager()->createQueryBuilder();

      $qb->from(Step::class, 's')
      ->select('s.id')
      ->addSelect('s.description')
      ->where('s.recipe = :id')
      ->setParameter('id', $id)
      ;
      $steps = $qb->getQuery()->getResult();

      //requête pour récupérer les categories 
      $qb = $this->getDoctrine()->getManager()->createQueryBuilder();

      $qb->from(Recipe::class, 'r')
          ->leftJoin('r.category', 'c')
          ->addSelect('c.name')
          ->where('r.id = :id')
          ->setParameter('id', $id)
      ;
      $category = $qb->getQuery()->getResult();

      // requête pour récupérer les Tags
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

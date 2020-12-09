<?php

namespace App\Repository;

use App\Entity\Recipe;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Recipe|null find($id, $lockMode = null, $lockVersion = null)
 * @method Recipe|null findOneBy(array $criteria, array $orderBy = null)
 * @method Recipe[]    findAll()
 * @method Recipe[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RecipeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Recipe::class);
    }

    // Recherche des recettes par noms
    public function searchRecipesByName($name)
    {
            return $this->createQueryBuilder('r')
            ->select('r')
            ->leftjoin('r.category', 'c')
            ->addSelect('c.name')
            ->where('r.name like :name')
            ->setParameter('name', '%'.$name.'%')
            ->getQuery()
            ->getResult()
            ;
    }

    // Recherche des recettes par categorie
    public function searchRecipesByCategory($category)
    {
        return $this->createQueryBuilder('r')
                ->select('r')
                ->leftjoin('r.category', 'c')
                ->addSelect('c.name')
                ->where('c.id = :id')
                ->setParameter('id', $category)
                ->getQuery()
                ->getResult()
            ; 
    }

    // Recherche des recettes par noms et categorie
    public function searchRecipesByNameAndCategory($name, $category)
    {
        return $this->createQueryBuilder('r')
                ->select('r')
                ->leftjoin('r.category', 'c')
                ->addSelect('c.name')
                ->where('r.name like :name')
                ->setParameter('name', '%'.$name.'%')
                ->andwhere('c.id = :id')
                ->setParameter('id', $category)
                ->getQuery()
                ->getResult()
            ; 
    }

    // Recherche de toute les recettes limité a 50 resultas
    public function searchRecipesAll()
    {
            return $this->createQueryBuilder('r')
                ->select('r')
                ->leftjoin('r.category', 'c')
                ->addSelect('c.name')
                ->setMaxResults(50)
                ->getQuery()
                ->getResult()
            ; 
    }
   
}

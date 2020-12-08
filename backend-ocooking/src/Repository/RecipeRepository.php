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

    // /**
    //  * @return Recipe[] Returns an array of Recipe objects
    //  */
    public function searchRecipes($name, $category)
    {
        // dd($name, $category);
        return $this->createQueryBuilder('r')
            ->select('r')
            ->leftjoin('r.category', 'c')
            ->addSelect('c.name')
            ->where('r.name = :name')
            ->setParameter('name', $name)
            ->getQuery()
            ->getResult()
        ;
        if(isset($name) !== null && isset($category) !== null){

            return $this->createQueryBuilder('r')
            ->select('r')
            ->leftjoin('r.category', 'c')
            ->addSelect('c.name')
            ->where('r.name = :name')
            ->setParameter('name', $name)
            ->andwhere('r.category = :categoryId')
            ->setParameter('categoryId', $category)
            ->getQuery()
            ->getResult()
            ;
        }

        
    }

    /*
    public function findOneBySomeField($value): ?Recipe
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

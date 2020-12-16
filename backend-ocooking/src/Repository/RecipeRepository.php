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


    // Recherche de toute les recettes limité a 50 resultas
    public function searchRecipesAll()
    {
            return $this->createQueryBuilder('r')
                ->setMaxResults(50)
                ->orderBy('r.createdAt','DESC')
                ->getQuery()
                ->getResult()
            ; 
    }

    public function findByPerso(array $criterias, $limit = null)
     {
        $qb = $this->createQueryBuilder('r')
            ->orderBy('r.createdAt', 'DESC')
            ->setMaxResults($limit)
        ;

        if (array_key_exists('name', $criterias) && !is_null($criterias['name'])) {
            $name = $criterias['name'];
            $qb
                ->andWhere('r.name like :name')
                ->setParameter('name', '%' . $name . '%')
            ;
        }
        
        if (array_key_exists('category', $criterias) && !is_null($criterias['category'])) {
            $category = $criterias['category'];
            $qb
                ->andWhere('r.category = :category')
                ->setParameter('category', $category)
            ;
        }

        return $qb
            ->getQuery()
            ->getResult()
        ;
     }
   
}

<?php

namespace App\Repository;

use App\Entity\ShoppingList;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ShoppingList|null find($id, $lockMode = null, $lockVersion = null)
 * @method ShoppingList|null findOneBy(array $criteria, array $orderBy = null)
 * @method ShoppingList[]    findAll()
 * @method ShoppingList[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ShoppingListRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ShoppingList::class);
    }

    // /**
    //  * @return ShoppingList[] Returns an array of ShoppingList objects
    //  */
    
    // public function findOneBySomeField($id): ?ShoppingList
    // {
    //     return $this->createQueryBuilder('s')
    //     ->select('s')
    //     // ->join('s.shoppingLists', 's')
    //     // ->addSelect('s.title')
    //     // ->join('s.user', 'sl')
    //     // ->addSelect('sl.pseudo')
    //     // ->where('r.id = :id')
    //     // ->setParameter('id', $id)
    //     ->getQuery()
    //     ->getResult()
    //     ;
    // }
   
}

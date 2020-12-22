<?php

namespace App\Service;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\String\Slugger\SluggerInterface;

class SluggerService
{
    private $slugger;

    public function __construct(EntityManagerInterface $em, SluggerInterface $slugger)
    {
        $this->slugger = $slugger;
    }

    /**
     * @param string $string The string to slugify
     * @return string The new slug
     */
    public function slugify($string)
    {
        return strtolower($this->slugger->slug($string));
    }

    /**
     * @param string $recipeName
     * @param User $user
     * @return string $pictureName
     */
    public function slugifyRecipeNameForPicture(string $recipeName, User $user): string
    {
        $pictureName = $this->slugify($recipeName . '-' . $user->getPseudo() . '-' . $user->getId());
        
        return $pictureName;
    }
}

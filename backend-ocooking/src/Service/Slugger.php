<?php

namespace App\Service;

use App\Entity\Recipe;
use Symfony\Component\String\Slugger\SluggerInterface;

class Slugger
{
    private $slugger;

    public function __construct(SluggerInterface $slugger)
    {
        $this->slugger = $slugger;
    }

    /**
     * @param string $string The string to slugify
     * @return string New slug
     */
    public function slugify($string): string
    {
        return strtolower($this->slugger->slug($string));
    }

    /**
     * @param Recipe $recipe
     * @return string Name of recipe's picture
     */
    public function slugifyRecipePicture(Recipe $recipe): string
    {
        $slugWithId = $this->slugify($recipe->getName()) . '-' . $recipe->getId();

        return $slugWithId;
    }
}
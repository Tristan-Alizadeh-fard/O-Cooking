<?php

namespace App\Controller\Admin\Crud;

use App\Entity\RecipeIngredient;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field as Field;

class RecipeIngredientCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return RecipeIngredient::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            Field\IdField::new('id'),
            Field\TextField::new('quantity'),
        ];
    }
}

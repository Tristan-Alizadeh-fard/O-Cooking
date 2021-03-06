<?php

namespace App\Controller\Admin\Crud;

use App\Entity\Ingredient;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field as Field;

class IngredientCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Ingredient::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            Field\IdField::new('id')
                ->onlyOnIndex(),
            Field\TextField::new('name', 'Nom'),
            Field\DateTimeField::new('createdAt', 'Créé le')
                ->onlyOnIndex()
                ->setTextAlign('center'),
            // Field\DateTimeField::new('updatedAt', 'Mise à jour')
            //     ->onlyOnIndex()
            //     ->setTextAlign('center'),
        ];
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->remove(Crud::PAGE_INDEX, Action::NEW)
        ;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInPlural('Ingrédients')
            ->setEntityLabelInSingular('Ingrédient')
        ;
    }
    
}

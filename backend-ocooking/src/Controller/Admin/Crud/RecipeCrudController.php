<?php

namespace App\Controller\Admin\Crud;

use App\Entity\Recipe;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Filters;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field as Field;

class RecipeCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Recipe::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            Field\IdField::new('id'),
            Field\ImageField::new('picture', 'Photo'),
            Field\TextField::new('name', 'Nom'),
            Field\AssociationField::new('category', 'Catégorie'),
            Field\IntegerField::new('nbPeople', 'Personnes')
                ->setTextAlign('center'),
            Field\TextField::new('preparationTime', 'Préparation')
                ->setTextAlign('center'),
            Field\TextField::new('cookingTime', 'Cuisson')
                ->setTextAlign('center'),
            Field\CollectionField::new('recipeIngredients', 'Ingrédients'),
            Field\CollectionField::new('steps', 'Etapes'),
            Field\AssociationField::new('author', 'Auteur'),
            Field\DateTimeField::new('createdAt', 'Création')
                ->setTextAlign('center'),
            Field\BooleanField::new('signaled', 'Signalée'),
        ];
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->remove(Crud::PAGE_INDEX, Action::NEW)
            ->remove(Crud::PAGE_INDEX, Action::EDIT)
        ;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInPlural('Recettes')
            ->setEntityLabelInSingular('Recette')
            ->setDefaultSort(['signaled' => 'DESC'])
        ;
    }
}

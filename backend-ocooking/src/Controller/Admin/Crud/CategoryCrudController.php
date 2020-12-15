<?php

namespace App\Controller\Admin\Crud;

use App\Entity\Category;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field as Field;

class CategoryCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Category::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            Field\IdField::new('id')
                ->onlyOnIndex(),
            Field\TextField::new('name', 'Nom'),
            Field\DateTimeField::new('createdAt', 'Création')
                ->onlyOnIndex()
                ->setTextAlign('center'),
            Field\DateTimeField::new('updatedAt', 'Mise à jour')
                ->onlyOnIndex()
                ->setTextAlign('center'),
        ];
    }


    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->remove(Crud::PAGE_INDEX, Action::DELETE)
        ;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInPlural('Catégories')
            ->setEntityLabelInSingular('Catégorie')
        ;
    }
}

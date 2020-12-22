<?php

namespace App\Controller\Admin\Crud;

use App\Entity\Step;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field as Field;

class StepCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Step::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            Field\IdField::new('id'),
            Field\TextField::new('nbStep'),
            Field\TextField::new('description'),
        ];
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            
        ;
    }
}

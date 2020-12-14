<?php

namespace App\Controller\Admin\Crud;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field as Field;

class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            Field\IdField::new('id')->onlyOnIndex(),
            Field\TextField::new('email', 'Email'),
            Field\TextField::new('pseudo', 'Pseudo'),
            Field\ArrayField::new('roles', 'Admin'),
            // Field\ChoiceField::new('roles', 'Admin')
            //     ->setChoices([
            //         ' ' => 'ROLE_ADMIN'
            //     ])
            //     ->allowMultipleChoices()
            //     ->renderExpanded(),
            Field\DateTimeField::new('createdAt', 'Date de création')->onlyOnIndex(),
        ];
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->remove(Crud::PAGE_INDEX, Action::NEW)
            // ->remove(Crud::PAGE_INDEX, Action::EDIT)
        ;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInPlural('Utilisateurs')
            ->setEntityLabelInSingular('Utilisateur')
        ;
    }
}

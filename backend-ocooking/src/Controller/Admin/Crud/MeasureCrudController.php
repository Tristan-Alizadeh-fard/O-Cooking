<?php

namespace App\Controller\Admin\Crud;

use App\Entity\Measure;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class MeasureCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Measure::class;
    }

    /*
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            TextField::new('title'),
            TextEditorField::new('description'),
        ];
    }
    */

    public function configureActions(Actions $actions): Actions
    {
        // $viewInvoice = Action::new('invoice', 'View invoice', 'fa fa-file-invoice')
        //     ->linkToCrudAction('renderInvoice');

        return $actions
            // ->setPermission(Action::NEW, 'ROLE_ADMIN')
            // ->setPermission(Action::EDIT, 'ROLE_ADMIN')
            ->setPermission(Action::DELETE, 'ROLE_SUPERADMIN')
        ;
    }
}

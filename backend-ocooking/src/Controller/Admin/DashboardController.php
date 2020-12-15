<?php

namespace App\Controller\Admin;

use App\Controller\Admin\Crud\RecipeCrudController;
use App\Entity\Category;
use App\Entity\Ingredient;
use App\Entity\Measure;
use App\Entity\Recipe;
use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use EasyCorp\Bundle\EasyAdminBundle\Router\CrudUrlGenerator;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractDashboardController
{
    /**
     * @Route("/admin", name="admin")
     */
    public function index(): Response
    {
        // return parent::index();
        
        $routeBuilder = $this->get(CrudUrlGenerator::class)->build();

        return $this->redirect($routeBuilder->setController(RecipeCrudController::class)->generateUrl());
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Backoffice O\'cooking')
            ->renderContentMaximized();
    }

    public function configureMenuItems(): iterable
    {
        // yield MenuItem::linktoDashboard('Dashboard', 'fa fa-home');

        yield MenuItem::section('Utilisateurs');
        yield MenuItem::linkToCrud('Utilisateurs', 'fa fa-user', User::class);

        yield MenuItem::section('Recettes');
        yield MenuItem::linkToCrud('Recettes', 'fa fa-book-open', Recipe::class);

        yield MenuItem::section('Données pour les recettes');
        yield MenuItem::linkToCrud('Catégories', 'fa fa-cocktail', Category::class);
        yield MenuItem::linkToCrud('Ingrédients', 'fa fa-apple-alt', Ingredient::class);
        yield MenuItem::linkToCrud('Unités de mesure', 'fa fa-weight', Measure::class);
    }

    public function configureCrud(): Crud
    {
        return Crud::new()
            ->setSearchFields(null)
            ->setPaginatorPageSize(17)
        ;
    }
}

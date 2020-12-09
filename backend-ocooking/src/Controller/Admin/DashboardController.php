<?php

namespace App\Controller\Admin;

use App\Entity\Category;
use App\Entity\Ingredient;
use App\Entity\Measure;
use App\Entity\Recipe;
use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractDashboardController
{
    /**
     * @Route("/admin", name="admin")
     */
    public function index(): Response
    {
        return parent::index();
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Backend Ocooking')
            ->renderContentMaximized();
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linktoDashboard('Dashboard', 'fa fa-home');

        yield MenuItem::section('Utilisateurs');
        yield MenuItem::linkToCrud('Utilisateurs', 'fa fa-user', User::class);

        yield MenuItem::section('Recettes');
        yield MenuItem::linkToCrud('Recettes', 'fa fa-book-open', Recipe::class)
            ->setQueryParameter('sortField', 'id')
            ->setQueryParameter('sortDirection', 'DESC');

        yield MenuItem::section('Données BDD');
        yield MenuItem::linkToCrud('Catégories', 'fa fa-cocktail', Category::class);
        yield MenuItem::linkToCrud('Ingrédients', 'fa fa-apple-alt', Ingredient::class);
        yield MenuItem::linkToCrud('Unités de mesure', 'fa fa-weight', Measure::class);
    }
}

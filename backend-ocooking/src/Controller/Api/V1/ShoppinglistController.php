<?php

namespace App\Controller\Api\V1;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/v1/shoppinglist", name="api_v1_shoppinglist_")
 */
class ShoppinglistController extends AbstractController
{
    /**
     * @Route("{id}", name="read")
     */
    public function index(): Response
    {
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/Api/V1/ShoppinglistController.php',
        ]);
    }
}
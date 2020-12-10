<?php

namespace App\Controller\Api\V1;

use App\Entity\ShoppingList;
use App\Entity\User;
use App\Repository\ShoppingListRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;


use Dompdf\Dompdf;
use Dompdf\Options;

class PdfController extends AbstractController
{
    /**
     * 
     * @Route("/v1/pdf", name="api_v1_pdf")
     */
    public function index()
    {
        // Configure Dompdf according to your needs
        $pdfOptions = new Options();
        $pdfOptions->set('defaultFont', 'Arial');
        
        // Instantiate Dompdf with our options
        $dompdf = new Dompdf($pdfOptions);
        
        // Retrieve the HTML generated in our twig file
        $html = $this->renderView('base.html.twig', [
            'title' => "Welcome to our PDF Test"
        ]);
        
        // Load HTML to Dompdf
        $dompdf->loadHtml($html);
        
        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper('A4', 'portrait');

        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser (inline view)
        $dompdf->stream("mypdf.pdf", [
            "Attachment" => false
        ]);
    }

        /**
     * 
     * @Route("/v1/pdf/{id}", name="api_v1_pdf")
     */
    public function index2(int $id, SerializerInterface $serializer, ShoppingListRepository $shoppingListRepository)
    {
        // $shoppinglist = $this->getUser()->getShoppingLists()[0];
       
         $user = $shoppingListRepository->findAll();
         
         $jsonUser = $serializer->serialize(
           $user,
           'json',
           ['groups' => 'show_shoppinglist']
          );
          $users = json_decode($jsonUser, true);
  
          return $this->render('pdf/pdf.html.twig', [
              'users'=>$users
            ]);
    }
}



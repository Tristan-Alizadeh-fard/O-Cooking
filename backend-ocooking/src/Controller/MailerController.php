<?php

namespace App\Controller;

use App\Service\MailerService;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;

class MailerController extends AbstractController
{
   /**
    * @route("/test/mail", name="test_mail", methods={"GET"})
    */
    public function testMail(MailerService $mailerService): Response
    {
        $mailerService->send('test', 'ocooking.contact@gmail.com', 'ocooking.contact@gmail.com', '<p>Test de fonctionnement</p>');
        
        return $this->json([], 200);
    }
}

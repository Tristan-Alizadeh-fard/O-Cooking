<?php

namespace App\Controller\Api\V1;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;

class MailerController extends AbstractController
{
    /**
     * @Route("/api/v1/email", name="mailer")
     */
    public function sendEmail(MailerInterface $mailer): Response
    {

        $email = (new Email())
            ->from('ocooking.contact@gmail.com')
            ->to('bisigrenan@gmail.com')
            ->subject('Test')
            ->text('ca fonctionne bien !!!!  on recois les mail , bon ok j arret de jouer et j eme remet au travail mdr')
            ;

        //  dd($email);
        try {
            $mailer->send($email);
            return $this->json([], 200);
        } catch (TransportExceptionInterface $e) {
            // some error prevented the email sending; display an
            // error message or try to resend the message
        }
    }
}

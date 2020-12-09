<?php

namespace App\Controller\Api\V1;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
// use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Mailer\Mailer;
use Symfony\Component\Mailer\Transport\Smtp\EsmtpTransport;

class MailerController extends AbstractController
{
    /**
     * @Route("/api/v1/email", name="mailer", methods={"POST"})
     */
    public function sendEmail(MailerInterface $mailer): void
    {
        $transport = new EsmtpTransport('localhost');
        $mailer = new Mailer($transport);

        $email = (new Email())
            ->from('renan76@sfr.fr')
            ->to('bisigrenan@gmail.com')
            //->cc('cc@example.com')
            //->bcc('bcc@example.com')
            //->replyTo('fabien@example.com')
            //->priority(Email::PRIORITY_HIGH)
            ->subject('Test')
            ->text('Sending emails is fun again!')
            // ->html('<p>See Twig integration for better HTML integration!</p>')
            ;

        //  dd($email);
        try {
            $mailer->send($email);
        } catch (TransportExceptionInterface $e) {
            // some error prevented the email sending; display an
            // error message or try to resend the message
        }
    }
}

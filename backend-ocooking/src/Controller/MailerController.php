<?php

namespace App\Controller;

use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

class MailerController extends AbstractController
{
    // /**
    //  * @Route("/email")
    //  */
    // public function sendEmail(MailerInterface $mailer)
    // {
    //     // from user email
        
    //     // $email = (new Email())
    //     //     ->from('ocooking.contact@gmail.com')
    //     //     ->to('ocooking.contact@gmail.com')
    //     //     //->cc('cc@example.com')
    //     //     //->bcc('bcc@example.com')
    //     //     //->replyTo('fabien@example.com')
    //     //     //->priority(Email::PRIORITY_HIGH)
    //     //     ->subject('Time for Symfony Mailer!')
    //     //     ->text('Sending emails is fun again!')
    //     //     ->html('<p>See Twig integration for better HTML integration!</p>')
    //     //     ->attachFromPath('');
        
    //     // $email = (new TemplatedEmail())
    //     //     ->from('fabien@example.com')
    //     //     ->to(new Address('ryan@example.com'))
    //     //     ->subject('Thanks for signing up!')
    //     //     ->htmlTemplate('emails/signup.html.twig')
    //         // ->context([
    //         //     'expiration_date' => new \DateTime('+7 days'),
    //         //     'username' => 'foo',
    //         // ])
    //     ;
        
    //     // try {
    //     //     $mailer->send($email);
    //     // } catch (TransportExceptionInterface $e) {
    //     //     dump($e);
    //     //     // dump($mailer->send($email)->getDebug());
    //     // }
    // }
}

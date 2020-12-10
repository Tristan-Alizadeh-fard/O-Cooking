<?php

namespace App\Service;

use App\Entity\Recipe;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Twig\Environment;

class MailerService
{
    /**
     * @var MailerInterface
     */
    private $mailer;

    /**
     * @var Environment
     */
    private $twig;

    public function __construct(MailerInterface $mailer, Environment $twig)
    {
        $this->mailer = $mailer;
        $this->twig = $twig;
    }

    /**
     * Send email (main method)
     */
    public function send(string $subject, string $from, string $to, string $template, array $parameters, string $headers): void
    {
        // Add attachFromPath('') pour ajouter des pdf
        $email = (new TemplatedEmail())
            ->from($from)
            ->to($to)
            ->subject($subject)
            ->htmlTemplate($template)
            ->context($parameters)
        ;

        if ($headers === 'true') {
            $email->getHeaders()
                ->addTextHeader('X-Auto-Response-Suppress', 'AutoReply')
            ;
        };

        $this->mailer->send($email);
    }

    public function sendAlertAboutSignalRecipe(Recipe $recipe, string $from)
    {
        
        $subject = 'Recette ' . $recipe->getName() . ' (' . $recipe->getId() . ') signalée !';
        $template = 'email/adminSignaledRecipe.html.twig';
        $parameters = [
            'recipe' => $recipe,
        ];
        $headers = 'false';

        $this->send($subject, $from, 'ocooking.contact@gmail.com', $template, $parameters, $headers);
    }
}

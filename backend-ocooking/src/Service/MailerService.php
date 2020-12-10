<?php

namespace App\Service;

use App\Entity\Recipe;
use App\Entity\User;
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
     * Main method of the this service (all other methods call this one)
     *
     * @param string $subject
     * @param string $from
     * @param string $to
     * @param string $template
     * @param array $parameters
     * @param string $headers
     * @return void
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

    /**
     * Send an Email to ocooking.contact@gmail.com when a recipe is signaled
     *
     * @param Recipe $recipe
     * @param string $from
     * @return void
     */
    public function sendAlertAboutSignalRecipe(Recipe $recipe, string $from): void
    {
        
        $subject = 'Recette ' . $recipe->getName() . ' (' . $recipe->getId() . ') signalée !';
        $template = 'email/adminSignaledRecipe.html.twig';
        $parameters = [
            'recipe' => $recipe,
            'signaledBy' => $from,
        ];
        $headers = 'false';

        $this->send($subject, $from, 'ocooking.contact@gmail.com', $template, $parameters, $headers);
    }

    public function sendConfirmationInscriptiontoUser(User $user)
    {
        $subject = 'Bienvenue sur O\'Cooking';
        $to = $user->getEmail();
        $template = 'email/confirmInscription.html.twig';
        $parameters = [
            'user' => $user,
        ];
        $headers = 'true';

        $this->send($subject, 'ocooking.contact@gmail.com', $to, $template, $parameters, $headers);
    }
}

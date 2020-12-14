<?php

namespace App\Controller;

use App\Form\TEST\PictureType;
use App\Service\PictureService;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;

class PictureController extends AbstractController
{
   /**
    * @route("/test/picture", name="test_picture", methods={"POST"})
    */
    public function testPicture(Request $request): Response
    {
        dump(tempnam(sys_get_temp_dir(), 'UploadedFile'));
        dd(sys_get_temp_dir());
        
        $json = $request->getContent();
        $jsonToArray = json_decode($json, true);
        // dump($jsonToArray);

        $pictureBase64 = $jsonToArray['picture'];
        $jsonToArray['picture'] = new PictureService($pictureBase64, 'test');
        // dd($jsonToArray);

        $form = $this->createForm(PictureType::class);
        $form->submit($jsonToArray);
        if ($form->isValid()) {
            # code...
        } else {
            return $this->json([
                'errors' => (string) $form->getErrors(true, false),
            ], 400);
        };

        return $this->json([], 200);
    }
}

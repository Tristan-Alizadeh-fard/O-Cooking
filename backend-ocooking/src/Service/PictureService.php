<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\File\UploadedFile;

class PictureService extends UploadedFile
{
    public function __construct(string $base64Content, string $originalName)
    {
        $filePath = tempnam(sys_get_temp_dir(), 'UploadedFile');
        $data = base64_decode($this->getBase64String($base64Content));
        // $data = base64_decode($base64Content);
        file_put_contents($filePath, $data);
        $error = null;
        $mimeType = $this->getFileExtension($base64Content);
        $test = true;

        parent::__construct($filePath, $originalName, $mimeType, $error, $test);
    }

    private function getBase64String(string $base64Content)
    {

        $data = explode(';base64,', $base64Content);
        return $data[1];
    }

    private function getFileExtension(string $base64Content)
    {
        $data = explode(';base64,', $base64Content);
        preg_match('/data:([a-z]+)\/([a-z]+)/', $data[0], $matches);

        if ($matches[1] === 'image') {
            if ($matches[2] === 'jpg' || $matches[2] === 'jpeg') {
                return $matches[2];
            }
        }

    }
}

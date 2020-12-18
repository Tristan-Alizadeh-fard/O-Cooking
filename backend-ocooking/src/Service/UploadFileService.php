<?php

namespace App\Service;

class UploadFileService
{
    private $data;
    
    public function uploadFile($base64_pixels, $filePath)
    {
        $fp = fopen('.' . $filePath, 'w+');
        
        fwrite($fp, base64_decode($base64_pixels));

        fclose($fp);
    }
    
    public function prepararationFileReceivedCode($base64_code)
    {
        $data = explode(';base64,', $base64_code);
        
        $this->data = $data;
    }
    
    public function mimeType()
    {
        preg_match('/data:([a-z]+)\/([a-z]+)/', $this->data[0], $matches);
        $mimeType = $matches[2];

        return $mimeType;
    }
    
    public function uploadRecipePicture($base64_code, $pictureName)
    {
        $this->prepararationFileReceivedCode($base64_code);
        $mimeType = $this->mimeType();
        $filePath = '/img/recipes/' . $pictureName . '.' . $mimeType;

        $this->uploadFile($this->data[1], $filePath);

        return $filePath;
    }
}

<?php

namespace App\Controller\Admin;

use App\Entity\Recipe;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PersonalDashboardController extends AbstractController
{
    /**
    * @Route("/admin/recipes/{id}/delete", name="admin_delete_recipe", requirements={"id"="\d+"})
    */
    public function deleteRecipe(Recipe $recipe)
    {
        $em = $this->getDoctrine()->getManager();
        $em->remove($recipe);
        $em->flush();
    
        return $this->redirectToRoute('admin');
    }
 
   /**
    * @Route("/admin/recipes/{id}/unsignaled", name="admin_unsignaled_recipe", requirements={"id"="\d+"})
    */
    public function unsignaled(Recipe $recipe)
    {
        $recipe->setSignaled(false);
    
        $em = $this->getDoctrine()->getManager();
        $em->persist($recipe);
        $em->flush();
    
        return $this->redirectToRoute('admin');
    }

}

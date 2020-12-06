<?php

namespace App\Form\Recipe;

use App\Entity\Recipe;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;

class RecipeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', null, [
                'constraints' => [
                    new Assert\NotBlank(),
                ]
            ])
            ->add('picture', null, [
                'required' => false,
                'constraints' => [
                    new Assert\NotBlank(),
                ]
            ])
            ->add('nbPeople', null, [
                'constraints' => [
                    new Assert\NotBlank(),
                ]
            ])
            ->add('preparationTime', null, [
                'required' => false,
                'constraints' => [
                    'pattern' => '/\^(\d?\dh)?(\d\dmn)/'
                ]
            ])
            ->add('cookingTime', null, [
                'required' => false,
                'constraints' => [
                    'pattern' => '/\^(\d?\dh)?(\d\dmn)/'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Recipe::class,
        ]);
    }
}

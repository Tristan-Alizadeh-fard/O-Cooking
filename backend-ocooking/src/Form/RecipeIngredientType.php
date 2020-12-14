<?php

namespace App\Form;

use App\Entity\RecipeIngredient;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;

class RecipeIngredientType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('quantity', null, [
                'constraints' => [
                    new Assert\NotBlank(),
                ]
            ])
            ->add('measure', MeasureType::class, [
                'constraints' => [
                    new Assert\NotBlank(),
                    new Assert\Valid(),
                ]
            ])
            ->add('ingredient', IngredientType::class, [
                'constraints' => [
                    new Assert\NotBlank(),
                    new Assert\Valid(),
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => RecipeIngredient::class,
        ]);
    }
}

<?php

namespace App\Form\User;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email', null, [
                'constraints' => [
                    new Assert\NotBlank(),
                    new Assert\Email(),
                ]
            ])
            ->add('password', null, [
                'constraints' => [
                    new Assert\NotBlank(),
                ]
            ])
            ->add('pseudo', null, [
                'constraints' => [
                    new Assert\NotBlank(),
                    new Assert\Length([
                        'min' => 4,
                    ]),
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}

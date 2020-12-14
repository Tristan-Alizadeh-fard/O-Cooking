<?php

namespace App\Form;

use App\Entity\Recipe;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
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
            ->add('picture', FileType::class, [
                'mapped' => true,
                'required' => false,
                'constraints' => [
                    new assert\File([
                        'maxSize' => '2056k',
                        'mimeTypes' => [
                            'image/jpg',
                            'image/jpeg',
                        ],
                    ]),
                ]
            ])
            ->add('nbPeople', IntegerType::class, [
                'constraints' => [
                    new Assert\NotBlank(),
                ]
            ])
            ->add('preparationTime', null, [
                'required' => false,
                'constraints' => [
                    new Assert\Regex([
                        'pattern' => '/^(\d?\dh)?(\d\dmn)/',
                    ]),
                ]
            ])
            ->add('cookingTime', null, [
                'required' => false,
                'constraints' => [
                    new Assert\Regex([
                        'pattern' => '/^(\d?\dh)?(\d\dmn)/',
                    ]),
                ]
            ])
            ->add('category', CategoryType::class, [
                'constraints' => [
                    new Assert\NotBlank(),
                    new Assert\Valid(),
                ]
            ])
            // ->add('tags', CollectionType::class, [
            //     'entry_type' => TagType::class,
            //     'entry_options' => ['label' => false],
            //     'allow_add' => true,
            // ])
            ->add('recipeIngredients', CollectionType::class, [
                'entry_type' => RecipeIngredientType::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
            ])
            ->add('steps', CollectionType::class, [
                'entry_type' => StepType::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Recipe::class,
            // 'csrf_protection' => false,
            // 'validation_groups' => false,
        ]);
    }
}

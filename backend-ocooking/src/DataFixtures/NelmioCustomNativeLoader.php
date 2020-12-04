<?php

namespace App\DataFixtures;

use Faker\Factory;
use Faker\Generator as FakerGenerator;
use Nelmio\Alice\Faker\Provider\AliceProvider;
use Nelmio\Alice\Loader\NativeLoader;

class NelmioCustomNativeLoader extends NativeLoader
{
    protected function createFakerGenerator(): FakerGenerator
    {
        $generator = Factory::create('fr_FR');
        $generator->addProvider(new AliceProvider());

        $generator->seed($this->getSeed());

        return $generator;
    }
}

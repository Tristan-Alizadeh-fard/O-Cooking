<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerNEEjSn7\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerNEEjSn7/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerNEEjSn7.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerNEEjSn7\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerNEEjSn7\App_KernelDevDebugContainer([
    'container.build_hash' => 'NEEjSn7',
    'container.build_id' => 'fdf4fff3',
    'container.build_time' => 1606924450,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerNEEjSn7');

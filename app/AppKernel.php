<?php

use Symfony\Component\Config\Loader\LoaderInterface;
use Symfony\Component\HttpKernel\Kernel;

class AppKernel extends Kernel
{
    public function registerBundles()
    {
        $bundles = [
            new Symfony\Bundle\FrameworkBundle\FrameworkBundle(),
            new Symfony\Bundle\SecurityBundle\SecurityBundle(),
            new Symfony\Bundle\TwigBundle\TwigBundle(),
            new Symfony\Bundle\MonologBundle\MonologBundle(),
            new Symfony\Bundle\SwiftmailerBundle\SwiftmailerBundle(),
            new Symfony\Bundle\AsseticBundle\AsseticBundle(),
            new Doctrine\Bundle\DoctrineBundle\DoctrineBundle(),
            new Sensio\Bundle\FrameworkExtraBundle\SensioFrameworkExtraBundle(),

            new FOS\UserBundle\FOSUserBundle(),
            new FOS\RestBundle\FOSRestBundle(),
            new JMS\SerializerBundle\JMSSerializerBundle(),
            new Stof\DoctrineExtensionsBundle\StofDoctrineExtensionsBundle(),
            new Doctrine\Bundle\DoctrineCacheBundle\DoctrineCacheBundle(),
            new Symfony\Cmf\Bundle\RoutingBundle\CmfRoutingBundle(),

            // file systems
            new Knp\Bundle\GaufretteBundle\KnpGaufretteBundle(),
            new KPhoen\GaufretteExtrasBundle\KPhoenGaufretteExtrasBundle(),
            new Liip\ImagineBundle\LiipImagineBundle(),

            new Gravity\CoreBundle\GravityCoreBundle(),
        ];

        $this->registerGravityBundles($bundles);

        if (in_array($this->getEnvironment(), ['dev', 'test'])) {
            $bundles[] = new Doctrine\Bundle\MigrationsBundle\DoctrineMigrationsBundle();
            $bundles[] = new Symfony\Bundle\DebugBundle\DebugBundle();
            $bundles[] = new Symfony\Bundle\WebProfilerBundle\WebProfilerBundle();
            $bundles[] = new Sensio\Bundle\DistributionBundle\SensioDistributionBundle();
            $bundles[] = new Sensio\Bundle\GeneratorBundle\SensioGeneratorBundle();
        }

        return $bundles;
    }

    public function registerContainerConfiguration(LoaderInterface $loader)
    {
        $loader->load(__DIR__ . '/config/config_' . $this->getEnvironment() . '.yml');
    }

    protected function registerGravityBundles(&$bundles)
    {
        $yamlParser = new \Symfony\Component\Yaml\Yaml();
        $yaml       = file_get_contents(__DIR__ . '/config/gravity/bundles.yml');
        $config     = $yamlParser->parse($yaml);

        foreach($config['bundles'] as $bundle)
        {
            $bundles[] = new $bundle();
        }
    }
}

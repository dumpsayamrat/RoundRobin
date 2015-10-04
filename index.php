<?php

require "vendor/autoload.php";

use Slim\Slim;
use Slim\View;

$app = new Slim([
    'debug' => true,
    'templates.path' => './templates',
    'cookies.encrypt' => true,
    'view' => new View()
]);

$app->get('/', function() use ($app)
{
  $app->render('Main.php', array('title' => 'Present round robin'));
});


$app->run();

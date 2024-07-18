<?php

// src/Controller/APIController.php
namespace App\Controller\API;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

class APIController extends AbstractController
{
    #[Route('/api', name: 'app_api')]
    public function index(): Response
    {
        return new JsonResponse([
            [   'id' => 1,
                'name' => 'Pochette 1',
                'image' => 'https://picsum.photos/300?random=1',
                'price' => 49,
            ],
            [   'id' => 2,
                'name' => 'Pochette 2',
                'image' => 'https://picsum.photos/300?random=2',
                'price' => 59,
            ],
            [   'id' => 3,
                'name' => 'Sac Seau',
                'image' => 'https://picsum.photos/300?random=3',
                'price' => 45,
            ],
            [   'id' => 4,
                'name' => 'Sac de plage',
                'image' => 'https://picsum.photos/300?random=4',
                'price' => 35,
            ],
            [   'id' => 5,
                'name' => 'Sac Amanda',
                'image' => 'https://picsum.photos/300?random=5',
                'price' => 45,
            ],
            [   'id' => 6,
                'name' => 'Essuie tout lavable',
                'image' => 'https://picsum.photos/300?random=6',
                'price' => 40,
            ],
            [   'id' => 7,
                'name' => 'Lingettes Demake Up',
                'image' => 'https://picsum.photos/300?random=7',
                'price' => 30,
            ],
            [   'id' => 8,
                'name' => 'Serviettes hygieniques lavables',
                'image' => 'https://picsum.photos/300?random=8',
                'price' => 58,
            ],
            [   'id' => 9,
                'name' => 'Organisateur de sac à main',
                'image' => 'https://picsum.photos/300?random=9',
                'price' => 38,
            ],
           
        ]);
    }
}

<?php

namespace App\Controller;

use App\Classe\Search;
use App\Entity\Franchise;
use App\Entity\Permission;
use App\Entity\Structure;
use App\Entity\User;
use App\Form\SearchType;
use App\Repository\FranchiseRepository;
use App\Repository\StructureRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{   
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager) 
    {
        $this->entityManager = $entityManager;
    }

    #[Route('/admin', name: 'app_admin')]
    public function index(FranchiseRepository $repositoryFranchises, StructureRepository $repositoryStructure, UserRepository $repositoryUser, Request $request ): Response
    {    
       
        $franchises = $repositoryFranchises->findAll();
        $structures = $repositoryStructure->findAll();
        $user = $repositoryUser->findAll();
        $search = new Search();

        $form = $this->createForm(SearchType::class, $search);
        
        $form->handleRequest($request);

        if ($form-> isSubmitted() && $form->isValid()) {
           
            $franchises = $repositoryFranchises->findWithSearch($search);
            $structures = $repositoryStructure->findWithSearch($search);
        }
        
        return $this->render('admin/panel.html.twig',[
            'franchises' => $franchises,
            'structures' => $structures,
            'user' => $user,
            'form' => $form->createView()
            
        ]);
    }
}

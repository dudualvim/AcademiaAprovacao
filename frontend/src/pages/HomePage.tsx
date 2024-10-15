// src/pages/HomePage.tsx
import React from 'react';
import ButtonLogin from '../components/Home/ButtonLogin';
import MediaTextSection from '../components/Home/MediaTextSection';
import CardSwiper from '../components/Home/CardSwiper';
import BenefitsSection from '../components/Home/BenefitsSection';
import ApresentationSection from '../components/Home/ApresentationSection';
import MentorsSection from '../components/Home/MentorsSection';

const mediaBlocks = [
  {
    imageSrc: '/img/Gustavo.webp',
    title: 'Experiência Comprovada',
    description: 'Nossos mentores possuem experiência comprovada e já passaram em diversos concursos de áreas diferentes com apenas 20 anos de idade. Você terá acesso a estratégias e insights de alguém que já trilhou com sucesso o caminho que você está seguindo.',
    imagePosition: 'left' as "left", // Use `as "left"` para garantir que o valor é um literal do tipo correto
  },
  {
    imageSrc: '/img/otimizacao.webp',
    title: 'Otimize seu tempo de estudo',
    description: 'A mentoria ajuda a maximizar o seu tempo de estudo, permitindo que você alcance mais em menos tempo. Com um plano de estudos estruturado e personalizado, você poderá equilibrar melhor seus estudos com a sua rotina.',
    imagePosition: 'right' as "right", // Use `as "right"` para garantir que o valor é um literal do tipo correto
  },
  {
    imageSrc: '/img/AreaAluno.webp',
    title: 'Área do aluno personalizada',
    description: 'O material de estudo é projetado para ser direto ao ponto, eliminando informações desnecessárias e focando apenas no que realmente cai nas provas. Isso garante uma preparação mais eficiente e produtiva.',
    imagePosition: 'left' as "left", // Use `as "left"` para garantir que o valor é um literal do tipo correto
  },
];

const AcademiaBlock = [
  {
    imageSrc: '/img/Academia-da-Aprovacao.webp',
    title: 'O que é a Academia da Aprovação?',
    description: 'Nossos mentores possuem experiência comprovada e já passaram em diversos concursos de áreas diferentes com apenas 20 anos de idade. Você terá acesso a estratégias e insights de alguém que já trilhou com sucesso o caminho que você está seguindo',
    imagePosition: 'left' as "left",
  },
]

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Sessão com o Logo e Botão de Login */}
      <section className="container mx-auto flex justify-between items-center p-10">
        {/* Logo */}
        <a href="https://academiadaaprovacao.com.br/" className="flex items-center">
          <img
            src="https://academiadaaprovacao.com.br/wp-content/uploads/2024/07/Logo.png"
            alt="Logo"
            className="w-48 h-auto"
          />
        </a>
        {/* Botão de Login */}
        <ButtonLogin text="Entrar" />
      </section>

      {/* Sessão com Títulos Animados e Parágrafo de Apresentação */}
      <ApresentationSection />

      {/* Nova Sessão Texto - Imagem */}
      <MediaTextSection blocks={mediaBlocks} />

      {/* Nova Sessão "Para quem é indicado" */}
      <CardSwiper />

      {/* Nova Sessão para os benefícios */}
      <BenefitsSection />
      <div className='my-10 '>
        {/* Nova Sessão Texto - Imagem (com o novo bloco) */}
        <MediaTextSection blocks={AcademiaBlock} />
      </div>
      {/* Nova Sessão para os Mentores */}
      <MentorsSection />
    </div>
  );
};

export default HomePage;

import React from 'react';

const benefits = [
  { img: '/img/iconsCards/mentorship.png', text: 'Experiência do Mentor' },
  { img: '/img/iconsCards/video.png', text: 'Material enxuto e focado' },
  { img: '/img/iconsCards/page-speed.png', text: 'Otimização do Tempo' },
  { img: '/img/iconsCards/personalization.png', text: 'Acompanhamento personalizado' },
  { img: '/img/iconsCards/strategy-develop.png', text: 'Estratégias e técnicas avançadas de estudo' },
  { img: '/img/iconsCards/motivated.png', text: 'Motivação e suporte emocional' },
  { img: '/img/iconsCards/test.png', text: 'Simulados e treinamentos práticos' },
  { img: '/img/iconsCards/meeting.png', text: 'Grupos de estudo' },
  { img: '/img/iconsCards/pdf.png', text: 'Material em PDF' },
  { img: '/img/iconsCards/insight.png', text: 'Acesso a dicas e insights exclusivos' },
  { img: '/img/iconsCards/webinar.png', text: 'Aulas com especialistas' },
  { img: '/img/iconsCards/planning.png', text: 'Estratégias e técnicas de prova' },
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="benefits-section py-12 px-6 my-18">
      <h2 className="text-4xl font-bold mb-6 text-center justify-center forWhoh2">
        Benefícios da Mentoria
      </h2>
      <div className="flex flex-col items-center justify-center mx-auto xl:w-2/4">
        <p className="text-xl mb-6 text-center font-bold text-gray-600">
          Explore os Incríveis Benefícios da Nossa Mentoria Personalizada: Transforme Seu Potencial em Resultados Concretos.
        </p>
        <p className="text-md mb-16 text-center text-gray-600">
          Com a nossa mentoria, você terá acesso a uma orientação especializada que se adapta às suas necessidades e objetivos, ajudando você a alcançar novos patamares em sua carreira e vida pessoal.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card bg-white p-4 rounded-lg shadow-md text-center">
            <img src={benefit.img} alt={benefit.text} className="w-16 h-16 mx-auto mb-3" />
            <p className="text-sm font-semibold">{benefit.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;

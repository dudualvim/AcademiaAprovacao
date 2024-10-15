import React from 'react';


interface MentorProps {
  name: string;
  description: string;
  imageSrc: string;
}

const Mentor: React.FC<MentorProps> = ({ name, description, imageSrc }) => {
  return (
    <div className="bg-white shadow-2xl rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-blue-glow h-100">
      <div className="relative w-full h-48">
        <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-blue-500 mb-4">{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const MentorsSection: React.FC = () => {
  const mentors = [
    {
      name: 'Eliseu Souza',
      description: 'Eliseu Souza, 23 anos, Policial Legislativo do Senado federal e ex-PRF. Com 5 aprovações aos 20 anos de idade, sendo 3 em concursos federais (PF, PRF, Senado, TJSP e metro-SP). Está no mundo dos concursos desde 2020, tendo criado o canal Você Quer Você Consegue e guiado mais de 100 alunos a serem aprovados.',
      imageSrc: '/img/Eliseu.png',
    },
    {
      name: 'Gustavo Lopes',
      description: 'Gustavo Lopes, 24 anos, Policial Legislativo do Senado Federal. Ex PMDF, aprovado aos 17 anos. Imerso no mundo dos concursos públicos há mais de 6 anos e aprovados em diversos concursos até os 22 anos (PMDF, PCDF, TJGO, TJDFT, 2x Senado Federal). Mentor para concursos públicos há mais de 2 anos com vários alunos aprovados.',
      imageSrc: '/img/Gustavo.png',
    },
    {
      name: 'Rodrigo Oliveira',
      description: 'Rodrigo Oliveira, 27 anos, Policial Legislativo do Senado Federal e ex-3º Sargento SCT do Exército Brasileiro. Iniciou sua jornada de concurseiro em 2016, quando ainda era militar e foi aprovado na UFBA em 2017. Ao se graduar, 2020, voltou a estudar focado para a área policial, recebendo 4 aprovações em concursos diversos, sendo a primeira em 2021 (PRF, PCCE, PCBA e PLSF).',
      imageSrc: '/img/Rodrigo.png',
    },
  ];

  return (
    <section className="container mb-52">
      <h2 className="text-4xl mb-8 text-center">
        <span className="Mentorsh2">Mentores</span>
      </h2>
        <p className="text-center mb-10 xl:w-2/4 mx-auto">
          A Academia da Aprovação é união, de forma completa, qualificada e independente, de cursos, mentorias, acompanhamentos personalizados e muitas outras ferramentas que ajudam a tornar possível a sua tão almejada aprovação.
        </p>
        <h2 className='text-3xl font-bold mb-10 text-center forWhoh2'>Quem são os 3 criadores desse projeto?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <Mentor
              key={index}
              name={mentor.name}
              description={mentor.description}
              imageSrc={mentor.imageSrc}
            />
          ))}
      </div>
    </section>
  );
};

export default MentorsSection;

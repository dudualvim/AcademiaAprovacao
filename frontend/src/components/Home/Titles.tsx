import React from 'react';
import { animated } from '@react-spring/web';
import useAnimatedTitles from '../../hooks/useAnimatedTitles'; // Importando o hook

const phrases = [
  "Encurte seu caminho até a Aprovação",  
  "Mentoria Academia da Aprovação",
  "Melhores estratégias para a sua aprovação"
];

const Titles: React.FC = () => {
  const { props, currentPhrase } = useAnimatedTitles(phrases);

  return (
    <div className="relative">
      {/* Linha estática */}
      <div className="line" />
      
      {/* Texto animado */}
      <animated.div style={props} className="text-5xl font-bold text-blue-600 title">
        {currentPhrase}
      </animated.div>
    </div>
  );
};

export default Titles;

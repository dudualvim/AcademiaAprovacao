import { useSpring, easings } from '@react-spring/web';
import React from 'react';

const useAnimatedTitles = (phrases: string[], intervalTime: number = 3000) => {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState<'enter' | 'leave'>('enter');

  const props = useSpring({
    from: { x: direction === 'enter' ? 60 : 0, opacity: direction === 'enter' ? 0.4 : 1 },
    to: { x: direction === 'enter' ? 0 : -30, opacity: direction === 'enter' ? 1 : 0 },
    reset: direction === 'enter',
    config: direction === 'enter' 
      ? { duration: 1100, easing: easings.easeOutQuad } // Duração mais rápida para a entrada
      : { duration: 1500 }, // Duração mais lenta para a saída
    onRest: () => {
      if (direction === 'leave') {
        setIndex((index + 1) % phrases.length);
        setDirection('enter');
      }
    },
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDirection('leave'); // Ativa a animação de saída
    }, intervalTime); // Tempo total que a frase fica na tela

    return () => clearInterval(interval);
  }, [index, intervalTime]);

  return { props, currentPhrase: phrases[index] };
};

export default useAnimatedTitles;

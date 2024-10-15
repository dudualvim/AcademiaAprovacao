// src/components/CardSwiper.tsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { useCardsData } from '../../hooks/useCardsData';

const CardSwiper: React.FC = () => {
  const { cards } = useCardsData(); // Usando o hook para obter os dados dos cards

  return (
    <section className="container-card mb-14">
      <h2 className="text-4xl font-bold mb-14 forWhoh2">Mas para quem é indicado?</h2>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        cardsEffect={{
          slideShadows: false,  // Remove sombras nos slides
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.number}>
            <div className="card-container">
              <div className="number-box">{card.number}</div>
              <div className="line"></div>
              <p className="text-center font-semibold text-xl">{card.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CardSwiper;

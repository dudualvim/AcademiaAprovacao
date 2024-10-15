// src/components/ButtonMentoria.tsx
import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('process.env.STRIPE_SECRET_KEY'); // Substitua com sua chave pública real

const ButtonMentoria = ({ text }: { text: string }) => {
  const handleClick = async () => {
    const stripe = await stripePromise;

    if (!stripe) {
      console.error('Stripe não carregou corretamente.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/payment/create-checkout-session', {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Falha ao criar a sessão de checkout');
      }

      const sessionId = await response.json();

      const { error } = await stripe.redirectToCheckout({ sessionId: sessionId.id });

      if (error) {
        console.error('Erro ao redirecionar para o checkout:', error);
      }
    } catch (error) {
      console.error('Erro ao processar o pagamento:', error);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="relative inline-flex items-center px-8 py-3 text-white bg-blue-600 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 hover:bg-blue-700 pulsating-button"
    >
      <span className="relative z-10 text-lg font-semibold">{text}</span>
    </button>
  );
};

export default ButtonMentoria;

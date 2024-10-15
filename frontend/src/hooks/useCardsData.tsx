import { useState } from "react";


interface Card{
    number: number;
    text: string;
}

export const useCardsData = () => {
    const [cards] = useState<Card[]>([
        { number: 1, text: "Para pessoas com pouco tempo e rotina puxada." },
        { number: 2, text: "Para quem precisa de orientação personalizada." },
        { number: 3, text: "Para quem está buscando uma preparação eficiente." },
        { number: 5, text: "Pessoas que ainda não alcançaram seu sucesso" },
        { number: 6, text: "Concursados que almejam mudar de carreira" },
        { number: 7, text: "Candidatos que precisam de motivação e disciplina" },
        { number: 8, text: "Estudantes que precisam de estratégias de prova" },
    ]);
    
    return { cards };
}
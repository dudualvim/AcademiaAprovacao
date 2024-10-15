import React from "react";
import Titles from "./Titles";
import ButtonMentoria from "./ButtonMentoria";

const ApresentationSection = () =>{
    return(
        <section className="container mx-auto flex flex-col md:flex-row justify-between items-center p-10 bg-white mb-4">
            <div className="text-center md:text-left md:w-2/5 lg:w-1/2 xl:w-1/3 p-6"> {/* Ajusta o padding e largura */}
                <Titles />
                <p className="text-gray-700 text-xl mt-6 mb-6"> {/* Ajusta o tamanho do texto */}
                    <strong className="blue font-bold text-2xl">Encurte o seu caminho até a aprovação</strong> {/* Ajusta o tamanho do texto */}
                    através de estratégias vencedoras com material de estudo enxuto, otimizado e acompanhamento individual.
                </p>
                <ButtonMentoria text="Quero ser Aprovado"/> {/* Ajusta o tamanho do botão */}
            </div>
            <img
            src="/img/professores.png"
            alt="Professores"
            className="w-full md:w-3/5 lg:w-2/3 h-auto mt-4 md:mt-0"
            />
      </section>
    )
}

export default ApresentationSection;
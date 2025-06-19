"use client";
import { NextPage } from "next";
import React from "react";
import dynamic from "next/dynamic";
const BreadCrumb = dynamic(
    () => import("../components/ui/breadcrumb/breadcrumb")
);
const Accordion = dynamic(
    () => import("../components/ui/accordion/accordion"),
    { ssr: false }
);
import { TitleXL } from "../components/ui/title/style";
import { ContainerDuvidasFrequentes } from "../components/ui/containers/duvidasFrequentes";
import { TitleContainerDuvidas } from "./style";

export interface Question {
    question: string;
    answer: string;
}
const Ajuda: NextPage = () => {
    const mock: Question[] = [
        // {
        //     question: "Os Profissionais são da Lacrei Saúde?",
        //     answer: "Não. Os profissionais são autonomos e não possuem vinculo com a Lacrei Saúde.",
        // },
        // {
        //     question:
        //         "Os Prossifionais estão aptos a atenderem pessoas com deficiencia? Por exemplo pessoas surdas?",
        //     answer: "Sim, alguns dos profissionais sabem LIBRAS e conseguem atender surdos sem nenhuma dificuldade.",
        // },
        // {
        //     question: "Os atendimentos são humanizados?",
        //     answer: "Sim, todos os atendimentos são humanizados. Todos os profissionais que atendem através da Lacrei saúde, passam por entrevistas antes de iniciar seus atendimentos.",
        // },
        // {
        //     question: "A Lacrei Saúde aceita todas as formas de pagamento?",
        //     answer: "Sim! Aceitamos todas as formas de pagamento, como: PIX, Cartão de Crédito e Boleto Bancário.",
        // },
        // {
        //     question: "A Lacrei Saúde atua em quais áreas médicas?",
        //     answer: "Possuimos a parceria com diversos profissionais de saúde, que por sua vez, atuam em diversas especialidades.",
        // },
    ];

    return (
        <>
            <ContainerDuvidasFrequentes>
                <BreadCrumb />

                <TitleContainerDuvidas>
                    <TitleXL>Dúvidas frequentes</TitleXL>
                    <p>Aqui, você encontra as dúvidas mais frequentes!</p>
                </TitleContainerDuvidas>

                {mock.length > 0 ? (
                    mock?.map((question, index) => {
                        return (
                            <Accordion
                                key={index}
                                labelAnswer={question.answer}
                                labelQuestion={question.question}
                            />
                        );
                    })
                ) : (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            height: "100%",
                            justifyContent: "center",
                        }}
                    >
                        <h4>
                            Algo de errado aconteceu. Tente novamente mais
                            tarde.
                        </h4>
                    </div>
                )}
            </ContainerDuvidasFrequentes>
        </>
    );
};

export default dynamic(() => Promise.resolve(Ajuda), { ssr: false });

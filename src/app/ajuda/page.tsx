"use client";
import { NextPage } from "next";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
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
    const [questions, setQuestions] = React.useState<Question[] | null>();

    useEffect(() => {
        axios
            .get<Question[]>("http://localhost:3000/help")
            .then((response) => {
                setQuestions(response.data);
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        console.log(questions);
    }, [questions]);

    return (
        <>
            <ContainerDuvidasFrequentes>
                <BreadCrumb />

                <TitleContainerDuvidas>
                    <TitleXL>Dúvidas frequentes</TitleXL>
                    <p>Aqui, você encontra as dúvidas mais frequentes!</p>
                </TitleContainerDuvidas>

                {questions?.map((question, index) => {
                    return (
                        <Accordion
                            key={index}
                            labelAnswer={question.answer}
                            labelQuestion={question.question}
                        />
                    );
                })}
            </ContainerDuvidasFrequentes>
        </>
    );
};

export default dynamic(() => Promise.resolve(Ajuda), { ssr: false });

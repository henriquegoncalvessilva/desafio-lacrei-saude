"use client";
import "material-symbols";
import dynamic from "next/dynamic";
const Card = dynamic(() => import("./components/ui/card/card"), { ssr: false });
import { Divider } from "./components/ui/divider";
import React, { useEffect } from "react";
import axios from "axios";
import { Professional } from "@/interfaces/professional.interface";
const Title = dynamic(
    () => import("./components/ui/title/title").then((mod) => mod.Title),
    { ssr: false }
);
const TitleContainer = dynamic(
    () =>
        import("./components/ui/title/title").then((mod) => mod.TitleContainer),
    { ssr: false }
);
const TitleSM = dynamic(
    () => import("./components/ui/title/style").then((mod) => mod.TitleSM),
    { ssr: false }
);
const CardContentContainer = dynamic(
    () => import("./components/ui/containers/cardContentContainer"),
    {
        ssr: false,
        loading: () => (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    margin: "0 auto",
                    textAlign: "center",
                    padding: "20px",
                    height: "100%",
                }}
            >
                <h1>Carregando...</h1>
            </div>
        ),
    }
);

export default function Home() {
    const [questions, setQuestions] = React.useState<Professional[] | null>(
        null
    );

    useEffect(() => {
        axios
            .get<Professional[]>("http://localhost:3000/professionals")
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
            <TitleContainer>
                <Title
                    title="Lista de Cards"
                    style={{ textAlign: "center" }}
                    type="XL"
                />
                <Divider />
                <TitleSM>
                    Sinta-se à vontade para escolher o profissional que melhor
                    atende às suas necessidades, de forma segura e livre de
                    preconceitos.
                </TitleSM>
            </TitleContainer>
            <CardContentContainer>
                {questions?.map((professional, index) => {
                    return <Card professinal={professional} key={index} />;
                })}
            </CardContentContainer>
        </>
    );
}

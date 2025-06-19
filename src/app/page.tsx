"use client";
import "material-symbols";
import dynamic from "next/dynamic";
const Card = dynamic(() => import("./components/ui/card/card"), { ssr: false });
import { Divider } from "./components/ui/divider";
import React from "react";
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
    const mock: Professional[] = [
        {
            name: "Dra. Cleysiane de Araujo Oliveira",
            area: "Fisioterapeuta",
            register: "CREFISIO PE 0304",
            tags: [
                { label: "Negra", icon: "preta" },
                { label: "Mulher Trans", icon: "transgenero" },
                { label: "Lésbica", icon: "lesbica" },
            ],
            location: "Consultório Dra. Cleysi Araujo",
            schedule: "Terça-feira à Quinta-feira das 14:00 às 18:00",
            duration: "30 minutos",
            adress: "Rua das Margaridas, 350, Recife - Pernambuco",
            cost: "60,00",
            payment: "Cartão de Crédito/Débito",
        },
        {
            name: "Dr. Vinícius Santana",
            area: "Psicólogo",
            register: "CRP 02/12345",
            tags: [
                { label: "Homem Negro", icon: "preta" },
                { label: "Gay", icon: "gay" },
            ],
            location: "Clínica Bem Viver",
            schedule: "Segunda e Quarta das 10:00 às 16:00",
            duration: "50 minutos",
            adress: "Av. Domingos Ferreira, 1234, Recife - PE",
            cost: "100,00",
            payment: "Pix / Dinheiro",
        },
        {
            name: "Dra. Ayla Kimura",
            area: "Dermatologista",
            register: "CRM PE 87654",
            tags: [
                { label: "Mulher Amarela", icon: "amarela" },
                { label: "Cis", icon: "cisgenero" },
            ],
            location: "Consultório Ayla Pele Saudável",
            schedule: "Terça a Sexta das 09:00 às 13:00",
            duration: "40 minutos",
            adress: "Rua Japão, 55, Recife - PE",
            cost: "150,00",
            payment: "Cartão / Pix",
        },
        {
            name: "Dra. Gabriela Souza",
            area: "Ginecologista",
            register: "CRM PE 65432",
            tags: [
                { label: "Parda", icon: "parda" },
                { label: "Mulher Cis", icon: "cisgenero" },
                { label: "Bissexual", icon: "bissexual" },
            ],
            location: "Clínica Mulher Viva",
            schedule: "Segunda à Sexta das 13:00 às 17:00",
            duration: "30 minutos",
            adress: "Rua das Flores, 789, Recife - PE",
            cost: "120,00",
            payment: "Convênio / Cartão",
        },
        {
            name: "Dr. Rafael Lima",
            area: "Endocrinologista",
            register: "CRM PE 99887",
            tags: [
                { label: "Homem Branco", icon: "branca" },
                { label: "Cis", icon: "cisgenero" },
                { label: "Heterossexual", icon: "cisgenero" },
            ],
            location: "Centro Médico Equilíbrio",
            schedule: "Quarta e Sexta das 10:00 às 15:00",
            duration: "40 minutos",
            adress: "Rua Sol Nascente, 456, Recife - PE",
            cost: "130,00",
            payment: "Cartão / Dinheiro",
        },
        {
            name: "Dra. Talita Borges",
            area: "Psicóloga",
            register: "CRP 02/67890",
            tags: [
                { label: "Mulher Preta", icon: "preta" },
                { label: "Pansexual", icon: "pansexual" },
            ],
            location: "Espaço Psicologia Negra",
            schedule: "Segunda à Quinta das 08:00 às 12:00",
            duration: "50 minutos",
            adress: "Rua dos Palmares, 222, Olinda - PE",
            cost: "80,00",
            payment: "Pix / Cartão",
        },
        {
            name: "Dr. Igor Mendes",
            area: "Nutricionista",
            register: "CRN 6 54321",
            tags: [
                { label: "Homem Trans", icon: "transgenero" },
                { label: "Pardo", icon: "parda" },
            ],
            location: "Clínica Corpo & Mente",
            schedule: "Terça e Quinta das 14:00 às 18:00",
            duration: "45 minutos",
            adress: "Av. Boa Viagem, 3200, Recife - PE",
            cost: "90,00",
            payment: "Cartão / Pix",
        },
        {
            name: "Dra. Mayra Oliveira",
            area: "Fonoaudióloga",
            register: "CRFa 02/11223",
            tags: [
                { label: "Mulher Indígena", icon: "indigena" },
                { label: "Assexual", icon: "assexual" },
            ],
            location: "Espaço Voz e Expressão",
            schedule: "Segunda, Quarta e Sexta das 09:00 às 11:30",
            duration: "30 minutos",
            adress: "Rua Rio Doce, 100, Recife - PE",
            cost: "70,00",
            payment: "Dinheiro / Cartão",
        },
        {
            name: "Dr. João Kenji",
            area: "Acupunturista",
            register: "ABACO 00345",
            tags: [
                { label: "Homem Amarelo", icon: "amarela" },
                { label: "Bissexual", icon: "bissexual" },
            ],
            location: "Clínica Oriental",
            schedule: "Terça e Quinta das 15:00 às 19:00",
            duration: "50 minutos",
            adress: "Rua Japão, 150, Recife - PE",
            cost: "110,00",
            payment: "Pix / Cartão",
        },
        {
            name: "Dra. Luma Freitas",
            area: "Terapeuta Ocupacional",
            register: "CREFITO 11/33445",
            tags: [
                { label: "Mulher Branca", icon: "branca" },
                { label: "Lésbica", icon: "lesbica" },
            ],
            location: "Espaço Funcional",
            schedule: "Segunda a Sexta das 10:00 às 16:00",
            duration: "40 minutos",
            adress: "Rua Aurora, 50, Recife - PE",
            cost: "100,00",
            payment: "Cartão / Dinheiro / Convênio",
        },
    ];

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
                {mock.map((professional, index) => (
                    <Card
                        professinal={professional as Professional}
                        key={index}
                    />
                ))}
            </CardContentContainer>
            {mock.length === 0 ? (
                <div
                    style={{
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "center",
                    }}
                >
                    <h4>
                        No momento não possuimos profissionais disponíveis.
                        Tente novamente mais tarde.
                    </h4>
                </div>
            ) : null}
        </>
    );
}

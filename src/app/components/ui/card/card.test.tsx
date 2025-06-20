import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import { Card } from "./card";

const mockProfessional = {
    name: "Dra. Cleysiane de Araujo Oliveira",
    area: "Fisioterapeuta",
    register: "CREFISIO PE 0304",
    tags: [{ label: "Negra", icon: "preta" }],
    location: "Consultório Dra. Cleysi Araujo",
    schedule: "Terça-feira à Quinta-feira das 14:00 às 18:00",
    duration: "30 minutos",
    adress: "Rua das Margaridas, 350, Recife - Pernambuco",
    cost: "60,00",
    payment: "Cartão de Crédito/Débito",
};

describe("<Card />", () => {
    test("deve renderizar o nome e área do profissional", async () => {
        render(<Card professinal={mockProfessional} />);

        expect(
            await screen.findByText("Dra. Cleysiane de Araujo Oliveira")
        ).toBeInTheDocument();
        expect(
            await screen.findByText("Fisioterapeuta, CREFISIO PE 0304")
        ).toBeInTheDocument();
    });

    test("deve renderizar as tags corretamente", () => {
        render(<Card professinal={mockProfessional} />);

        expect(screen.getByText("Negra")).toBeInTheDocument();
    });

    test("deve mostrar os dados da consulta", () => {
        render(<Card professinal={mockProfessional} />);

        expect(screen.getByText(mockProfessional.location)).toBeInTheDocument();
        expect(screen.getByText("Consulta Particular")).toBeInTheDocument();
        expect(screen.getByText(mockProfessional.schedule)).toBeInTheDocument();
        expect(
            screen.getByText(`Duração: ${mockProfessional.duration}`)
        ).toBeInTheDocument();
        expect(screen.getByText(mockProfessional.adress)).toBeInTheDocument();
        expect(
            screen.getByText(`Valor da consulta: ${mockProfessional.cost}`)
        ).toBeInTheDocument();
        expect(
            screen.getByText(`Pagamento: ${mockProfessional.payment}`)
        ).toBeInTheDocument();
    });

    test("deve renderizar o botão de agendar", () => {
        render(<Card professinal={mockProfessional} />);

        expect(
            screen.getByRole("button", { name: /Agendar consulta/i })
        ).toBeInTheDocument();
    });
});

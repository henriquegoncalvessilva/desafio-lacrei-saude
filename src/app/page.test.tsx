import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import Home from "./page";

const mockProfessionals = [
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
];

describe("HomePage", () => {
    test("Deve ter algum profissional na tela e não aparecer uma mensagem de erro", async () => {
        render(<Home professionals={mockProfessionals} />);

        expect(await screen.findByText("Dr. Vinícius Santana"));
    });
    test("Deve aparecer uma mensagem de erro se não houver profissional", () => {
        render(<Home professionals={[]} />);

        expect(
            screen.getByText(
                "No momento não possuimos profissionais disponíveis. Tente novamente mais tarde."
            )
        );
    });
});

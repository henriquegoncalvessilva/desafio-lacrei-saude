import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import Accordion from "./accordion";
import { Question } from "@/app/ajuda/page";

const mockAccordion: Question = {
    question: "Qual é o proposito da Lacrei Saúde?",
    answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate enim officia quas laborum vel cumque quae officiis maxime, corporis possimus deserunt nostrum vitae eum eius impedit vero at eaque? Dignissimos.",
};

describe("Accordion component", () => {
    test("Deve renderizar um Accordion com perguntas e respostas", () => {
        render(
            <Accordion
                labelAnswer={mockAccordion.answer}
                labelQuestion={mockAccordion.question}
            />
        );

        expect(screen.getByText("Qual é o proposito da Lacrei Saúde?"));
        expect(
            screen.getByText(
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate enim officia quas laborum vel cumque quae officiis maxime, corporis possimus deserunt nostrum vitae eum eius impedit vero at eaque? Dignissimos."
            )
        );
    });
});

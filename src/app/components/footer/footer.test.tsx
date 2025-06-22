import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Footer from "./footer";

describe("Footer", () => {
    test("deve exibir alguns dos conteúdos que compõem o Footer", async () => {
        render(<Footer />);

        const socials = await screen.findByTestId("socials");
        expect(socials).toBeInTheDocument();

        expect(screen.getByText("Lacrei saúde")).toBeInTheDocument();
        expect(screen.getByText("Saúde")).toBeInTheDocument();
        expect(screen.getByText("Segurança e Privacidade")).toBeInTheDocument();
    });
});

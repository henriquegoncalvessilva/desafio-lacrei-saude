import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Header from "./header";

describe("Header", () => {
    test("deve possuir o botão de navegação que direciona para a tela de ajuda", async () => {
        render(<Header />);

        const ajudaLink = await screen.findByTestId("link-ajuda");
        expect(ajudaLink).toHaveAttribute("href", "/ajuda");
    });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import BreadCrumb from "./breadcrumb";

describe("Breadcrumb", () => {
    test("deve possuir o botão de navegação que direciona para a tela inicial", async () => {
        render(<BreadCrumb />);

        const inicioLink = await screen.findByTestId("link-inicio");
        expect(inicioLink).toHaveAttribute("href", "/");
    });
});

"use client";
import React from "react";
import { PrimaryButton, SecondaryButton } from "./style";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ label, variant, ...rest }) => {
    switch (variant) {
        case "primary":
            return <PrimaryButton {...rest}>{label}</PrimaryButton>;
        case "secondary":
            return <SecondaryButton {...rest}>{label}</SecondaryButton>;
        default:
            return <PrimaryButton {...rest}>{label}</PrimaryButton>;
    }
};

export { Button };

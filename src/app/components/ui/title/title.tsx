import React from "react";
import { TitlesContainer, TitleSM } from "./style";

interface TitleProps extends React.HTMLAttributes<HTMLElement> {
    title: string;
    type: "XL" | "LG" | "SM";
}

export const TitleContainer: React.FC<React.PropsWithChildren<object>> = ({
    children,
    ...rest
}) => <TitlesContainer {...rest}>{children}</TitlesContainer>;

export const Title = ({ title, type, ...rest }: TitleProps) => {
    switch (type) {
        case "XL":
            return <h1 {...rest}>{title}</h1>;
        case "SM":
            return <TitleSM {...rest}>{title}</TitleSM>;
        case "LG":
            return <p {...rest}>{title}</p>;
        default:
            return <div {...rest}>{title}</div>;
    }
};

import dynamic from "next/dynamic";
import React from "react";
import { TextSmHighlighted, TextXL, TextBase } from "./style";

type TextProps = React.HTMLAttributes<HTMLElement> & {
    label: string | null;
    size: "SM-HIGHLIIGHTED" | "MD" | "LG" | "XL" | "BASE-HIGHLIGHT";
};

const Text = ({ label, size, ...rest }: TextProps) => {
    switch (size) {
        case "SM-HIGHLIIGHTED":
            return <TextSmHighlighted {...rest}>{label}</TextSmHighlighted>;
        case "XL":
            return <TextXL {...rest}>{label}</TextXL>;
        default:
            return <TextBase {...rest}>{label}</TextBase>;
    }
};

export default dynamic(() => Promise.resolve(Text), { ssr: false });

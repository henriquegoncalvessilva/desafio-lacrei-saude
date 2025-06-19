import React, { ReactNode } from "react";
import { CardContentContainerGeneral } from "./style";

interface CardContentContainerProps {
    children: ReactNode;
}
const CardContentContainer: React.FC<CardContentContainerProps> = ({
    children,
    ...rest
}) => (
    <CardContentContainerGeneral {...rest}>
        {children}
    </CardContentContainerGeneral>
);

export default CardContentContainer;

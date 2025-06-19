import React, { ReactNode } from "react";
import { CardContentContainerGeneral } from "./style";

interface CardContentContainerProps {
    children: ReactNode;
}

const CardContentContainer: React.FC<CardContentContainerProps> = ({
    children,
}) => {
    return (
        <CardContentContainerGeneral>{children}</CardContentContainerGeneral>
    );
};

export default CardContentContainer;
export { CardContentContainer };

import React from "react";
import { CardContentContainerGeneral } from "./style";
import Card from "../card/card";
import { Professional } from "@/interfaces/professional.interface";

interface CardContentContainerProps {
    professionals?: Professional[];
}
const CardContentContainer: React.FC<CardContentContainerProps> = ({
    professionals,
    ...rest
}) => {
    return (
        <>
            <CardContentContainerGeneral {...rest}>
                {professionals && professionals.length > 0
                    ? professionals.map((professional, index) => (
                          <Card professinal={professional} key={index} />
                      ))
                    : null}
            </CardContentContainerGeneral>
            {professionals?.length === 0 ? (
                <div
                    style={{
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "center",
                    }}
                >
                    <h4>
                        No momento não possuimos profissionais disponíveis.
                        Tente novamente mais tarde.
                    </h4>
                </div>
            ) : null}
        </>
    );
};

export default CardContentContainer;

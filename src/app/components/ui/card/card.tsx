import React from "react";
import dynamic from "next/dynamic";

import {
    CardConsultaContainer,
    CardContainer,
    CardConsultaContentContainer,
    CardHeaderContainer,
    CardHeaderTextContainer,
    CardTagsContainer,
} from "./style";
import TagBadge from "../tagBadge/tagBadge";
import Text from "../text/text";
import Avatar from "../avatar/avatar";
import { Divider } from "../divider";
import { Button } from "../button/button";
import { Professional } from "@/interfaces/professional.interface";

type PropsCard = {
    professinal: Professional;
};

const Card = ({ professinal }: PropsCard) => {
    return (
        <>
            <CardContainer>
                <CardHeaderContainer>
                    <Avatar imageURL="avatar" />
                    <CardHeaderTextContainer>
                        <Text size="XL" label={professinal.name} />
                        <Text
                            size="SM-HIGHLIIGHTED"
                            label={`${professinal.area}, ${professinal.register}`}
                        />
                    </CardHeaderTextContainer>
                </CardHeaderContainer>
                <CardTagsContainer>
                    {professinal.tags.map((tag, index) => {
                        return (
                            <TagBadge
                                key={index}
                                label={tag.label}
                                icon={tag.icon}
                                extension=".svg"
                            />
                        );
                    })}

                    {/* <TagBadge
                        label="Mulher Trans"
                        icon="transgenero"
                        extension=".svg"
                    />
                    <TagBadge label="Lésbica" icon="lesbica" extension=".svg" /> */}
                </CardTagsContainer>
                <Divider
                    style={{
                        borderColor: "#e0e0e0",
                        width: "100%",
                        borderWidth: "1px",
                    }}
                />
                {/* Dados da consulta */}
                <CardConsultaContainer>
                    <CardConsultaContentContainer
                        style={{
                            color: "rgba(1, 135, 98, 1)",
                        }}
                    >
                        <span className="material-symbols-outlined">
                            medical_services
                        </span>
                        <Text
                            size="BASE-HIGHLIGHT"
                            label={professinal.location}
                        />
                    </CardConsultaContentContainer>
                    <CardConsultaContentContainer
                        style={{
                            color: "rgba(1, 135, 98, 1)",
                        }}
                    >
                        <span className="material-symbols-outlined" color="">
                            health_cross
                        </span>
                        <Text
                            size="BASE-HIGHLIGHT"
                            label="Consulta Particular"
                        />
                    </CardConsultaContentContainer>
                    <CardConsultaContentContainer
                        style={{
                            color: "rgba(1, 135, 98, 1)",
                        }}
                    >
                        <span className="material-symbols-outlined">
                            calendar_month
                        </span>
                        <Text
                            size="BASE-HIGHLIGHT"
                            label={professinal.schedule}
                        />
                    </CardConsultaContentContainer>
                    <CardConsultaContentContainer
                        style={{
                            color: "rgba(1, 135, 98, 1)",
                        }}
                    >
                        <span className="material-symbols-outlined">
                            schedule
                        </span>
                        <Text
                            size="BASE-HIGHLIGHT"
                            label={`Duração: ${professinal.duration}`}
                        />
                    </CardConsultaContentContainer>

                    <CardConsultaContentContainer
                        style={{
                            color: "rgba(1, 135, 98, 1)",
                        }}
                    >
                        <span className="material-symbols-outlined">
                            location_on
                        </span>
                        <Text
                            size="BASE-HIGHLIGHT"
                            style={{ color: "rgba(1, 135, 98, 1)" }}
                            label={professinal.adress}
                        />
                    </CardConsultaContentContainer>
                    <CardConsultaContentContainer
                        style={{
                            color: "rgba(1, 135, 98, 1)",
                        }}
                    >
                        <span className="material-symbols-outlined">paid</span>
                        <Text
                            size="BASE-HIGHLIGHT"
                            label={`Valor da consulta: ${professinal.cost}`}
                        />
                    </CardConsultaContentContainer>
                    <CardConsultaContentContainer
                        style={{
                            color: "rgba(1, 135, 98, 1)",
                        }}
                    >
                        <span className="material-symbols-outlined">
                            credit_card
                        </span>
                        <Text
                            size="BASE-HIGHLIGHT"
                            label={`Pagamento: ${professinal.payment}`}
                        />
                    </CardConsultaContentContainer>
                </CardConsultaContainer>
                <Button
                    label="Agendar consulta"
                    style={{ width: "100%" }}
                    variant="primary"
                ></Button>
            </CardContainer>
        </>
    );
};

export default dynamic(() => Promise.resolve(Card), { ssr: false });

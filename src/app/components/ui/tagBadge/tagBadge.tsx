import React from "react";
import { TagBadgeContainer } from "./style";
import Image from "next/image";

interface TagBadgeProps {
    /**
     * Texto descritivo da tag, representando raça, identidade de gênero ou outra categoria de identificação. Ex: "Mulher Trans", "Homem Trans", "Mulher Preta", etc.
     */
    label: string;
    /**
     * Nome do ícone a ser exibido na tag. De acordo com o contexto, pode ser um ícone representando raça, gênero ou outra categoria. Ex: transgenero, preta, etc.
     */
    icon: string;
    extension: ".png" | ".svg";
}

const TagBadge: React.FC<TagBadgeProps> = ({ label, icon, extension }) => {
    return (
        <TagBadgeContainer>
            <Image
                src={`/assets/icons/${icon}${extension}`}
                width={24}
                height={24}
                alt={label}
            />
            <p>{label}</p>
        </TagBadgeContainer>
    );
};

export default TagBadge;

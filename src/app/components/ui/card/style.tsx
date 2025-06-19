import styled from "styled-components";

const CardContainer = styled.section`
    width: 28.1875rem;
    height: fit-content;
    gap: 24px;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    background: var(
        --Card-Background-color-background-card-default,
        rgba(255, 255, 255, 1)
    );
    border: 1px solid
        var(
            --Card-Border-color-border-card-tertiary-default,
            rgba(207, 207, 207, 1)
        );
    padding: 24px;

    /* 0 até 360px */
    @media (max-width: 360px) {
        width: 100%;
        padding: 12px;
    }

    /* 375px a 414px */
    @media (min-width: 375px) and (max-width: 414px) {
        width: 95vw;
        padding: 16px;
    }

    /* 415px a 480px */
    @media (min-width: 415px) and (max-width: 719px) {
        width: 90vw;
        padding: 18px;
    }

    /* 720px a 1366px */
    @media (min-width: 720px) and (max-width: 1366px) {
        width: 24rem;
        padding: 20px;
    }
`;

const CardHeaderContainer = styled.section`
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
`;

const CardTagsContainer = styled.section`
    display: flex;
    flex-direction: row;
    gap: 8px;
    flex-wrap: wrap;

    @media (max-width: 360px) {
        gap: 12px;
    }

    @media (min-width: 375px) and (max-width: 414px) {
        gap: 16px;
    }

    @media (min-width: 415px) and (max-width: 719px) {
        gap: 18px;

        flex-wrap: wrap;
    }

    @media (min-width: 720px) and (max-width: 1366px) {
        flex-wrap: wrap;
    }
`;

const CardHeaderTextContainer = styled.section``;

const CardConsultaContentContainer = styled.section`
    display: flex;
    gap: 16px;
    align-items: center;
`;

const CardConsultaContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export {
    CardContainer,
    CardHeaderContainer,
    CardHeaderTextContainer,
    CardTagsContainer,
    CardConsultaContentContainer,
    CardConsultaContainer,
};

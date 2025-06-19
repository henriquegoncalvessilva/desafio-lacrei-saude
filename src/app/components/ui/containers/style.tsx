import { styled } from "styled-components";

const CardContentContainerGeneral = styled.section`
    margin: 0 auto;
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    padding: 16px 122px;

    /* 0 até 360px */
    /* 375px a 414px */
    /* 415px a 719px */
    /* 720px a 1366px */

    @media (max-width: 360px) {
        grid-template-columns: 1fr;
        padding: 8px 8px;
        gap: 12px;
    }

    @media (min-width: 375px) and (max-width: 414px) {
        grid-template-columns: 1fr;
        padding: 12px 0;
        gap: 16px;
    }

    @media (min-width: 415px) and (max-width: 719px) {
        grid-template-columns: 1fr;
        padding: 16px 24px;
        gap: 18px;
    }

    @media (min-width: 720px) and (max-width: 1366px) {
        grid-template-columns: repeat(2, 1fr);
        padding: 16px 16px;
        gap: 24px;
    }
`;

export { CardContentContainerGeneral };

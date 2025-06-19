import styled from "styled-components";

const TitleXL = styled.h1`
    font-weight: 700;
    font-size: 3rem;
    line-height: 120%;
`;
const TitleSM = styled.h3`
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 120%;
    color: rgb(81, 81, 81);
    /* 0 até 360px */
    @media (max-width: 360px) {
        font-size: 1rem;
    }

    /* 375px a 414px */
    @media (min-width: 375px) and (max-width: 414px) {
        font-size: 1.1rem;
    }

    /* 415px a 719px */
    @media (min-width: 415px) and (max-width: 719px) {
        font-size: 1.3rem;
    }

    /* 720px a 1366px */
    @media (min-width: 720px) and (max-width: 1366px) {
        font-size: 1.5rem;
    }
`;
const TitleLG = styled.h2`
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 2.25rem;
`;

const TitlesContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 16px 122px;
    width: fit-content;
    gap: 8px;
    text-align: center;

    /* 0 até 360px */
    @media (max-width: 360px) {
        padding: 8px 12px;
    }

    /* 375px a 414px */
    @media (min-width: 375px) and (max-width: 414px) {
        padding: 10px 0;
        width: fit-content;
    }

    /* 415px a 719px */
    @media (min-width: 415px) and (max-width: 719px) {
        padding: 12px 48px;
    }

    /* 720px a 1366px */
    @media (min-width: 720px) and (max-width: 1366px) {
        padding: 16px 80px;
    }
`;

export { TitleXL, TitleLG, TitlesContainer, TitleSM };

import styled from "styled-components";

const ContainerDuvidasFrequentes = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: fit-content;
    align-items: center;
    height: 100%;
    margin: 0 auto;
    padding: 0 36px;
    @media (max-width: 360px) {
    }

    @media (min-width: 375px) and (max-width: 414px) {
        padding: 0 12px;

        h1 {
            font-size: 32px;
        }
        p {
            font-size: 18px;
        }
    }

    @media (min-width: 415px) and (max-width: 719px) {
        h1 {
            font-size: 36px;
        }
        p {
            font-size: 18px;
        }
    }

    @media (min-width: 720px) and (max-width: 1366px) {
    }
`;

export { ContainerDuvidasFrequentes };

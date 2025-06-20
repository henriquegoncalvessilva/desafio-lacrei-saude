import styled from "styled-components";

const AccordionHeader = styled.summary`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgb(81, 81, 81);
    border-radius: 6px;
    padding: 12px;

    @media (max-width: 360px) {
    }

    @media (min-width: 375px) and (max-width: 414px) {
        width: 100%;
    }

    @media (min-width: 415px) and (max-width: 719px) {
    }

    @media (min-width: 720px) and (max-width: 1366px) {
    }
`;

const AccordionContent = styled.section`
    margin-top: 8px;
    padding: 12px;
    border: 1px solid rgb(81, 81, 81);
    border-radius: 6px;
`;

const ContainerAccordion = styled.details`
    margin-top: 16px;
    margin-bottom: 8px;
    width: 1196px;
    @media (max-width: 360px) {
    }

    @media (min-width: 375px) and (max-width: 414px) {
        width: 100%;
        padding: 0;
    }

    @media (min-width: 415px) and (max-width: 719px) {
        width: 100%;
        padding: 0;
    }

    @media (min-width: 720px) and (max-width: 1366px) {
        width: 100%;
        padding: 0;
    }
`;

export { AccordionHeader, AccordionContent, ContainerAccordion };

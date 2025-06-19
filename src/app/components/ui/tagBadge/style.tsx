import styled from "styled-components";

export const TagBadgeContainer = styled.span`
    width: fit-content;
    height: 40px;
    padding: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    background-color: rgba(240, 240, 240, 1);
    position: relative;

    /* 0 até 360px */
    @media (max-width: 360px) {
        width: fit-content;
        height: 32px;
        padding: 6px 0;
        font-size: 12px;
    }

    /* 375px a 414px */
    @media (min-width: 361px) and (max-width: 414px) {
        padding: 7px auto;
        font-size: 12px;
    }

    /* 415px a 719px */
    @media (min-width: 415px) and (max-width: 719px) {
        width: fit-content;

        padding: 8px 16px;
        font-size: 14px;
    }

    /* 720px a 1366px */
    @media (min-width: 720px) and (max-width: 1366px) {
        width: fit-content;
        padding: 10px 20px;
        font-size: 15px;
    }
    @media (min-width: 1367px) {
        width: fit-content;
        padding: 10px 20px;
        font-size: 14px;
    }
`;

export default TagBadgeContainer;

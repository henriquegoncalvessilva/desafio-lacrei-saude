import { styled } from "styled-components";

const PrimaryButton = styled.button`
    background: rgba(1, 135, 98, 1);
    width: fit-content;
    color: #fff;
    border: none;
    padding: 0.6563rem 2rem;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    font-family: Nunito, sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: 0%;
    transition: background 0.2s, color 0.2s;

    &:hover {
        background: rgba(0, 119, 86, 1);
    }
    &:active {
        background: rgba(1, 76, 55, 1);
    }
`;

const SecondaryButton = styled.button`
    background: rgba(255, 255, 255, 1);
    color: rgba(1, 135, 98, 1);
    border: none;
    padding: 0.625rem 2rem;
    border-radius: 8px;
    font-weight: 700;
    font-size: 1.125rem;
    text-align: center;
    transition: background 0.2s, color 0.2s;
    &:hover {
        background: rgba(223, 242, 237, 1);
    }
    &:active {
        background: rgba(178, 223, 208, 1);
    }
`;

export { PrimaryButton, SecondaryButton };

import styled from "styled-components";

const TextSmHighlighted = styled.span`
    font-weight: 600;
    display: block;
    font-size: 14px;
    line-height: 150%;
    color: rgba(81, 81, 81, 1);
`;

const TextXL = styled.span`
    font-family: Nunito;
    display: inline-block;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
`;

const TextBase = styled.span`
    font-weight: 700;
    width: 403px;
    display: inline-block;
    font-size: 16px;
    line-height: 24px;
    color: rgba(45, 45, 45, 1);
    white-space: pre-wrap;
`;

export { TextSmHighlighted, TextXL, TextBase };

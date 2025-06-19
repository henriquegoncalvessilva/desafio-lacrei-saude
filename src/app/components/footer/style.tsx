import styled from "styled-components";

const FooterContainerHeader = styled.section`
    border-top: 1px solid rgb(176, 224, 211);
    border-bottom: 1px solid rgb(176, 224, 211);
    max-width: 1440px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 48px 0;
    margin: 0 auto;
    flex-wrap: wrap;
    position: relative;

    @media (max-width: 360px) {
        border-bottom: none;
    }

    @media (min-width: 375px) and (max-width: 414px) {
        justify-content: start;
        margin: 0 1.5rem;
        border-bottom: none;
    }

    @media (min-width: 415px) and (max-width: 719px) {
        flex-wrap: nowrap;
        margin: 0 1rem;
        text-align: left;
        gap: 10px;
        border-bottom: none;
        .links {
            margin: 0;
            :not(strong) {
                font-size: 14px;
            }
        }
        padding: initial 1rem;
    }

    @media (min-width: 720px) and (max-width: 1366px) {
        padding: 48px 0.5rem;
    }
`;
const FooterContainerSocial = styled.section`
    display: flex;
    flex-direction: column;
    gap: 56px;
    align-items: start;
    @media (max-width: 360px) {
        #logo-footer {
            display: none;
        }
        -webkit-box-pack: start;
        justify-content: flex-start;
    }

    @media (min-width: 375px) and (max-width: 414px) {
        -webkit-box-pack: start;
        justify-content: flex-start;

        #logo-footer {
            display: none;
        }
        #socials {
            position: absolute;
            bottom: -0.2rem;
            -webkit-box-align: center;
            align-items: center;
            gap: 0px;
        }
    }

    @media (min-width: 415px) and (max-width: 719px) {
        -webkit-box-pack: start;
        justify-content: flex-start;
        flex-direction: column-reverse;
        #logo-footer {
            display: none;
        }

        #socials {
            position: absolute;
            bottom: -0.2rem;
            -webkit-box-align: center;
            align-items: center;
            gap: 0px;
        }
    }

    @media (min-width: 720px) and (max-width: 1366px) {
        padding: 0 0.5rem;
    }
`;
const FooterContentSocials = styled.section`
    display: flex;
    justify-content: space-between;
    width: 12.5rem;

    @media (max-width: 360px) {
    }

    @media (min-width: 375px) and (max-width: 414px) {
        #logo-footer {
            display: none;
        }
    }

    @media (min-width: 415px) and (max-width: 719px) {
        #logo-footer {
            display: none;
        }
    }

    @media (min-width: 720px) and (max-width: 1366px) {
    }
`;
const FooterContainerLinks = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: start;
    @media (max-width: 360px) {
    }

    @media (min-width: 375px) and (max-width: 414px) {
    }

    @media (min-width: 415px) and (max-width: 719px) {
        justify-content: start;
        margin: 0 1.5rem;
    }

    @media (min-width: 720px) and (max-width: 1366px) {
    }
`;
const FooterLinksItem = styled.section`
    display: flex;
    gap: 8px;
    flex-direction: column;
    text-align: left;
`;
const FooterLink = styled.a`
    width: fit-content;
    padding: 12px 0;
`;
const FooterContainerDetails = styled.div`
    text-align: left;
    margin: 0 auto;
    max-width: 1440px;
    padding: 48px 0;
    font-size: 0.75rem;
    color: rgb(81, 81, 81);
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (max-width: 360px) {
        padding: 48px 1rem;
    }

    @media (min-width: 375px) and (max-width: 414px) {
        padding: 48px 1rem;
    }

    @media (min-width: 415px) and (max-width: 719px) {
        padding: 48px 1rem;
    }

    @media (min-width: 720px) and (max-width: 1366px) {
        padding: 48px 0.5rem;
    }
`;

export {
    FooterContainerHeader,
    FooterContainerSocial,
    FooterContentSocials,
    FooterContainerLinks,
    FooterLinksItem,
    FooterLink,
    FooterContainerDetails,
};

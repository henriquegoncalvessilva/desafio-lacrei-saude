"use client";
import React from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import Image from "next/image";
const Button = dynamic(() =>
    import("../ui/button/button").then((mod) => mod.Button)
);
const Link = dynamic(() => import("next/link").then((mod) => mod.default));

const HeaderContainer = styled.header`
    background: rgb(245, 255, 251);
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    /* 0 até 360px */
    @media (max-width: 360px) {
        padding: 1rem 0.5rem;
        flex-direction: row;
        gap: 1rem;
        #button-help-desktop {
            display: none;
        }
        #button-help-mobile {
            display: flex;
            &:hover {
                background: rgba(223, 242, 237, 1);
            }
            &:active {
                background: rgba(178, 223, 208, 1);
            }
        }
    }

    /* 375px a 414px */
    @media (min-width: 375px) and (max-width: 414px) {
        padding: 1rem 1rem;
        flex-direction: row;
        gap: 1rem;
        #button-help-desktop {
            display: none;
        }
        #button-help-mobile {
            display: flex;
            border-radius: 6px;

            &:hover {
                background: rgba(223, 242, 237, 1);
            }
            &:active {
                background: rgba(178, 223, 208, 1);
            }
        }
    }

    /* 415px a 719px */
    @media (min-width: 415px) and (max-width: 719px) {
        padding: 1rem 2rem;
        flex-direction: row;
        gap: 0;
        #button-help-desktop {
            display: none;
        }
        #button-help-mobile {
            display: flex;
            border-radius: 6px;

            &:hover {
                background: rgba(223, 242, 237, 1);
            }
            &:active {
                background: rgba(178, 223, 208, 1);
            }
        }
    }

    /* 720px a 1366px */
    @media (min-width: 720px) and (max-width: 1366px) {
        padding: 1rem 4rem;
        flex-direction: row;
        gap: 0;
        #button-help-desktop {
            display: flex;
        }
        #button-help-mobile {
            display: none;
            border-radius: 6px;
            &:hover {
                background: rgba(223, 242, 237, 1);
            }
            &:active {
                background: rgba(178, 223, 208, 1);
            }
        }
    }

    /* acima de 1366px */
    @media (min-width: 1367px) {
        padding: 1rem 7.625rem;
        #button-help-desktop {
            display: block;
        }
        #button-help-mobile {
            display: none;
        }
    }
`;

const ButtonsHeaderContainer = styled.section`
    display: flex;
    gap: 1rem;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Image
                src="https://lacreisaude.com.br/_next/static/media/logo_lacrei_desktop.7ae004ab.svg"
                alt="Logo Lacrei Saúde"
                width={202}
                priority
                height={64}
            />
            <ButtonsHeaderContainer>
                <Link
                    href={"/ajuda"}
                    id="button-help-desktop"
                    data-testid="link-ajuda"
                    aria-label="Ajuda"
                >
                    <Button variant="secondary" label="Ajuda" />
                </Link>
                <Link href={"/ajuda"} id="button-help-mobile">
                    <span
                        style={{
                            color: "rgba(1, 135, 98, 1)",
                            padding: "14px",
                        }}
                        className="material-symbols-outlined"
                    >
                        help
                    </span>
                </Link>
            </ButtonsHeaderContainer>
        </HeaderContainer>
    );
};

// Exportação dinâmica
export default dynamic(() => Promise.resolve(Header), { ssr: false });

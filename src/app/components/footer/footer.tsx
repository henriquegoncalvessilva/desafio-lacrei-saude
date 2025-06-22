"use client";
import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
    FooterContainerDetails,
    FooterContainerHeader,
    FooterContainerLinks,
    FooterContainerSocial,
    FooterContentSocials,
    FooterLink,
    FooterLinksItem,
} from "./style";

const FooterContainer = styled.footer`
    position: relative;
    width: 100%;
    color: black;
    text-align: center;
    padding: 1rem 0;
    bottom: 0;
    margin: 0 auto;
`;

const Footer = () => (
    <>
        <FooterContainer>
            <FooterContainerHeader>
                <FooterContainerSocial>
                    <Image
                        src="https://lacreisaude.com.br/_next/static/media/global-logo.e41aea7b.svg"
                        width={169}
                        height={48}
                        alt="logo footer"
                        priority
                        id="logo-footer"
                    />

                    <FooterContentSocials id="socials" data-testid="socials">
                        <a href="">
                            <Image
                                style={{ color: "red" }}
                                src="/assets/icons/facebook_icon.svg"
                                width={32}
                                height={28}
                                alt="icon facebook"
                            />
                        </a>
                        <a href="">
                            <Image
                                src="/assets/icons/instagram_icon.svg"
                                width={32}
                                height={28}
                                alt="icon facebook"
                            />
                        </a>

                        <a href="">
                            <Image
                                src="/assets/icons/linkedin_icon.svg"
                                width={32}
                                height={28}
                                alt="icon facebook"
                            />
                        </a>
                        <a href="">
                            <Image
                                src="/assets/icons/email_icon.svg"
                                width={32}
                                height={28}
                                alt="icon facebook"
                            />
                        </a>
                    </FooterContentSocials>
                </FooterContainerSocial>

                <FooterContainerLinks className="links">
                    <strong>Lacrei saúde</strong>
                    <FooterLinksItem>
                        <FooterLink href="#">Quem somos</FooterLink>
                        <FooterLink href="#">Nosso propósito</FooterLink>
                        <FooterLink href="#">Missão, Visão e Valor</FooterLink>
                        <FooterLink href="#">Acessibilidade</FooterLink>
                    </FooterLinksItem>
                </FooterContainerLinks>
                <FooterContainerLinks className="links">
                    <strong>Saúde</strong>
                    <FooterLinksItem>
                        <FooterLink href="#">Buscar atendimento</FooterLink>
                        <a
                            href="#"
                            style={{
                                width: "fit-content",
                                padding: "12px 0",
                            }}
                        >
                            Oferecer atendimento
                        </a>
                    </FooterLinksItem>
                </FooterContainerLinks>
                <FooterContainerLinks className="links">
                    <strong>Segurança e Privacidade</strong>
                    <FooterLinksItem>
                        <FooterLink href="#">
                            Política de Privacidade
                        </FooterLink>
                        <FooterLink href="#">Termos de Uso</FooterLink>
                        <FooterLink href="#">Direitos de Titular</FooterLink>
                    </FooterLinksItem>
                </FooterContainerLinks>
            </FooterContainerHeader>
            <FooterContainerDetails>
                <span>
                    A Lacrei Saúde não oferece tratamento médico emergencial. Em
                    caso de emergência procure o hospital mais próximo.
                </span>

                <span>
                    Em caso de auxílio psicológico, ligue para 188 (CVV) ou
                    acesse o site{" "}
                    <FooterLink
                        href="https://www.cvv.org.br"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            textDecoration: "underline",
                        }}
                    >
                        www.cvv.org.br
                    </FooterLink>
                </span>

                <span>
                    Copyright © 2024 Lacrei Saúde. Todos os direitos reservados.
                    CNPJ: 51.265.351/0001-65
                </span>
            </FooterContainerDetails>
        </FooterContainer>
    </>
);

export default dynamic(() => Promise.resolve(Footer), { ssr: false });

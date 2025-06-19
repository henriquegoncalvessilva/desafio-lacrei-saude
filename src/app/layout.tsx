import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const nunito = Nunito({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Lacrei Saúde - Atendimento qualificado, seguro e inclusivo para LGBTQIAPN+",
    description:
        "Encontre profissionais de saúde que oferecem atendimento acolhedor, inclusivo e respeitoso para pessoas LGBTQIAPN+.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className={nunito.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}

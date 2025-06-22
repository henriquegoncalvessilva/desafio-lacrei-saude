import Link from "next/link";
import React from "react";

const BreadCrumb = () => {
    return (
        <>
            <section
                style={{
                    height: "28px",
                    width: "100%",
                    margin: "48px 0 24px 0",
                }}
            >
                <Link data-testid="link-inicio" href={"/"}>
                    Início {">"}{" "}
                </Link>
                <span style={{ color: "rgb(1, 135, 98)" }}>
                    Dúvidas Frequentes
                </span>
            </section>
        </>
    );
};

export default BreadCrumb;

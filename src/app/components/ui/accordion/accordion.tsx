import React from "react";
import { ContainerAccordion, AccordionHeader, AccordionContent } from "./style";

type AccordionProps = {
    labelQuestion: string;
    labelAnswer: string;
};

const Accordion = ({ labelQuestion, labelAnswer, ...rest }: AccordionProps) => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <ContainerAccordion
                onClick={() => setOpen(!open)}
                data-open={open}
                {...rest}
            >
                <AccordionHeader
                    style={{
                        border: open
                            ? "2px solid rgb(41, 81, 70)"
                            : "1px solid rgb(81, 81, 81)",
                    }}
                >
                    {labelQuestion}
                    <span className="material-icons">keyboard_arrow_down</span>
                </AccordionHeader>
                <AccordionContent
                    style={{
                        border: open
                            ? "2px solid rgb(41, 81, 70)"
                            : "1px solid rgb(81, 81, 81)",
                    }}
                >
                    {labelAnswer}
                </AccordionContent>
            </ContainerAccordion>
        </>
    );
};

export default Accordion;

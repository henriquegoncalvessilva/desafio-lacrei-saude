type Race = "negra" | "branca" | "parda" | "indígena" | "amarela";

type Orientation =
    | "lesbica"
    | "gay"
    | "bissexual"
    | "assexual"
    | "pansexual"
    | "heterossexual";

interface Tag {
    label: Race | string;
    icon: Orientation;
}

export interface Professional {
    name: string;
    area: string;
    register: string;
    tags: Tag[];
    location: string;
    schedule: string;
    duration: string;
    adress: string;
    cost: string;
    payment: string;
}

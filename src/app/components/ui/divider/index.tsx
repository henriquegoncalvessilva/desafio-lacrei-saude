import dynamic from "next/dynamic";

export const Divider = dynamic(() => import("./style"), { ssr: false });

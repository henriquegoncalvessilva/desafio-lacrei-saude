import Image from "next/image";
import React from "react";

type AvatarProps = React.HTMLAttributes<HTMLElement> & {
    imageURL: string;
};

const Avatar = ({ imageURL, ...rest }: AvatarProps) => {
    return (
        <>
            <Image
                src={`/assets/${imageURL}.jpg`}
                style={{ borderRadius: "50%", flexShrink: "0" }}
                width={56}
                height={56}
                {...rest}
                alt="Avatar do(a) profissional de saúde"
            />
        </>
    );
};

export default Avatar;

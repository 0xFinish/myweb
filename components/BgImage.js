import Image from "next/image";
import bgImage from "../public/images/Stadion.png";
import React from "react";

export function BgImage() {
  return (
    <div>
      <Image
        alt="bgImage"
        src={bgImage}
        placeholder="blur"
        className="fixed -z-10"
        priority={true}
      ></Image>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";

import ImageModal from "./ImageModal";

const ShowImage = ({ alt, src, extraStyle }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={extraStyle} onClick={() => setIsOpen(true)}>
        <Image
          src={src}
          alt={alt}
          className={`object-cover cursor-pointer ${extraStyle}`}
        />
      </div>
      <ImageModal
        alt={alt}
        src={src}
        isOpen={isOpen}
        onCancel={() => setIsOpen(false)}
      />
    </>
  );
};

export default ShowImage;

"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import type { Slide } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export interface GalleryImage {
  src: string;
  width: number;
  height: number;
  alt?: string;
}

interface PhotoGalleryMasonryProps {
  images: GalleryImage[];
}

export default function PhotoGalleryMasonry({
  images,
}: PhotoGalleryMasonryProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);

  const slides: Slide[] = images.map((img) => ({
    src: img.src,
    width: img.width,
    height: img.height,
    alt: img.alt,
  }));

  return (
    <>
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 p-4">
        {images.map((img, i) => (
          <div
            key={img.src}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className="mb-4 block w-full overflow-hidden rounded-xl break-inside-avoid hover:opacity-90 transition cursor-pointer"
          >
            <Image
              src={img.src}
              alt={img.alt ?? ""}
              width={img.width}
              height={img.height}
              className="w-full h-auto object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1320px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={slides}
        plugins={[Fullscreen]}
      />
    </>
  );
}

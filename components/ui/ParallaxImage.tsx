"use client";
import React, { useRef, useEffect } from "react";
import Image, { ImageProps } from "next/image";

interface ResponsiveImages {
  mobile?: string;
  tablet?: string;
  desktop?: string;
  ultrawide?: string;
}

interface ParallaxImageProps extends Omit<ImageProps, "ref" | "src"> {
  intensity?: number; // How strong the parallax effect is
  className?: string;
  src?: string; // Single image (backward compatibility)
  responsiveImages?: ResponsiveImages; // New responsive images option
}

const STATIC_BLUR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAn8B9p6k9wAAAABJRU5ErkJggg==";

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  intensity = 0.3,
  className = "",
  src,
  responsiveImages,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const scrollY = window.scrollY;
        containerRef.current.style.transform = `translateY(${scrollY * intensity}px)`;
      }
      rafRef.current = 0;
    };
    const handleScroll = () => {
      if (!rafRef.current) rafRef.current = window.requestAnimationFrame(update);
    };
    window.addEventListener("scroll", handleScroll);
    // Initial position
    update();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [intensity]);

  // If using responsive images, render multiple images with CSS media queries
  if (responsiveImages) {
    return (
      <div
        ref={containerRef}
        className={`will-change-transform ${className}`}
      >
        {/* Mobile image */}
        {responsiveImages.mobile && (
          <Image
            {...props}
            src={responsiveImages.mobile}
            className="object-cover object-center md:hidden"
            quality={100}
            sizes="100vw"
            placeholder="blur"
            blurDataURL={STATIC_BLUR}
          />
        )}

        {/* Tablet image */}
        {responsiveImages.tablet && (
          <Image
            {...props}
            src={responsiveImages.tablet}
            className="object-cover object-center hidden md:block lg:hidden"
            quality={100}
            sizes="100vw"
            placeholder="blur"
            blurDataURL={STATIC_BLUR}
          />
        )}

        {/* Desktop image */}
        {responsiveImages.desktop && (
          <Image
            {...props}
            src={responsiveImages.desktop}
            className="object-cover object-center hidden lg:block xl:hidden"
            quality={100}
            sizes="100vw"
            placeholder="blur"
            blurDataURL={STATIC_BLUR}
          />
        )}

        {/* Ultrawide image */}
        {responsiveImages.ultrawide && (
          <Image
            {...props}
            src={responsiveImages.ultrawide}
            className="object-cover object-center hidden xl:block"
            quality={100}
            sizes="100vw"
            placeholder="blur"
            blurDataURL={STATIC_BLUR}
          />
        )}

        {/* Fallback if no specific images provided */}
        {!responsiveImages.mobile && !responsiveImages.tablet && !responsiveImages.desktop && !responsiveImages.ultrawide && (
          <Image
            {...props}
            src={src || ""}
            className="object-cover object-center"
            quality={100}
            sizes="100vw"
            placeholder="blur"
            blurDataURL={STATIC_BLUR}
          />
        )}
      </div>
    );
  }

  // Fallback to single image (backward compatibility)
  return (
    <div
      ref={containerRef}
      className="will-change-transform"
    >
      <Image
        {...props}
        src={src || ""}
        className={className}
        quality={100}
        sizes="100vw"
        placeholder="blur"
        blurDataURL={STATIC_BLUR}
      />
    </div>
  );
};

export default ParallaxImage; 
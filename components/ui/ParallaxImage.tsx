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

// Dark blur placeholder to avoid a light flash on first paint.
const STATIC_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSI5IiB2aWV3Qm94PSIwIDAgMTYgOSI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agc3RvcC1jb2xvcj0iIzBhMGEwYSIgb2Zmc2V0PSIwIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzE1MTUxNSIgb2Zmc2V0PSIxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjkiIGZpbGw9InVybCgjZykiLz48L3N2Zz4=";

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
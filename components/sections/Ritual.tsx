"use client";

import Button from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Ritual = () => {
  return (
    <section className="bg-surface py-26">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 relative">
          <div className="z-10 p-4 md:p-12 flex flex-col justify-between gap-16 md:gap-4">
            <div className="z-10">
              <h2 className="heading-2 mb-4 text-primary">Good Haircuts. Good Company.</h2>
              <p className="text-foreground/50">
                Come in, have a seat, and tell us what you’re after. Whether
                you’re here for your usual cut or ready to try something new,
                we’ll talk it through with you first.
              </p>
              <p className="text-foreground/50 mt-2 font-heading italic">
                Take a look around the shop and meet the team.
              </p>
            </div>
            <div className="z-10 w-full grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-heading text-primary">30</span>
                <p className="heading-6-italic">Years of Combined Team Experience</p>
              </div>
              <a
                href="https://share.google/sffdie67FCLj8pfgB"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rated 5 out of 5 with over 300 Google reviews"
                className="flex flex-col rounded-sm transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <span className="text-2xl lg:text-3xl font-heading text-primary">5.0</span>
                <p className="heading-6-italic">300+ Google Reviews</p>
              </a>
            </div>
            {/* CTA Button */}
            <div className="md:mt-10">
              <Link
                href="https://www.fresha.com/book-now/house-of-havana-barbershop-xcwtdh26/all-offer?share=true&pId=3102757"
                target="_blank"
              >
                <Button variant="primary" size="default">
                  Book Your Experience
                  <ChevronRight
                    className="stroke-background"
                    height={16}
                    width={16}
                  />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[600px]">
              <div className="relative z-10 w-full aspect-video overflow-hidden [&_.yt-lite]:w-full [&_.yt-lite]:h-full">
                <LiteYouTubeEmbed
                  id="fLzrkx_oxq8"
                  title="House Of Havana Ritual"
                  wrapperClass="yt-lite bg-black"
                  autoplay
                  webp
                  poster="maxresdefault"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ritual;

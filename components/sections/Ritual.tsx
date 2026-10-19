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
            <div className="z-0 absolute w-[240px] h-[350px] bg-gradient-to-b from-transparent to-foreground/3 top-0 left-0"></div>
            <div className="z-10">
              <h2 className="heading-2 mb-4 text-primary">A Good Cut. Time Well Spent.</h2>
              <p className="text-foreground/50">
                A great haircut should suit you and feel easy to wear. We take the time to understand your hair, your style, and how much time you want to spend getting ready.
              </p>
              <p className="text-foreground/50 mt-2 font-heading italic">
                Tell us what you have in mind. We can work out the details together.
              </p>
              <p className="text-foreground/50 mt-2">
                Whether you are here for a skin fade, a beard trim, or your usual cut, you can settle in knowing your barber is paying attention to the details.
              </p>
              <p className="text-foreground/50 mt-2 font-heading italic">
                Leave with a fresh look and advice on keeping it that way.
              </p>
            </div>
            <div className="z-10 w-full grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-heading text-primary">20+</span>
                <p className="heading-6-italic">Years of Experience</p>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-heading text-primary">4.9</span>
                <p className="heading-6-italic">Customer Rating</p>
              </div>
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
              <div className="z-0 absolute inset-0 translate-x-2 translate-y-2 bg-gradient-to-b from-transparent to-foreground/3"></div>
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

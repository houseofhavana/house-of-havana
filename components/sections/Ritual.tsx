import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Ritual = () => {
  return (
    <section className="bg-surface py-26">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 relative">
          <div className="p-4 md:p-12 flex flex-col justify-between gap-16 md:gap-4">
            <div className="absolute w-[240px] h-[350px] bg-gradient-to-b from-transparent to-foreground/3 top-0 left-0"></div>
            <div>
              <h3 className="heading-4-italic mb-2">Redefining</h3>
              <h2 className="heading-2 mb-4">THE RITUAL</h2>
              <p className="text-foreground/50">
                At House of Havana, grooming is more than maintenance — it's a
                moment of pause, purpose, and precision. We blend classic
                barbering tradition with modern design sensibility to craft an
                experience tailored for discerning professionals and refined
                tastes. From custom cabinetry and rich leather seating to
                precision cuts and premium aftercare, every detail is designed
                by excellence. This isn't just a barbershop — it's where ritual
                becomes style.
              </p>
            </div>
            <div className="w-full grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <h2>20+</h2>
                <p className="heading-6-italic">Years of Experience</p>
              </div>
              <div className="flex flex-col">
                <h2>4.9</h2>
                <p className="heading-6-italic">Customer Rating</p>
              </div>
            </div>
            {/* CTA Button */}
            <div className="md:mt-10">
              <Link
                href="https://getsquire.com/booking/brands/house-of-havana-barbershop"
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
          <div className="p-5">
            <div className="aspect-square overflow-hidden">
              <div className="relative w-full h-[130%]">
                <Image
                  src="/gallery/IMG_1225.jpeg"
                  // src="/ritual.png"
                  alt="House of Havana Ritual"
                  fill
                  className="absolute -top-28! left-0 w-full h-full object-cover"
                  priority
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

import Button from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Ritual = () => {
  return (
    <section className="bg-surface py-26">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 relative">
          <div className="z-10 p-4 md:p-12 flex flex-col justify-between gap-16 md:gap-4">
            <div className="z-0 absolute w-[240px] h-[350px] bg-gradient-to-b from-transparent to-foreground/3 top-0 left-0"></div>
            <div className="z-10">
              <h3 className="heading-4-italic mb-2">Elevating</h3>
              <h2 className="heading-2 mb-4 text-primary">Men's Grooming</h2>
              <p className="text-foreground/50">
                At House Of Havana, barbering is practiced as a disciplined craft. Every cut is structured with deliberate control — calibrated blends, engineered silhouettes, and proportion-driven detailing.
              </p>
              <p className="text-foreground/50 mt-2 font-heading italic">
                We do not guess. We assess, design, and execute.
              </p>
              <p className="text-foreground/50 mt-2">
                From precise skin fades to sculpted beards and tailored finishing protocols, each service is built around technical accuracy and refined presentation.
              </p>
              <p className="text-foreground/50 mt-2 font-heading italic">
                Excellence is not an upgrade here. It is the baseline.
              </p>
            </div>
            <div className="z-10 w-full grid grid-cols-2 gap-4">
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
                  src="/gallery/webp/IMG_1225.webp"
                  // src="/ritual.png"
                  alt="House Of Havana Ritual"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
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

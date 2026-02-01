import HeroInner from "@/components/sections/HeroInner";
import Button from "@/components/ui/button";
import { mergeSEO } from "@/lib/seo";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata = mergeSEO({
  title: "Book Your Appointment",
  description:
    "Book your next haircut or grooming appointment at House Of Havana in Saskatoon. Choose your barber, service, and time slot online.",
  keywords: [
    "book barber saskatoon",
    "haircut appointment saskatoon",
    "house of havana booking",
  ],
  canonical: "/book",
});

const BookPage = () => (
  <>
    <HeroInner
      title="BOOK YOUR EXPERIENCE"
      supportingText="Ready for your next grooming experience? Book your appointment with one of our expert barbers today."
    />
    <div className="container py-16">
      <div className="text-center mb-8">
        <h2 className="heading-4-italic mb-2">Reserve Your</h2>
        <h2 className="heading-2">APPOINTMENT</h2>
        <p className="text-lg text-foreground/50 max-w-2xl mx-auto mt-4">
          Book online through our secure booking system. Choose your preferred
          barber, service, and time slot. Walk-ins welcome based on
          availability, but appointments are recommended for the best
          experience.
        </p>
      </div>
      <div className="max-w-2xl mx-auto bg-surface p-12 ">
        <div className="text-center space-y-6">
          <div>
            <h3 className="heading-4 mb-2">Online Booking</h3>
            <p className="text-foreground/50 mb-6">
              Use our booking system to schedule your appointment in just a few
              clicks.
            </p>
            <Link
              href="https://getsquire.com/booking/brands/house-of-havana-barbershop"
              target="_blank"
            >
              <Button
                variant="primary"
                size="default"
                className="w-full md:w-auto"
              >
                Book Now
                <ChevronRight
                  className="stroke-background"
                  height={16}
                  width={16}
                />
              </Button>
            </Link>
          </div>

          <div className="border-t border-foreground/10 pt-6 mt-6">
            <h4 className="font-medium mb-3">Need Help?</h4>
            <p className="text-foreground/50 text-sm mb-4">
              Have questions about our services or need assistance with booking?
              We're here to help.
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-foreground/50">Email:</span>{" "}
                <a
                  href="mailto:info@houseofhavana.ca"
                  className="hover:text-foreground transition-colors"
                >
                  info@houseofhavana.ca
                </a>
              </p>
              <p className="text-foreground/50">
                Hours: Mon-Fri 10am-7pm, Sat 9am-6pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default BookPage;

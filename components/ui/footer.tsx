import Link from "next/link";
import Logo from "./logo";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground pt-12 pb-6">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-foreground/10 pb-10">
        {/* About House of Havana */}
        <div>
          <Logo className="mb-4 fill-foreground" width={180} height={71} />
          <hr className="my-4 border-foreground/10" />
          <p className="mt-2 text-foreground/50 text-sm">
            Rooted in classic barbering rituals and elevated by contemporary
            style, we offer a premium experience for the modern gentleman. Our
            expert barbers blend heritage techniques with personal consultation,
            ensuring every visit is more than a cut—it's a ritual.
          </p>
          {/* Social Media Links */}
          <div className="flex gap-3 mt-4">
            <a
              href="https://instagram.com/houseofhavanabarbershop_yxe/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com/HouseOfHavanaBarbershop/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.tiktok.com/@houseofhavana.yxe"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors"
              aria-label="TikTok"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h6 className="heading-6-italic">The</h6>
          <h4 className="heading-5 mb-2 leading-[1]">
            HOUSE <br /> MAP
          </h4>
          <hr className="my-4 border-foreground/10" />
          <div className="space-y-2 grid grid-cols-2 gap-2 gap-y-0">
            <Link
              href="/"
              className="block uppercase text-xs tracking-[0.15em] text-foreground/50 hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block uppercase text-xs tracking-[0.15em] text-foreground/50 hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block uppercase text-xs tracking-[0.15em] text-foreground/50 hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              href="/barbers"
              className="block uppercase text-xs tracking-[0.15em] text-foreground/50 hover:text-foreground transition-colors"
            >
              Barbers
            </Link>
            <Link
              href="/reviews"
              className="block uppercase text-xs tracking-[0.15em] text-foreground/50 hover:text-foreground transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="/contact"
              className="block uppercase text-xs tracking-[0.15em] text-foreground/50 hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
        {/* Saskatoon Location */}
        <div>
          <h6 className="heading-6-italic">Let's</h6>
          <h4 className="heading-5 mb-2 leading-[1] uppercase">
            Get in <br /> Touch
          </h4>
          <hr className="my-4 border-foreground/10" />
          <div className="flex items-start mb-3 text-sm">
            <span className="mr-2 mt-1">
              {/* Location icon */}
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 21s-6-5.686-6-10A6 6 0 0 1 18 11c0 4.314-6 10-6 10z" />
                <circle cx="12" cy="11" r="2.5" />
              </svg>
            </span>
            <span>
              3501 8 St, Unit #110
              <br />
              Saskatoon, SK S7H0W5
            </span>
          </div>
          <div className="flex items-start mb-3 text-sm">
            <span className="mr-2 mt-1">
              {/* Clock icon */}
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
            </span>
            <span>
              Mon-Fri: 10am-7pm
              <br />
              Sat: 9am-6pm
              <br />
              Sun: Closed
            </span>
          </div>
          <div className="flex items-center text-sm mb-3">
            <span className="mr-2">
              {/* Phone icon */}
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <a
              href="tel:306-952-2255"
              className="hover:text-foreground transition-colors"
            >
              306-952-2255
            </a>
          </div>
          <div className="flex items-center text-sm">
            <span className="mr-2">
              {/* Mail icon */}
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <polyline points="22,7 12,13 2,7" />
              </svg>
            </span>
            <a
              href="mailto:info@houseofhavana.ca"
              className="hover:text-foreground transition-colors"
            >
              info@houseofhavana.ca
            </a>
          </div>
        </div>
      </div>
      {/* Bottom row */}
      <div className="container flex flex-col md:flex-row justify-between items-center mt-6 text-xs text-foreground/50 gap-2">
        <div>Copyright &copy; 2025 | House of Havana</div>
        <div className="space-x-4">
          <Link href="/terms-of-use" className="hover:underline">
            Terms of Use
          </Link>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground pt-12 pb-6">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-foreground/10 pb-10">
        {/* About House Of Havana */}
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
              className="w-9 h-9  bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com/HouseOfHavanaBarbershop/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9  bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.tiktok.com/@houseofhavana.yxe"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9  bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors"
              aria-label="TikTok"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@houseofhavanamensgrooming"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9  bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="https://www.yelp.ca/biz/house-of-havana-saskatoon"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9  bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors"
              aria-label="Yelp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-yelp"
                viewBox="0 0 16 16"
              >
                <path d="m4.188 10.095.736-.17.073-.02A.813.813 0 0 0 5.45 8.65a1 1 0 0 0-.3-.258 3 3 0 0 0-.428-.198l-.808-.295a76 76 0 0 0-1.364-.493C2.253 7.3 2 7.208 1.783 7.14c-.041-.013-.087-.025-.124-.038a2.1 2.1 0 0 0-.606-.116.72.72 0 0 0-.572.245 2 2 0 0 0-.105.132 1.6 1.6 0 0 0-.155.309c-.15.443-.225.908-.22 1.376.002.423.013.966.246 1.334a.8.8 0 0 0 .22.24c.166.114.333.129.507.141.26.019.513-.045.764-.103l2.447-.566zm8.219-3.911a4.2 4.2 0 0 0-.8-1.14 1.6 1.6 0 0 0-.275-.21 2 2 0 0 0-.15-.073.72.72 0 0 0-.621.031c-.142.07-.294.182-.496.37-.028.028-.063.06-.094.089-.167.156-.353.35-.574.575q-.51.516-1.01 1.042l-.598.62a3 3 0 0 0-.298.365 1 1 0 0 0-.157.364.8.8 0 0 0 .007.301q0 .007.003.013a.81.81 0 0 0 .945.616l.074-.014 3.185-.736c.251-.058.506-.112.732-.242.151-.088.295-.175.394-.35a.8.8 0 0 0 .093-.313c.05-.434-.178-.927-.36-1.308M6.706 7.523c.23-.29.23-.722.25-1.075.07-1.181.143-2.362.201-3.543.022-.448.07-.89.044-1.34-.022-.372-.025-.799-.26-1.104C6.528-.077 5.644-.033 5.04.05q-.278.038-.553.104a8 8 0 0 0-.543.149c-.58.19-1.393.537-1.53 1.204-.078.377.106.763.249 1.107.173.417.41.792.625 1.185.57 1.036 1.15 2.066 1.728 3.097.172.308.36.697.695.857q.033.015.068.025c.15.057.313.068.469.032l.028-.007a.8.8 0 0 0 .377-.226zm-.276 3.161a.74.74 0 0 0-.923-.234 1 1 0 0 0-.145.09 2 2 0 0 0-.346.354c-.026.033-.05.077-.08.104l-.512.705q-.435.591-.861 1.193c-.185.26-.346.479-.472.673l-.072.11c-.152.235-.238.406-.282.559a.7.7 0 0 0-.03.314c.013.11.05.217.108.312q.046.07.1.138a1.6 1.6 0 0 0 .257.237 4.5 4.5 0 0 0 2.196.76 1.6 1.6 0 0 0 .349-.027 2 2 0 0 0 .163-.048.8.8 0 0 0 .278-.178.7.7 0 0 0 .17-.266c.059-.147.098-.335.123-.613l.012-.13c.02-.231.03-.502.045-.821q.037-.735.06-1.469l.033-.87a2.1 2.1 0 0 0-.055-.623 1 1 0 0 0-.117-.27Zm5.783 1.362a2.2 2.2 0 0 0-.498-.378l-.112-.067c-.199-.12-.438-.246-.719-.398q-.644-.353-1.295-.695l-.767-.407c-.04-.012-.08-.04-.118-.059a2 2 0 0 0-.466-.166 1 1 0 0 0-.17-.018.74.74 0 0 0-.725.616 1 1 0 0 0 .01.293c.038.204.13.406.224.583l.41.768q.341.65.696 1.294c.152.28.28.52.398.719q.036.057.068.112c.145.239.261.39.379.497a.73.73 0 0 0 .596.201 2 2 0 0 0 .168-.029 1.6 1.6 0 0 0 .325-.129 4 4 0 0 0 .855-.64c.306-.3.577-.63.788-1.006q.045-.08.076-.165a2 2 0 0 0 .051-.161q.019-.083.029-.168a.8.8 0 0 0-.038-.327.7.7 0 0 0-.165-.27" />
              </svg>{" "}
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
              House Of Havana Barbershop
              <br />
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
            {/* <a
              href="tel:3069522255"
              className="hover:text-foreground transition-colors"
            >
              306-952-2255
            </a> */}
            <Link href="tel:3069522255" aria-label="Call House Of Havana">
              <span aria-hidden="true">
                306
                <span style={{ display: "none" }}>-</span>
                -952-
                <span style={{ display: "none" }}>-</span>
                2255
              </span>
            </Link>
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
        <div>Copyright &copy; {new Date().getFullYear()} | House Of Havana</div>
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

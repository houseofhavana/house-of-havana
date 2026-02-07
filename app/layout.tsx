import ConditionalCTA from "@/components/sections/ConditionalCTA";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import {
  barbershopSchema,
  breadcrumbSchema,
  jsonLd,
  organizationSchema,
  professionalServiceSchema,
  websiteSchema,
} from "@/lib/schema";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const BigCaslon = localFont({
  src: "../fonts/Big_Caslon_CC.otf",
  variable: "--font-big-caslon",
});

const BigCaslonItalic = localFont({
  src: "../fonts/Big_Caslon_CC_Italic.otf",
  variable: "--font-big-caslon-italic",
});

const Satoshi = localFont({
  src: "../fonts/Satoshi-Medium.otf",
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://houseofhavana.ca"),
  title: {
    default: `House Of Havana | Premium Barber Shop In Saskatoon`,
    template: `%s | House Of Havana`,
  },
  description:
    "Experience premium grooming at House Of Havana, Saskatoon top barber shop for precision cuts, fades, and luxury style crafted by expert barbers.",
  verification: {
    google: "g7w7F4l6X96jUjKFKFMjJC2NqIa3x1u8AdUAcjydNZA",
    other: {
      'facebook-domain-verification': ['3dvp3t6vifs354iw5p2jyqnq5jt91a'],
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "House Of Havana | Premium Barber Shop In Saskatoon",
    description: "Experience premium grooming at House Of Havana, Saskatoon top barber shop for precision cuts, fades, and luxury style crafted by expert barbers.",
    url: "https://houseofhavana.ca",
    siteName: "House Of Havana",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "House Of Havana | Premium Barber Shop In Saskatoon",
    description: "Experience premium grooming at House Of Havana, Saskatoon top barber shop for precision cuts, fades, and luxury style crafted by expert barbers.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <GoogleTagManager gtmId="GTM-5KG58H86" />
      <body
        className={`${BigCaslon.variable} ${BigCaslonItalic.variable} ${Satoshi.variable} antialiased font-sans text-foreground bg-background`}
        suppressContentEditableWarning
      >
        {/* Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(websiteSchema) }}
        />

        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(organizationSchema) }}
        />

        {/* BreadcrumbList Schema */}
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }}
        />

        {/* Local SEO: BarberShop schema */}
        <Script
          id="barbershop-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(barbershopSchema) }}
        />

        {/* ProfessionalService Schema */}
        <Script
          id="professional-service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(professionalServiceSchema) }}
        />

        <Navbar />
        {children}
        <ConditionalCTA />
        <Footer />

        {/* Meta Pixel noscript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=767720532971494&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript>

        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '767720532971494');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* Google Ads gtag.js */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17681636726"
          strategy="afterInteractive"
        />

        {/* Google Ads Conversion + Safe Redirect */}
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17681636726');

            function gtagSendEvent(url) {
              var callback = function () {
                if (typeof url === 'string') {
                  window.location = url;
                }
              };
              gtag('event', 'ads_conversion_Book_appointment_1', {
                'event_callback': callback,
                'event_timeout': 2000,
              });
              return false;
            }

            window.gtagSendEvent = gtagSendEvent;

          `}
        </Script>
      </body>
      <GoogleAnalytics gaId="G-GRNJV6FRBS" />
    </html>
  );
}

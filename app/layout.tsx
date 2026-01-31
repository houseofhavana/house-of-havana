import ConditionalCTA from "@/components/sections/ConditionalCTA";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
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
    "Experience premium grooming at House of Havana, Saskatoon top barber shop for precision cuts, fades, and luxury style crafted by expert barbers.",
  verification: {
    google: "g7w7F4l6X96jUjKFKFMjJC2NqIa3x1u8AdUAcjydNZA",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "House Of Havana | Premium Barber Shop In Saskatoon",
    description: "Experience premium grooming at House of Havana, Saskatoon top barber shop for precision cuts, fades, and luxury style crafted by expert barbers.",
    url: "https://houseofhavana.ca",
    siteName: "House Of Havana",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "House Of Havana | Premium Barber Shop In Saskatoon",
    description: "Experience premium grooming at House of Havana, Saskatoon top barber shop for precision cuts, fades, and luxury style crafted by expert barbers.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K9NH2QXS');
            `,
          }}
        />

        {/* Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "House Of Havana",
              url: "https://houseofhavana.ca/",
              potentialAction: {
                "@type": "SearchAction",
                target: "{search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

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
      </head>
      <body
        className={`${BigCaslon.variable} ${BigCaslonItalic.variable} ${Satoshi.variable} antialiased font-sans text-foreground bg-background`}
        suppressContentEditableWarning
      >
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K9NH2QXS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

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

        {/* ✅ Local SEO: BarberShop schema (CORRECT PLACE) */}
        <Script
          id="barbershop-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BarberShop",
              name: "House Of Havana Barbershop",
              url: "https://houseofhavana.ca",
              telephone: "+1-306-952-2255",
              priceRange: "$$",
              areaServed: { "@type": "City", name: "Saskatoon" },
              address: {
                "@type": "PostalAddress",
                streetAddress: "3501 8 St E, Bay 110",
                addressLocality: "Saskatoon",
                addressRegion: "SK",
                postalCode: "S7H 0W5",
                addressCountry: "CA",
              },
              sameAs: [
                "https://www.instagram.com/houseofhavanabarbershop_yxe/",
                "https://www.google.com/search?q=House+Of+Havana+Barbershop",
              ],
            }),
          }}
        />

        <Navbar />
        {children}
        <ConditionalCTA />
        <Footer />

        {/* GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GRNJV6FRBS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GRNJV6FRBS');
          `}
        </Script>
      </body>
    </html>
  );
}

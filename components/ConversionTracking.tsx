"use client";

import { useEffect } from "react";

type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void;
};

// Track intent only: a booking click is not a completed Fresha appointment.
export default function ConversionTracking() {
  useEffect(() => {
    const trackClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const url = new URL(anchor.href, window.location.href);
      let eventName: string;
      if (url.protocol === "tel:") {
        eventName = "phone_click";
      } else if (
        url.protocol === "https:" &&
        (url.hostname === "fresha.com" || url.hostname === "www.fresha.com")
      ) {
        eventName = "booking_click";
      } else {
        return;
      }

      // Use the existing GA4 property, without changing navigation or Ads tags.
      // Only the page path is sent; query strings and customer details are omitted.
      (window as AnalyticsWindow).gtag?.("event", eventName, {
        send_to: "G-GRNJV6FRBS",
        page_path: window.location.pathname,
        transport_type: "beacon",
      });
    };

    document.addEventListener("click", trackClick, true);
    return () => document.removeEventListener("click", trackClick, true);
  }, []);

  return null;
}

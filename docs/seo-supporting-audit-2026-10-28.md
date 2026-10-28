# SEO supporting work — October 28, 2026

## Public-site baseline

- Homepage, robots.txt, sitemap.xml and sitemap-0.xml returned HTTP 200.
- Robots permits public pages and excludes studio and API routes. No public-page robots block was found.
- The live XML sitemap contained 34 URLs, including six asset endpoints and two noindex legal pages. The dynamically rendered /blogs hub was missing.
- All 28 HTML URLs in that sitemap returned HTTP 200, including all seven service pages. Important service pages had self-referencing canonicals and index/follow directives. Crawlability does not prove Google has indexed a page.
- HTTP homepage redirects to HTTPS. The www hostname returned HTTP 503 in this environment; hosting/domain configuration needs a separate check before treating this as a confirmed public outage.
- The Fresha booking URL returned HTTP 200 and redirected to the House of Havana booking listing. No booking was submitted.
- Existing site integrations: GA4 G-GRNJV6FRBS, GTM GTM-5KG58H86, Google Ads and a Google site-verification tag. Account ownership and received data were not verified.

## Website changes

- Homepage title and description use the agreed local search wording; social metadata now follows them.
- Shared metadata retains one brand suffix, and supports absolute as well as relative Open Graph canonical URLs.
- Drinks menu receives its own title, description and self-referencing canonical instead of inheriting the homepage canonical.
- XML sitemap excludes asset routes and noindex legal pages, and explicitly includes /blogs. Robots still allows crawling legal pages so crawlers can see their noindex directives.
- Replaced unsupported BarberShop schema type with Schema.org HairSalon, retaining the barbershop name and description.
- Added the verified Chamber and BBB directory profile URLs as identity references; these do not claim endorsement, an award or accreditation.
- JSON-LD serialization escapes less-than characters to prevent embedded content from terminating a script element.
- Footer phone is a readable 306-952-2255 and uses tel:+13069522255 without hidden punctuation.
- Added GA4 booking_click and phone_click events using existing GA4 configuration. Capture listens once for nested link clicks, removes its listener on unmount, does not delay navigation, and sends page pathname without query parameters. These represent intent, not confirmed appointments or answered calls. Existing Ads tags are unchanged.

## Verified outside listings and follow-up

Chamber profile:
https://thechamber.saskatoonchamber.com/list/member/house-of-havana-barbershop-ltd-8673.htm

The profile identifies the business and phone, but still shows Monday–Friday 10am–7pm and Sunday closed. Update in the Chamber account to the owner-confirmed Monday–Friday 9am–7pm, Saturday 9am–6pm and Sunday 10am–5pm.

BBB profile:
https://www.bbb.org/ca/sk/saskatoon/profile/barber/house-of-havana-mens-grooming-ltd-0057-1000012510

The opened profile states that the business has applied for accreditation and shows an A- rating. Do not describe the shop as accredited unless approval is confirmed. Its business-started/incorporated dates differ from the owner's public opening date; these may refer to different events and should be reviewed rather than automatically replaced.

## Checks requiring connected accounts or a browser runtime

- Search Console: URL Inspection for homepage and service pages, sitemap submission, indexing report, and a 28-day performance baseline (clicks, impressions, CTR and average position). The verification tag alone does not establish access or submission.
- GA4: confirm receipt in Realtime/DebugView after deployment, review GTM for overlapping measurement, then decide whether booking_click and phone_click should be key events. Fresha completed appointments require separate booking-provider integration.
- Google Business Profile: inspect current owner-managed hours, primary category, service list and booking link. No authenticated Business Profile connection was available.
- Chamber: update the public hours through the account. No directory-management connection was available.
- Mobile/Core Web Vitals: no browser executable was installed, so no Lighthouse score or visual mobile pass is claimed. Source inspection found four responsive hero variants preloaded at quality 100; review with a mobile browser and performance trace before changing image delivery.

## Validation

ESLint, TypeScript and production build/sitemap generation were run. Focused checks cover branded/absolute metadata, booking and phone click classification, nested button clicks, unrelated/imitating-host links, exclusion of URL queries, and listener cleanup. Generated HTML and sitemap checks verify the final output separately. Deployment and authenticated Google checks must be reported separately from source validation.

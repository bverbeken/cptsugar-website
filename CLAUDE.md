# Captain Sugar & The Daddies — Website

## Project goal
A booking-focused band website for Captain Sugar & The Daddies, a Belgian a cappella group.
Primary CTA: get potential bookers to submit the contact form.

## Tech stack
- **Hugo** static site (custom theme, built from scratch)
- **Cloudflare Pages** hosting (domain: captainsugar.be)
- **Cloudflare Worker** for contact form → sends email to booking@captainsugar.be via MailChannels

## Site structure
Single-page with anchor sections (may grow to multi-page if blog is added):
1. Hero — band name, tagline, CTA
2. Over ons — short about blurb
3. Optredens — three booking types (straatoptredens, huiskamerconcerten, persoonlijke evenementen)
4. Repertoire — curated selection grouped by genre/vibe
5. Contact — form (naam, e-mail, bericht) + email/phone fallback
6. Footer — Facebook, Instagram, Spotify

## Language
Dutch. Do not add other languages until explicitly asked.

## Design direction
- Dark backgrounds (near-black, deep charcoal)
- Cool accents — deep slate blue or icy silver
- Bold vintage typography — slab serif or condensed headline, concert poster feel
- Rough/gritty texture — subtle paper/grain overlay
- Photography as atmosphere, big type leads
- Mood: cold, vintage Belgian jazz club poster

## Assets
- Photos: `../cptsugar-website-old/images/` (pic01–05.jpg)
- Band notes (repertoire, gig history): `~/Notes/Captain Sugar and The Daddies/`

## Social links
- Facebook: https://www.facebook.com/cptsugar
- Instagram: https://www.instagram.com/cptsugar
- Spotify: https://open.spotify.com/artist/5rN44UJpeEruH7gCkkv0Jn

## Out of scope (for now)
- Pricing
- Member bios
- Full setlist (50+ songs — too long)
- CMS
- Multi-language

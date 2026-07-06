# DataBloom Africa — Site Content Audit

**Purpose:** Full inventory of exact, verbatim on-site copy for repositioning review.
**Stack:** Vite + React SPA with `react-router-dom` (client-side routing, no Next.js, no server-rendered per-page `<meta>` tags).
**Source scanned:** `src/pages/`, `src/components/`, `index.html`.
**Audit date:** 2026-07-06.

---

## Global SEO / Metadata

The site is a single-page app with **one static HTML shell** (`index.html`). There is no per-route `<title>`/`<meta description>` system (no `react-helmet` or equivalent found in the codebase) — every route serves the same tags below.

```html
<title>DataBloom Africa</title>
```

No `<meta name="description">` tag exists anywhere in the codebase. Favicon: `/favicon.svg`.

**Repositioning note:** Since every route shares identical meta, there is currently zero per-page SEO differentiation (Home, Services, Programs, Donate, etc. all render the same title/description in search results and social shares).

---

## Global Navigation (Navbar)

File: `src/components/Navbar/Navbar.tsx`

Nav labels (in order):
- `HOME` → `/`
- `ABOUT US` → `/about`
- `SERVICES` → `/services`
- `PROGRAMS` → `/programs`
- `DONATE` → `/donations`
- `CONTACT` → `/contact`

Logo alt text: `DataBloom Logo`

*(Note: "Insights" is not in the top nav, but is a routed page and is linked from the Footer.)*

---

## Global Footer

File: `src/components/Footer/Footer.tsx`

**Brand column:**
- Brand name: `DataBloom Africa`
- Tagline: `Cultivating Africa's data potential.`
- Social links: LinkedIn, Instagram, TikTok, YouTube (icon-only, `aria-label`s: "LinkedIn", "Instagram", "TikTok", "YouTube")

**Explore column** (heading: `Explore`):
- Home, About Us, Services, Programs, Insights, Contact Us

**Policies column** (heading: `Policies`):
- Privacy Policy, Terms & Conditions, Refund Policy

**Connect column** (heading: `Connect`):
- `12th Alorwordor Street`
- `GA-539-4038`
- `Dansoman, Accra-Ghana`
- `+233 547 449 078`
- `info@databloomafrica.com`

**Footer bottom:**
- `© {current year} DataBloom Africa. All rights reserved.`

**Legal/org status check:** No mention of "LBG" (Limited by Guarantee), nonprofit status, NGO registration, or company registration number appears anywhere in the footer or codebase.

---

## Route: `/` (Home)

File: `src/pages/Home.tsx` — composes `Hero`, `Gallery`, `Services`, `Programs`, `Insights` (no page-specific copy of its own; all copy lives in the shared components below, which also therefore appear verbatim on this page).

### Hero section (`src/components/Hero/Hero.tsx`)
- H1: `CULTIVATING AFRICA'S DATA POTENTIAL` (rendered on 3 lines: "CULTIVATING" / "AFRICA'S DATA" / "POTENTIAL")
- CTA button: `JOIN US` → links to `/contact`
- Hero image alt text: `Network Graphic`

### Gallery section (`src/components/Gallery/Gallery.tsx`)
- Heading: `GALLERY`
- Content: auto-rotating carousel of 3 videos (Future Code Cohort 1 graduation, Future Code Cohort 2 ad, Peki launch) — no copy text, video-only.

### Services section (`src/components/Services/Services.tsx`, standard variant)
- Heading: `SERVICES`
- 4 service cards (title / description / CTA), identical data used on `/services`:

  1. **Data and AI Training**
     "Building intelligent systems and AI solutions through hands-on, career-focused training that turns learners into builders."
  2. **Corporate Training & Capacity Building**
     "Tailored learning experiences that upskill teams, strengthen internal capabilities, and prepare organisations for a data-driven future."
  3. **Tech Solutions & Product Development**
     "End-to-end technology design and development, turning complex business challenges into smart, scalable digital solutions."
  4. **School & Community Outreach**
     "Grassroots initiatives that introduce young people and underserved communities to the opportunities of technology and digital literacy."

  - Each card CTA: `Learn More` → `/services/{slug}`

### Programs section (`src/components/Programs/Programs.tsx`)
- Heading: `UPCOMING PROGRAMS`
- 3 program cards:

  1. **Future Code Cohort 2**
     "Our flagship Data and AI training programme is back. Built for college-level students ready to move beyond the classroom and start building real-world skills."
  2. **The Intelligent Business Webinar**
     "Join us on 23rd May 2026 for a live session exploring how AI is transforming business and industry across Africa. Secure your spot now."
  3. **DataBloom High School Club**
     "Taking tech to the classroom. Our programme brings data and AI literacy directly to secondary students — sparking curiosity and building confidence."

  - Each card CTA: `Learn More` → `/programs/{slug}`

### Insights section (`src/components/Insights/Insights.tsx`)
- Heading: `LATEST INSIGHTS`
- 3 article cards (date shown as `2026` for all):

  1. **Future Code Cohort 1 Graduation**
     "Our inaugural Future Code cohort crossed the finish line  a proud milestone for DataBloom Africa and a new beginning for a generation of young data and AI builders."
  2. **DataBloom Contribution to Ghana AI Strategy**
     "DataBloom Africa contributed to Ghana's national AI conversation at the MoCDTI and UNESCO AI Readiness Assessment Validation Session  ensuring community-driven perspectives shape Africa's digital future."
  3. **DataBloom Peki High School Club Launch**
     "We brought data and AI literacy to the Volta Region with the launch of the DataBloom Club at Peki Senior High School  our first step in reaching secondary school students across Ghana."

  - Toggle button: `Read More →` / `Read Less ↑` (expands excerpt in place; no dedicated article pages exist)

  *(Note: double-space gaps in the excerpts above — e.g. "finish line  a proud milestone" — are exact as-authored in source, likely a missing em dash or period.)*

---

## Route: `/about`

File: `src/pages/About.tsx` — composes `AboutHero`, `AboutContent`, `Partners`.

### AboutHero (`src/components/AboutHero/AboutHero.tsx`)
- H1: `ABOUT US`

### AboutContent (`src/components/AboutContent/AboutContent.tsx`)

**"About" card:**
> DataBloom Africa is where learning meets building. We are a data and AI training institution and technology solutions partner on a mission to close Africa's digital skills gap, one learner, one community, one solution at a time. From cohort-based training programmes to real-world product development, everything we do is designed to turn potential into impact.

Image alt: `About DataBloom Africa`

**"Who We Are" card:**
> We are a team of builders, educators, and problem-solvers who believe Africa's digital future starts with its people. Our team brings together expertise across machine learning, software engineering, data science, product development, and education; a diverse mix of skills united by a single mission. Together with community champions and industry practitioners, we are turning that conviction into reality.

Image alt: `Who We Are`

**Mission:**
> To bridge Africa's digital skills gap by delivering practical, high-quality data and AI training while building technology solutions that solve real problems for real people.

**Vision:**
> A continent where every African has the knowledge, tools, and opportunity to participate in and lead the digital economy.

**"The Team" section:**
- Heading: `The Team`
- Content: single team photo (`/About/TheTeam.webp`, alt: "The DataBloom Africa Team") — **no individual bios, names, titles, or headshots exist in the codebase.**

### Partners (`src/components/Partners/Partners.tsx`)
- Heading: `Our Partners`
- Content: grid of 5 partner logo image slots (`Partner1.jpg`–`Partner5.jpeg`), no partner names in text, no captions.

**Components that exist in the codebase but are NOT used on the live `/about` route** (`AboutIntro.tsx` and `AboutCommunity.tsx` are built but not imported by `About.tsx`):

- **AboutIntro** (orphaned/unused):
  > At DataBloom Africa, we believe that data isn't just about numbers—it's about the people and communities those numbers represent. Our journey began with a simple mission: to bridge the digital divide and empower the next generation of African builders with the skills to shape their own future.
  >
  > Through our flagship programs and secondary school outreach, we are creating a flourishing ecosystem where curious minds meet cutting-edge technical literacy. From Peki to Accra, we are building a network of innovators who are ready to move beyond the classroom and solve real-world challenges using Data and AI.

- **AboutCommunity** (orphaned/unused):
  - Heading: `Our Community`
  - Subtitle: `Building the future of Data & AI across Africa, one community at a time.`

---

## Route: `/services`

File: `src/pages/ServicesPage.tsx` — renders `PageHero` + `Services` (large variant).

- PageHero title: `OUR SERVICES`
- PageHero subtitle: `Empowering individuals and organizations through data-driven training and innovative technology solutions.`
- Body: same 4 service cards as listed under Home → Services section above (title, description, "Learn More" CTA to each service detail page).

*(A separate, unused `ServicesHero` component exists with identical copy to the PageHero above — not currently wired into any route.)*

---

## Route: `/services/ai-training` — "Data and AI Training"

File: `src/pages/services/AITraining.tsx`, rendered via `ServiceDetail` component.

- Title: `Data and AI Training`
- Subtitle: `From Classroom Theory to Real-World Mastery.`
- Overview (description):
  > Our Data and AI training programmes are designed to bridge the gap between academic learning and industry requirement. We focus on hands-on project building, ensuring that every learner moves beyond just understanding concepts to actually building and contributing to intelligent systems.
- **"What we offer" (features):**
  - Cohort-based learning models
  - Hands-on project development
  - Industry-standard toolsets
  - Expert mentorship from practitioners
  - Career-focused curriculum
- **"Key Benefits":**
  - Direct transition to technical roles
  - Portfolio of real-world AI products
  - Access to a network of industry professionals
  - Verified technical competency
  - Future-proof digital skills
- CTA section heading: `Ready to get started?`
- CTA button (default text): `Contact Us to Learn More` → `/contact`

---

## Route: `/services/corporate-training` — "Corporate Training" (B2B)

File: `src/pages/services/CorporateTraining.tsx`, rendered via `ServiceDetail`.

- Title: `Corporate Training`
- Subtitle: `Empowering Teams for a Data-Driven Future.`
- Overview:
  > We help organizations navigate the complexities of digital transformation by upskilling their workforce. Our tailored capacity-building programmes ensure that your team stays ahead of the curve in data literacy, AI integration, and modern tech workflows.
- **"What we offer" (features):**
  - Customized curriculum for business needs
  - On-site and remote training options
  - Executive AI strategy workshops
  - Industry-specific data literacy
  - Ongoing support and capacity building
- **"Key Benefits":**
  - Increased organizational efficiency
  - Improved data-driven decision making
  - Competitive edge in the digital economy
  - Engaged and upskilled workforce
  - Sustainable tech transformation
- CTA: `Ready to get started?` → `Contact Us to Learn More`

**This is the site's clearest B2B/corporate-language page** — explicit references to "organizations," "your team," "workforce," "executive," "business needs," "organizational efficiency," "competitive edge in the digital economy." No pricing shown; CTA routes to general Contact form (no dedicated "request a quote" or enterprise sales flow).

---

## Route: `/services/tech-solutions` — "Tech Solutions"

File: `src/pages/services/TechSolutions.tsx`, rendered via `ServiceDetail`.

- Title: `Tech Solutions`
- Subtitle: `Innovative Products, African Impact.`
- Overview:
  > We don't just teach technology—we build it. Our tech solutions arm partners with businesses and social enterprises to design, develop, and deploy highly scalable and secured digital products that solve real problems in Africa.
- **"What we offer" (features):**
  - Full-stack product development
  - AI and Machine Learning integration
  - Data pipeline and infrastructure design
  - User-centered UI/UX design
  - Scalable cloud architecture
- **"Key Benefits":**
  - Custom-built solutions for unique challenges
  - Highly scalable and secured infrastructure
  - Local context and community focus
  - Modern tech stack and best practices
  - Continuous product support and growth
- CTA: `Ready to get started?` → `Contact Us to Learn More`

**Client/B2B language:** "partners with businesses and social enterprises" — this is the other page framing DataBloom as a vendor/agency to client organizations, alongside Corporate Training.

---

## Route: `/services/community-outreach` — "Community Outreach"

File: `src/pages/services/CommunityOutreach.tsx`, rendered via `ServiceDetail`.

- Title: `Community Outreach`
- Subtitle: `Democratizing Digital Literacy at Every Level.`
- Overview:
  > At DataBloom Africa, we believe that digital opportunity should be accessible to all. Our grassroots initiatives and high school clubs introduce young minds and underserved communities to the world of data and AI, sparking the next generation of African builders.
- **"What we offer" (features):**
  - High school tech club initiatives
  - Community data literacy workshops
  - Scholarship and mentorship programs
  - Outreach to underserved regions
  - Youth-focused builder cohorts
- **"Key Benefits":**
  - Increased digital inclusion
  - Early exposure to STEM careers
  - Community-led tech transformation
  - Empowerment of the next generation
  - Bridging the rural-urban digital divide
- CTA: `Ready to get started?` → `Contact Us to Learn More`

---

## Route: `/programs`

File: `src/pages/ProgramsPage.tsx` — `PageHero` + `Programs`.

- PageHero title: `OUR PROGRAMS`
- PageHero subtitle: `Practical, hands-on learning paths designed to turn potential into impact.`
- Body: same 3 program cards as listed under Home → Programs section above.

---

## Route: `/programs/future-code` — "Future Code Cohort 2"

File: `src/pages/FutureCode.tsx` (bespoke page, not using the generic `ProgramDetail` component).

**Hero:**
- Eyebrow tags: `FUTURE CODE` · `COHORT 2`
- H1: `Build real AI products. Get real skills. Find a real pathway.`
- Subhead:
  > Future Code is DataBloom Africa's flagship data and AI training program. You learn by building the same products our solutions team ships, not throwaway exercises.
- Stat strip:
  - `3 Aug` — Cohort start
  - `12` — Weeks
  - `30` — Places only
  - `Beginner` — Friendly entry
- CTA: `Apply now` → `/programs/future-code/apply`
- Trust line: `Cohort 1 placed students across various companies.`

**"What you'll learn" section:**
- Overline: `PROGRAM STRUCTURE`
- Section title: `What you'll learn`

  **Phase 01 — Skill Phase** (Weeks 1–4 · 2 sessions/week)
  > Foundations to applied AI, fast:
  - Python & Git
  - FastAPI
  - React & full-stack development
  - LLMs & RAG

  **Phase 02 — Sprint Phase** (Weeks 5–12 · Mentor-supported)
  > Select 3 projects from a 20-project pool. Deliver a live 5-minute justification of your top choice. Then build a real DataBloom pipeline product end-to-end, culminating in Demo Day.

- Track bar: `Track: Full-stack + Applied AI / RAG` · `Entry level: Near-beginner`

**Pricing:** No price is shown on this page (application is free; no Paystack/payment integration on `/programs/future-code` or `/programs/future-code/apply` — payment only appears on the Intelligent Business Webinar page, see below).

---

## Route: `/programs/future-code/apply`

File: `src/pages/FutureCodeApply.tsx` — multi-section application form (Supabase-backed), no payment step.

**Page header:**
- Back link: `← Future Code Cohort 2`
- Tags: `Cohort 2` · `Starts 3 August 2026 · 30 places`

**Form header:**
- H1: `Apply for Future Code Cohort 2`
- Subhead: `Complete all sections below. We review every application carefully.`

**Sidebar note:**
> All fields marked * are required.
> Your data is submitted securely to DataBloom Africa.

**Section labels:** A. Personal details · B. Background · C. Experience & motivation · D. Commitment & logistics · E. Consent

Selected field copy/questions:
- "Full name", "Email address", "Phone number (WhatsApp)" (hint: "Used for cohort communications via WhatsApp."), "Date of birth", "Gender", "Location (City, Region)"
- "Highest level of education", "Current status", "Institution / Employer (optional)", "How did you hear about Future Code?"
- "Prior coding experience", "Languages / tools you've touched (optional)"
- "Why do you want to join Future Code?" (min. 50 words), "What would you like to build or learn?"
- "Can you commit to the full 12 weeks (3 August start)?", "Can you attend 2 sessions/week in the Skill Phase?", "Do you have reliable internet and a laptop?"
- Consent checkboxes: "I confirm the information provided is accurate.", "I consent to DataBloom contacting me about my application.", "I'd like to receive DataBloom updates (newsletter, events). (optional)"

**Submit button:** `Submit application` (loading state: `Submitting…`)
**Submit note:** `Only qualified applicants will be contacted for an interview.`

**Success screen:**
- Heading: `Application received.`
- Body:
  > Thanks for applying to Future Code Cohort 2. We review every application carefully, and only qualified applicants will be contacted for an interview, by email or WhatsApp. Places are limited to 30, so early applicants are prioritized. Check your inbox for a confirmation email.
- Link back: `← Back to Future Code`

---

## Route: `/programs/intelligent-business` — "Intelligent Business Webinar" (B2B / paid)

File: `src/pages/IntelligentBusiness.tsx`, rendered via `ProgramDetail`.

- Title: `Intelligent Business Webinar`
- Subtitle: `Transforming Industry with Artificial Intelligence.`
- Overview:
  > The Intelligent Business Webinar is designed to provide a comprehensive exploration of how artificial intelligence is transforming the business landscape across Africa. Bringing together industry leaders, tech innovators, and forward-thinking professionals, the webinar offers practical insights tailored for entrepreneurs, corporate decision-makers, and growth-driven individuals.
- Details table:
  - Date: `May 23rd, 2026`
  - Time: `12:00 PM GMT`
  - Platform: `Online`
  - Certification: `Available upon completion`
- **"What you will learn:"**
  - Practical AI implementation for SMEs.
  - Cost-effective data strategies for growing businesses.
  - Navigating the legal and ethical landscape of AI in Ghana and beyond.
  - Case studies of successful AI integration in African industries.
  - Closing line: "Don't miss this opportunity to gain a competitive edge in the rapidly evolving digital economy."
- **CTA type:** `notify` — button reads **`Registration Closed`** (disabled), i.e. registration for this webinar is currently closed on the live site.
- **Pricing (in code, currently inactive since registration is closed):**
  - Price: `GHS 87` (original price `GHS 200`, shown with an "Early Bird Discount" badge)
  - Payment inscription: "Your payment will be used to help High school and college Students in Data Training"
  - Registration form field: "Includes access link and digital resources."
  - CTA note default (used for `pay`/`register` types): "Secure your spot today. For group bookings, please contact us directly." — this specific page overrides with the "notify" copy: "Applications are not yet open. Registration link will be sent to your email once live." *(Note: this fallback string is a slight mismatch with the actual "Registration Closed" button state — see Repositioning Notes.)*
- Sidebar help card: `Need Help?` / "Contact our support team for any questions regarding this program." / `Contact Support`

**Note:** A `LeadGate` component (email/phone/name capture gate, copy: "Intelligent Business Webinar" / "Enter your details to access the webinar page. We'll keep you updated on registration and event details." / button "Access the Page →" / "We respect your privacy. No spam, ever.") exists in the codebase but **is not imported/used anywhere** — it does not currently gate this or any route.

**Corporate/B2B language:** "corporate decision-makers," "entrepreneurs," "growth-driven individuals," "SMEs," "group bookings" — this is the most explicitly B2B-flavored program page.

---

## Route: `/programs/high-school-club` — "DataBloom High School Club"

File: `src/pages/HighSchoolClub.tsx`, rendered via `ProgramDetail`.

- Title: `DataBloom High School Club`
- Subtitle: `Inspiring the next generation of African tech leaders.`
- Overview:
  > Our High School Club initiative brings data literacy and AI fundamentals directly to the classroom. We believe that curiosity sparked at an early age is the foundation for Africa's future technology.
- Details table:
  - Impact Area: `Secondary Education`
  - Focus: `Building solutions that serve society`
  - Regions: `National (Starting with Volta Region)`
  - Launch Event: `Peki Senior High School`
- **"The Peki Launch: Design Thinking in Action"**
  > During our recent launch at Peki, students were introduced to the core concepts of **Design Thinking** and **Prompt Engineering**. Instead of just learning theory, students were assisted to:
  - Identify real-world challenges unique to their communities.
  - Ideate innovative solutions using data-driven insights.
  - Build impressive mockup prototypes to visualize their tech solutions.
  >
  > The energy in the room proved that our youth are not just consumers of technology, but its future architects. We look forward to replicating this model in schools across the continent.
- **CTA type:** `link` — button reads `Partner with the Club` → `/contact`
- CTA note: "Interested in bringing DataBloom to your school? Let's discuss how we can collaborate."

---

## Route: `/insights`

File: `src/pages/InsightsPage.tsx` — `PageHero` + `Insights`.

- PageHero title: `INSIGHTS & UPDATES`
- PageHero subtitle: `Stay informed with the latest trends in data, AI, and community tech initiatives.`
- Body: same 3 insight cards as listed under Home → Insights section above.

---

## Route: `/donations`

File: `src/pages/Donations.tsx`.

- PageHero title: `Support Africa's Data Future`
- PageHero subtitle: `Your investment today fuels the tech breakthroughs of tomorrow.`

**"Why Donate?"**
> At DataBloom Africa, we believe that data literacy is the baseline for future sovereignty. Your contributions go directly into community outreach, expert training, and providing high-quality tech infrastructure to the youth who need it most.

**Payment section:**
- Badge: `🔒 Secure Payments via Paystack`
- Heading: `Ready to Make a Difference?`
- Subtext: `We accept all local and international payment methods including:`
- Payment methods listed: `MTN MoMo`, `Telecel Cash`, `Visa / Mastercard`, `Bank Transfer`
- CTA button: `Donate with Paystack`
- Disclaimer: `*By clicking above, you will be redirected to our secure Paystack portal to complete your transaction safely.`

**Note:** No donation tiers, suggested amounts, or nonprofit/tax-deductibility language appear on this page — it positions giving as an "investment," not a charitable/tax-deductible donation.

---

## Route: `/contact`

File: `src/pages/Contact.tsx`.

- PageHero title: `Get In Touch`
- PageHero subtitle: `Have questions or want to partner with us? We'd love to hear from you.`

**Form:**
- Heading: `Send us a Message`
- Fields: Full Name, Email Address, Subject, Message
- Submit button: `Send Message` (loading: `Sending...`)
- Success state: `Message Sent!` / "Thank you for reaching out. We'll get back to you shortly."

**Contact info panel:**
- `Visit Us`: `12th Alorwordor Street` / `GA-539-4038` / `Dansoman, Accra-Ghana`
- `Call Us`: `+233 547 449 078`
- `Email Us`: `info@databloomafrica.com`
- `Follow Us`: links to LinkedIn, Instagram, YouTube

---

## Route: `/privacy-policy`

File: `src/pages/PrivacyPolicy.tsx`.

- H1: `Privacy Policy`
- Effective Date: `May 2, 2026`
- Opens: "DataBloom Africa ("we," "our", "us") is committed to protecting your privacy and ensuring that your personal data is handled in a safe and responsible manner."
- 14 numbered sections: Introduction; Information We Collect; How We Collect Information; How We Use Your Information; Legal Basis for Processing; Data Sharing and Disclosure; Data Retention; Data Security; Your Rights; Cookies Policy; Third-Party Links; International Data Transfers; Changes to This Policy; Contact Us.
- Legal basis cited throughout: **Data Protection Act, 2012 (Act 843)** (Ghana), and references to the **Data Protection Commission**.
- Contact footer: `DataBloom Africa` / `info@databloomafrica.com` / `Location: Ghana`

**No mention of LBG, nonprofit/NGO status, or a company registration number** anywhere in this policy.

---

## Route: `/terms-conditions`

File: `src/pages/TermsConditions.tsx`.

- H1: `Terms of Service`
- Effective Date: `May 2, 2026`
- **Section 2, "About DataBloom Africa":**
  > DataBloom Africa is a youth-driven initiative focused on empowering individuals with practical skills in:
  - Data analytics
  - Artificial intelligence
  - Digital literacy
  > Our services include training programs, webinars, mentorship, and digital innovation projects.

  *(This is the closest thing on the site to an "about the organization / legal status" statement — it self-describes as a "youth-driven initiative," not as a registered company, LBG, or NGO.)*
- **Eligibility (Section 3):** "You must be at least 14 years old"; "If under 18, participation may require parental or guardian consent."
- **Payments (Section 8):** "For paid programs: Fees will be clearly communicated before enrollment; Payment confirms your participation; Payment methods and timelines will be specified."
- **Programs and Participation (Section 6):** "While we aim to provide valuable outcomes, we do not guarantee employment, certification, or specific results."
- **Governing Law (Section 14):** "These Terms shall be governed by the laws of **Ghana**, including relevant provisions under the **Data Protection Act, 2012 (Act 843)** where applicable."
- Contact footer: `DataBloom Africa` / `info@databloomafrica.com` / `Location: Ghana`

---

## Route: `/refund-policy`

File: `src/pages/RefundPolicy.tsx`.

- H1: `Refund Policy`
- Effective Date: `May 2, 2026`
- 12 numbered sections covering: General Refund Principles; Eligibility (before/after program start, after materials access); Non-Refundable Situations; Cancellation/Rescheduling (by DataBloom vs. by participant); Special Cases (partial refunds/credits); Refund Process; Processing Time; Fraud and Abuse; Relationship with Other Policies; Changes; Contact Us.
- Key concrete terms:
  - Full refund if requested "at least 5–7 days before" program start and no materials accessed.
  - Refund request must be submitted "within 7 days before program start, or 48 hours after payment (whichever is earlier)."
  - Processing time: "7–14 business days," refunded via "the original payment method."
- Contact footer: `DataBloom Africa` / `info@databloomafrica.com` / `Location: Ghana`

---

## Orphaned / Unused Routes & Components

These exist in the codebase but are **not reachable via any live route** in `src/App.tsx` — worth flagging since they may contain draft/legacy positioning language not currently visible to users:

- **`src/pages/PaymentCallback.tsx`** — not registered in `App.tsx`'s `<Routes>`. Contains copy: "You're Registered!", "Payment Not Completed", "Processing your registration...", etc. (Paystack/"theteller" callback handler for program payments.)
- **`src/components/LeadGate/LeadGate.tsx`** — built but not imported anywhere; would gate a page behind a name/phone/email capture form for "Intelligent Business Webinar."
- **`src/components/AboutIntro/`** and **`src/components/AboutCommunity/`** — built but not imported by `About.tsx` (see `/about` section above for their copy).
- **`src/components/ServicesHero/`** — duplicate of the `/services` PageHero copy, not wired into `ServicesPage.tsx` (which uses the generic `PageHero` component instead).

---

## Cross-Site Pricing & B2B/Client Language Summary

| Page | Pricing shown | Client/B2B language |
|---|---|---|
| `/services/corporate-training` | None (contact-only) | Heaviest B2B framing: "organizations," "your team," "workforce," "executive AI strategy workshops," "organizational efficiency," "competitive edge in the digital economy" |
| `/services/tech-solutions` | None (contact-only) | "partners with businesses and social enterprises" |
| `/programs/intelligent-business` | GHS 87 (was GHS 200, "Early Bird Discount") — registration currently **closed** | "corporate decision-makers," "entrepreneurs," "growth-driven individuals," "SMEs," "group bookings" |
| `/programs/future-code` + `/apply` | Free (no payment step) | Individual learner framing only ("Beginner Friendly entry," "near-beginner") |
| `/donations` | Uncapped/no tiers, Paystack (MTN MoMo, Telecel Cash, Visa/Mastercard, Bank Transfer) | Framed as "investment," not tax-deductible donation |
| All other service pages | None | Consumer/learner framing |

---

## Repositioning Notes (observations, not requested edits)

1. **No per-page SEO/meta differentiation** — single static title across all routes; no descriptions at all.
2. **Org identity is thin and inconsistent**: self-described only once, in the Terms page, as a "youth-driven initiative" — no legal-entity language (LBG/NGO/Ltd), no registration number, no formal nonprofit status claim anywhere, despite running paid corporate training, paid webinars, and a donations page.
3. **Team/bio content is minimal**: `/about` has zero named team bios — only a single group photo and generic "Who We Are" copy.
4. **Two live "voices"**: youth/community-empowerment language (Future Code, High School Club, Community Outreach, Donations) vs. B2B/enterprise language (Corporate Training, Tech Solutions, Intelligent Business Webinar) — these sit side-by-side without a bridging narrative.
5. **Dead/orphaned components** (LeadGate, AboutIntro, AboutCommunity, ServicesHero, PaymentCallback route) contain copy variants that diverge slightly from what's live — worth reconciling or removing during repositioning.
6. **Minor copy defects**: double-space gaps in the 3 Insights excerpts (likely a missing punctuation mark, e.g. "finish line  a proud milestone").

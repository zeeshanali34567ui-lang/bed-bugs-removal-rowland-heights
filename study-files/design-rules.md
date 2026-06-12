
This file contains the strict guidelines, coding practices, and content standards for developing, designing, and maintaining the website. All current and future changes must comply fully with these rules.

---

## 📋 Standard Core Rules

### Rule 1: Never Use Em Dashes (`—`)
* **Strict Guideline**: Under no circumstances should an em dash (`—`) be used in the content or copywriting.
* **Alternatives**: Use standard hyphens (`-`), colons (`:`), commas (`,`), or rewrite the sentence to maintain clean flow.

### Rule 2: Content Preservation During Redesigns
* **Strict Guideline**: When styling, designing, or redesigning any page or component, **never change, rewrite, or add to the core copy/content** unless explicitly requested by the user. 
* **Reasoning**: The underlying text is highly optimized for SEO and readability. The layout and styles must wrap the existing content exactly as it is without altering the words.

### Rule 3: Standardized FAQ Headings & Alignment
* **Layout Rule**: 
  * The heading must be **centered** on the page.
  * It must be accompanied by its standard **short introductory paragraph**, which must also be **centered** directly below the heading.

### Rule 4: Never Use Gradient Colors Site-wide
* **Strict Guideline**: Under no circumstances should gradient colors (`linear-gradient`, `radial-gradient`, Tailwind `bg-gradient-to-...`) be used anywhere on the website.
* **Layout Rule**: All backgrounds, cards, buttons, borders, and visual callouts must use curated, **solid solid colors** (e.g. solid white, solid slates, solid indigo/purple accents).

### Rule 5: FAQ Sections Must Always Be Interactive Accordions
* **Strict Guideline**: The Frequently Asked Questions section on all pages must **always** be styled and developed as an **interactive Accordion** (click a question to expand or collapse its answer).
* **Layout Rule**: Question cards must toggle open and closed cleanly with smooth transitions. The answers should remain hidden by default until a user clicks on the corresponding question.
* **Site-wide Synchronization**: Any visual, styling, or behavioral design changes to the FAQ section must **always be made globally inside the shared `FaqAccordion` component**, ensuring that FAQ designs remain completely identical, synchronized, and consistent across every page on the site.

### Rule 6: Prohibit Pill Badges, Tags, and Status Indicator Chips
* **What is this element**: The element in the screenshot is a **Pill Badge / Chip Subheading** (specifically, subheadings styled with a rounded border/background capsule pill and a pulsing colored status dot, e.g., `"Fandom & Writing Hub"`).
* **Strict Guideline**: **Never** add or use Pill Badges, Tags, or status indicator Chips styled in this capsule pill format anywhere on the website. Sub-headings should use standard elegant typography without pill wrapper frames.

### Rule 7: Never Use Emojis in Headings
* **Strict Guideline**: Emojis (e.g. `❓`, `👤`, `✍️`, etc.) must **never** be used in page titles (H1), section subheadings (H2, H3), card headings, or accordion button headers. All headings must remain clean, professional, and text-only.

### Rule 8: Prioritize Server-Side Rendering (SSR) Structure
* **Strict Guideline**: Always write and design the main pages (`page.tsx`) as **Server Components** (never place `"use client"` at the top level of any page router entry).
* **Layout Rule**:
  * Keep all main metadata declarations, JSON-LD Schema structures, static heading assets, and prose blocks server-side to maximize SEO crawling.
  * Isolate client-side interactions, states, search bars, inputs, or collapsible accordions into dedicated **leaf components** (e.g. `FaqAccordion.tsx`, `BlogListing.tsx`) with the `"use client"` directive, and import them inside the parent Server page.

### Rule 9: Official Site Color Palette & Typography
* **Strict Guideline**: Every page must maintain absolute uniformity in typography styles and standard color schemes. Ad-hoc hex colors or font definitions are strictly prohibited. Always use the predefined Tailwind classes based on the configuration.
* **Standard Typography**:
  * **Heading Font**: `Roboto Slab`, Georgia, serif. Used for all main titles, section headers, and important callouts (using `.font-heading`).
  * **Body Font**: `Inter`, system-ui, sans-serif. Used for paragraphs, buttons, and general text (using `.font-body`).
* **Official Color Palette**:
  * All HTML files must include the following precise colors in their Tailwind config `theme.extend.colors`:
  * **Navy (Primary/Corporate Dark)**
    * `navy`: `#1A2E44` (Default dark background, heavy headings)
    * `navy-light`: `#243B55`
    * `navy-dark`: `#0F1D2F`
  * **Orange (Action/Accent)**
    * `orange`: `#E8600A` (Used for buttons, borders, geometric shapes, and SVGs)
    * `orange-dark`: `#C74F00` (Used for hover states)
  * **Green (Secondary Accent)**
    * `green-accent`: `#2E7D32` (Used sparingly for eco-friendly or specific success indicators)

### Rule 12: Always Use SVGs Instead of Emojis
* **Strict Guideline**: Under no circumstances should text-based emojis (e.g. 🚀, ✨, 🔥) be used in the UI, components, or content layout (excluding user-generated content or outputs).
* **Layout Rule**: Always use proper SVG icons (such as those from the `lucide-react` library) to ensure crisp rendering, consistent styling, and color-matching with the established theme variables.

---

## 📋 Targeted Scope Rules

### Rule 10: Specific and Minimal Code Edits Only
* **Strict Guideline**: Whichever section of whichever page or component is requested to be edited, **ONLY** touch and modify the code corresponding to that specific requested section.
* **Layout Rule**: Do not modify surrounding sections, unrelated files, or global variables unless absolutely necessary for the requested feature to function, ensuring clean, focused changes with zero side effects.

### Rule 13: Strict Separation of Content and Code/Design
* **Strict Guideline**: When tasked with adding or modifying content (text, data, paragraphs), you must **never** alter the underlying design, styling, layout, or component structure unless explicitly asked.
* **Layout Rule**: Preserve existing `className` styles, component logic, and structures exactly as they are. Only inject the new text/content where required.

### Rule 14: Never Use Contact Forms
* **Strict Guideline**: Under no circumstances should HTML `<form>` elements, lead-generation forms, or contact forms be used anywhere on the entire website.
* **Layout Rule**: All call-to-actions must direct users to call the phone number directly. Do not build or display UI for submitting text/email inputs.

### Rule 15: Global and Identical Footer
* **Strict Guideline**: The website footer must be completely identical and global across every single HTML page on the site.
* **Layout Rule**: Do not use page-specific active styles (e.g. `text-white font-semibold`) for links inside the footer. All footer links must use global, relative absolute paths (e.g. `index.html#faqs` instead of `#faqs`) so the footer functions flawlessly regardless of which page the user is currently on.

### Rule 16: Global and Identical Header
* **Strict Guideline**: The website top navbar and main header must be completely identical and global across every single HTML page on the site.
* **Layout Rule**: Do not use page-specific active styles (e.g. `text-brand-500 font-bold`) for links inside the header navigation. This ensures the header is a perfectly reusable component across the entire architecture.

### Rule 17: Modern Corporate Geometric Design Pattern
* **Strict Guideline**: Any new section designs or redesigns must strictly follow the "Modern Corporate Geometric" aesthetic established in the main hero section.
* **Layout Rule**:
  * **Shapes**: Use sharp angles, skewed backgrounds (`skew-x`), and solid offset borders. Avoid heavy rounding (`rounded-3xl`, `rounded-full`) or soft blob shapes.
  * **Colors**: Rely on high-contrast solid colors (Navy, White, Orange). **Never** use gradients (as per Rule 4).
  * **Icons**: Strictly use SVG icons (like Lucide) for visual elements. **Never** use emojis or text characters like '✓' for icons (as per Rule 12).
  * **UI Elements**: Use clean, minimalist UI components (e.g., strong primary solid buttons, and elegant text-only secondary links with hover arrows). Keep the layout uncluttered and highly professional.

### Rule 18: Always Use Clean Slugs/URLs
* **Strict Guideline**: All internal links across the website must use clean, extensionless slugs (e.g., /about, /residential-control) instead of direct file paths (like /pages/about.html or /about.html).
* **Layout Rule**: Rely on the _redirects configuration to map clean root-level slugs to their actual file locations in the repository. Never expose .html extensions or structural directories (like pages/) in the href attributes.

### Rule 19: Semantic Text Case and Ctrl+F Findability
* **Strict Guideline**: Text within headings (H1, H2, etc.) or any body content must always be written in standard Title Case or Sentence case in the raw HTML. **Never hardcode ALL CAPS text in the HTML source**.
* **Layout Rule**: If a design requires capitalized headings, use the CSS class `uppercase` (Tailwind) to achieve the visual effect. This ensures accessibility tools (Screen Readers) pronounce words correctly instead of spelling them out.
* **Avoid Line Breaks in Keywords**: Never insert `<br>` or `<br/>` tags in the middle of important SEO keyword phrases (e.g., inside an H1). Doing so breaks the continuous string, preventing users from finding the exact phrase using the browser's `Ctrl+F` search. Use CSS properties like `max-width`, `padding`, or `word-break` to control line wrapping organically.

### Rule 20: Compact Section Padding for Single-Viewport Viewing
* **Strict Guideline**: Every content section on the website must be designed to fit within a single viewport height whenever possible. Users should not need to scroll to see the full content of a standard section.
* **Layout Rule**:
  * **Hero Sections**: Use `py-12 sm:py-16 lg:py-20` (not `py-24 sm:py-32 lg:py-40`).
  * **Regular Content Sections**: Use `py-10 sm:py-14` (not `py-20 sm:py-28`).
  * **CTA Sections**: Use `py-8 sm:py-10` (not `py-12 sm:py-16`).
  * **Section Heading Margins**: Use `mb-10` (not `mb-16`).
* **Reasoning**: Tight, modern spacing creates a professional feel and improves UX by allowing users to consume each section without scrolling.

### Rule 21: Standard Homepage Section Hierarchy (Generalized for All Local Services)
* **Strict Guideline**: Every local service homepage (e.g., HVAC, Plumbing, Pest Control, Roofing) must strictly follow a consistent section hierarchy to maximize conversions and user flow. Sections should be adapted to the specific niche but maintain this logical order.
* **Layout Rule**: The strict ordered hierarchy is as follows:
  1. **Header Info (Top Bar)**: Contact info, hours, or emergency badge.
  2. **Header (Navbar)**: Logo, main navigation, and primary CTA button.
  3. **Hero Section**: Clear value proposition, local city mention, background image/video, and strong CTA.
  4. **USP Banner (Trust Bar)**: Thin banner highlighting 3-4 unique selling points (e.g., Licensed & Insured, 24/7 Available, Free Estimates).
  5. **About Us / Local Expertise**: Introduction establishing local authority and understanding of regional needs.
  6. **Problem Awareness / Signs You Need Us**: Helping users identify their issue (e.g., Signs of a Leak, Signs of an Infestation).
  7. **Core Services Overview**: Grid or list of primary services offered.
  8. **Why Choose Us**: Company-specific benefits (e.g., Experienced team, Guarantees).
  9. **Our Process / How It Works**: Simple 3-4 step process showing what happens after they call.
  10. **Emergency Services / Fast Response**: Highlighting urgent care capabilities if applicable.
  11. **Common Issues / Types**: Specific problems fixed (e.g., Types of Spiders, Types of Water Damage).
  12. **Service Areas / Target Locations**: Where the problem occurs or the specific neighborhoods served.
  13. **Resources / Prevention Guides**: Helpful tips or DIY advice to build trust.
  14. **Fun Facts / Industry Stats**: Engaging factual statistics to build authority.
  15. **FAQ (Accordion)**: Answering common customer questions.
  16. **Final CTA / Helpline**: A strong concluding call-to-action before the footer.
  17. **Footer**: Links, legal info, NAP (Name, Address, Phone), and copyright.
* **Content Constraint**: The "Fun Facts" or "Stats" section must only contain factual, verifiable industry facts (e.g., "Water damage occurs every 14 seconds") and must **never** contain unverified or false business claims (e.g., "We respond in 2 seconds").


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

### Rule 9: Site-wide Consistency in Fonts, Colors, and Heading Sizes
* **Strict Guideline**: Every page must maintain absolute uniformity in typography styles, standard color schemes, and heading size hierarchies. Ad-hoc font sizing or color definitions are strictly prohibited.
* **Standard Typography & Font Scale**:
  * **Main Page Titles (H1)**: Must use the editorial serif typeface (`fontFamily: "var(--font-serif)"` or `.font-serif`), size `text-4xl sm:text-5xl`, weight `font-extrabold`, color `text-[var(--color-text)]`, and tracking `tracking-tight`.
  * **Primary Sections & FAQ Headings (H2)**: Must strictly use the standard site-wide `.section__h2` style class (fluid serif sizing `clamp(28px, 4vw, 42px)`, line-height `1.15`, letter-spacing `-0.8px`, and font-serif) to match the homepage and generator pages perfectly.
  * **Subheadings / Card Headers (H3)**: Must use standard sans-serif, size `text-lg sm:text-xl`, weight `font-bold`, and color `text-[var(--color-text)]`.
  * **Body Text**: Must use standard sans-serif, size `text-sm sm:text-base`, color `text-[var(--color-text-muted)]`, and relaxed line height `leading-relaxed`.
* **Standard Color Usage**:
  * Ad-hoc hex or HSL values in text are prohibited. Always use standard Tailwind CSS variables: primary text (`var(--color-text)`), secondary/muted text (`var(--color-text-muted)`), and standard eco-green theme highlights (`var(--color-primary)` or `brand` colors).
  * The approved Eco-Green `brand` palette is as follows (must be defined in the Tailwind config of all HTML files):
    * `50`: `#f0fdf4`
    * `100`: `#dcfce7`
    * `200`: `#bbf7d0`
    * `300`: `#86efac`
    * `400`: `#4ade80`
    * `500`: `#22c55e`
    * `600`: `#16a34a`
    * `700`: `#15803d`
    * `800`: `#166534`
    * `900`: `#14532d`
    * `950`: `#052e16`

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

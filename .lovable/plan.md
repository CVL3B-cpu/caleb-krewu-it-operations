# Add an About Me page

## Goal
Create a dedicated `/about` route that introduces Caleb, moves the portrait photo there, and houses the summary stats, professional profile, toolkit and core-capability sections currently living below the home-page hero.

## What will change

### 1. New About page (`src/routes/about.tsx`)
- Route: `/about` with its own `head()` metadata (title, description, og tags).
- Hero area containing:
  - The requested about-me text.
  - The circular portrait photo moved from the home-page hero.
- Sections moved from the home page:
  - Stats grid
  - Professional Profile + Toolkit card
  - Core Capability / Expertise grid
- Reuse existing components: `Nav`, `Reveal`, `SectionHeading`, `MagneticButton`, `TypedText` where appropriate.
- Keep the same glass-card, gradient and hover-effect styling.

### 2. Home page (`src/routes/index.tsx`)
- Remove the portrait photo from the hero.
- Remove the Stats, Profile, Toolkit and Core Capability sections.
- Leave Hero, Experience, Certifications, Education, Contact and Footer.
- Adjust the hero layout so it still feels balanced without the photo.

### 3. Navigation (`src/components/portfolio/Nav.tsx`)
- Add an "About" link pointing to `/about`.
- Keep links to Experience, Certifications, Education and Contact, but make them route-aware:
  - On the home page they remain hash anchors (`#experience`, etc.).
  - On the About page they navigate back to `/#experience`, etc.
- Keep the scroll-progress indicator and glass-morphism behaviour.

### 4. Verification
- Let TanStack Router regenerate `src/routeTree.gen.ts` automatically.
- Check the build output for any route-tree or import errors.
- Confirm both `/` and `/about` render correctly in the preview.

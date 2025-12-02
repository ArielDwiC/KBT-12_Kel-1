# EDUTAX Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern education platforms like Coursera, Udemy, and Khan Academy, with a professional taxation/business learning aesthetic. The design balances credibility with accessibility.

## Core Design Elements

### Typography
- **Primary Font**: Inter or similar geometric sans-serif from Google Fonts
- **Headings**: Bold (700), sizes 2xl-4xl for main headings, xl-2xl for subheadings
- **Body Text**: Regular (400), base to lg sizes for readability
- **Accent Numbers**: Yellow numbered badges (01, 02, etc.) in bold 600-700 weight
- **Navigation**: Medium (500) weight, sm-base sizes

### Color Palette (Extracted from Figma)
- **Primary Navy**: #2B3A7E (headers, navigation, primary buttons, key sections)
- **Accent Yellow**: #FFD700 (numbered badges, CTAs, highlights, hover states)
- **Background**: White (#FFFFFF) and light gray (#F5F5F5, #F9FAFB) alternating sections
- **Text**: Dark navy for headings, #374151 for body text
- **Borders**: Light gray (#E5E7EB) for cards and dividers

### Layout System
- **Container**: max-w-7xl centered with px-4 to px-8
- **Spacing Scale**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., py-12, gap-8, space-y-6)
- **Section Padding**: py-16 on mobile, py-20 to py-24 on desktop
- **Grid System**: 
  - Benefits: 3 columns on desktop (grid-cols-3), 2 on tablet, 1 on mobile
  - Course cards: 2 columns on desktop, 1 on mobile
  - Content sections: Single column max-w-4xl for readability

### Component Library

#### Navigation
- **Top Banner**: Navy background with yellow "Limited Courses - Ends Soon, Join Now" alert bar
- **Header**: White background, logo left, navigation center (Home, Courses, About, FAQ), Sign Up (yellow) + Login buttons right
- **Mobile**: Hamburger menu with slide-out drawer

#### Hero Section
- **Layout**: Full-width section with TAX-themed illustration/graphic on right
- **Content**: Large heading "Know Your Tax, Know Your Future", supporting text, yellow CTA button
- **Background**: Light gradient or solid background (not full-bleed image)

#### Course Cards
- **Structure**: White cards with subtle shadow, rounded corners (rounded-lg)
- **Content**: Course title (bold), difficulty badge (Beginner/Intermediate colored pills), instructor name with avatar, lesson count, "View Course" button
- **Hover**: Slight elevation increase (shadow-lg)

#### Benefits Section
- **Layout**: 6 cards in 3x2 grid
- **Cards**: White background, yellow numbered badge (01-06) top-left, icon, title, description
- **Icons**: Use Heroicons outline style matching the educational theme

#### Course Detail Components
- **Curriculum Module Cards**: Numbered with yellow badges (01, 02, etc.), expandable sections showing lessons
- **Lesson Cards**: White background, lesson title, duration indicator (clock icon + time)
- **Integration Buttons**: Google Drive and Zoom buttons with respective brand colors

#### Authentication Pages
- **Layout**: Centered form (max-w-md), navy blue accent borders
- **Forms**: Clean input fields with labels, yellow submit buttons
- **Social Login**: "Continue with Google" button with Google branding
- **Toggle**: "Already have account? Login" / "Don't have account? Sign Up" links

#### FAQ Section
- **Structure**: Accordion-style expandable questions
- **Styling**: White background cards, chevron icons, smooth expand/collapse transitions

#### Footer
- **Layout**: Navy blue background, white text
- **Content**: Three columns - Contact info (email, phone), Quick links, Social media icons
- **Bottom**: Copyright and legal links

### Images
- **Hero Illustration**: Modern, flat-style TAX/taxation themed illustration (documents, calculator, coins) - positioned right side of hero section
- **Course Thumbnails**: Placeholder images for Brevet A and B courses showing taxation/education imagery
- **No large hero background images** - use illustrations and solid/gradient backgrounds instead

### Interactions & States
- **Buttons**: Yellow background (#FFD700), navy text, rounded-lg, hover darkens slightly, no blur effects
- **Cards**: Subtle hover elevation (shadow-md to shadow-lg transition)
- **Links**: Navy color, underline on hover
- **Form Inputs**: Border highlight to yellow on focus
- **Accordions**: Smooth height transitions (200-300ms)

### Responsive Behavior
- **Desktop (lg+)**: Full multi-column layouts, horizontal navigation
- **Tablet (md)**: 2-column grids reduce to appropriate sizes
- **Mobile (base)**: Single column stacks, hamburger navigation, larger touch targets (min 44px)

### SEO & Performance
- **Semantic HTML**: Proper heading hierarchy (h1, h2, h3), nav, main, section, article tags
- **Meta Tags**: Title, description, OG tags for course pages
- **Loading**: Lazy load course thumbnails, optimize images
- **Accessibility**: ARIA labels on interactive elements, keyboard navigation support, sufficient color contrast

This design prioritizes **professionalism and trust** for an educational taxation platform while maintaining **approachability** through clean layouts and strategic use of yellow accents.
# GenomED - Bioethics Education Platform

**Tagline:** Educating Our Future About Our Genetic Future

GenomED is a fully functional bioethics education website designed for middle and high school students. The platform democratizes bioethics education by providing an engaging space to explore the ethical frontiers of genetics and biotechnology.

## 🎯 Mission

Bioethics matters now more than ever as we are at the cusp of a genetic revolution. As gene editing and biotechnology is democratized, the morality and the limits of such technologies will challenge what is considered natural and our definition of humanity. In the face of such challenges, we need to ensure that everyone are educated members of these discussion and GenomED seeks to facilitate these educational debates.

## 🎨 Design

The website features a **TED-inspired design** with a professional red, white, and black color scheme:
- **Red (#DC2626)**: Primary accent color for CTAs and highlights
- **White (#FFFFFF)**: Clean backgrounds and text
- **Black (#000000)**: Navigation, footers, and strong contrast elements

## 📚 Main Pages

### 1. Home
- **Purpose**: Overview and welcome message introducing GenomED's mission
- **Features**:
  - Hero section with compelling tagline
  - Mission statement explaining why bioethics matters
  - Feature cards highlighting all four main sections
  - Call-to-action buttons to engage users

### 2. Debate Hub
- **Purpose**: Weekly bioethics questions and interactive comment space
- **Features**:
  - 4 curated debate topics with categories (Gene Editing, Genetic Enhancement, Privacy & Data, Healthcare Equity)
  - Interactive comment section with:
    - Post comments
    - Reply to comments
    - Like/upvote functionality
    - Real-time updates
  - Discussion guidelines for respectful engagement
  - Topic cards with engagement metrics

### 3. Science Corner
- **Purpose**: DNA lesson videos and at-home activities
- **Features**:
  - 4 educational video lessons with difficulty levels (Beginner, Intermediate, Advanced)
  - 4 hands-on at-home activities:
    - Build a DNA Model
    - Extract DNA from Fruit
    - Family Trait Survey
    - CRISPR Simulation Game
  - Learning tips for effective study
  - Material lists and time estimates for activities

### 4. Resources
- **Purpose**: Guides, links, and discussion rules
- **Features**:
  - 4 educational guides (PDF, interactive guides, articles, worksheets)
  - 5 curated external links to reputable organizations:
    - National Human Genome Research Institute
    - Khan Academy: Biology & Genetics
    - The Hastings Center
    - yourgenome by Wellcome
    - CRISPR Therapeutics Educational Resources
  - Comprehensive community guidelines and discussion rules
  - Contact information for support

## 🚀 Interactive Features

### Comment Section
- Post new comments on debate topics
- Reply to existing comments
- Like/upvote comments and replies
- Nested reply system
- Real-time UI updates

### Submit Your Question Form
- Floating action button for easy access
- Modal form with fields:
  - Name
  - Email
  - Question category dropdown
  - Question text area (minimum 50 characters)
- Form validation
- Success confirmation message
- Submission guidelines

### Navigation
- Sticky navigation bar with smooth scrolling
- Mobile-responsive hamburger menu
- Active page highlighting
- Footer with quick links

## 🛠️ Technology Stack

- **Framework**: React 18+ with Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion & Tailwind Animate
- **Routing**: Client-side state management (no external router needed)

## 📦 Project Structure

```
genomed/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Navbar.jsx    # Navigation component
│   │   ├── Home.jsx      # Home page
│   │   ├── DebateHub.jsx # Debate Hub page
│   │   ├── ScienceCorner.jsx # Science Corner page
│   │   ├── Resources.jsx # Resources page
│   │   ├── CommentSection.jsx # Interactive comments
│   │   └── SubmitQuestionForm.jsx # Question submission form
│   ├── App.jsx           # Main app component
│   ├── App.css           # Custom styles and theme
│   ├── index.css         # Global styles
│   └── main.jsx          # Entry point
├── index.html            # HTML template
├── package.json          # Dependencies
└── README.md            # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or compatible version
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd genomed
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

### Build for Production

```bash
pnpm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
pnpm run preview
```

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints for tablets and desktop
- Hamburger menu for mobile navigation

### Accessibility
- Semantic HTML
- ARIA labels where appropriate
- Keyboard navigation support
- Focus states for interactive elements

### User Experience
- Smooth transitions and animations
- Hover effects on interactive elements
- Loading states and feedback
- Clear visual hierarchy

### Performance
- Optimized React components
- Lazy loading where applicable
- Efficient state management
- Fast page transitions

## 🎨 Color Palette

```css
/* Primary Colors */
Red: #DC2626 (rgb(220, 38, 38))
Black: #000000 (rgb(0, 0, 0))
White: #FFFFFF (rgb(255, 255, 255))

/* Supporting Colors */
Gray-50: #F9FAFB
Gray-100: #F3F4F6
Gray-600: #4B5563
Gray-800: #1F2937
```

## 📝 Content Guidelines

All content on GenomED follows these principles:
- **Educational**: Scientifically accurate and age-appropriate
- **Engaging**: Interactive and thought-provoking
- **Respectful**: Promotes civil discourse and diverse perspectives
- **Accessible**: Clear language suitable for middle and high school students

## 🤝 Contributing

This is an educational project designed to facilitate bioethics discussions among students. Future enhancements could include:
- Backend integration for persistent data storage
- User authentication and profiles
- Real-time chat features
- Moderation tools for educators
- Analytics dashboard
- Mobile app version

## 📄 License

This project is created for educational purposes.

## 🙏 Acknowledgments

- Inspired by TED's design philosophy
- Built with modern web technologies
- Designed to empower young minds to engage with bioethics

---

**GenomED** - Democratizing bioethics education for middle and high school students.

*Educating our future about our genetic future.*


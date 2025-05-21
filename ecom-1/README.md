# DigitalEdge - Digital Marketing Agency Website

This is a modern, responsive website for **DigitalEdge**, a fictional digital marketing agency. The project is built using React, Vite, TailwindCSS, and Framer Motion, showcasing a professional and visually appealing online presence for the agency.

## Description

DigitalEdge's website aims to attract potential clients by highlighting its services, expertise, and successful case studies. The design is focused on user experience, with smooth animations, a clear navigation structure, and compelling calls to action.

## Features

- **Responsive Design**: Fully responsive layout that adapts to various screen sizes (desktop, tablet, mobile).
- **Modern UI/UX**: Clean, vibrant, and professional user interface with engaging animations and transitions powered by Framer Motion.
- **Component-Based Architecture**: Built with React, ensuring a modular and maintainable codebase.
- **Utility-First CSS**: Styled with TailwindCSS for rapid UI development and customization.
- **Interactive Sections**:
    - **Navigation Bar**: Sticky header with smooth scroll to sections and a mobile-friendly hamburger menu.
    - **Hero Section**: Eye-catching introduction with a strong call to action.
    - **About Us**: Information about the agency, its mission, and key statistics.
    - **Services**: Detailed showcase of the marketing services offered, presented in attractive cards.
    - **Testimonials Carousel**: Interactive carousel displaying client feedback.
    - **Footer**: Comprehensive footer with quick links, contact information, and a newsletter signup form.
- **SEO Friendly**: Basic SEO considerations like semantic HTML and meta tags.

## Technologies Used

- **Frontend**:
    - React 18.2.0
    - Vite (Build Tool & Dev Server)
    - TailwindCSS 3.3.3 (CSS Framework)
    - Framer Motion 10.16.4 (Animations)
    - Lucide React 0.285.0 (Icons)
- **UI Components**: Custom-built components inspired by shadcn/ui principles.
- **Language**: JavaScript (JSX)

## Project Structure

```
digital-marketing-agency/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── ui/             # shadcn/ui inspired components (Button, Card, etc.)
│   │   ├── About.jsx
│   │   ├── Carousel.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── Services.jsx
│   ├── lib/
│   │   └── utils.js        # Utility functions (e.g., cn for classnames)
│   ├── App.jsx             # Main application component
│   ├── index.css           # Global styles and Tailwind directives
│   └── main.jsx            # Entry point of the React application
├── .eslintrc.cjs
├── .gitignore
├── index.html              # Main HTML file
├── package.json
├── postcss.config.js       # PostCSS configuration
├── README.md               # This file
└── tailwind.config.js      # TailwindCSS configuration
└── vite.config.js          # Vite configuration
```

## Setup and Installation

1.  **Clone the repository (if applicable):**
    ```bash
    git clone <repository-url>
    cd digital-marketing-agency
    ```

2.  **Install dependencies:**
    Make sure you have Node.js (version 20 or higher) and npm installed.
    ```bash
    npm install
    ```

## Running the Project

To start the development server:

```bash
npm run dev
```

This will start the Vite development server, typically on `http://localhost:5173`.

To build the project for production:

```bash
npm run build
```

The production-ready files will be generated in the `dist` folder.

To preview the production build locally:

```bash
npm run preview
```

## Customization

-   **Styling**: Modify TailwindCSS classes in the JSX components or update `tailwind.config.js` and `src/index.css` for broader style changes.
-   **Content**: Update text, images, and data directly within the respective JSX components in the `src/components/` folder.
-   **Colors & Theme**: Adjust CSS variables in `src/index.css` for theme colors (e.g., `--brand-purple`, `--brand-blue`).
-   **Images**: Replace placeholder image URLs in components. For new images, use the `<img-replace>` tag as per project constraints.

## Deployment

This project can be deployed to any static site hosting service (e.g., Hostinger, Vercel, Netlify, GitHub Pages). Ensure your build command is set to `npm run build` and the publish directory is `dist`.
If using Hostinger, you can deploy directly via the "Publish" button in the Hostinger Horizons environment.

---

This README provides a comprehensive overview of the DigitalEdge project.

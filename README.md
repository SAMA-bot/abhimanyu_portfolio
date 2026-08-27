# Abhimanyu Banerjee | Portfolio Website

A personal portfolio website for **Abhimanyu Banerjee**, built to present his work, technical interests, experience, and career goals in one place.

The site is intentionally simple, personal, and developer-focused rather than trying to look like a corporate brochure. It also includes a dedicated **Opportunities** page for employment and entry-level career interests.

## ✨ Highlights

- Responsive portfolio layout
- Light / dark theme toggle
- Custom AB logo
- Hero section with GitHub and project CTAs
- Projects sourced from the GitHub account used for the portfolio
- Dedicated **Opportunities** page
- About page covering education, experience, interests, and skills
- Contact page with email, GitHub, and LinkedIn links
- Subtle hover and entrance animations
- Keyboard focus states and reduced-motion support
- Semantic HTML and basic SEO metadata

## 🗂️ Project Structure

```text
portfolio_website/
├── index.html                 # Main landing page
├── style.css                  # Main site styles and theme variables
├── theme.js                   # Light / dark theme toggle
├── project-style.css          # Project-related styling
├── about-style.css            # About page styling
├── contact-style.css          # Contact page styling
├── assets/
│   └── ab-logo.png            # AB logo used throughout the site
├── public/
│   ├── about.html             # About page
│   ├── opportunities.html     # Employment / career opportunities page
│   └── contact.html           # Contact page
└── README.md                  # Project documentation
```

## 🧑‍💻 About

The portfolio presents Abhimanyu as a Computer Science & Engineering (IoT) graduate/student profile with interests across frontend development, AI/ML, cybersecurity, UI/UX, and related areas.

The resume information represented in the site includes experience with **Edunet Foundation** as a Cyber Security Intern and **ACMegrade** as an ML Developer Intern. It also reflects experience and interests around React, Python, C#, machine learning tools, Git/GitHub, Unity, and frontend technologies. fileciteturn2file0L13-L33 fileciteturn2file0L50-L67

## 🚀 Projects

The homepage highlights projects from the GitHub account connected to the portfolio rather than using the earlier tutorial/demo projects.

Featured repositories currently linked from the homepage include:

- **U-skill**
- **Rune Encoder**
- **Calc Machine**
- **Bagels: The Logic Game**
- **Guess the Number Game**

The homepage also provides a link to the full GitHub repository list.

## 🎯 Opportunities

The **Opportunities** page is specifically written from a job-seeker's perspective. It communicates interest in:

- Software Development
- Frontend Development
- AI / ML
- Entry-level employment and internships
- Opportunities to learn, contribute, and grow with a team

The page provides direct paths to the contact page and the project's work section.

## 🎨 Design

The visual system uses the requested dark and light palettes.

### Dark theme

```text
#212121  Background
#323232  Surface
#0D7377  Accent
#14FFEC  Accent highlight
```

### Light theme

```text
#E4F9F5  Background
#30E3CA  Surface
#11999E  Accent
#40514E  Text
```

The theme preference is stored in `localStorage`, so the selected mode persists when the site is revisited.

## 🛠️ Running Locally

No build system or framework is required. This is a static HTML/CSS/JavaScript website.

### Option 1: Open directly

Open `index.html` in a modern web browser.

### Option 2: Use a local server

For a more reliable local development experience, serve the project directory with any simple static server.

For example, with Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## 🌐 Deployment

Because the project is static, it can be deployed to services such as:

- GitHub Pages
- Netlify
- Vercel
- Any static web host

For GitHub Pages, upload the project files to a repository and configure Pages to serve the branch/folder containing `index.html`.

## 📬 Contact

The website provides direct contact links for Abhimanyu through:

- Email
- GitHub
- LinkedIn

The actual contact details are maintained in the site's contact page rather than duplicated throughout this README.

## 📝 Notes

This portfolio is intended to show **real work, current skills, and career direction** without exaggerating experience. The project descriptions and resume information should be kept in sync with the underlying GitHub repositories and current resume as they change.

---

Built with HTML, CSS, and JavaScript.

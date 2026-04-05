# Gururaj Gali Portfolio

A modern, responsive personal portfolio website built with React and Vite for showcasing my profile, skills, projects, resume, and contact details.

## Live Website

GitHub Pages URL:

[https://gururaj-gali.github.io/Gururaj-Resume/](https://gururaj-gali.github.io/Gururaj-Resume/)

## Features

- Light green modern UI
- Fully responsive layout
- Sticky navigation with smooth scrolling
- Home, About, Skills, Projects, Resume, and Contact sections
- Resume download button
- Certifications link
- Contact form that opens email
- GitHub Pages deployment workflow

## Tech Stack

- React
- Vite
- CSS3
- JavaScript

## Project Structure

```text
.
|-- public/
|   |-- GURURAJ_GALI_RESUME.pdf
|-- src/
|   |-- App.jsx
|   |-- data.js
|   |-- main.jsx
|   |-- styles.css
|-- .github/workflows/
|   |-- deploy.yml
|-- index.html
|-- package.json
|-- vite.config.js
```

## Run Locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal, usually:

[http://localhost:5173](http://localhost:5173)

## Build For Production

```bash
npm run build
npm run preview
```

## Deployment

This project is configured for GitHub Pages using GitHub Actions.

The Vite base path is set in `vite.config.js` for this repository:

```js
base: '/Gururaj-Resume/'
```

If you fork this project into another repository, update the base path to match your repo name.

## Customization

You can easily update content in `src/App.jsx`:

- Change personal details
- Add or remove projects
- Update skills and certifications
- Replace contact links

You can update styling in `src/styles.css`.

## Contact

- Email: [galigururaj94@gmail.com](mailto:galigururaj94@gmail.com)
- LinkedIn: [https://www.linkedin.com/in/gururaj-gali](https://www.linkedin.com/in/gururaj-gali)
- GitHub: [https://github.com/Gururaj-Gali](https://github.com/Gururaj-Gali)

## Author

Designed and developed by Gururaj Gali.

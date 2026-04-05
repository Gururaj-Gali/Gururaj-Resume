import { useEffect, useState } from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

const skillGroups = [
  {
    title: 'Programming',
    items: [
      { name: 'Python', level: 90, tag: 'PY' },
      { name: 'SQL', level: 84, tag: 'SQ' },
      { name: 'JavaScript', level: 78, tag: 'JS' },
      { name: 'Java', level: 76, tag: 'JV' },
    ],
  },
  {
    title: 'Web And Frontend',
    items: [
      { name: 'React.js', level: 80, tag: 'RE' },
      { name: 'HTML5', level: 88, tag: 'HT' },
      { name: 'CSS3', level: 85, tag: 'CS' },
      { name: 'Flask', level: 72, tag: 'FL' },
    ],
  },
  {
    title: 'Data And BI',
    items: [
      { name: 'Pandas', level: 86, tag: 'PD' },
      { name: 'Scikit-learn', level: 83, tag: 'SK' },
      { name: 'Tableau', level: 75, tag: 'TB' },
      { name: 'Power BI', level: 78, tag: 'PB' },
    ],
  },
];

const projects = [
  {
    title: 'Predictive Modeling of Power Demand',
    description:
      'Built a forecasting platform that predicts hourly and daily electricity demand using historical energy and weather data.',
    technologies: ['Python', 'Flask', 'JavaScript', 'Machine Learning', 'Time-Series Forecasting'],
    href: 'https://github.com/Gururaj-Gali/Electricity-consumption.git',
  },
  {
    title: 'Butterfly Species Identification',
    description:
      'Created an image classification system using deep learning and computer vision techniques to identify butterfly species with high accuracy.',
    technologies: ['Python', 'CNN', 'Transfer Learning', 'Computer Vision', 'JavaScript'],
    href: 'https://github.com/Gururaj-Gali/Butterfly',
  },
  {
    title: 'Museum Ticket Booking Chatbot',
    description:
      'Developed a chatbot-based booking experience for museum visitors with an interactive React interface and MongoDB-backed ticket flow.',
    technologies: ['React 18', 'JavaScript', 'HTML', 'CSS', 'MongoDB'],
    href: 'https://github.com/Gururaj-Gali/MP.git',
  },
];

const highlights = [
  'Computer Science student at REVA University with a CGPA of 7.54.',
  'Interested in data analysis, machine learning, business intelligence, and practical problem solving.',
  'Comfortable building clean web interfaces, ML workflows, dashboards, and end-to-end student projects.',
];

const certifications = [
  'Python for Data Science - NPTEL (2024)',
  'Power BI - MeVi Technologies LLP (2025)',
  'Agentforce Specialist - Salesforce (2025)',
  'Data Analytics - Deloitte (2026)',
];

const contactLinks = [
  { label: 'Email', value: 'galigururaj94@gmail.com', href: 'mailto:galigururaj94@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/gururaj-gali', href: 'https://www.linkedin.com/in/gururaj-gali' },
  { label: 'GitHub', value: 'github.com/Gururaj-Gali', href: 'https://github.com/Gururaj-Gali' },
  { label: 'Phone', value: '+91 9880357564', href: 'tel:+919880357564' },
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const resumeUrl = `${import.meta.env.BASE_URL}GURURAJ_GALI_RESUME.pdf`;

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.2, 0.35, 0.5, 0.65],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const updateField = (field, value) => {
    setFormState((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio enquiry from ${formState.name || 'a visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`,
    );

    window.location.href = `mailto:galigururaj94@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark">GG</span>
          <span>Gururaj Gali</span>
        </a>

        <nav className="navbar" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              className={activeSection === item.id ? 'nav-link active' : 'nav-link'}
              href={`#${item.id}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy reveal" style={{ '--delay': '0.05s' }}>
            <p className="eyebrow">Aspiring Data Analyst / Machine Learning Enthusiast</p>
            <h1>Gururaj Gali</h1>
            <p className="lead">
              I am a fresher in Computer Science who enjoys turning data into useful insights and
              building thoughtful digital products with clean, practical solutions.
            </p>
            <p className="supporting-copy">
              My focus areas include data analytics, machine learning, dashboarding, and responsive
              web development that solves real-world problems in a simple way.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View Projects
              </a>
              <a className="button secondary" href={resumeUrl} download>
                Download Resume
              </a>
            </div>
          </div>

          <div className="hero-panel reveal" style={{ '--delay': '0.15s' }}>
            <div className="panel-card intro-card">
              <p className="card-label">Current Path</p>
              <h2>Fresher building skills in analytics, ML, and modern web apps</h2>
              <p>
                Motivated to contribute to development teams, learn fast, and build user-friendly
                solutions with strong fundamentals.
              </p>
            </div>

            <div className="stats-grid">
              <article className="stat-card">
                <strong>3+</strong>
                <span>Hands-on projects</span>
              </article>
              <article className="stat-card">
                <strong>4</strong>
                <span>Relevant certifications</span>
              </article>
              <article className="stat-card">
                <strong>7.54</strong>
                <span>CGPA at REVA University</span>
              </article>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading reveal" style={{ '--delay': '0.05s' }}>
            <p className="eyebrow">About Me</p>
            <h2>Starting strong with curiosity, consistency, and a builder mindset</h2>
          </div>

          <div className="about-grid">
            <article className="panel-card reveal" style={{ '--delay': '0.1s' }}>
              <p>
                I am a Computer Science fresher based in Bengaluru with a strong interest in data
                analysis, machine learning, and software development. I enjoy exploring patterns in
                data, building smart applications, and improving how users experience technology.
              </p>
              <p>
                My projects reflect a mix of analytics, ML experimentation, and frontend work. I am
                especially interested in solving practical problems with scalable and easy-to-use
                solutions.
              </p>
            </article>

            <article className="panel-card reveal" style={{ '--delay': '0.18s' }}>
              <p className="card-label">Highlights</p>
              <ul className="simple-list">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading reveal" style={{ '--delay': '0.05s' }}>
            <p className="eyebrow">Skills</p>
            <h2>Technical strengths across programming, analytics, and product building</h2>
          </div>

          <div className="skills-layout">
            {skillGroups.map((group, groupIndex) => (
              <article
                key={group.title}
                className="panel-card reveal"
                style={{ '--delay': `${0.1 + groupIndex * 0.08}s` }}
              >
                <div className="card-top">
                  <h3>{group.title}</h3>
                </div>

                <div className="skills-list">
                  {group.items.map((skill) => (
                    <div className="skill-row" key={skill.name}>
                      <div className="skill-meta">
                        <span className="skill-tag">{skill.tag}</span>
                        <div>
                          <strong>{skill.name}</strong>
                          <p>Practical experience through projects and coursework</p>
                        </div>
                      </div>
                      <div
                        className="progress-bar"
                        aria-hidden="true"
                        style={{ '--value': `${skill.level}%` }}
                      />
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading reveal" style={{ '--delay': '0.05s' }}>
            <p className="eyebrow">Projects</p>
            <h2>Portfolio work focused on prediction, classification, and user-friendly apps</h2>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="project-card reveal"
                style={{ '--delay': `${0.1 + index * 0.08}s` }}
              >
                <div className="card-top">
                  <p className="card-label">Featured Project</p>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.description}</p>
                <a className="button tertiary" href={project.href} rel="noreferrer" target="_blank">
                  View on GitHub
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section resume-section" id="resume">
          <div className="section-heading reveal" style={{ '--delay': '0.05s' }}>
            <p className="eyebrow">Resume</p>
            <h2>Education, certifications, and a downloadable version of my profile</h2>
          </div>

          <div className="resume-grid">
            <article className="panel-card reveal" style={{ '--delay': '0.1s' }}>
              <p className="card-label">Education</p>
              <div className="timeline">
                <div>
                  <strong>REVA University</strong>
                  <p>B.Tech in Computer Science and Engineering | Present | CGPA: 7.54</p>
                </div>
                <div>
                  <strong>Alva&apos;s Pre-University College</strong>
                  <p>PUC | 2022 | 92.00%</p>
                </div>
                <div>
                  <strong>St Joseph English High School</strong>
                  <p>SSLC | 2020 | 89.44%</p>
                </div>
              </div>
            </article>

            <article className="panel-card reveal" style={{ '--delay': '0.18s' }}>
              <p className="card-label">Certifications</p>
              <ul className="simple-list">
                {certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a
                className="button primary resume-button"
                href="https://drive.google.com/file/d/1gWiq1cAP_d3YuwXMHbZldpELjArOKPO6/view?usp=drive_link"
                rel="noreferrer"
                target="_blank"
              >
                View Certifications
              </a>
            </article>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading reveal" style={{ '--delay': '0.05s' }}>
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s connect for internships, projects, and entry-level opportunities</h2>
          </div>

          <div className="contact-grid">
            <article className="panel-card reveal" style={{ '--delay': '0.1s' }}>
              <p className="card-label">Reach Me</p>
              <div className="contact-list">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    className="contact-item"
                    href={item.href}
                    rel={item.label === 'LinkedIn' || item.label === 'GitHub' ? 'noreferrer' : undefined}
                    target={item.label === 'LinkedIn' || item.label === 'GitHub' ? '_blank' : undefined}
                  >
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </a>
                ))}
              </div>
            </article>

            <article className="panel-card reveal" style={{ '--delay': '0.18s' }}>
              <p className="card-label">Quick Message</p>
              <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                  <span>Name</span>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(event) => updateField('name', event.target.value)}
                    placeholder="Your name"
                    required
                  />
                </label>
                <label>
                  <span>Email</span>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(event) => updateField('email', event.target.value)}
                    placeholder="your@email.com"
                    required
                  />
                </label>
                <label>
                  <span>Message</span>
                  <textarea
                    rows="5"
                    value={formState.message}
                    onChange={(event) => updateField('message', event.target.value)}
                    placeholder="Tell me a little about your opportunity or idea"
                    required
                  />
                </label>
                <button className="button primary submit-button" type="submit">
                  Send Via Email
                </button>
              </form>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          Designed & developed by Gururaj Gali <span className="heart-mark">♡</span>
        </p>
        <div className="footer-links">
          <a href="https://github.com/Gururaj-Gali" rel="noreferrer" target="_blank">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/gururaj-gali" rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <a href="mailto:galigururaj94@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  );
}

export default App;

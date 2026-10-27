
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

const skills = [
  { name: "Laravel", level: "Intermediate" },
  { name: "PHP", level: "Development" },
  { name: "MySQL & SQL", level: "Database" },
  { name: "CodeIgniter", level: "Framework" },
  { name: "Python", level: "Programming" },
  { name: "Java & C++", level: "Programming" },
  { name: "Tableau", level: "Intermediate" },
  { name: "HTML, CSS & JavaScript", level: "Web" },
  { name: "Git & GitLab", level: "Version Control" },
  { name: "Postman", level: "API Testing" },
  { name: "Figma", level: "UI/UX Design" },
  { name: "Microsoft Office", level: "Productivity" },
];

const projects = [
  {
    number: "01",
    slug: "talentbloom",
    category: "FINAL YEAR PROJECT",
    title: "TalentBloom",
    subtitle: "School Talent Management System",
    description:
      "A web-based system developed to manage students' academic, sports, leadership and co-curricular achievements, with award categories, points tracking, dashboards and rankings.",
    tags: ["Laravel", "PHP", "MySQL"],
    visual: "talent",
  },
  {
    number: "02",
    slug: "vehicle-registration",
    category: "DATA VISUALISATION",
    title: "Vehicle Registration & Traffic Trends",
    subtitle: "Malaysia, 2020–2026",
    description:
      "Interactive Tableau dashboards presenting vehicle registration and traffic congestion trends to make datasets easier to explore and understand.",
    tags: ["Tableau", "Data Analysis", "Dashboards"],
    visual: "chart",
  },
  {
    number: "03",
    slug: "mental-health-prediction",
    category: "MACHINE LEARNING",
    title: "Mental Health Prediction",
    subtitle: "Employee Mental Health",
    description:
      "A Python machine learning project designed to predict whether employees may need mental health treatment based on the available dataset.",
    tags: ["Python", "Machine Learning", "Data"],
    visual: "future",
  },
  {
    number: "04",
    slug: "bus-ticketing",
    category: "UI/UX DESIGN",
    title: "Bus Ticketing System",
    subtitle: "Cashless Ticketing Prototype",
    description:
      "A Figma prototype exploring a centralised cashless bus ticketing experience, applying user interface, user experience and human-computer interaction principles.",
    tags: ["Figma", "UI/UX", "HCI"],
    visual: "talent",
  },
  {
    number: "05",
    slug: "library-management",
    category: "OBJECT-ORIENTED PROGRAMMING",
    title: "Library Management System",
    subtitle: "Library Records & Borrowing",
    description:
      "A library management application developed using C++ and Java, covering record management, book borrowing, returns and due-date tracking.",
    tags: ["C++", "Java", "OOP"],
    visual: "chart",
  },
];

const galleryImages = [
  { src: "/gallery/photo-1.jpg", size: "tall" },
  { src: "/gallery/photo-2.jpg", size: "short" },
  { src: "/gallery/photo-3.jpg", size: "medium" },
  { src: "/gallery/photo-4.jpg", size: "medium" },
  { src: "/gallery/photo-5.jpg", size: "tall" },
  { src: "/gallery/photo-6.jpg", size: "short" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    const email = "aqilahrodhe@gmail.com";

    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);

      setTimeout(() => {
        setEmailCopied(false);
      }, 2000);
    } catch {
      window.prompt("Copy this email address:", email);
    }
  };

  return (
    <main>
      {/* NAVIGATION */}
      <nav className="shell nav">
        <a href="#home" className="brand" aria-label="Aqilah home">
          a<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact" className="nav-cta">
            Let&apos;s talk <span>↗</span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="shell hero" id="home">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="eyebrow">
            <span className="status-dot" />
            COMPUTER SCIENCE · SOFTWARE ENGINEERING
          </div>

          <p className="hero-kicker">HELLO, I&apos;M</p>

          <h1>
            Nur Aqilah
            <br />
            <span className="gradient-text">Radhiah.</span>
          </h1>

          <p className="hero-description">
            A Computer Science (Software Engineering) graduate from UNITEN
            with a passion for building useful web applications, solving
            problems through technology, and turning data into meaningful
            insights.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button button-dark">
              Explore my work <span>↗</span>
            </a>

            <div className="resume-buttons">
              <a
                className="button button-light"
                href="/documents/resume.pdf"
                download="Aqilah-Resume.pdf"
              >
                Download Resume <span>↓</span>
              </a>
            </div>
          </div>

          <div className="hero-meta">
            <span><i /> UNITEN Graduate</span>
            <span><i /> CGPA 3.88</span>
            <span><i /> Malaysia</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-art"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />

          <div className="art-card">
            <div className="art-card-top">
              <span>PORTFOLIO / 2026</span>
              <span>01—05</span>
            </div>

            <div className="art-monogram">
              A<span>.</span>
            </div>

            <div className="art-card-bottom">
              <span>NUR AQILAH RADHIAH</span>
              <span>SE / DEV</span>
            </div>
          </div>

          <div className="floating-note note-top">
            <span className="mini-spark">✳</span>
            Software Engineering
          </div>

          <div className="floating-note note-bottom">
            Web Development <span>↗</span>
          </div>

          <span className="art-star star-one">✳</span>
          <span className="art-star star-two">✳</span>
        </motion.div>

        <div className="hero-index">SCROLL TO EXPLORE ↓</div>
      </section>

      {/* ABOUT */}
      <section className="section shell" id="about">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>Who I Am?</h2>
          </div>

          <div className="about-grid">
            <div className="about-detail">
              <p>
                I graduated from Universiti Tenaga Nasional (UNITEN) with a
                Bachelor of Computer Science (Software Engineering) (Hons.),
                achieving a CGPA of 3.88. My experience includes software
                development, database management, API integration, software
                testing and data visualisation.
              </p>

              <p>
                During my internship at Infidev Sdn. Bhd., I worked on web
                applications and system improvements based on client
                requirements. I enjoy learning new technologies,
                collaborating with others and approaching technical
                challenges analytically.
              </p>
            </div>

            <div className="expertise-section">
              <div className="expertise-heading">
                <p className="eyebrow">CORE EXPERTISE</p>
              </div>

              <div className="expertise-grid">
                <div className="expertise-box">
                  <span className="expertise-number">01</span>
                  <div className="expertise-content">
                    <span className="expertise-icon">⌘</span>
                    <h3>Web Development</h3>
                  </div>
                </div>

                <div className="expertise-box">
                  <span className="expertise-number">02</span>
                  <div className="expertise-content">
                    <span className="expertise-icon">▤</span>
                    <h3>Database Design</h3>
                  </div>
                </div>

                <div className="expertise-box">
                  <span className="expertise-number">03</span>
                  <div className="expertise-content">
                    <span className="expertise-icon">⌘</span>
                    <h3>API Integration</h3>
                  </div>
                </div>

                <div className="expertise-box">
                  <span className="expertise-number">04</span>
                  <div className="expertise-content">
                    <span className="expertise-icon">✓</span>
                    <h3>Software Testing</h3>
                  </div>
                </div>

                <div className="expertise-box">
                  <span className="expertise-number">05</span>
                  <div className="expertise-content">
                    <span className="expertise-icon">▥</span>
                    <h3>Data Visualisation</h3>
                  </div>
                </div>

                <div className="expertise-box">
                  <span className="expertise-number">06</span>
                  <div className="expertise-content">
                    <span className="expertise-icon">✳</span>
                    <h3>UI/UX Design</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PHOTO GALLERY */}
          <div className="about-gallery" id="gallery">
            <p className="eyebrow">PHOTO GALLERY</p>

            <p className="gallery-description">
              Photo Library — Drag to Browse
            </p>

            <div
              className="gallery-slider"
              onWheel={(event) => {
                if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
                  event.preventDefault();
                  event.currentTarget.scrollLeft += event.deltaY;
                }
              }}
            >
              {galleryImages.map((photo) => (
                <div className="gallery-slide" key={photo.src}>
                  <img
                    src={photo.src}
                    className="gallery-image"
                    draggable={false}
                    alt="Portfolio gallery"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* EXPERIENCE */}
      <section className="section section-tint" id="experience">
        <div className="shell">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <div className="section-heading">
              <p className="eyebrow">02 / EXPERIENCE</p>
              <h2>
                Learning through
                <br />
                <span className="gradient-text">real-world work.</span>
              </h2>
            </div>

            <article className="experience-card">
              <div className="experience-top">
                <div>
                  <p className="experience-label">INTERNSHIP</p>
                  <h3>Software Development Intern</h3>
                  <p className="company">
                    Infidev Sdn. Bhd. · Kuala Terengganu
                  </p>
                </div>

                <span className="date-pill">Jun – Sep 2025</span>
              </div>

              <p className="experience-summary">
                Contributed to web application development and system
                enhancements while gaining practical experience in software
                development workflows, debugging and client requirements.
              </p>

              <ul className="experience-list">
                <li>
                  Developed and enhanced web applications using Laravel,
                  CodeIgniter, PHP, MySQL and WordPress.
                </li>
                <li>
                  Implemented authentication, CRUD functionality, API
                  integrations, shopping cart features and checkout flows
                  using ToyyibPay Sandbox.
                </li>
                <li>
                  Performed debugging, database troubleshooting, routing fixes
                  and API testing with Postman.
                </li>
                <li>
                  Supported UI/UX work using Figma and Elementor, and used
                  Git and GitLab for version control and collaboration.
                </li>
                <li>
                  Participated in client meetings and improved system
                  functionality based on client requirements.
                </li>
              </ul>

              <div className="tag-row">
                <span>Laravel</span>
                <span>PHP</span>
                <span>MySQL</span>
                <span>CodeIgniter</span>
                <span>REST API</span>
                <span>Git / GitLab</span>
                <span>Postman</span>
              </div>
            </article>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section section-dark" id="projects">
        <div className="shell">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <div className="section-heading section-heading-dark">
              <p className="eyebrow">03 / SELECTED PROJECTS</p>
              <h2>
                Ideas made
                <br />
                <span>into projects.</span>
              </h2>
              <p className="heading-description">
                A selection of academic projects exploring software
                development, data analytics, machine learning and user
                experience design.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((project, index) => (
                <Link
                  href={`/projects/${project.slug}`}
                  className="project-card-link"
                  key={project.number}
                >
                  <motion.article
                    className={`project-card ${
                      index === 2 ? "project-card-3" : ""
                    }`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                      duration: 0.5,
                      delay: (index % 3) * 0.1,
                    }}
                  >
                    <div className="project-card-head">
                      <span>{project.category}</span>
                      <span>{project.number} / 05</span>
                    </div>

                    <div className="project-visual">
                      {project.visual === "talent" && (
                        <div className="recipe-mock">
                          <span>STUDENT ACHIEVEMENT PORTAL</span>
                          <strong>
                            Talent
                            <br />
                            Bloom.
                          </strong>
                          <div className="recipe-orb">✳</div>
                          <div className="recipe-line" />
                          <div className="recipe-line" />
                        </div>
                      )}

                      {project.visual === "chart" && (
                        <div className="chart-mock">
                          <div className="chart-top">
                            <span>DATA OVERVIEW</span>
                            <span>2020–2026</span>
                          </div>
                          <div className="chart-bars">
                            <i />
                            <i />
                            <i />
                            <i />
                            <i />
                            <i />
                            <i />
                          </div>
                          <div className="chart-foot">
                            <span>Explore the data</span>
                            <span>↗</span>
                          </div>
                        </div>
                      )}

                      {project.visual === "future" && (
                        <div className="future-mock">
                          <span>PYTHON / MACHINE LEARNING</span>
                          <strong>
                            Data to
                            <br />
                            <span>insight.</span>
                          </strong>
                          <span className="future-cross">✳</span>
                        </div>
                      )}
                    </div>

                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <p className="small-note">{project.subtitle}</p>
                      <p>{project.description}</p>

                      <div className="tag-row">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>

                      <p className="project-card-cta">
                        View project details <span>↗</span>
                      </p>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>

            <p className="small-note" style={{ marginTop: "24px" }}>
              Project visuals are illustrative representations. Source code
              and live demos can be added when public links are available.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SKILLS & CERTIFICATIONS */}
      <section className="section shell" id="skills">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <div className="section-heading">
            <p className="eyebrow">04 / TOOLBOX</p>
            <h2>
              SKILLS &
              <br />
              <span className="gradient-text">TOOLS</span>
            </h2>
          </div>

          <div className="skills-wrap">
            {skills.map((skill) => (
              <div className="skill-chip" key={skill.name}>
                {skill.name}
                <span>{skill.level}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "38px" }}>
            <p className="eyebrow">CERTIFICATIONS</p>
            <ul className="experience-list">
              <li>
                Data Analytics Essentials — Cisco Networking Academy, 2026
              </li>
              <li>
                Foundations of Software Testing and Validation — University
                of Leeds, FutureLearn, 2026
              </li>
              <li>Microsoft AI for ALL — Microsoft & Pepper Labs, 2026</li>
              <li>
                CCNAv7: Introduction to Networks — Cisco Networking Academy,
                2024
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* RESUME / CONTACT CTA */}
      <section className="resume-band">
        <div className="shell resume-inner">
          <div>
            <p className="eyebrow">05 / WHAT&apos;S NEXT?</p>
            <h2>
              Ready for the
              <br />
              next opportunity?
            </h2>
          </div>

          <div className="resume-action">
            <p>
              I&apos;m interested in entry-level opportunities in software
              engineering, software development, web development and data
              analytics.
            </p>

            <a
              className="footer-email"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=aqilahrodhe@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              aqilahrodhe@gmail.com <span>↗</span>
            </a>

            <div className="resume-buttons">
              <a
                className="button button-light"
                href="/documents/resume.pdf"
                download="Aqilah-Resume.pdf"
              >
                Download Resume <span>↓</span>
              </a>
            </div>

            <p className="small-note">
              Get in touch for opportunities and collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" id="contact">
        <div className="shell">
          <div className="footer-grid">
            <div className="footer-column">
              <p className="footer-label">CONTACT ME</p>

              <div className="footer-contact-email">
                <a href="mailto:aqilahrodhe@gmail.com">
                  aqilahrodhe@gmail.com
                </a>

                <button
                  type="button"
                  className="footer-copy"
                  onClick={copyEmail}
                >
                  {emailCopied ? "Copied!" : "copy"}
                </button>
              </div>

              <div className="footer-resume-links">
                <a
                  href="/documents/resume.pdf"
                  download="Aqilah-Resume.pdf"
                >
                  Download PDF Resume
                </a>
              </div>
            </div>

            <div className="footer-column">
              <p className="footer-label">NAVIGATE</p>

              <nav className="footer-nav">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>

            <div className="footer-column">
              <p className="footer-label">FOLLOW ME</p>

              <div className="footer-socials">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              The content of this site belongs to Aqilah and may not be
              reused without permission.
            </p>

            <span>© 2026 Aqilah. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

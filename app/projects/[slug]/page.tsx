
import Link from "next/link";
import { notFound } from "next/navigation";

export const instant = false;

const projectDetails = {
  talentbloom: {
    number: "01",
    category: "FINAL YEAR PROJECT",
    title: "TalentBloom",
    subtitle: "School Talent Management System",
    overview:
      "TalentBloom is a web-based school talent management system designed to centralise students' academic, sports, leadership and co-curricular achievements. It helps organise achievement records, award categories and points in one platform.",
    features: [
      "Student achievement management",
      "Award categories and points tracking",
      "Achievement dashboards and rankings",
      "Academic and co-curricular records",
    ],
    techStack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    github: "",
    demo: "",
    screenshots: [] as string[],
  },

  "vehicle-registration": {
    number: "02",
    category: "DATA VISUALISATION",
    title: "Vehicle Registration & Traffic Trends",
    subtitle: "Malaysia, 2020–2026",
    overview:
      "An interactive Tableau dashboard project exploring vehicle registration and traffic congestion trends in Malaysia. The project presents data visually to make patterns and changes easier to explore.",
    features: [
      "Interactive Tableau dashboards",
      "Vehicle registration trend visualisation",
      "Traffic trend exploration",
      "Visual data exploration",
    ],
    techStack: ["Tableau", "Data Analysis", "Data Visualisation"],
    github: "",
    demo: "",
    screenshots: [] as string[],
  },

  "mental-health-prediction": {
    number: "03",
    category: "MACHINE LEARNING",
    title: "Mental Health Prediction",
    subtitle: "Employee Mental Health",
    overview:
      "A Python machine learning project exploring employee mental health data to predict whether an employee may seek mental health treatment. The project applies data analysis and machine learning techniques to the available dataset.",
    features: [
      "Dataset preparation",
      "Data exploration and analysis",
      "Machine learning prediction",
      "Model evaluation",
    ],
    techStack: ["Python", "Machine Learning", "Data Analysis"],
    github: "",
    demo: "",
    screenshots: [] as string[],
  },

  "bus-ticketing": {
    number: "04",
    category: "UI/UX DESIGN",
    title: "Bus Ticketing System",
    subtitle: "Cashless Ticketing Prototype",
    overview:
      "A Figma prototype exploring a centralised cashless bus ticketing experience. The design applies user interface, user experience and human-computer interaction principles to create a user-focused ticketing journey.",
    features: [
      "Cashless ticketing interface",
      "Ticketing user journey",
      "Figma prototype screens",
      "User-focused interface design",
    ],
    techStack: ["Figma", "UI/UX Design", "Human-Computer Interaction"],
    github: "",
    demo: "",
    screenshots: [] as string[],
  },

  "library-management": {
    number: "05",
    category: "OBJECT-ORIENTED PROGRAMMING",
    title: "Library Management System",
    subtitle: "Library Records & Borrowing",
    overview:
      "A library management application developed using C++ and Java to organise library records and book borrowing activities. The project covers fundamental object-oriented programming concepts.",
    features: [
      "Book record management",
      "Book borrowing and returns",
      "Due-date tracking",
      "Object-oriented programming concepts",
    ],
    techStack: ["C++", "Java", "Object-Oriented Programming"],
    github: "",
    demo: "",
    screenshots: [] as string[],
  },
};

type ProjectSlug = keyof typeof projectDetails;

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!Object.prototype.hasOwnProperty.call(projectDetails, slug)) {
    notFound();
  }

  const project = projectDetails[slug as ProjectSlug];

  return (
    <main className="project-detail-page">
      <nav className="project-detail-nav">
        <Link href="/#projects" className="project-back">
          ← Back to Projects
        </Link>
        <span>PROJECT {project.number} / 05</span>
      </nav>

      <header className="project-detail-hero">
        <p className="eyebrow">{project.category}</p>
        <h1>{project.title}</h1>
        <p className="project-detail-subtitle">{project.subtitle}</p>

        <div className="tag-row">
          {project.techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </header>

      <section className="project-detail-section">
        <p className="eyebrow">01 / PROJECT OVERVIEW</p>
        <h2>About the project</h2>
        <p className="project-detail-body">{project.overview}</p>
      </section>

      <section className="project-detail-section">
        <p className="eyebrow">02 / PROJECT SCREENSHOTS</p>
        <h2>Screenshots & visuals</h2>

        {project.screenshots.length > 0 ? (
          <div className="project-screenshot-grid">
            {project.screenshots.map((image) => (
              <img
                key={image}
                src={image}
                alt={`${project.title} screenshot`}
              />
            ))}
          </div>
        ) : (
          <div className="project-gallery-placeholder">
            <span>✳</span>
            <p>Project screenshots coming soon.</p>
            <small>
              Add your screenshots to the public/projects folder.
            </small>
          </div>
        )}
      </section>

      <section className="project-detail-section">
        <p className="eyebrow">03 / KEY FEATURES</p>
        <h2>What it includes</h2>

        <div className="project-feature-grid">
          {project.features.map((feature, index) => (
            <article className="project-feature-card" key={feature}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{feature}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="project-detail-section">
        <p className="eyebrow">04 / TECH STACK</p>
        <h2>Tools & technologies</h2>

        <div className="project-tech-grid">
          {project.techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </section>

      {(project.github || project.demo) && (
        <section className="project-detail-section">
          <p className="eyebrow">05 / PROJECT LINKS</p>
          <h2>Explore the project</h2>

          <div className="project-detail-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            )}

            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer">
                Live Demo ↗
              </a>
            )}
          </div>
        </section>
      )}

      <footer className="project-detail-footer">
        <Link href="/#projects">← Back to all projects</Link>
      </footer>
    </main>
  );
}

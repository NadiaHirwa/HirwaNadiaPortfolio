import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Agrivoltaic System Data Pilot",
    description: "Built an interactive dashboard using Python and Plotly Dash for data visualization and business intelligence reporting.",
    image: "/projects/project1.png",
    tags: ["Python", "EDA", "Quarto", "Plotly Dash", "SQL"],
    demoUrl: "https://data-pilot-agrivoltaic-system-1.onrender.com/",
    githubUrl: "https://github.com/NadiaHirwa/Agrivoltaic.git",
  },
  {
    id: 2,
    title: "Crime Analysis Dashboard",
    description: "Analyzed crime patterns and case outcomes using Power BI, Python, and SQL, creating interactive dashboards to uncover trends, age-based insights, and reporting efficiencies.",
    image: "/projects/project2.png",
    tags: ["Power BI", "Python"],
    demoUrl: "https://app.powerbi.com/view?r=eyJrIjoiM2JlNmU3MGQtNTk2My00OWY2LTk2OWQtM2RiNzQ2NThjZjJjIiwidCI6ImMxYTMwMDM3LWM0NTYtNDJhMy1hNjQzLWZhYTI4MzFiYjI5NCJ9",
    githubUrl: "https://github.com/NadiaHirwa/Crime-Analysis.git",
  },
  {
    id: 3,
    title: "Population Data Insights",
    description: "Cleaned and analyzed population data with Python and Power BI; created interactive dashboard showing country trends for SDG insights.",
    image: "/projects/project3.png",
    tags: ["Python", "EDA", "SQL", "Power BI"],
    demoUrl: "#",
    githubUrl: "https://github.com/NadiaHirwa/Population-Data-World-Bank-API-.git",
  },
  {
    id: 4,
    title: "Club Management System",
    description: "A Flutter-based club management system for efficient organization and member management.",
    image: "/projects/project4.png",
    tags: ["Dart", "C++", "Vs Code"],
    demoUrl: "#",
    githubUrl: "https://github.com/NadiaHirwa/Club-Management.git",
  },
  {
    id: 5,
    title: "PigHealth Rwanda",
    description: "Web-based system for managing pig health and veterinary services in Rwanda, including inventory, health records, appointments, and reporting, built with React.js, Laravel, and PostgreSQL.",
    image: "/projects/project5.png",
    tags: ["React", "Tailwind Css", "PostgreSQL", "Laravel"],
    demoUrl: "https://pig-health.vercel.app/",
    githubUrl: "https://github.com/NadiaHirwa/Pig-Health.git",
  },
  {
    id: 6,
    title: "YouTube Insights",
    description: " It offers insights into key metrics such as subscriber count, total views, video count, and more, enabling content creators and analysts to monitor and optimize channel performance effectively.",
    image: "/projects/project6.png",
    tags: ["Python", "ETL", "EDA", "Streamlit"],
    demoUrl: "#",
    githubUrl: "https://github.com/NadiaHirwa/YouTube-Channel-Insights.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

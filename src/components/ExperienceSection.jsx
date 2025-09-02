import { Calendar, MapPin, Building2, ExternalLink } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Web Developer & Marketing Assistant",
      company: "Imvunwa business group, Kimironko, Kigali",
      duration: "June 2023 - May 2025",
      description: "Developed and managed Imvunwa's website and digital presence, handled social media, and improved online engagement through content strategies and analytics."
    },
    {
      title: "Software Development Intern",
      company: "kLab, Kigali",
      duration: "December 2024 - July 2025",
      description: "Participated in the Fullstack Web Development program, building web apps with React, React Native, TypeScript, Node.js, and MongoDB, and gained experience in agile teamwork and deployment."
    },
    {
      title: "Embedded System Trainer",
      company: "EdTech, Kicukiro, Kigali",
      duration: "February 2025 - April 2025",
      description: "Trained Advanced Level students in embedded systems, delivering hands-on lessons and guiding IoT and automation projects."
    },
    {
      title: "Embedded Systems Trainee",
      company: "ICT Chamber, Kigali",
      duration: "September 2023 - December 2023",
      description: "Completed intensive training in embedded systems, prototyping IoT solutions and developing embedded applications with Arduino, ESP32, and C/C++."
    },
    {
      title: "Teacher Assistant",
      company: "IEEE, Muhoza, Musanze",
      duration: "November 2020 - June 2021",
      description: "Taught Physics and Mathematics to high school students, helping them improve performance and understand scientific concepts."
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <Building2 className="inline-block h-8 w-8 mr-3 text-primary" />
          Work <span className="text-primary">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/50 to-primary/20 hidden lg:block"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Left side content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="gradient-border p-6 card-hover">
                    <div className="mb-3">
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        {exp.title}
                      </h4>
                      <p className="text-primary font-medium text-sm mb-2">{exp.company}</p>
                      <div className="inline-block bg-muted/50 px-3 py-1 rounded-full text-xs text-muted-foreground">
                        {exp.duration}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full border-2 border-background z-10"></div>
                </div>

                {/* Right side content - empty for alternating layout */}
                <div className="w-full lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://docs.google.com/document/d/1zucWOcCiVARCgp8AAh418OfRCvThRM2ZXfM7qSbfFPI/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button inline-flex items-center gap-2"
          >
            View Full Resume
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

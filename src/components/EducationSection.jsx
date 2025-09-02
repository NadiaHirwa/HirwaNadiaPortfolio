import { GraduationCap, ExternalLink } from "lucide-react";

export const EducationSection = () => {
  const education = [
    {
      title: "University of Rwanda",
      degree: "Bachelor's in Computer and Software Engineering",
      duration: "2022 - 2026",
      description: "Final year student with a focus on software development, data structures, embedded systems and IoT."
    },
    {
      title: "Ecole secondaire saint vincent Muhoza",
      degree: "Advanced Level - Physics, Mathematics, and Computer Science",
      duration: "2018 - 2021",
      description: "Studied physics, mathematics and computer science where I gained a solid foundation in problem-solving, analytical thinking, and programming concepts."
    }
  ];

  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <GraduationCap className="inline-block h-8 w-8 mr-3 text-primary" />
          Education
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="gradient-border p-6 card-hover">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-full bg-primary/10 mt-1">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {edu.title}
                      </h3>
                      <p className="text-primary font-medium">{edu.degree}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="inline-block bg-muted/50 px-3 py-1 rounded-full text-xs text-muted-foreground">
                      {edu.duration}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
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

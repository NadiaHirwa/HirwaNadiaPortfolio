import { Calendar, MapPin, Building2, ExternalLink } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Data Analysis intern",
      company: "kLab, Kigali",
      duration: "Dec 2024 - August 2025",
      description: "I completed intensive data analysis and Python training, working with Excel, Power BI, SQL, Looker Studio, and Plotly Dash. I built interactive dashboards, performed ETL and data cleaning, and created visualizations, while collaborating in an agile environment and using Git for version control."
    },
    {
      title: "Machine Learning trainee",
      company: "AI6, Kigali",
      duration: "July 2025 - Present",
      description: "I gained hands-on experience in data preprocessing, modeling, and evaluation, working on sentiment analysis, neural networks, and multilayer perceptron models in PyTorch."
    },
    {
      title: "Embedded System Trainee",
      company: "STES Group, Kicukiro, Kigali",
      duration: "January 2023 - June 2023",
      description: "Developed IoT-based livestock monitoring solutions for cows and managed social media strategies, using analytics to optimize engagement and align digital efforts with business goals."
    },
    {
      title: "Teacher Assistant",
      company: "IEE, Mukamira, Nyabihu",
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
        
      </div>
    </section>
  );
};

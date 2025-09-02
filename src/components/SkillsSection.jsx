import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Data Analysis
  { name: "Python", level: 80, category: "Data Analysis" },
  { name: "SQL", level: 80, category: "Data Analysis" },
  { name: "Dax", level: 75, category: "Data Analysis" },
  { name: "Looker Studio", level: 80, category: "Data Analysis" },
  { name: "Plotly/Dash", level: 80, category: "Data Analysis" },
  { name: "Machine Learning", level: 55, category: "Data Analysis" },
  { name: "Quarto", level: 75, category: "Data Analysis" },

  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 70, category: "frontend" },
  { name: "React", level: 60, category: "frontend" },
  { name: "Tailwind CSS", level: 30, category: "frontend" },
  { name: "Flutter", level: 70, category: "frontend" },

  // Backend
  { name: "Node.js", level: 70, category: "backend" },
  { name: "Express", level: 50, category: "backend" },
  { name: "MongoDB", level: 60, category: "backend" },
  { name: "PostgreSQL", level: 60, category: "backend" },
  { name: "SQLite", level: 80, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 80, category: "tools" },
  { name: "Excel", level: 90, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Power BI", level: 80, category: "tools" },
  { name: "Jupyter Notebook", level: 80, category: "tools" },
];

const categories = ["all", "Data Analysis", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [animatedLevels, setAnimatedLevels] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  // Intersection Observer to trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Animate counters from 0 to target level
  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    filteredSkills.forEach((skill) => {
      let currentStep = 0;
      const increment = skill.level / steps;

      const timer = setInterval(() => {
        currentStep++;
        const currentLevel = Math.min(Math.floor(increment * currentStep), skill.level);
        
        setAnimatedLevels(prev => ({
          ...prev,
          [skill.name]: currentLevel
        }));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  };

  // Reset animation when category changes
  useEffect(() => {
    setAnimatedLevels({});
    if (isVisible) {
      setTimeout(() => animateCounters(), 100);
    }
  }, [activeCategory]);
  return (
    <section ref={sectionRef} id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => {
            const currentLevel = animatedLevels[skill.name] || 0;
            
            return (
              <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-xs card-hover"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <span className="text-lg font-bold text-primary">
                    {currentLevel}%
                  </span>
                </div>
                
                <div className="w-full bg-secondary/50 h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-primary to-primary/80 h-3 rounded-full transition-all duration-300 ease-out"
                    style={{ 
                      width: `${currentLevel}%`,
                      transform: 'translateX(0)'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

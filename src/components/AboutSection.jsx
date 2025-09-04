import { Briefcase, Code, User, Server, Brain, Smartphone } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 gap-8 md:gap-12 items-center">
          <div className="space-y-6 text-center md:text-left max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold">
              Passionate Data Analyst & Web Developer
            </h3>

            <p className="text-muted-foreground">
              With experience in web, mobile, and data-driven applications, 
              I specialize in building responsive and user-friendly solutions 
              using modern technologies like React, Flutter, Python, and SQL.
            </p>

            <p className="text-muted-foreground">
              I’m passionate about turning data and ideas into practical, 
              impactful software, and I’m constantly learning and refining 
              my skills to stay ahead in the evolving world of technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://docs.google.com/document/d/1zucWOcCiVARCgp8AAh418OfRCvThRM2ZXfM7qSbfFPI/edit?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

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
              I’m a Passionate Data Analyst & Web Developer with experience in web, 
              mobile, and data-driven applications. I specialize in building responsive, 
              user-friendly solutions using technologies like React, Flutter, Python, SQL, 
              and Power BI.
            </p>

            <p className="text-muted-foreground">
              I love transforming raw data into actionable insights and creating digital 
              products that solve real-world problems. Constantly learning and exploring, 
              I combine creativity with technical skills to stay ahead in the evolving 
              tech space.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm md:text-base text-left">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Phone:</span>
                <a href="tel:(+250)781-186-230" className="hover:text-primary transition-colors">+250790755673</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Email:</span>
                <a href="mailto:irahirnad22@gmail.com" className="hover:text-primary transition-colors">ishimwediane400@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">City:</span>
                <span>Kigali, Rwanda</span>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://github.com/NadiaHirwa" target="_blank" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/nadiahirwa" target="_blank" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

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

import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const texts = [
    "Data Analyst",
    "Machine Learning Engineer", 
    "Web Developer",
    "IoT Specialist",
    "Python Developer"
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === texts[currentIndex]) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      } else {
        setCurrentText((prev) => 
          isDeleting 
            ? prev.slice(0, -1)
            : prev + texts[currentIndex][prev.length]
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[80vh] md:min-h-screen flex flex-col items-center justify-center px-4 pt-24 md:pt-28 scroll-mt-24"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in"> Hi, I'm Nadia Iradukunda H.</span>
            </h1>

            <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary min-h-[2.5rem] md:min-h-[3rem] opacity-0 animate-fade-in-delay-2">
              <span className="typing-text">
                {currentText}
                <span className={`cursor ${showCursor ? 'cursor-blink' : ''}`}>|</span>
              </span>
            </div>

            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in-delay-3">
              I turn data into insights through analysis and visualization, 
              creating solutions that drive decisions. Alongside data, 
              I build modern web experiences with clean design and seamless functionality.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex justify-center lg:justify-end opacity-0 animate-fade-in-delay-2">
            <div className="relative">
              <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src="/profile-photo.jpg"
                  alt="Nadia Hirwa - Data Analyst & Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/60 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

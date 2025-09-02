import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in"> Hi, I'm Nadia Iradukunda H.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in-delay-3">
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
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
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

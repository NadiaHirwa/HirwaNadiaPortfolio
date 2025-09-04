import { Award, Eye, ExternalLink } from "lucide-react";

export const AwardsSection = () => {
  const awards = [
    {
      title: "Basic Data Analytics Course Certificate",
      issuer: "kLab",
      duration: "2024-2025",
      viewLink: "https://drive.google.com/file/d/1PHvkyNeNV1d9yN92NKCUumPVtnT9adL6/view?usp=sharing"
    },
    {
      title: "Data Analytics Certificate (IBM)",
      issuer: "kLab",
      duration: "2025",
      viewLink: "https://drive.google.com/file/d/1W2_JujMFc5wAsw1D89mWt41pkfjQLX_Q/view?usp=sharing"
    },
    {
      title: "Embedded Systems Course Certificate",
      issuer: "STES Group",
      duration: "2023",
      viewLink: "https://drive.google.com/file/d/1go0owzxwlokbB8k5aexfwHJoC3Ghwcqq/view?usp=sharing"
    },
    {
      title: "Software Development Certificate",
      issuer: "PLP",
      duration: "2024",
      viewLink: "https://drive.google.com/file/d/1UkoMd0sBSEYj-uRUoQhVG8fnoT_37nNC/view?usp=sharing"
    },
    {
      title: "Embedded System Bridge Program",
      issuer: "Carnegie Mellon University",
      duration: "2024",
      viewLink: "#"
    },
    {
      title: "Leardership Certificate",
      issuer: "Afflisa",
      duration: "2025",
      viewLink: "https://drive.google.com/file/d/16YU1ftTFRfchO84qixh9UnrN0H0ggg-2/view?usp=sharing"
    }
  ];

  return (
    <section id="awards" className="py-16 md:py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
          <Award className="inline-block h-8 w-8 mr-3 text-primary" />
          Awards & <span className="text-primary">Certifications</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {awards.map((award, index) => (
            <div key={index} className="gradient-border p-4 md:p-6 card-hover">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h4 className="text-base md:text-lg font-semibold text-foreground mb-1">
                    {award.title}
                  </h4>
                  <p className="text-primary font-medium text-xs md:text-sm mb-2">{award.issuer}</p>
                  <div className="inline-block bg-muted/50 px-2 md:px-3 py-1 rounded-full text-xs text-muted-foreground">
                    {award.duration}
                  </div>
                </div>
                <a
                  href={award.viewLink}
                  className="ml-3 md:ml-4 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
                  title="View Certificate"
                >
                  <Eye className="h-4 w-4 text-primary" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

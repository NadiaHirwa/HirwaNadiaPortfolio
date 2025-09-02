import { Award, Eye, ExternalLink } from "lucide-react";

export const AwardsSection = () => {
  const awards = [
    {
      title: "Fullstack Course Certificate",
      issuer: "kLab",
      duration: "2024-2025",
      viewLink: "#"
    },
    {
      title: "Fullstack and mobile development certificate (Digital skills for employability)",
      issuer: "kLab",
      duration: "2025",
      viewLink: "#"
    },
    {
      title: "Embedded Systems Course Certificate",
      issuer: "ICT Chamber",
      duration: "2024-2025",
      viewLink: "#"
    },
    {
      title: "Women Professional Development Program",
      issuer: "U.S. Embassy",
      duration: "2025",
      viewLink: "#"
    },
    {
      title: "Hackathon Finalist (Digital ID Hackthon) - Digital Student eCard",
      issuer: "Digital Student eCard",
      duration: "2024",
      viewLink: "#"
    },
    {
      title: "Bridge Program",
      issuer: "Carnegie Mellon University",
      duration: "2024",
      viewLink: "#"
    }
  ];

  return (
    <section id="awards" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <Award className="inline-block h-8 w-8 mr-3 text-primary" />
          Awards & <span className="text-primary">Certifications</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <div key={index} className="gradient-border p-6 card-hover">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground mb-1">
                    {award.title}
                  </h4>
                  <p className="text-primary font-medium text-sm mb-2">{award.issuer}</p>
                  <div className="inline-block bg-muted/50 px-3 py-1 rounded-full text-xs text-muted-foreground">
                    {award.duration}
                  </div>
                </div>
                <a
                  href={award.viewLink}
                  className="ml-4 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
                  title="View Certificate"
                >
                  <Eye className="h-4 w-4 text-primary" />
                </a>
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

import { useState, useCallback, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import uniandesLogo from "@/assets/uniandes-logo.png";
import { GraduationCap, Briefcase, Award, ExternalLink, ChevronLeft, ChevronRight, FlaskConical, BookOpenCheck, ClipboardList } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

type TimelineItem = 
  | string 
  | {
      text: string;
      link?: { label: string; url: string };
    };

interface TimelineEventSection {
  title: string;
  icon: "GraduationCap" | "FlaskConical" | "BookOpenCheck" | "ClipboardList";
  items: TimelineItem[];
  links?: {
    label: string;
    url: string;
  }[];
}
interface TimelineEvent {
  id: string;
  startDate: string;
  endDate: string;
  type: "education" | "work";
  title: string;
  institution: string;
  location: string;
  shortDescription: string;
  fullDescription: string[];
  achievements?: string[];
  links?: {
    label: string;
    url: string;
  }[];
  logo?: string;
  ranking?: string;
  highlights?: string[];
  sections?: TimelineEventSection[];
}
const SectionIconMap = {
  GraduationCap,
  FlaskConical,
  BookOpenCheck,
  ClipboardList
} as const;
const events: TimelineEvent[] = [
  {
    id: "tech-codevelopment",
    startDate: "Jan 2025",
    endDate: "Present",
    type: "work",
    title: "Professional in Technology Codevelopment Industrial Projects",
    institution: "Ecosistema de Innovación, Emprendimiento y Transferencia - Uniandes",
    location: "On-site",
    shortDescription: "Managing technology transfer projects across multiple industries. $5M in grants obtained.",
    fullDescription: [],
    sections: [
      {
        title: "Project Management",
        icon: "ClipboardList",
        items: [
          "Obtained, awarded and managed technology transfer projects between universities and companies",
          "Work with diverse industries: software, food tech, biotechnology, government tech, pharmaceutical, and security",
          "Strategic identification of competencies and market opportunities",
          "Full-time on-site coordination and execution"
        ]
      },
      {
        title: "Key Achievements",
        icon: "GraduationCap",
        items: [
          "Helped obtain grants totaling $5 Million USD",
          "Signed 5 new agreements between the university and leading companies",
          "Successfully bridged academic research with industrial applications",
          "Identified and leveraged competitive advantages in technology transfer"
        ]
      }
    ],
    highlights: ["Technology Transfer", "$5M Grants", "Industry Partnerships"],
    logo: uniandesLogo
  },
  {
    id: "research-professional",
    startDate: "Jul 2024",
    endDate: "Present",
    type: "work",
    title: "Research Project Professional",
    institution: "Universidad de los Andes",
    location: "Department of Biomedical Engineering",
    shortDescription: "Technology transfer and project management with Plastinovo S.A.S.",
    fullDescription: [],
    sections: [
      {
        title: "Project Management",
        icon: "ClipboardList",
        items: [
          "Coordination of academic and research projects in collaboration with Plastinovo S.A.S.",
          "Participation in DESCUBRE and IMPACTA programs from the Technology Transfer Office",
          "Identification of market exit routes for research results",
          "Comprehensive management of project resources and timelines"
        ]
      },
      {
        title: "Applied Research",
        icon: "FlaskConical",
        items: [
          "Design of anatomical models for teaching and medical personnel training",
          "Development of innovative medical devices",
          "Integration of advanced manufacturing technologies (3D printing)",
          "Prototype validation with healthcare professionals"
        ]
      },
      {
        title: "Scientific Communication",
        icon: "BookOpenCheck",
        items: [
          "Presentation of results at national and international conferences",
          "Publication of scientific articles as first author",
          "Writing of technical book chapters",
          "Collaboration on publications as co-author"
        ]
      }
    ],
    highlights: ["Technology Transfer", "Innovation", "Publications"],
    logo: uniandesLogo
  },
  {
    id: "coatible",
    startDate: "Aug 2021",
    endDate: "Present",
    type: "work",
    title: "Co-founder and CTO - Coatible",
    institution: "Universidad de los Andes",
    location: "Technology Entrepreneurship",
    shortDescription: "Development of anti-fogging technology for laparoscopes",
    fullDescription: [],
    sections: [
      {
        title: "Technological Development",
        icon: "FlaskConical",
        items: [
          "Design and development of innovative hydrophobic film for laparoscopes",
          "Management of all stages: technical design, prototyping and validation",
          "Application of surface chemistry and biomaterials principles",
          "Manufacturing process optimization"
        ]
      },
      {
        title: "Awards",
        icon: "GraduationCap",
        items: [
          "Best Project 2023-2 of BITT Seedbed (Biodesign, Innovation and Technology)",
          "Third Best Project in Life Sciences - Deep Tech 2024 (Mentor-UNAL)",
          "Recognition for innovation in medical devices"
        ]
      },
      {
        title: "Business Competencies",
        icon: "ClipboardList",
        items: [
          "Technical leadership and interdisciplinary team management",
          "Business model development for medical technology",
          "Intellectual property protection",
          "Pitching and presentation to investors"
        ]
      }
    ],
    highlights: ["Entrepreneurship", "Medical Innovation", "Awards"],
    logo: uniandesLogo
  },
  {
    id: "bachelor",
    startDate: "2018",
    endDate: "2022",
    type: "education",
    title: "Bachelor's in Biomedical Engineering",
    institution: "Universidad de los Andes",
    location: "Bogotá, Colombia",
    shortDescription: "Third place among graduating class. Vamos Pa'lante Scholarship.",
    fullDescription: [],
    sections: [{
      title: "Academic Recognition",
      icon: "GraduationCap",
      items: [
        "Third place among graduates in Biomedical Engineering Bachelor's program",
        "Vamos Pa'lante Scholarship during semesters 2021-2 and 2022-1 for outstanding academic performance",
        "Comprehensive training in biomedical engineering with focus on molecular biotechnology"
      ]
    }, {
      title: "Study Areas",
      icon: "FlaskConical",
      items: [
        "Molecular and Cellular Biotechnology",
        "Biomaterials and Nanobiomaterials",
        "Tissue Engineering",
        "Medical Devices",
        "Computational Modeling"
      ]
    }],
    achievements: [
      "Third place among graduating class",
      "Vamos Pa'lante Scholarship (2021-2022)",
      "Outstanding training in biomedical engineering"
    ],
    highlights: ["Academic Distinction", "Merit Scholarship"],
    logo: uniandesLogo,
    ranking: "QS #212"
  },
  {
    id: "master",
    startDate: "2022",
    endDate: "2024",
    type: "education",
    title: "Master's in Biomedical Engineering",
    institution: "Universidad de los Andes",
    location: "Bogotá, Colombia",
    shortDescription: "First place among graduates. Research in gene therapies and nanobiomaterials.",
    fullDescription: [],
    sections: [
      {
        title: "Academic Achievements",
        icon: "GraduationCap",
        items: [
          "First place among graduates in Master's in Biomedical Engineering",
          "Graduate teaching assistantship awarded by the Department of Biomedical Engineering",
          "Research focused on molecular biotechnology and gene editing"
        ]
      },
      {
        title: "Main Research",
        icon: "FlaskConical",
        items: [
          "Gene therapies for neurodegenerative diseases using CRISPR-Cas",
          "Synthesis and characterization of nanobiomaterials for biomedical applications",
          "Development of anatomical models for teaching and medical training",
          "Design of innovative medical devices",
          "Application of advanced molecular biology techniques"
        ]
      },
      {
        title: "Publications and Presentations",
        icon: "BookOpenCheck",
        items: [
          "Scientific articles as first author in international journals",
          "Three book chapters as first author",
          "Co-authorship in three additional articles",
          "Presentations at national and international conferences in Spanish and English"
        ]
      },
      {
        title: "Developed Competencies",
        icon: "ClipboardList",
        items: [
          "Gene editing with CRISPR-Cas systems",
          "Tissue engineering and cell culture",
          "Synthesis of nanomaterials for biomedical applications",
          "Computational modeling of biological systems",
          "Technology transfer and project management",
          "Advanced scientific communication"
        ]
      }
    ],
    achievements: [
      "First place among master's graduates",
      "Graduate teaching assistantship",
      "Multiple scientific publications"
    ],
    logo: uniandesLogo,
    ranking: "QS #212"
  }
];

export const AcademicTimeline = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Separate and sort events by type
  const workEvents = events.filter(e => e.type === "work").sort((a, b) => {
    const yearA = parseInt(a.startDate.match(/\d{4}/)?.[0] || "0");
    const yearB = parseInt(b.startDate.match(/\d{4}/)?.[0] || "0");
    return yearA - yearB;
  });
  
  const educationEvents = events.filter(e => e.type === "education").sort((a, b) => {
    const yearA = parseInt(a.startDate);
    const yearB = parseInt(b.startDate);
    return yearA - yearB;
  });
  
  // Merge events chronologically for horizontal display
  const allEventsSorted = [...events].sort((a, b) => {
    const yearA = parseInt(a.startDate.match(/\d{4}/)?.[0] || "0");
    const yearB = parseInt(b.startDate.match(/\d{4}/)?.[0] || "0");
    return yearA - yearB;
  });
  
  const openModal = (event: TimelineEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedEvent(null), 300);
  };

  return <section className="min-h-screen bg-gradient-to-b from-accent/5 to-background px-6 py-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary">
            Academic and Professional Career
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Outstanding academic training and experience in research, innovation and technology transfer
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative overflow-x-auto pb-8">
          <div className="min-w-max px-8">
            {/* Horizontal Timeline Line */}
            <div className="relative h-96 flex items-center">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-accent" />
              
              {/* Timeline Events */}
              <div className="flex justify-between w-full gap-8">
                {allEventsSorted.map((event, index) => {
                  const isWork = event.type === "work";
                  const Icon = isWork ? Briefcase : GraduationCap;
                  const colorClass = isWork ? "accent" : "secondary";
                  
                  return (
                    <div key={event.id} className="relative flex flex-col items-center" style={{ animationDelay: `${index * 100}ms` }}>
                      {/* Timeline Dot */}
                      <div className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-${colorClass} border-4 border-background shadow-lg z-10`} 
                           style={{ 
                             backgroundColor: isWork ? 'hsl(var(--accent))' : 'hsl(var(--secondary))'
                           }} 
                      />
                      
                      {/* Connector Line */}
                      <div 
                        className={`absolute top-1/2 w-1 ${isWork ? '-translate-y-full h-20' : 'h-20'}`}
                        style={{ 
                          backgroundColor: isWork ? 'hsl(var(--accent) / 0.3)' : 'hsl(var(--secondary) / 0.3)'
                        }}
                      />
                      
                      {/* Card */}
                      <div className={`${isWork ? 'mb-auto pb-24' : 'mt-auto pt-24'} w-72`}>
                        <Card 
                          className={`cursor-pointer transition-all duration-300 hover:shadow-2xl border-2 ${
                            isWork 
                              ? 'hover:border-accent bg-gradient-to-br from-accent/10 to-background' 
                              : 'hover:border-secondary bg-gradient-to-br from-primary/5 to-secondary/5'
                          } group`}
                          onClick={() => openModal(event)}
                        >
                          <CardContent className="p-6 space-y-3">
                            {/* Icon and Logo */}
                            <div className="flex items-start justify-between">
                              {event.logo && (
                                <img src={event.logo} alt={`${event.institution} logo`} className="h-10 w-auto object-contain" />
                              )}
                              <div 
                                className={`p-2.5 rounded-full ${isWork ? 'bg-accent/10' : 'bg-secondary/10'} group-hover:scale-110 transition-transform duration-300`}
                              >
                                <Icon className={`h-5 w-5 ${isWork ? 'text-accent' : 'text-secondary'}`} />
                              </div>
                            </div>

                            {/* Date Badge */}
                            <Badge 
                              variant="secondary" 
                              className={`w-fit text-white`}
                              style={{ 
                                background: isWork 
                                  ? 'linear-gradient(to right, hsl(var(--accent)), hsl(var(--accent) / 0.7))' 
                                  : 'linear-gradient(to right, hsl(var(--secondary)), hsl(var(--accent)))'
                              }}
                            >
                              {event.startDate} – {event.endDate}
                            </Badge>

                            {/* Content */}
                            <div className="space-y-2">
                              <h4 className={`text-lg font-bold text-primary group-hover:${isWork ? 'text-accent' : 'text-secondary'} transition-colors duration-300`}>
                                {event.title}
                              </h4>
                              <p className="text-sm font-semibold text-foreground">
                                {event.institution}
                              </p>
                              {event.ranking && (
                                <Badge variant="outline" className="border-secondary/50 text-secondary text-xs">
                                  {event.ranking}
                                </Badge>
                              )}
                              <p className="text-xs text-muted-foreground line-clamp-2">
                                {event.shortDescription}
                              </p>
                            </div>

                            {/* Highlights */}
                            {event.highlights && event.highlights.length > 0 && (
                              <div className="flex flex-wrap gap-1.5">
                                {event.highlights.slice(0, 2).map(highlight => (
                                  <Badge 
                                    key={highlight} 
                                    variant="outline" 
                                    className={`text-xs ${isWork ? 'border-accent/50 text-accent' : 'border-secondary/50 text-secondary'}`}
                                  >
                                    {highlight}
                                  </Badge>
                                ))}
                              </div>
                            )}

                            {/* Call to action */}
                            <div className={`pt-1 flex items-center gap-2 ${isWork ? 'text-accent' : 'text-secondary'} group-hover:gap-3 transition-all duration-300`}>
                              <span className="text-xs font-semibold">View details</span>
                              <ExternalLink className="h-3 w-3" />
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Scroll Hint */}
          <div className="text-center mt-4 text-sm text-muted-foreground">
            ← Scroll horizontally to view timeline →
          </div>
        </div>
      </div>

      {/* Detailed Modal */}
      <Dialog open={isModalOpen} onOpenChange={closeModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedEvent && <>
              <DialogHeader>
                <div className="flex items-start gap-4">
                  {selectedEvent.logo && <img src={selectedEvent.logo} alt={`${selectedEvent.institution} logo`} className="h-16 w-auto object-contain" />}
                  <div className="flex-1 space-y-2">
                    <DialogTitle className="text-2xl text-primary">
                      {selectedEvent.title}
                    </DialogTitle>
                    <p className="text-lg font-semibold text-foreground">
                      {selectedEvent.institution}
                    </p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="secondary" className="bg-gradient-to-r from-secondary to-accent text-white">
                        {selectedEvent.startDate} – {selectedEvent.endDate}
                      </Badge>
                      {selectedEvent.ranking && <Badge variant="outline" className="border-secondary/50 text-secondary">
                          {selectedEvent.ranking}
                        </Badge>}
                    </div>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6 pt-4">
                {/* Sections */}
                {selectedEvent.sections && selectedEvent.sections.map(section => {
              const SectionIcon = SectionIconMap[section.icon];
              return <div key={section.title} className="space-y-3">
                      <div className="flex items-center gap-2">
                        <SectionIcon className="h-5 w-5 text-secondary" />
                        <h4 className="text-lg font-bold text-primary">
                          {section.title}
                        </h4>
                      </div>
                      <ul className="space-y-2 pl-7">
                        {section.items.map((item, idx) => <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-secondary mt-1.5">•</span>
                            <span>
                              {typeof item === "string" ? item : <>
                                  {item.text}
                                  {item.link && <a href={item.link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 ml-2 text-secondary hover:underline">
                                      {item.link.label}
                                      <ExternalLink className="h-3 w-3" />
                                    </a>}
                                </>}
                            </span>
                          </li>)}
                      </ul>
                      {section.links && section.links.length > 0 && <div className="pl-7 flex flex-wrap gap-2">
                          {section.links.map(link => <Button key={link.url} variant="outline" size="sm" onClick={() => window.open(link.url, "_blank")} className="text-xs">
                              {link.label}
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </Button>)}
                        </div>}
                    </div>;
            })}

                {/* Achievements */}
                {selectedEvent.achievements && selectedEvent.achievements.length > 0 && <div className="space-y-3 pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-secondary" />
                      <h4 className="text-lg font-bold text-primary">
                        Logros Destacados
                      </h4>
                    </div>
                    <ul className="space-y-2 pl-7">
                      {selectedEvent.achievements.map((achievement, idx) => <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-secondary mt-1.5">•</span>
                          <span>{achievement}</span>
                        </li>)}
                    </ul>
                  </div>}

                {/* External Links */}
                {selectedEvent.links && selectedEvent.links.length > 0 && <div className="flex flex-wrap gap-2 pt-4">
                    {selectedEvent.links.map(link => <Button key={link.url} variant="default" onClick={() => window.open(link.url, "_blank")} className="bg-secondary hover:bg-secondary/90">
                        {link.label}
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Button>)}
                  </div>}
              </div>
            </>}
        </DialogContent>
      </Dialog>
    </section>;
};
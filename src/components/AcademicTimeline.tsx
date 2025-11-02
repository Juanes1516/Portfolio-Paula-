import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import uniandesLogo from "@/assets/uniandes-logo.png";
import { GraduationCap, Briefcase, Award, ExternalLink, FlaskConical, BookOpenCheck, ClipboardList } from "lucide-react";

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
  
  // Sort all events chronologically
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

  return (
    <section className="min-h-screen bg-gradient-to-b from-accent/5 to-background px-4 sm:px-6 py-20">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
            Academic and Professional Career
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Outstanding academic training and experience in research, innovation and technology transfer
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="w-full">
          <div 
            className="grid gap-6 animate-fade-in"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
            }}
          >
            {allEventsSorted.map((event, index) => {
              const isWork = event.type === "work";
              const Icon = isWork ? Briefcase : GraduationCap;
              
              return (
                <Card 
                  key={event.id}
                  className={`timeline-card cursor-pointer transition-all duration-300 border-2 group ${
                    isWork 
                      ? 'hover:border-accent bg-gradient-to-br from-accent/5 to-background' 
                      : 'hover:border-secondary bg-gradient-to-br from-primary/5 to-secondary/5'
                  }`}
                  style={{ 
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.06)',
                    maxWidth: '560px',
                    width: '100%',
                    animationDelay: `${index * 100}ms`,
                    marginBottom: '16px',
                    zIndex: 0
                  }}
                  onClick={() => openModal(event)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.10)';
                    e.currentTarget.style.zIndex = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.06)';
                    e.currentTarget.style.zIndex = '0';
                  }}
                >
                  <CardContent 
                    style={{ 
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      padding: '18px',
                      overflow: 'visible',
                      wordBreak: 'break-word',
                      whiteSpace: 'normal'
                    }}
                  >
                    {/* Logo and Icon Row */}
                    <div className="flex items-start justify-between gap-3">
                      {event.logo && (
                        <img 
                          src={event.logo} 
                          alt={`${event.institution} logo`} 
                          className="h-9 w-auto object-contain flex-shrink-0" 
                        />
                      )}
                      <div 
                        className={`p-2 rounded-full flex-shrink-0 ${
                          isWork ? 'bg-accent/10' : 'bg-secondary/10'
                        } group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`h-4 w-4 ${isWork ? 'text-accent' : 'text-secondary'}`} />
                      </div>
                    </div>

                    {/* Date Badge */}
                    <Badge 
                      className="w-fit text-white px-3 py-1"
                      style={{ 
                        background: isWork 
                          ? 'linear-gradient(to right, hsl(var(--accent)), hsl(var(--accent) / 0.7))' 
                          : 'linear-gradient(to right, hsl(var(--secondary)), hsl(var(--accent)))',
                        fontWeight: 500,
                        fontSize: '0.75rem'
                      }}
                    >
                      {event.startDate} – {event.endDate}
                    </Badge>

                    {/* Title */}
                    <h4 
                      className={`font-extrabold leading-tight transition-colors duration-300 ${
                        isWork ? 'text-primary group-hover:text-accent' : 'text-primary group-hover:text-secondary'
                      }`}
                      style={{
                        fontSize: 'clamp(1.05rem, 1.2vw, 1.25rem)',
                        wordBreak: 'break-word',
                        whiteSpace: 'normal',
                        lineHeight: '1.3',
                        overflow: 'visible'
                      }}
                    >
                      {event.title}
                    </h4>
                    
                    {/* Institution */}
                    <p 
                      className="font-semibold"
                      style={{
                        fontSize: '0.95rem',
                        wordBreak: 'break-word',
                        whiteSpace: 'normal',
                        lineHeight: '1.4',
                        color: '#4b4b4b',
                        overflow: 'visible'
                      }}
                    >
                      {event.institution}
                    </p>

                    {/* Ranking Badge */}
                    {event.ranking && (
                      <Badge 
                        variant="outline" 
                        className="w-fit border-secondary/50 text-secondary"
                        style={{ fontSize: '0.75rem' }}
                      >
                        {event.ranking}
                      </Badge>
                    )}
                    
                    {/* Description */}
                    <p 
                      className="text-muted-foreground"
                      style={{
                        fontSize: '0.95rem',
                        lineHeight: '1.5',
                        color: '#5a5a5a',
                        wordBreak: 'break-word',
                        whiteSpace: 'normal',
                        overflow: 'visible'
                      }}
                    >
                      {event.shortDescription}
                    </p>

                    {/* Tags/Highlights */}
                    {event.highlights && event.highlights.length > 0 && (
                      <div 
                        style={{ 
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '8px',
                          marginTop: '8px',
                          overflow: 'visible'
                        }}
                      >
                        {event.highlights.map((highlight, i) => (
                          <Badge 
                            key={i}
                            variant="secondary"
                            style={{
                              fontSize: '0.8rem',
                              backgroundColor: 'rgba(0, 0, 0, 0.05)',
                              color: '#666',
                              padding: '4px 10px',
                              minHeight: '40px',
                              display: 'inline-flex',
                              alignItems: 'center'
                            }}
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {/* Call to action */}
                    <div 
                      className={`flex items-center gap-2 ${
                        isWork ? 'text-accent' : 'text-secondary'
                      } group-hover:gap-3 transition-all duration-300`}
                      style={{ 
                        fontSize: '0.8rem', 
                        fontWeight: 600,
                        marginTop: '4px'
                      }}
                    >
                      <span>View details</span>
                      <ExternalLink className="h-3 w-3" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Detailed Modal */}
      <Dialog open={isModalOpen} onOpenChange={closeModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedEvent && (
            <>
              <DialogHeader>
                <div className="flex items-start gap-4">
                  {selectedEvent.logo && (
                    <img 
                      src={selectedEvent.logo} 
                      alt={`${selectedEvent.institution} logo`} 
                      className="h-16 w-auto object-contain" 
                    />
                  )}
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
                      {selectedEvent.ranking && (
                        <Badge variant="outline" className="border-secondary/50 text-secondary">
                          {selectedEvent.ranking}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6 pt-4">
                {/* Sections */}
                {selectedEvent.sections && selectedEvent.sections.map(section => {
                  const SectionIcon = SectionIconMap[section.icon];
                  return (
                    <div key={section.title} className="space-y-3">
                      <div className="flex items-center gap-2">
                        <SectionIcon className="h-5 w-5 text-secondary" />
                        <h4 className="text-lg font-bold text-primary">
                          {section.title}
                        </h4>
                      </div>
                      <ul className="space-y-2 pl-7">
                        {section.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-secondary mt-1.5">•</span>
                            <span>
                              {typeof item === "string" ? (
                                item
                              ) : (
                                <>
                                  {item.text}
                                  {item.link && (
                                    <a 
                                      href={item.link.url} 
                                      target="_blank" 
                                      rel="noopener noreferrer" 
                                      className="inline-flex items-center gap-1 ml-2 text-secondary hover:underline"
                                    >
                                      {item.link.label}
                                      <ExternalLink className="h-3 w-3" />
                                    </a>
                                  )}
                                </>
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                      {section.links && section.links.length > 0 && (
                        <div className="pl-7 flex flex-wrap gap-2">
                          {section.links.map(link => (
                            <Button 
                              key={link.url}
                              variant="outline" 
                              size="sm" 
                              onClick={() => window.open(link.url, "_blank")} 
                              className="text-xs"
                            >
                              {link.label}
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Achievements */}
                {selectedEvent.achievements && selectedEvent.achievements.length > 0 && (
                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-secondary" />
                      <h4 className="text-lg font-bold text-primary">
                        Logros Destacados
                      </h4>
                    </div>
                    <ul className="space-y-2 pl-7">
                      {selectedEvent.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-secondary mt-1.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* External Links */}
                {selectedEvent.links && selectedEvent.links.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-4">
                    {selectedEvent.links.map(link => (
                      <Button 
                        key={link.url}
                        variant="default" 
                        onClick={() => window.open(link.url, "_blank")} 
                        className="bg-secondary hover:bg-secondary/90"
                      >
                        {link.label}
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

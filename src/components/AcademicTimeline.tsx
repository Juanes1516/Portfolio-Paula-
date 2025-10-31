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
const events: TimelineEvent[] = [{
  id: "bachelor",
  startDate: "2018",
  endDate: "2022",
  type: "education",
  title: "Pregrado en Ingeniería Biomédica",
  institution: "Universidad de los Andes",
  location: "Bogotá, Colombia",
  shortDescription: "Tercer puesto entre graduados de la promoción. Beca Vamos Pa'lante.",
  fullDescription: [],
  sections: [{
    title: "Reconocimientos Académicos",
    icon: "GraduationCap",
    items: [
      "Tercer puesto entre los graduados de la promoción en el Pregrado en Ingeniería Biomédica",
      "Beca Vamos Pa'lante durante los semestres 2021-2 y 2022-1 por rendimiento académico destacado",
      "Formación integral en ingeniería biomédica con enfoque en biotecnología molecular"
    ]
  }, {
    title: "Áreas de Estudio",
    icon: "FlaskConical",
    items: [
      "Biotecnología Molecular y Celular",
      "Biomateriales y Nanobiomateriales",
      "Ingeniería de Tejidos",
      "Dispositivos Médicos",
      "Modelado Computacional"
    ]
  }],
  achievements: [
    "Tercer puesto entre graduados de la promoción",
    "Beca Vamos Pa'lante (2021-2022)",
    "Formación destacada en ingeniería biomédica"
  ],
  highlights: ["Distinción Académica", "Beca por Mérito"],
  logo: uniandesLogo,
  ranking: "QS #212"
}, {
  id: "master",
  startDate: "2022",
  endDate: "2024",
  type: "education",
  title: "Maestría en Ingeniería Biomédica",
  institution: "Universidad de los Andes",
  location: "Bogotá, Colombia",
  shortDescription: "Primer puesto entre graduados. Investigación en terapias génicas y nanobiomateriales.",
  fullDescription: [],
  sections: [
    {
      title: "Logros Académicos",
      icon: "GraduationCap",
      items: [
        "Primer puesto entre los graduados de la promoción en la Maestría en Ingeniería Biomédica",
        "Beca de asistencia graduada de docencia otorgada por el Departamento de Ingeniería Biomédica",
        "Investigación enfocada en biotecnología molecular y edición genética"
      ]
    },
    {
      title: "Investigación Principal",
      icon: "FlaskConical",
      items: [
        "Terapias génicas para enfermedades neurodegenerativas utilizando CRISPR-Cas",
        "Síntesis y caracterización de nanobiomateriales para aplicaciones biomédicas",
        "Desarrollo de modelos anatómicos para docencia y capacitación médica",
        "Diseño de dispositivos médicos innovadores",
        "Aplicación de técnicas avanzadas de biología molecular"
      ]
    },
    {
      title: "Publicaciones y Presentaciones",
      icon: "BookOpenCheck",
      items: [
        "Artículos científicos como primera autora en revistas internacionales",
        "Tres capítulos de libro como primera autora",
        "Coautoría en tres artículos adicionales",
        "Presentaciones en congresos nacionales e internacionales en español e inglés"
      ]
    },
    {
      title: "Competencias Desarrolladas",
      icon: "ClipboardList",
      items: [
        "Edición genética con sistemas CRISPR-Cas",
        "Ingeniería de tejidos y cultivo celular",
        "Síntesis de nanomateriales para aplicaciones biomédicas",
        "Modelado computacional de sistemas biológicos",
        "Transferencia tecnológica y gestión de proyectos",
        "Comunicación científica avanzada"
      ]
    }
  ],
  achievements: [
    "Primer puesto entre graduados de la maestría",
    "Beca de asistencia graduada de docencia",
    "Múltiples publicaciones científicas"
  ],
  logo: uniandesLogo,
  ranking: "QS #212"
}, {
  id: "research-professional",
  startDate: "Jul 2024",
  endDate: "Presente",
  type: "work",
  title: "Profesional en Proyectos de Investigación",
  institution: "Universidad de los Andes",
  location: "Departamento de Ingeniería Biomédica",
  shortDescription: "Transferencia tecnológica y gestión de proyectos con Plastinovo S.A.S.",
  fullDescription: [],
  sections: [
    {
      title: "Gestión de Proyectos",
      icon: "ClipboardList",
      items: [
        "Coordinación de proyectos académicos y de investigación en colaboración con Plastinovo S.A.S.",
        "Participación en programas DESCUBRE e IMPACTA de la Oficina de Transferencia de Tecnología",
        "Identificación de rutas de salida al mercado para resultados de investigación",
        "Gestión integral de recursos y cronogramas de proyectos"
      ]
    },
    {
      title: "Investigación Aplicada",
      icon: "FlaskConical",
      items: [
        "Diseño de modelos anatómicos para docencia y capacitación del personal médico",
        "Desarrollo de dispositivos médicos innovadores",
        "Integración de tecnologías avanzadas de fabricación (impresión 3D)",
        "Validación de prototipos con profesionales de la salud"
      ]
    },
    {
      title: "Comunicación Científica",
      icon: "BookOpenCheck",
      items: [
        "Presentación de resultados en congresos nacionales e internacionales",
        "Publicación de artículos científicos como primera autora",
        "Escritura de capítulos de libro técnicos",
        "Colaboración en publicaciones como coautora"
      ]
    }
  ],
  highlights: ["Transferencia Tecnológica", "Innovación", "Publicaciones"],
  logo: uniandesLogo
}, {
  id: "coatible",
  startDate: "Ago 2021",
  endDate: "Presente",
  type: "work",
  title: "Co-fundadora y CTO - Coatible",
  institution: "Universidad de los Andes",
  location: "Emprendimiento Tecnológico",
  shortDescription: "Desarrollo de tecnología antiempañamiento para laparoscopios",
  fullDescription: [],
  sections: [
    {
      title: "Desarrollo Tecnológico",
      icon: "FlaskConical",
      items: [
        "Diseño y desarrollo de película hidrofóbica innovadora para laparoscopios",
        "Gestión de todas las etapas: diseño técnico, prototipado y validación",
        "Aplicación de principios de química de superficies y biomateriales",
        "Optimización de procesos de fabricación"
      ]
    },
    {
      title: "Reconocimientos",
      icon: "GraduationCap",
      items: [
        "Mejor Proyecto 2023-2 del Semillero BITT (Biodiseño, Innovación y Tecnología)",
        "Tercer Mejor Proyecto en Ciencias de la Vida - Deep Tech 2024 (Mentor-UNAL)",
        "Reconocimiento por innovación en dispositivos médicos"
      ]
    },
    {
      title: "Competencias Empresariales",
      icon: "ClipboardList",
      items: [
        "Liderazgo técnico y gestión de equipos interdisciplinarios",
        "Desarrollo de modelo de negocio para tecnología médica",
        "Protección de propiedad intelectual",
        "Pitch y presentación a inversionistas"
      ]
    }
  ],
  highlights: ["Emprendimiento", "Innovación Médica", "Premios"],
  logo: uniandesLogo
}];

export const AcademicTimeline = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const openModal = (event: TimelineEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedEvent(null), 300);
  };
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);
  return <section className="min-h-screen bg-gradient-to-b from-accent/5 to-background px-6 py-20">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary">
            Trayectoria Académica y Profesional
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Formación académica destacada y experiencia en investigación, innovación y transferencia tecnológica
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button variant="outline" size="icon" className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full shadow-lg bg-background hover:bg-secondary hover:text-white transition-all duration-300 ${!canScrollPrev ? "opacity-0 pointer-events-none" : "opacity-100"}`} onClick={scrollPrev} disabled={!canScrollPrev}>
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button variant="outline" size="icon" className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full shadow-lg bg-background hover:bg-secondary hover:text-white transition-all duration-300 ${!canScrollNext ? "opacity-0 pointer-events-none" : "opacity-100"}`} onClick={scrollNext} disabled={!canScrollNext}>
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 py-8 px-4">
              {events.map((event, index) => {
              const Icon = event.type === "education" ? GraduationCap : Briefcase;
              const isEducation = event.type === "education";
              return <div key={event.id} className="flex-[0_0_85%] sm:flex-[0_0_70%] lg:flex-[0_0_45%] min-w-0" style={{
                animationDelay: `${index * 100}ms`
              }}>
                    <Card className={`h-full cursor-pointer transition-all duration-300 hover:shadow-2xl border-2 hover:border-secondary group ${isEducation ? "bg-gradient-to-br from-primary/5 to-secondary/5" : "bg-gradient-to-br from-accent/5 to-background"}`} onClick={() => openModal(event)}>
                      <CardContent className="p-6 space-y-4">
                        {/* Logo and Icon */}
                        <div className="flex items-start justify-between">
                          {event.logo && <img src={event.logo} alt={`${event.institution} logo`} className="h-12 w-auto object-contain" />}
                          <div className={`p-3 rounded-full ${isEducation ? "bg-secondary/10" : "bg-accent/10"} group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className={`h-6 w-6 ${isEducation ? "text-secondary" : "text-accent"}`} />
                          </div>
                        </div>

                        {/* Date Badge */}
                        <Badge variant="secondary" className="w-fit bg-gradient-to-r from-secondary to-accent text-white">
                          {event.startDate} – {event.endDate}
                        </Badge>

                        {/* Content */}
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                            {event.title}
                          </h3>
                          <p className="text-base font-semibold text-foreground">
                            {event.institution}
                          </p>
                          {event.ranking && <Badge variant="outline" className="border-secondary/50 text-secondary">
                              {event.ranking}
                            </Badge>}
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {event.shortDescription}
                          </p>
                        </div>

                        {/* Highlights */}
                        {event.highlights && event.highlights.length > 0 && <div className="flex flex-wrap gap-2">
                            {event.highlights.map(highlight => <Badge key={highlight} variant="outline" className="text-xs">
                                {highlight}
                              </Badge>)}
                          </div>}

                        {/* Call to action */}
                        <div className="pt-2 flex items-center gap-2 text-secondary group-hover:gap-3 transition-all duration-300">
                          <span className="text-sm font-semibold">Ver detalles</span>
                          <ExternalLink className="h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>;
            })}
            </div>
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
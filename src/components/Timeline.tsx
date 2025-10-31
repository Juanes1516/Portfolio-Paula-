import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, BookOpen, FlaskConical } from "lucide-react";
interface Position {
  id: string;
  year: string;
  title: string;
  organization: string;
  department?: string;
  description: string[];
  skills: string[];
  icon: typeof Briefcase;
  color: string;
}
const positions: Position[] = [{
  id: "2024-present",
  year: "2024 – Presente",
  title: "Profesional en Proyectos de Investigación",
  organization: "Universidad de los Andes",
  department: "Departamento de Ingeniería Biomédica",
  description: [
    "Coordinación de proyectos académicos y de investigación en colaboración con Plastinovo S.A.S.",
    "Participación en programas DESCUBRE e IMPACTA para transferencia tecnológica",
    "Diseño de modelos anatómicos para docencia y capacitación médica",
    "Publicaciones y capítulos de libro como primera autora"
  ],
  skills: ["Gestión de Proyectos", "Transferencia Tecnológica", "Investigación Aplicada", "Comunicación Científica", "Dispositivos Médicos"],
  icon: FlaskConical,
  color: "from-secondary to-secondary/80"
}, {
  id: "2022-2024",
  year: "2022 – 2024",
  title: "Asistente Graduada de Docencia e Investigadora",
  organization: "Universidad de los Andes",
  department: "Departamento de Ingeniería Biomédica",
  description: [
    "Gestión integral de cursos de Fisiología Cuantitativa I y II",
    "Coordinación de actividades académicas y recursos logísticos",
    "Investigación en terapias génicas para enfermedades neurodegenerativas",
    "Aplicación de técnicas avanzadas de biología molecular",
    "Síntesis de nanobiomateriales"
  ],
  skills: ["Docencia", "CRISPR-Cas", "Terapias Génicas", "Biología Molecular", "Nanobiomateriales", "Gestión Académica"],
  icon: GraduationCap,
  color: "from-primary to-primary/80"
}, {
  id: "2021-2022",
  year: "2021 – 2022",
  title: "Investigadora",
  organization: "Grupo de Dinámica Cardiovascular",
  department: "Universidad de los Andes - Fundación Cardioinfantil",
  description: [
    "Gestión de presupuestos y coordinación con médicos especialistas",
    "Planificación de procedimientos quirúrgicos con reconstrucción e impresión 3D",
    "Ensayo clínico para evaluación de apósitos regenerativos (SIS)",
    "Participación en iniciativa educativa EduCardio"
  ],
  skills: ["Investigación Clínica", "Impresión 3D", "Biomateriales", "Ingeniería de Tejidos", "Gestión de Proyectos"],
  icon: BookOpen,
  color: "from-secondary/80 to-accent"
}, {
  id: "2021-actualidad",
  year: "2021 – Presente",
  title: "Co-fundadora y CTO",
  organization: "Coatible",
  description: [
    "Diseño y desarrollo de película hidrofóbica para laparoscopios",
    "Gestión de todas las etapas desde diseño técnico hasta validación",
    "Reconocimientos: Mejor Proyecto 2023-2 (BITT), Tercer Mejor Proyecto Deep Tech 2024"
  ],
  skills: ["Emprendimiento", "Innovación", "Desarrollo de Producto", "Validación Técnica", "Dispositivos Médicos"],
  icon: Briefcase,
  color: "from-accent to-accent/80"
}];
const allSkills = Array.from(new Set(positions.flatMap(p => p.skills))).sort();
export const Timeline = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [hoveredPosition, setHoveredPosition] = useState<string | null>(null);
  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]);
  };
  const isPositionHighlighted = (position: Position) => {
    if (selectedSkills.length === 0) return true;
    return selectedSkills.some(skill => position.skills.includes(skill));
  };
  return <section className="min-h-screen bg-gradient-to-b from-background to-accent/5 px-6 py-20">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary">
            Experiencia Profesional
          </h2>
          
        </div>

        {/* Skills Filter */}
        

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary via-accent to-secondary/20 hidden md:block"></div>

          <div className="space-y-12">
            {positions.map((position, index) => {
            const Icon = position.icon;
            const isHighlighted = isPositionHighlighted(position);
            const isHovered = hoveredPosition === position.id;
            return <div key={position.id} className={`relative transition-all duration-500 ${isHighlighted ? "opacity-100" : "opacity-30"}`} style={{
              animationDelay: `${index * 150}ms`
            }} onMouseEnter={() => setHoveredPosition(position.id)} onMouseLeave={() => setHoveredPosition(null)}>
                  {/* Timeline node */}
                  <div className="absolute left-8 -translate-x-1/2 w-16 h-16 bg-background rounded-full border-4 border-secondary shadow-lg flex items-center justify-center z-10 hidden md:flex">
                    <Icon className={`w-8 h-8 text-secondary transition-transform duration-300 ${isHovered ? "scale-125" : ""}`} />
                  </div>

                  {/* Card */}
                  <Card className={`ml-0 md:ml-32 transition-all duration-300 hover:shadow-2xl border-2 ${isHighlighted ? "border-secondary/20 hover:border-secondary" : "border-muted"} ${isHovered ? "scale-105" : ""}`}>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="space-y-2">
                          <CardTitle className="text-2xl text-primary">
                            {position.title}
                          </CardTitle>
                          <CardDescription className="text-base">
                            <span className="font-semibold text-foreground">
                              {position.organization}
                            </span>
                            {position.department && <>
                                <br />
                                <span className="text-muted-foreground">
                                  {position.department}
                                </span>
                              </>}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="text-base px-4 py-2 bg-gradient-to-r from-secondary to-accent text-white">
                          {position.year}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {position.description.map((desc, i) => <li key={i} className="flex items-start gap-2">
                            <span className="text-secondary mt-1.5">•</span>
                            <span className="text-muted-foreground">{desc}</span>
                          </li>)}
                      </ul>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {position.skills.map(skill => <Badge key={skill} variant="outline" className={`transition-all duration-300 ${selectedSkills.includes(skill) ? "bg-secondary/20 border-secondary text-secondary font-semibold" : "border-muted-foreground/30"}`}>
                            {skill}
                          </Badge>)}
                      </div>
                    </CardContent>
                  </Card>
                </div>;
          })}
          </div>
        </div>
      </div>
    </section>;
};
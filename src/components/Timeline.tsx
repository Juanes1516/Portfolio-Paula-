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
  year: "2024 – Present",
  title: "Research Project Professional",
  organization: "Universidad de los Andes",
  department: "Department of Biomedical Engineering",
  description: [
    "Coordination of academic and research projects in collaboration with Plastinovo S.A.S.",
    "Participation in DESCUBRE and IMPACTA programs for technology transfer",
    "Design of anatomical models for teaching and medical training",
    "Publications and book chapters as first author"
  ],
  skills: ["Project Management", "Technology Transfer", "Applied Research", "Scientific Communication", "Medical Devices"],
  icon: FlaskConical,
  color: "from-secondary to-secondary/80"
}, {
  id: "2022-2024",
  year: "2022 – 2024",
  title: "Graduate Teaching Assistant and Researcher",
  organization: "Universidad de los Andes",
  department: "Department of Biomedical Engineering",
  description: [
    "Comprehensive management of Quantitative Physiology I and II courses",
    "Coordination of academic activities and logistical resources",
    "Research in gene therapies for neurodegenerative diseases",
    "Application of advanced molecular biology techniques",
    "Synthesis of nanobiomaterials"
  ],
  skills: ["Teaching", "CRISPR-Cas", "Gene Therapies", "Molecular Biology", "Nanobiomaterials", "Academic Management"],
  icon: GraduationCap,
  color: "from-primary to-primary/80"
}, {
  id: "2021-2022",
  year: "2021 – 2022",
  title: "Researcher",
  organization: "Cardiovascular Dynamics Group",
  department: "Universidad de los Andes - Fundación Cardioinfantil",
  description: [
    "Budget management and coordination with specialist physicians",
    "Planning of surgical procedures with 3D reconstruction and printing",
    "Clinical trial for evaluation of regenerative dressings (SIS)",
    "Participation in EduCardio educational initiative"
  ],
  skills: ["Clinical Research", "3D Printing", "Biomaterials", "Tissue Engineering", "Project Management"],
  icon: BookOpen,
  color: "from-secondary/80 to-accent"
}, {
  id: "2021-actualidad",
  year: "2021 – Present",
  title: "Co-founder and CTO",
  organization: "Coatible",
  description: [
    "Design and development of hydrophobic film for laparoscopes",
    "Management of all stages from technical design to validation",
    "Awards: Best Project 2023-2 (BITT), Third Best Deep Tech Project 2024"
  ],
  skills: ["Entrepreneurship", "Innovation", "Product Development", "Technical Validation", "Medical Devices"],
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
            Professional Experience
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
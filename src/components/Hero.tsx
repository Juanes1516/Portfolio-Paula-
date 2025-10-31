import { Button } from "@/components/ui/button";
import { FileText, GraduationCap, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/10 px-6 py-20">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent rounded-full blur-2xl opacity-20 animate-pulse-glow"></div>
            <img
              src={profilePhoto}
              alt="Cristian Felipe Rodríguez Ospino"
              className="relative w-80 h-80 object-cover rounded-full border-4 border-background shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 order-2 lg:order-1 animate-slide-in-left">
          <div className="space-y-3">
            <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Cristian Felipe
              <br />
              Rodríguez Ospino
            </h1>
            <div className="space-y-2">
              <p className="text-xl lg:text-2xl text-secondary font-semibold">
                Instructor Professor in Biomedical Engineering
              </p>
              <p className="text-lg lg:text-xl text-muted-foreground font-medium">
                Universidad de los Andes
              </p>
              <p className="text-base lg:text-lg text-muted-foreground">
                AI-Driven Modeling and Simulation for Nanomaterials and Biomedical Systems
              </p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            I am a computational materials researcher and biomedical engineer focused on leveraging{" "}
            <span className="text-primary font-semibold">artificial intelligence, statistical modeling, and multiphysics simulations</span>{" "}
            to accelerate the design and understanding of nanomaterials. My work integrates data-driven inference with physics-based models, 
            combining tools such as GROMACS, COMSOL Multiphysics, and Python-based{" "}
            <span className="text-primary font-semibold">machine learning</span> to predict structure–property relationships and optimize 
            material performance. I am particularly interested in how AI and in-silico modeling can guide the synthesis of magnetic 
            nanoparticles, MOFs, and polymeric systems for drug delivery, bioimaging, and lab-on-a-chip technologies. As an educator, 
            I bridge data analytics, machine learning, and materials engineering, helping students and collaborators translate complex 
            simulations into experimentally validated insights for real biomedical impact.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              variant="default"
              size="lg"
              className="w-52 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/CV_Cristian_Rodriguez_2025.docx';
                link.download = 'CV_Cristian_Rodriguez_2025.docx';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <FileText className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-52 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://scholar.google.com/citations?user=ZtjgHeMAAAAJ&hl=en', '_blank')}
            >
              <GraduationCap className="mr-2 h-5 w-5" />
              Google Scholar
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-52 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://www.linkedin.com/in/cristian-felipe-rodriguez-ospino/', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-52 border-2 border-accent text-primary hover:bg-accent transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = 'mailto:cf.rodriguez@uniandes.edu.co'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

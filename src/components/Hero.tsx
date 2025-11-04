import { Button } from "@/components/ui/button";
import { GraduationCap, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo-paula.jpg";

export const Hero = () => {

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/10 px-6 py-20">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent rounded-full blur-2xl opacity-20 animate-pulse-glow"></div>
            <img
              src={profilePhoto}
              alt="Paula Guzmán"
              className="relative w-80 h-80 object-cover rounded-full border-4 border-background shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 order-2 lg:order-1 animate-slide-in-left">
          <div className="space-y-3">
            <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Paula Guzmán
            </h1>
            <div className="space-y-2">
              <p className="text-xl lg:text-2xl text-secondary font-semibold">
                MSc in Biomedical Engineering
              </p>
              <p className="text-lg lg:text-xl text-muted-foreground font-medium">
                Universidad de los Andes
              </p>
              <p className="text-base lg:text-lg text-muted-foreground">
                Molecular Biotechnology, CRISPR-Cas & Tissue Engineering
              </p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            I am a <span className="text-primary font-semibold">Biomedical Engineer with a Master's degree in Biomedical Engineering</span>, specializing in gene therapy and nanotechnology. My research focuses on the development of <span className="text-primary font-semibold">nanostructured delivery systems for therapeutic applications</span>, particularly in gene editing and regenerative medicine. I have contributed to the design, synthesis, and characterization of biomaterials for targeted drug and gene delivery, leveraging nanotechnology to enhance cellular uptake, transfection efficiency, and therapeutic efficacy. My work bridges fundamental research and translational applications, advancing innovation in <span className="text-primary font-semibold">biomedical engineering, nanomedicine, and gene therapy</span>. Through leading interdisciplinary teams and managing complex research projects, I have cultivated strong skills in scientific communication, data analysis, and academic project management, fostering effective collaboration between academic and industrial partners toward impactful biomedical innovation.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              variant="outline"
              size="lg"
              className="w-52 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://scholar.google.com/citations?user=rdzwkSYAAAAJ&hl=en', '_blank')}
            >
              <GraduationCap className="mr-2 h-5 w-5" />
              Google Scholar
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-52 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://www.linkedin.com/in/paula-guzm%C3%A1n/', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-52 border-2 border-accent text-primary hover:bg-accent transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = 'mailto:pa-guzmans@uniandes.edu.co'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

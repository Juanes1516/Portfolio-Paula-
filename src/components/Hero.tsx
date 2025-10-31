import { Button } from "@/components/ui/button";
import { FileText, GraduationCap, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo-paula.jpg";

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
            Soy Ingeniera Biomédica y Magíster en Ingeniería Biomédica con experiencia en{" "}
            <span className="text-primary font-semibold">biotecnología molecular, edición genética CRISPR-Cas, y desarrollo de dispositivos médicos</span>.{" "}
            Mi enfoque integra la transferencia tecnológica con la innovación académica, colaborando con entidades privadas y programas como{" "}
            <span className="text-primary font-semibold">DESCUBRE e IMPACTA</span> para llevar investigaciones al mercado. 
            Cuento con sólidas habilidades analíticas, gestión de proyectos académicos, y comunicación efectiva en español e inglés. 
            Mi motivación radica en generar{" "}
            <span className="text-primary font-semibold">impacto desde la universidad</span>, contribuyendo a la innovación y emprendimiento 
            basados en ciencia y tecnología, especialmente en{" "}
            <span className="text-primary font-semibold">ingeniería de tejidos, terapias génicas y nanobiomateriales</span>.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              variant="default"
              size="lg"
              className="w-52 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/CV_Paula_Guzman_2025.pdf';
                link.download = 'CV_Paula_Guzman_2025.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <FileText className="mr-2 h-5 w-5" />
              Descargar CV
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-52 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://scholar.google.com', '_blank')}
            >
              <GraduationCap className="mr-2 h-5 w-5" />
              Google Scholar
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-52 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://linkedin.com', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-52 border-2 border-accent text-primary hover:bg-accent transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = 'mailto:pa.guzmans@uniandes.edu.co'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contacto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import courseBiomaterials from "@/assets/course-biomaterials.png";
import courseBioprinting from "@/assets/course-bioprinting.png";
import courseNanobiotech from "@/assets/course-nanobiotech.png";
import courseBiostatistics from "@/assets/course-biostatistics.png";
import courseNanoengineering from "@/assets/course-nanoengineering.png";

type CourseCard = {
  title: string;
  year: string;
  image: string;
  alt: string;
  description: string;
  tags: string[];
};

const courses: CourseCard[] = [
  {
    title: "Fisiología Cuantitativa I",
    year: "2022-2024",
    image: courseBiomaterials,
    alt: "Fisiología Cuantitativa I",
    description: "Curso de pregrado enfocado en modelado cuantitativo de sistemas fisiológicos con coordinación académica integral.",
    tags: ["Docencia", "Fisiología", "Modelado"],
  },
  {
    title: "Fisiología Cuantitativa II",
    year: "2022-2024",
    image: courseBioprinting,
    alt: "Fisiología Cuantitativa II",
    description: "Continuación de fisiología cuantitativa con énfasis en sistemas avanzados y gestión académica.",
    tags: ["Fisiología", "Análisis", "Gestión"],
  },
  {
    title: "Biomateriales y Nanobiomateriales",
    year: "2023-2024",
    image: courseNanobiotech,
    alt: "Nanobiomateriales",
    description: "Síntesis y caracterización de nanobiomateriales para terapias génicas y medicina regenerativa.",
    tags: ["Nanomateriales", "Biomateriales", "Investigación"],
  },
  {
    title: "CRISPR-Cas y Terapias Génicas",
    year: "2023-2024",
    image: courseNanoengineering,
    alt: "Biotecnología Molecular",
    description: "Edición genética CRISPR-Cas para terapias en enfermedades neurodegenerativas.",
    tags: ["CRISPR", "EdiciónGenética", "TerapiasGénicas"],
  },
];

export const CoursesTeaching = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-slate-50/50 to-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 text-slate-900">
            Docencia e Investigación
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            Biotecnología molecular, CRISPR-Cas e ingeniería de tejidos
          </p>
          <Badge variant="secondary" className="text-sm px-4 py-1.5">
            Excelencia Académica — Universidad de los Andes
          </Badge>
        </div>

        {/* Courses Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {courses.map((course, index) => (
              <CarouselItem key={course.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card
                  className="group overflow-hidden border-slate-200 bg-white hover:shadow-md hover:scale-[1.02] transition-all duration-300 flex flex-col h-full rounded-2xl shadow-sm"
                >
                  {/* Course Image */}
                  <div className="relative w-full aspect-video overflow-hidden rounded-t-xl bg-slate-100">
                    <img
                      src={course.image}
                      alt={course.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-3">
                      <CardTitle className="text-xl font-semibold leading-tight text-slate-900 flex-1">
                        {course.title}
                      </CardTitle>
                      <Badge variant="secondary" className="shrink-0">
                        {course.year}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {course.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs bg-blue-50/50 border-blue-200 text-blue-700 hover:bg-blue-100/70"
                        >
                          #{tag}
                        </Badge>
                      ))}
                    </div>

                    {/* University Badge */}
                    <Badge className="w-full justify-center bg-gradient-to-r from-yellow-500 to-amber-600 text-white border-0 py-2 text-xs font-semibold">
                      Qs # 212. Universidad de Los Andes
                    </Badge>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-12" />
          <CarouselNext className="-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

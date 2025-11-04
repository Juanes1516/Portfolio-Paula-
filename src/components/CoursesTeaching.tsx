import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import vanderHumanPhysiology from "@/assets/vander-human-physiology.png";
import vanderRenalPhysiology from "@/assets/vander-renal-physiology.png";
type CourseCard = {
  title: string;
  year: string;
  image: string;
  alt: string;
  description: string;
  tags: string[];
};
const courses: CourseCard[] = [{
  title: "Quantitative Physiology I",
  year: "2022-2024",
  image: vanderHumanPhysiology,
  alt: "Vander's Human Physiology",
  description: "Undergraduate course focused on quantitative modeling of physiological systems with comprehensive academic coordination.",
  tags: ["Teaching", "Physiology", "Modeling"]
}, {
  title: "Quantitative Physiology II",
  year: "2022-2024",
  image: vanderRenalPhysiology,
  alt: "Vander's Renal Physiology",
  description: "Continuation of quantitative physiology with emphasis on advanced systems and academic management.",
  tags: ["Physiology", "Analysis", "Management"]
}];
export const CoursesTeaching = () => {
  return <section id="courses" className="py-16 px-6 bg-gradient-to-b from-slate-50/50 to-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 text-slate-900">Teaching Assistant</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">Quantitative Physiology I, Quantitative Physiology II</p>
          <Badge variant="secondary" className="text-sm px-4 py-1.5">
            Academic Excellence — Universidad de los Andes
          </Badge>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {courses.map((course) => (
            <Card key={course.title} className="group overflow-hidden border-slate-200 bg-white hover:shadow-md hover:scale-[1.02] transition-all duration-300 flex flex-col h-full rounded-2xl shadow-sm">
              {/* Course Image */}
              <div className="relative w-full aspect-video overflow-hidden rounded-t-xl bg-slate-100">
                <img src={course.image} alt={course.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
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
                  {course.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs bg-blue-50/50 border-blue-200 text-blue-700 hover:bg-blue-100/70">
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
          ))}
        </div>
      </div>
    </section>;
};
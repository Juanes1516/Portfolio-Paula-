import { Hero } from "@/components/Hero";
import { AcademicTimeline } from "@/components/AcademicTimeline";
import { ScholarMetrics } from "@/components/ScholarMetrics";
import { Publications } from "@/components/Publications";
import { BookChapters } from "@/components/BookChapters";
import { CoursesTeaching } from "@/components/CoursesTeaching";
import { Navbar } from "@/components/Navbar";
import { Timeline } from "@/components/Timeline";
const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <AcademicTimeline />
        <Publications />
        <BookChapters />
        <ScholarMetrics />
        <CoursesTeaching />
      </main>
    </>
  );
};
export default Index;
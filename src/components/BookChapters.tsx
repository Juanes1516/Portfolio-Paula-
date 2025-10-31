import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ExternalLink, BookOpen } from "lucide-react";
import book1Image from "@/assets/book-1.png";
import book2Image from "@/assets/book-2.png";
import book3Image from "@/assets/book-3.png";

interface BookChapter {
  id: string;
  title: string;
  authors: string;
  book: string;
  year: number;
  type: "Book Chapter";
  summary: string;
  image: string;
  link: string;
}

const bookChaptersData: BookChapter[] = [
  {
    id: "chapter-1",
    title: "Classical and Emerging Approximations for the Screening of Antimicrobial Peptide Libraries",
    authors: "Rodríguez, Cristian F.; Quezada, Valentina; Andrade-Pérez, Valentina; et al.",
    book: "Antimicrobial Peptides (Elsevier), pp. 195–232",
    year: 2025,
    type: "Book Chapter",
    summary:
      "This chapter explores classical and emerging methodologies for screening peptide libraries, a pivotal process in pharmaceutical research for identifying therapeutic peptides. Classical techniques like phage, ribosome, and cell surface display have been foundational, yet they face limitations such as being labor-intensive and requiring large material amounts. Emerging alternatives, notably microfluidic systems, and nanotechnology-based platforms, offer significant advancements by enabling high throughput, cost efficiency, and minimal sample volumes, thereby addressing classical methods’ constraints. The chapter also discusses the integration of machine learning algorithms to enhance screening accuracy and efficiency. Despite progress, challenges remain in optimizing specificity, and sensitivity, and integrating diverse technologies. Future perspectives highlight the potential for further advancements in screening specificity, efficiency, and throughput, underscoring the critical role of innovation in leveraging peptide libraries for drug discovery. This exploration provides insights into the evolving landscape of pharmaceutical research, emphasizing the need for continued development in peptide library screening techniques.",
    image: book1Image,
    link: "https://www.sciencedirect.com/science/article/abs/pii/B9780443153938000099",
  },
  {
    id: "chapter-2",
    title:
      "Delivery of Nucleic Acids Using Nanocarriers: siRNA and miRNA Delivery, mRNA and DNA Delivery, CRISPR-Cas Systems",
    authors: "Guzmán-Sastoque, Paula; Monsalve, María Camila; Rodríguez, Cristian F.; et al.",
    book: "Nanocarriers for Nucleic Acids and Proteins (CRC Press), pp. 248–291",
    year: 2025,
    type: "Book Chapter",
    summary:
      "The delivery of nucleic acids using nanocarriers represents a transformative approach in nanomedicine, offering improved stability, targeted delivery, and enhanced therapeutic efficacy. This chapter explores the various strategies employed for the delivery of small interfering RNA (siRNA), microRNA (miRNA), messenger RNA (mRNA), DNA, and CRISPR-Cas systems, emphasizing the role of lipid-based, polymeric, and inorganic nanoparticles. These nanocarriers facilitate efficient cellular uptake, prevent nucleic acid degradation, and enhance gene silencing or expression for therapeutic applications. The chapter discusses the mechanisms of RNA interference, the role of nanocarriers in gene therapy, and recent advancements in CRISPR-Cas delivery for precise genome editing. Additionally, clinical applications, ongoing challenges, and future perspectives on improving delivery efficiency, minimizing off-target effects, and addressing immunogenicity are examined. The integration of nanotechnology in nucleic acid-based therapies holds immense potential for treating genetic disorders, cancer, and infectious diseases, paving the way for next-generation precision medicine.",
    image: book2Image,
    link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003473183-11/delivery-nucleic-acids-using-nanocarriers-paula-guzm%C3%A1n-sastoque-mar%C3%ADa-camila-monsalve-cristian-rodr%C3%ADguez-stiven-castellanos-juan-cruz-luis-reyes",
  },
  {
    id: "chapter-3",
    title: "Carbon-Based Nanocarriers: Carbon Nanotubes, Graphene Oxide, Fullerenes, and Carbon Dots",
    authors: "Rodríguez, Cristian F.; Guzmán-Sastoque, Paula; Rodriguez-Bazurto, Coryna; et al.",
    book: "Nanocarriers for Nucleic Acids and Proteins (CRC Press), pp. 141–188",
    year: 2025,
    type: "Book Chapter",
    summary:
      "Carbon-based nanocarriers—graphene, carbon nanotubes (CNTs), carbon dots (CDs), and fullerenes—represent transformative platforms at the nexus of nanotechnology and biomedicine. This chapter extensively reviews their historical evolution, groundbreaking discoveries, and sophisticated synthesis methodologies, detailing top-down approaches like mechanical exfoliation and bottom-up processes such as chemical vapor deposition. Emphasizing their unique physicochemical properties, including graphene’s unparalleled mechanical strength and conductivity, CNTs’ remarkable flexibility, CDs’ sustainable production and tunable fluorescence, and fullerenes’ versatile structural adaptability, the chapter underscores their revolutionary implications for medicine. Biomedical applications spotlight the robust potential of these nanomaterials in targeted drug and gene delivery, precise bioimaging, therapeutic peptide immobilization, and innovative therapies such as photothermal and photodynamic treatments. While their biocompatibility, biodegradability, and potential toxicity remain critical challenges, ongoing advancements in surface functionalization and nanocarrier engineering offer promising strategies to mitigate risks. Addressing these challenges is vital for translating laboratory breakthroughs into clinical realities. This comprehensive overview underscores how carbon-based nanocarriers are poised to redefine therapeutic paradigms, driving forward the future of personalized medicine.",
    image: book3Image,
    link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003473183-6/carbon-based-nanocarriers-cristian-rodr%C3%ADguez-paula-guzm%C3%A1n-sastoque-coryna-rodriguez-bazurto-juan-rojas-hern%C3%A1ndez-luis-reyes-juan-cruz",
  },
];

export const BookChapters = () => {
  const [selectedChapter, setSelectedChapter] = useState<BookChapter | null>(null);

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-background to-slate-50/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
            Book Chapters
          </h2>
          <p className="text-sm text-muted-foreground">
            Selected contributions in academic books and edited volumes (2025)
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookChaptersData.map((chapter, index) => (
            <Card
              key={chapter.id}
              onClick={() => setSelectedChapter(chapter)}
              className="group overflow-hidden border-slate-200 bg-white hover:shadow-md hover:scale-105 transition-all duration-300 animate-fade-in flex flex-col h-full cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {chapter.image && (
                <div className="relative h-48 overflow-hidden bg-slate-50">
                  <img
                    src={chapter.image}
                    alt={chapter.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <CardHeader className="flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {chapter.type}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{chapter.year}</span>
                </div>
                <CardTitle className="text-lg font-semibold leading-tight line-clamp-3 mb-2">
                  {chapter.title}
                </CardTitle>
                <CardDescription className="text-sm text-slate-600 mb-2">
                  {chapter.authors}
                </CardDescription>
                <CardDescription className="text-sm text-slate-500 font-medium mb-3">
                  {chapter.book}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 mt-auto">
                <p className="text-sm text-slate-600 line-clamp-3 mb-4">{chapter.summary}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-slate-900 group-hover:text-white transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedChapter(chapter);
                  }}
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={selectedChapter !== null} onOpenChange={() => setSelectedChapter(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedChapter && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold pr-8">{selectedChapter.title}</DialogTitle>
                  <DialogDescription className="text-base space-y-2 pt-2">
                    <p className="font-medium text-slate-700">{selectedChapter.authors}</p>
                    <p className="text-slate-600">{selectedChapter.book}</p>
                    <div className="flex items-center gap-3 pt-2">
                      <Badge variant="secondary">{selectedChapter.type}</Badge>
                      <span className="text-sm text-muted-foreground">{selectedChapter.year}</span>
                    </div>
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                  {selectedChapter.image && (
                    <div className="relative w-full h-64 overflow-hidden rounded-lg bg-slate-50">
                      <img
                        src={selectedChapter.image}
                        alt={selectedChapter.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-slate-900">Summary</h3>
                    <p className="text-slate-700 leading-relaxed whitespace-pre-line">{selectedChapter.summary}</p>
                  </div>

                  <div className="flex justify-end pt-4">
                    <Button
                      onClick={() => window.open(selectedChapter.link, "_blank", "noopener,noreferrer")}
                      className="gap-2"
                    >
                      View Chapter
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

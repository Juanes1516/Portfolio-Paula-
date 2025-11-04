import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, BookOpen } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import pub1Image from "@/assets/pub-1.png";
import pub2Image from "@/assets/pub-2.png";
import pub3Image from "@/assets/pub-3.png";
import pub6Image from "@/assets/pub-6.png";
import pub7Image from "@/assets/pub-7.png";
import pub11Image from "@/assets/pub-11.png";
import pub14Image from "@/assets/pub-14.png";
import pub15Image from "@/assets/pub-15.png";
interface Publication {
  id: string;
  title: string;
  journal: string;
  year: number;
  type: "Journal Article" | "Review Article" | "Conference Paper";
  summary: string;
  tags: string[];
  image?: string;
  link: string;
}
const publicationsData: Publication[] = [{
  id: "pub-15",
  title: "Production and purification of outer membrane vesicles encapsulating green fluorescent protein from Escherichia coli: a step towards scalable OMV technologies",
  journal: "Frontiers in Bioengineering and Biotechnology, Vol. 12 (Frontiers)",
  year: 2024,
  type: "Journal Article",
  summary: "Outer membrane vesicles (OMVs) are spherical structures that contain a small fraction of the periplasm of Gram-negative bacteria, surrounded by its outer membrane. They are naturally produced and detached from the bacterial surface, participate in diverse biological processes, and their diameter size is in the range of 10–300 nm. OMVs have gained interest in different applications, such as the development of biosensors, vaccines, protein chips, and the encapsulation of heterologous proteins and peptides expressed by these microorganisms. However, the use of OMVs in these applications is limited due to the low yields and high purification costs. In this study, we produced green fluorescent protein (GFP) encapsulated into OMVs using Escherichia coli JC8031 transformed with pTRC99A-ssTorA-GFP to establish the production and purification route. Results showed that the motility of the strain prevents its immobilization in alginate, which hampers the purification of OMVs. To address this issue, a zeolite-based column was used to chromatographically separate the OMVs from smaller particles. Further experiments will be focused on standardizing the production and purification of OMVs at a scalable level.",
  tags: ["Cellular & Biofabrication Modeling", "Nanomaterials & Polymers", "Physicochemical, Magnetic & Optical Characterization"],
  image: pub15Image,
  link: "https://www.frontiersin.org/journals/bioengineering-and-biotechnology/articles/10.3389/fbioe.2024.1436352/full"
}, {
  id: "pub-14",
  title: "Assessment of CRISPRa-mediated gdnf overexpression in an In vitro Parkinson's disease model",
  journal: "Frontiers in Bioengineering and Biotechnology, Vol. 12 (Frontiers)",
  year: 2024,
  type: "Journal Article",
  summary: "Parkinson's disease (PD) presents a significant challenge in medical science, as current treatments are limited to symptom management and often carry significant side effects. Our study introduces an innovative approach to evaluate the effects of gdnf overexpression mediated by CRISPRa in an in vitro model of Parkinson's disease. The expression of gdnf can have neuroprotective effects, being related to the modulation of neuroinflammation and pathways associated with cell survival, differentiation, and growth. We have developed a targeted delivery system using a magnetite nanostructured vehicle for the efficient transport of genetic material. This system has resulted in a substantial increase, up to 200-fold) in gdnf expression in an In vitro model of Parkinson's disease using a mixed primary culture of astrocytes, neurons, and microglia. The delivery system exhibits significant endosomal escape of more than 56%, crucial for the effective delivery and activation of the genetic material within cells. The increased gdnf expression correlates with a notable reduction in MAO-B complex activity, reaching basal values of 14.8 μU/μg of protein, and a reduction in reactive oxygen species. Additionally, there is up to a 34.6% increase in cell viability in an In vitro Parkinson's disease model treated with the neurotoxin MPTP. Our study shows that increasing gdnf expression can remediate some of the cellular symptoms associated with Parkinson's disease in an in vitro model of the disease using a novel nanostructured delivery system.",
  tags: ["Magnetic & Field-Driven Systems", "Cellular & Biofabrication Modeling", "Nanomaterials & Polymers", "Physicochemical, Magnetic & Optical Characterization"],
  image: pub14Image,
  link: "https://www.frontiersin.org/journals/bioengineering-and-biotechnology/articles/10.3389/fbioe.2024.1420183/full"
}, {
  id: "pub-1",
  title: "A mathematical phase field model predicts superparamagnetic nanoparticle accelerated fusion of HeLa spheroids for field guided biofabrication",
  journal: "Scientific Reports, Vol. 15, No. 1, p. 19765 (Nature)",
  year: 2025,
  type: "Journal Article",
  summary: "In vitro tissue models are crucial for regenerative medicine, drug discovery, and the reduction of animal testing. 3D bioprinting, particularly when utilizing magnetic manipulation of cell spheroids, provides precise control over tissue architecture. However, existing mathematical models lack the precision to capture the interplay between biological dynamics and magnetic forces during spheroid fusion. This study developed and validated a novel mathematical model that simulates magnetically assisted spheroid fusion, taking into account cell migration, adhesion, and the effects of external magnetic fields. The model integrates principles of cell mechanics, fluid dynamics, and magnetostatics, implemented in COMSOL Multiphysics. Experimental validation used HeLa cell spheroids bioprinted with superparamagnetic iron oxide nanoparticles (SPIONs).",
  tags: ["Mathematical & Computational Modeling", "Multiphysics Modeling (Mechanical / Thermal / Electrical / Mass Transport)", "Fluid & Particle Dynamics (CFD / Microfluidics / Particle Tracing)", "Magnetic & Field-Driven Systems", "Interface & Phase Modeling (Phase Field / Level Set)", "Cellular & Biofabrication Modeling", "Nanomaterials & Polymers", "Physicochemical, Magnetic & Optical Characterization"],
  image: pub1Image,
  link: "https://www.nature.com/articles/s41598-025-04495-2"
}, {
  id: "pub-2",
  title: "Magnetoliposomes for nanomedicine: synthesis, characterization, and applications in drug, gene, and peptide delivery",
  journal: "Expert Opinion on Drug Delivery (Taylor & Francis)",
  year: 2025,
  type: "Review Article",
  summary: "Magnetoliposomes represent a transformative advancement in nanomedicine by integrating magnetic nanoparticles with liposomal structures, creating multifunctional delivery platforms that overcome key limitations of conventional drug carriers. These hybrid systems enable precision targeting through external magnetic fields, controlled release via magnetic hyperthermia, and real-time theranostic capabilities, offering unprecedented spatiotemporal control over therapeutic administration.",
  tags: ["Magnetic & Field-Driven Systems", "Nanomaterials & Polymers", "Physicochemical, Magnetic & Optical Characterization"],
  image: pub2Image,
  link: "https://www.tandfonline.com/doi/abs/10.1080/17425247.2025.2506829"
}, {
  id: "pub-3",
  title: "Nanotheranostics revolutionizing gene therapy: emerging applications in gene delivery enhancement",
  journal: "Journal of Nanotheranostics, Vol. 6, No. 2, p. 10 (MDPI)",
  year: 2025,
  type: "Review Article",
  summary: "Nanotheranostics—where nanoscale materials serve both diagnostic and therapeutic functions—are rapidly transforming gene therapy by tackling critical delivery challenges. This review explores the design and engineering of various nanoparticle systems (lipid-based, polymeric, inorganic, and hybrid) to enhance stability, targeting, and endosomal escape of genetic payloads. We discuss how real-time imaging capabilities integrated into these platforms enable precise localization and controlled release of genes, improving treatment efficacy while reducing off-target effects. Key strategies to overcome delivery barriers (such as proton sponge effect and photothermal disruption) and to achieve nuclear localization are highlighted, along with recent advances in stimuli-responsive systems that facilitate spatiotemporal control of gene expression. Clinical trials and preclinical studies demonstrate the expanding role of nanotheranostics in managing cancer, inherited disorders, and cardiovascular and neurological diseases. We further address regulatory and manufacturing hurdles that must be overcome for the widespread clinical adoption of nanoparticle-based gene therapies. By synthesizing recent progress and ongoing challenges, this review underscores the transformative potential of nanotheranostics for effective, targeted, and image-guided gene delivery.",
  tags: ["Nanomaterials & Polymers", "Physicochemical, Magnetic & Optical Characterization"],
  image: pub3Image,
  link: "https://www.mdpi.com/2624-845X/6/2/10"
}, {
  id: "pub-6",
  title: "Zweifach–fung microfluidic device for efficient microparticle separation: cost-effective fabrication using CO2 laser-ablated PMMA",
  journal: "Micromachines, Vol. 15, No. 7, p. 932 (MDPI)",
  year: 2024,
  type: "Journal Article",
  summary: "Microfluidic separators play a pivotal role in the biomedical and chemical industries by enabling precise fluid manipulations. Traditional fabrication of these devices typically requires costly cleanroom facilities, which limits their broader application. This study introduces a novel microfluidic device that leverages the passive Zweifach–Fung principle to overcome these financial barriers. Through Lagrangian computational simulations, we optimized an eleven-channel Zweifach–Fung configuration that achieved a perfect 100% recall rate for particles following a specified normal distribution. Experimental evaluations determined 2 mL/h as the optimal total flow rate (TFR), under which the device showcased exceptional performance enhancements in precision and recall for micrometer-sized particles, achieving an overall accuracy of 94% ± 3%. Fabricated using a cost-effective, non-cleanroom method, this approach represents a significant shift from conventional practices, dramatically reducing production costs while maintaining high operational efficacy. The cost of each chip is less than USD 0.90 cents and the manufacturing process takes only 15 min. The development of this device not only makes microfluidic technology more accessible but also sets a new standard for future advancements in the field",
  tags: ["Mathematical & Computational Modeling", "Fluid & Particle Dynamics (CFD / Microfluidics / Particle Tracing)", "Magnetic & Field-Driven Systems", "Nanomaterials & Polymers", "Physicochemical, Magnetic & Optical Characterization", "Microfluidic"],
  image: pub6Image,
  link: "https://www.mdpi.com/2072-666X/15/7/932"
}, {
  id: "pub-7",
  title: "Enhancing magnetic micro-and nanoparticle separation with a cost-effective microfluidic device fabricated by laser ablation of PMMA",
  journal: "Micromachines, Vol. 15, No. 8, p. 1057 (MDPI)",
  year: 2024,
  type: "Journal Article",
  summary: "Superparamagnetic iron oxide micro- and nanoparticles have significant applications in biomedical and chemical engineering. This study presents the development and evaluation of a novel low-cost microfluidic device for the purification and hyperconcentration of these magnetic particles. The device, fabricated using laser ablation of polymethyl methacrylate (PMMA), leverages precise control over fluid dynamics to efficiently separate magnetic particles from non-magnetic ones. We assessed the device’s performance through Multiphysics simulations and empirical tests, focusing on the separation of magnetite nanoparticles from blue carbon dots and magnetite microparticles from polystyrene microparticles at various total flow rates (TFRs). For nanoparticle separation, the device achieved a recall of up to 93.3 ± 4% and a precision of 95.9 ± 1.2% at an optimal TFR of 2 mL/h, significantly outperforming previous models, which only achieved a 50% recall. Microparticle separation demonstrated an accuracy of 98.1 ± 1% at a TFR of 2 mL/h in both simulations and experimental conditions. The Lagrangian model effectively captured the dynamics of magnetite microparticle separation from polystyrene microparticles, with close agreement between simulated and experimental results. Our findings underscore the device’s robust capability in distinguishing between magnetic and non-magnetic particles at both micro- and nanoscales. This study highlights the potential of low-cost, non-cleanroom manufacturing techniques to produce high-performance microfluidic devices, thereby expanding their accessibility and applicability in various industrial and research settings. The integration of a continuous magnet, as opposed to segmented magnets in previous designs, was identified as a key factor in enhancing magnetic separation efficiency.",
  tags: ["Mathematical & Computational Modeling", "Fluid & Particle Dynamics (CFD / Microfluidics / Particle Tracing)", "Magnetic & Field-Driven Systems", "Nanomaterials & Polymers", "Physicochemical, Magnetic & Optical Characterization", "Microfluidic"],
  image: pub7Image,
  link: "https://www.mdpi.com/2072-666X/15/8/1057"
}, {
  id: "pub-11",
  title: "Low-cost inertial microfluidic device for microparticle separation: A laser-Ablated PMMA lab-on-a-chip approach without a cleanroom",
  journal: "HardwareX, Vol. 16, p. e00493 (Elsevier)",
  year: 2023,
  type: "Journal Article",
  summary: "Although microparticles are frequently used in chemistry and biology, their effectiveness largely depends on the homogeneity of their particle size distribution. Microfluidic devices to separate and purify particles based on their size have been developed, but many require expensive cleanroom manufacturing processes. A cost-effective, passive microfluidic separator is presented, capable of efficiently sorting and purifying particles spanning the size range of 15 µm to 40 µm. Fabricated from Polymethyl Methacrylate (PMMA) substrates using laser ablation, this device circumvents the need for cleanroom facilities. Prior to fabrication, rigorous optimization of the device's design was carried out through computational simulations conducted in COMSOL Multiphysics. To gauge its performance, chitosan microparticles were employed as a test case. The results were notably promising, achieving a precision of 96.14 %. ",
  tags: ["Mathematical & Computational Modeling", "Fluid & Particle Dynamics (CFD / Microfluidics / Particle Tracing)", "Physicochemical, Magnetic & Optical Characterization", "Microfluidic"],
  image: pub11Image,
  link: "https://www.sciencedirect.com/science/article/pii/S2468067223001001"
}];

// Sort publications by year (newest first)
const publications = [...publicationsData].sort((a, b) => b.year - a.year);
const allTags = ["All", "Mathematical & Computational Modeling", "Multiphysics Modeling (Mechanical / Thermal / Electrical / Mass Transport)", "Fluid & Particle Dynamics (CFD / Microfluidics / Particle Tracing)", "Magnetic & Field-Driven Systems", "Interface & Phase Modeling (Phase Field / Level Set)", "Cellular & Biofabrication Modeling", "Nanomaterials & Polymers", "Physicochemical, Magnetic & Optical Characterization", "Microfluidic"];
export const Publications = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedPublication, setSelectedPublication] = useState<Publication | null>(null);
  const filteredPublications = selectedTag === "All" ? publications : publications.filter(pub => pub.tags.includes(selectedTag));
  return <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold">Peer-Reviewed Publications & Research Highlights</h2>
          </div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Research focused on nanostructured delivery systems for gene therapy and regenerative medicine, bridging fundamental research with translational applications in nanomedicine. Advancing innovation through targeted drug and gene delivery platforms that enhance therapeutic efficacy and cellular uptake.
          </p>
        </div>

        {/* Tag Filters */}
        

        {/* Carousel */}
        <Carousel opts={{
        align: "start",
        loop: true
      }} plugins={[Autoplay({
        delay: 3000,
        stopOnInteraction: true
      })]} className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {filteredPublications.map(pub => <CarouselItem key={pub.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full cursor-pointer hover:scale-105 transition-transform hover:shadow-lg" onClick={() => setSelectedPublication(pub)}>
                  {pub.image ? <img src={pub.image} alt={pub.title} className="h-48 w-full object-cover" /> : <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      
                    </div>}

                  <CardHeader className="pb-3">
                    
                    <CardTitle className="text-lg line-clamp-3 leading-tight">{pub.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="italic text-sm mb-3">{pub.journal}</CardDescription>
                    <div className="flex flex-wrap gap-1">
                      {pub.tags.slice(0, 3).map((tag, idx) => <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>)}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>)}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Modal Dialog */}
        <Dialog open={!!selectedPublication} onOpenChange={() => setSelectedPublication(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedPublication && <>
                <DialogHeader>
                  <div className="flex items-start gap-3 mb-4">
                    <Badge variant="secondary" className="shrink-0">
                      {selectedPublication.year}
                    </Badge>
                    <Badge variant="outline">{selectedPublication.type}</Badge>
                  </div>
                  <DialogTitle className="text-2xl leading-tight pr-8">{selectedPublication.title}</DialogTitle>
                  <DialogDescription className="italic text-base mt-2">{selectedPublication.journal}</DialogDescription>
                </DialogHeader>

                {selectedPublication.image && <img src={selectedPublication.image} alt={selectedPublication.title} className="w-full h-64 object-cover rounded-lg my-4" />}

                {/* Summary */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Summary</h4>
                    <p className="text-muted-foreground leading-relaxed">{selectedPublication.summary}</p>
                  </div>

                  {/* Tags */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Research Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPublication.tags.map((tag, idx) => <Badge key={idx} variant="outline">
                          {tag}
                        </Badge>)}
                    </div>
                  </div>

                  {/* Link button */}
                  {selectedPublication.link !== "#" && <Button asChild className="w-full sm:w-auto">
                      <a href={selectedPublication.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        View Full Paper
                      </a>
                    </Button>}
                </div>
              </>}
          </DialogContent>
        </Dialog>
      </div>
    </section>;
};
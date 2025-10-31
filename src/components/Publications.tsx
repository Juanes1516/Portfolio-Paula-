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
import pub4Image from "@/assets/pub-4.png";
import pub5Image from "@/assets/pub-5.png";
import pub6Image from "@/assets/pub-6.png";
import pub7Image from "@/assets/pub-7.png";
import pub8Image from "@/assets/pub-8.png";
import pub9Image from "@/assets/pub-9.png";
import pub10Image from "@/assets/pub-10.png";
import pub11Image from "@/assets/pub-11.png";
import pub12Image from "@/assets/pub-12.png";
import pub13Image from "@/assets/pub-13.png";

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

const publicationsData: Publication[] = [
  {
    id: "pub-1",
    title:
      "A mathematical phase field model predicts superparamagnetic nanoparticle accelerated fusion of HeLa spheroids for field guided biofabrication",
    journal: "Scientific Reports, Vol. 15, No. 1, p. 19765 (Nature)",
    year: 2025,
    type: "Journal Article",
    summary:
      "In vitro tissue models are crucial for regenerative medicine, drug discovery, and the reduction of animal testing. 3D bioprinting, particularly when utilizing magnetic manipulation of cell spheroids, provides precise control over tissue architecture. However, existing mathematical models lack the precision to capture the interplay between biological dynamics and magnetic forces during spheroid fusion. This study developed and validated a novel mathematical model that simulates magnetically assisted spheroid fusion, taking into account cell migration, adhesion, and the effects of external magnetic fields. The model integrates principles of cell mechanics, fluid dynamics, and magnetostatics, implemented in COMSOL Multiphysics. Experimental validation used HeLa cell spheroids bioprinted with superparamagnetic iron oxide nanoparticles (SPIONs).",
    tags: [
      "Mathematical & Computational Modeling",
      "Multiphysics Modeling (Mechanical / Thermal / Electrical / Mass Transport)",
      "Fluid & Particle Dynamics (CFD / Microfluidics / Particle Tracing)",
      "Magnetic & Field-Driven Systems",
      "Interface & Phase Modeling (Phase Field / Level Set)",
      "Cellular & Biofabrication Modeling",
      "Nanomaterials & Polymers",
      "Physicochemical, Magnetic & Optical Characterization",
    ],
    image: pub1Image,
    link: "https://www.nature.com/articles/s41598-025-04495-2",
  },
  {
    id: "pub-2",
    title:
      "Magnetoliposomes for nanomedicine: synthesis, characterization, and applications in drug, gene, and peptide delivery",
    journal: "Expert Opinion on Drug Delivery (Taylor & Francis)",
    year: 2025,
    type: "Review Article",
    summary:
      "Magnetoliposomes represent a transformative advancement in nanomedicine by integrating magnetic nanoparticles with liposomal structures, creating multifunctional delivery platforms that overcome key limitations of conventional drug carriers. These hybrid systems enable precision targeting through external magnetic fields, controlled release via magnetic hyperthermia, and real-time theranostic capabilities, offering unprecedented spatiotemporal control over therapeutic administration.",
    tags: [
      "Magnetic & Field-Driven Systems",
      "Nanomaterials & Polymers",
      "Physicochemical, Magnetic & Optical Characterization",
    ],
    image: pub2Image,
    link: "https://www.tandfonline.com/doi/abs/10.1080/17425247.2025.2506829",
  },
  {
    id: "pub-3",
    title: "Nanotheranostics revolutionizing gene therapy: emerging applications in gene delivery enhancement",
    journal: "Journal of Nanotheranostics, Vol. 6, No. 2, p. 10 (MDPI)",
    year: 2025,
    type: "Review Article",
    summary:
      "Nanotheranostics—where nanoscale materials serve both diagnostic and therapeutic functions—are rapidly transforming gene therapy by tackling critical delivery challenges. This review explores the design and engineering of various nanoparticle systems (lipid-based, polymeric, inorganic, and hybrid) to enhance stability, targeting, and endosomal escape of genetic payloads. We discuss how real-time imaging capabilities integrated into these platforms enable precise localization and controlled release of genes, improving treatment efficacy while reducing off-target effects. Key strategies to overcome delivery barriers (such as proton sponge effect and photothermal disruption) and to achieve nuclear localization are highlighted, along with recent advances in stimuli-responsive systems that facilitate spatiotemporal control of gene expression. Clinical trials and preclinical studies demonstrate the expanding role of nanotheranostics in managing cancer, inherited disorders, and cardiovascular and neurological diseases. We further address regulatory and manufacturing hurdles that must be overcome for the widespread clinical adoption of nanoparticle-based gene therapies. By synthesizing recent progress and ongoing challenges, this review underscores the transformative potential of nanotheranostics for effective, targeted, and image-guided gene delivery.",
    tags: ["Nanomaterials & Polymers", "Physicochemical, Magnetic & Optical Characterization"],
    image: pub3Image,
    link: "https://www.mdpi.com/2624-845X/6/2/10",
  },
  {
    id: "pub-4",
    title:
      "Design, characterization, and evaluation of textile systems and coatings for sports use: applications in the design of High-Thermal comfort wearables",
    journal: "ACS Omega, Vol. 9, No. 50, pp. 49143-49162 (ACS)",
    year: 2024,
    type: "Journal Article",
    summary:
      "Exposure to high temperatures during indoor and outdoor activities increases the risk of heat-related illness such as cramps, rashes, and heatstroke (HS). Fatal cases of HS are ten times more common than serious cardiac episodes in sporting scenarios, with untreated cases leading to mortality rates as high as 80%. Enhancing thermal comfort can be achieved through heat loss in enclosed spaces and the human body, utilizing heat transfer mechanisms such as radiation, conduction, convection, and evaporation, which do not require initial energy input. Among these, two primary mechanisms are commonly employed in the textile industry to enhance passive cooling: radiation and conduction. The radiation approach encompasses two aspects: (1) reflecting solar spectrum (SS) wavelengths and (2) transmitting and emitting in the atmospheric window (AW). ",
    tags: [
      "Mathematical & Computational Modeling",
      "Multiphysics Modeling (Mechanical / Thermal / Electrical / Mass Transport)",
      "Cellular & Biofabrication Modeling",
      "Nanomaterials & Polymers",
      "Physicochemical, Magnetic & Optical Characterization",
    ],
    image: pub4Image,
    link: "https://pubs.acs.org/doi/full/10.1021/acsomega.4c05600",
  },
  {
    id: "pub-5",
    title:
      "Redefining vascular repair: revealing cellular responses on PEUU—gelatin electrospun vascular grafts for endothelialization and immune responses on in vitro models",
    journal: "Frontiers in Bioengineering and Biotechnology, Vol. 12 (Frontiers)",
    year: 2024,
    type: "Journal Article",
    summary:
      "Tissue-engineered vascular grafts (TEVGs) poised for regenerative applications are central to effective vascular repair, with their efficacy being significantly influenced by scaffold architecture and the strategic distribution of bioactive molecules either embedded within the scaffold or elicited from responsive tissues. Despite substantial advancements over recent decades, a thorough understanding of the critical cellular dynamics for clinical success remains to be fully elucidated. Graft failure, often ascribed to thrombogenesis, intimal hyperplasia, or calcification, is predominantly linked to improperly modulated inflammatory reactions. The orchestrated behavior of repopulating cells is crucial for both initial endothelialization and the subsequent differentiation of vascular wall stem cells into functional phenotypes. This necessitates the TEVG to provide an optimal milieu wherein immune cells can promote early angiogenesis and cell recruitment, all while averting persistent inflammation. In this study, we present an innovative TEVG designed to enhance cellular responses by integrating a physicochemical gradient through a multilayered structure utilizing synthetic (poly (ester urethane urea), PEUU) and natural polymers (Gelatin B), thereby modulating inflammatory reactions. The luminal surface is functionalized with a four-arm polyethylene glycol (P4A) to mitigate thrombogenesis, while the incorporation of adhesive peptides (RGD/SV) fosters the adhesion and maturation of functional endothelial cells.",
    tags: [
      "Mathematical & Computational Modeling",
      "Multiphysics Modeling (Mechanical / Thermal / Electrical / Mass Transport)",
      "Cellular & Biofabrication Modeling",
      "Nanomaterials & Polymers",
      "Physicochemical, Magnetic & Optical Characterization",
    ],
    image: pub5Image,
    link: "https://www.frontiersin.org/journals/bioengineering-and-biotechnology/articles/10.3389/fbioe.2024.1410863/full",
  },
  {
    id: "pub-6",
    title:
      "Zweifach–fung microfluidic device for efficient microparticle separation: cost-effective fabrication using CO2 laser-ablated PMMA",
    journal: "Micromachines, Vol. 15, No. 7, p. 932 (MDPI)",
    year: 2024,
    type: "Journal Article",
    summary:
      "Microfluidic separators play a pivotal role in the biomedical and chemical industries by enabling precise fluid manipulations. Traditional fabrication of these devices typically requires costly cleanroom facilities, which limits their broader application. This study introduces a novel microfluidic device that leverages the passive Zweifach–Fung principle to overcome these financial barriers. Through Lagrangian computational simulations, we optimized an eleven-channel Zweifach–Fung configuration that achieved a perfect 100% recall rate for particles following a specified normal distribution. Experimental evaluations determined 2 mL/h as the optimal total flow rate (TFR), under which the device showcased exceptional performance enhancements in precision and recall for micrometer-sized particles, achieving an overall accuracy of 94% ± 3%. Fabricated using a cost-effective, non-cleanroom method, this approach represents a significant shift from conventional practices, dramatically reducing production costs while maintaining high operational efficacy. The cost of each chip is less than USD 0.90 cents and the manufacturing process takes only 15 min. The development of this device not only makes microfluidic technology more accessible but also sets a new standard for future advancements in the field",
    tags: [
      "Mathematical & Computational Modeling",
      "Fluid & Particle Dynamics (CFD / Microfluidics / Particle Tracing)",
      "Magnetic & Field-Driven Systems",
      "Nanomaterials & Polymers",
      "Physicochemical, Magnetic & Optical Characterization",
      "Microfluidic",
    ],
    image: pub6Image,
    link: "https://www.mdpi.com/2072-666X/15/7/932",
  },
  {
    id: "pub-7",
    title:
      "Enhancing magnetic micro-and nanoparticle separation with a cost-effective microfluidic device fabricated by laser ablation of PMMA",
    journal: "Micromachines, Vol. 15, No. 8, p. 1057 (MDPI)",
    year: 2024,
    type: "Journal Article",
    summary:
      "Superparamagnetic iron oxide micro- and nanoparticles have significant applications in biomedical and chemical engineering. This study presents the development and evaluation of a novel low-cost microfluidic device for the purification and hyperconcentration of these magnetic particles. The device, fabricated using laser ablation of polymethyl methacrylate (PMMA), leverages precise control over fluid dynamics to efficiently separate magnetic particles from non-magnetic ones. We assessed the device’s performance through Multiphysics simulations and empirical tests, focusing on the separation of magnetite nanoparticles from blue carbon dots and magnetite microparticles from polystyrene microparticles at various total flow rates (TFRs). For nanoparticle separation, the device achieved a recall of up to 93.3 ± 4% and a precision of 95.9 ± 1.2% at an optimal TFR of 2 mL/h, significantly outperforming previous models, which only achieved a 50% recall. Microparticle separation demonstrated an accuracy of 98.1 ± 1% at a TFR of 2 mL/h in both simulations and experimental conditions. The Lagrangian model effectively captured the dynamics of magnetite microparticle separation from polystyrene microparticles, with close agreement between simulated and experimental results. Our findings underscore the device’s robust capability in distinguishing between magnetic and non-magnetic particles at both micro- and nanoscales. This study highlights the potential of low-cost, non-cleanroom manufacturing techniques to produce high-performance microfluidic devices, thereby expanding their accessibility and applicability in various industrial and research settings. The integration of a continuous magnet, as opposed to segmented magnets in previous designs, was identified as a key factor in enhancing magnetic separation efficiency.",
    tags: [
      "Mathematical & Computational Modeling",
      "Fluid & Particle Dynamics (CFD / Microfluidics / Particle Tracing)",
      "Magnetic & Field-Driven Systems",
      "Nanomaterials & Polymers",
      "Physicochemical, Magnetic & Optical Characterization",
      "Microfluidic",
    ],
    image: pub7Image,
    link: "https://www.mdpi.com/2072-666X/15/8/1057",
  },
  {
    id: "pub-8",
    title: "The impact of yeast encapsulation in wort fermentation and beer flavor profile",
    journal: "Polymers, Vol. 15, No. 7, p. 1742 (MDPI)",
    year: 2023,
    type: "Journal Article",
    summary:
      "The food and beverage industry is constantly evolving, and consumers are increasingly searching for premium products that not only offer health benefits but a pleasant taste. A viable strategy to accomplish this is through the altering of sensory profiles through encapsulation of compounds with unique flavors. We used this approach here to examine how brewing in the presence of yeast cells encapsulated in alginate affected the sensory profile of beer wort. Initial tests were conducted for various combinations of sodium alginate and calcium chloride concentrations. Mechanical properties (i.e., breaking force and elasticity) and stability of the encapsulates were then considered to select the most reliable encapsulating formulation to conduct the corresponding alcoholic fermentations. Yeast cells were then encapsulated using 3% (w/v) alginate and 0.1 M calcium chloride as a reticulating agent. Fourteen-day fermentations with this encapsulating formulation involved a Pilsen malt-based wort and four S. cerevisiae strains, three commercially available and one locally isolated. The obtained beer was aged in an amber glass container for two weeks at 4 °C. The color, turbidity, taste, and flavor profile were measured and compared to similar commercially available products. Cell growth was monitored concurrently with fermentation, and the concentrations of ethanol, sugars, and organic acids in the samples were determined via high-performance liquid chromatography (HPLC). It was observed that encapsulation caused significant differences in the sensory profile between strains, as evidenced by marked changes in the astringency, geraniol, and capric acid aroma production. Three repeated batch experiments under the same conditions revealed that cell viability and mechanical properties decreased substantially, which might limit the reusability of encapsulates. In terms of ethanol production and substrate consumption, it was also observed that encapsulation improved the performance of the locally isolated strain.",
    tags: [
      "Mathematical & Computational Modeling",
      "Multiphysics Modeling (Mechanical / Thermal / Electrical / Mass Transport)",
      "Cellular & Biofabrication Modeling",
      "Nanomaterials & Polymers",
      "Physicochemical, Magnetic & Optical Characterization",
    ],
    image: pub8Image,
    link: "https://www.mdpi.com/2073-4360/15/7/1742",
  },
  {
    id: "pub-9",
    title: "Breaking the clean room barrier: exploring low-cost alternatives for microfluidic devices",
    journal: "Frontiers in Bioengineering and Biotechnology, Vol. 11 (Frontiers)",
    year: 2023,
    type: "Review Article",
    summary:
      "Microfluidics is an interdisciplinary field that encompasses both science and engineering, which aims to design and fabricate devices capable of manipulating extremely low volumes of fluids on a microscale level. The central objective of microfluidics is to provide high precision and accuracy while using minimal reagents and equipment. The benefits of this approach include greater control over experimental conditions, faster analysis, and improved experimental reproducibility. Microfluidic devices, also known as labs-on-a-chip (LOCs), have emerged as potential instruments for optimizing operations and decreasing costs in various of industries, including pharmaceutical, medical, food, and cosmetics. However, the high price of conventional prototypes for LOCs devices, generated in clean room facilities, has increased the demand for inexpensive alternatives. Polymers, paper, and hydrogels are some of the materials that can be utilized to create the inexpensive microfluidic devices covered in this article. In addition, we highlighted different manufacturing techniques, such as soft lithography, laser plotting, and 3D printing, that are suitable for creating LOCs. The selection of materials and fabrication techniques will depend on the specific requirements and applications of each individual LOC. This article aims to provide a comprehensive overview of the numerous alternatives for the development of low-cost LOCs to service industries such as pharmaceuticals, chemicals, food, and biomedicine.",
    tags: ["Microfluidic"],
    image: pub9Image,
    link: "https://www.frontiersin.org/journals/bioengineering-and-biotechnology/articles/10.3389/fbioe.2023.1176557/full",
  },
  {
    id: "pub-10",
    title: "Critique–Simulation Apps",
    journal: "Education for Chemical Engineers, Vol. 42, pp. 88-89 (Elsevier)",
    year: 2023,
    type: "Journal Article",
    summary: "This critique discusses the simulation App of a bioreactor (Sartorius D-DCU 100 L) for cell culture, which was included in the article Laboratory-independent exploration of stirred bioreactors and their fluid dynamics by Stefan Seidel et al., Education for Chemical Engineers,.",
    tags: ["Mathematical & Computational Modeling"],
    image: pub10Image,
    link: "https://doi.org/10.1016/j.ece.2022.11.001",
  },
  {
    id: "pub-11",
    title:
      "Low-cost inertial microfluidic device for microparticle separation: A laser-Ablated PMMA lab-on-a-chip approach without a cleanroom",
    journal: "HardwareX, Vol. 16, p. e00493 (Elsevier)",
    year: 2023,
    type: "Journal Article",
    summary:
      "Although microparticles are frequently used in chemistry and biology, their effectiveness largely depends on the homogeneity of their particle size distribution. Microfluidic devices to separate and purify particles based on their size have been developed, but many require expensive cleanroom manufacturing processes. A cost-effective, passive microfluidic separator is presented, capable of efficiently sorting and purifying particles spanning the size range of 15 µm to 40 µm. Fabricated from Polymethyl Methacrylate (PMMA) substrates using laser ablation, this device circumvents the need for cleanroom facilities. Prior to fabrication, rigorous optimization of the device's design was carried out through computational simulations conducted in COMSOL Multiphysics. To gauge its performance, chitosan microparticles were employed as a test case. The results were notably promising, achieving a precision of 96.14 %. ",
    tags: [
      "Mathematical & Computational Modeling",
      "Fluid & Particle Dynamics (CFD / Microfluidics / Particle Tracing)",
      "Physicochemical, Magnetic & Optical Characterization",
      "Microfluidic",
    ],
    image: pub11Image,
    link: "https://www.sciencedirect.com/science/article/pii/S2468067223001001",
  },
  {
    id: "pub-12",
    title:
      "Magnetic torus microreactor as a novel device for sample treatment via solid-phase microextraction coupled to graphite furnace atomic absorption spectroscopy: A route for arsenic pre-concentration",
    journal: "Molecules, Vol. 27, No. 19, p. 6198 (MDPI)",
    year: 2022,
    type: "Journal Article",
    summary:
      "This work studied the feasibility of using a novel microreactor based on torus geometry to carry out a sample pretreatment before its analysis by graphite furnace atomic absorption. The miniaturized retention of total arsenic was performed on the surface of a magnetic sorbent material consisting of 6 mg of magnetite (Fe3O4) confined in a very small space inside (20.1 µL) a polyacrylate device filling an internal lumen (inside space). Using this geometric design, a simulation theoretical study demonstrated a notable improvement in the analyte adsorption process on the solid extractant surface. Compared to single-layer geometries, the torus microreactor geometry brought on flow turbulence within the liquid along the curvatures inside the device channels, improving the efficiency of analyte–extractant contact and therefore leading to a high preconcentration factor. According to this design, the magnetic solid phase was held internally as a surface bed with the use of an 8 mm-diameter cylindric neodymium magnet, allowing the pass of a fixed volume of an arsenic aqueous standard solution. A preconcentration factor of up to 60 was found to reduce the typical “characteristic mass” (as sensitivity parameter) determined by direct measurement from 53.66 pg to 0.88 pg, showing an essential improvement in the arsenic signal sensitivity by absorption atomic spectrometry. This methodology emulates a miniaturized micro-solid-phase extraction system for flow-through water pretreatment samples in chemical analysis before coupling to techniques that employ reduced sample volumes, such as graphite furnace atomic absorption spectroscopy.",
    tags: [
      "Mathematical & Computational Modeling",
      "Fluid & Particle Dynamics (CFD / Microfluidics / Particle Tracing)",
      "Magnetic & Field-Driven Systems",
      "Nanomaterials & Polymers",
      "Physicochemical, Magnetic & Optical Characterization",
      "Microfluidic",
    ],
    image: pub12Image,
    link: "https://www.mdpi.com/1420-3049/27/19/6198",
  },
  {
    id: "pub-13",
    title: "In silico study of spheroids fusion through magnetic field gradients",
    journal:
      "2021 IEEE 2nd international congress of biomedical engineering and bioengineering (CI-IB&BI), pp. 1-9 (IEEE)",
    year: 2021,
    type: "Conference Paper",
    summary:
      "Performed in silico simulations of spheroid fusion under magnetic gradients, integrating cellular, field, and interface-level modeling to predict fusion dynamics.",
    tags: [
      "Mathematical & Computational Modeling",
      "Fluid & Particle Dynamics (CFD / Microfluidics / Particle Tracing)",
      "Magnetic & Field-Driven Systems",
      "Interface & Phase Modeling (Phase Field / Level Set)",
      "Cellular & Biofabrication Modeling",
    ],
    image: pub13Image,
    link: "https://ieeexplore.ieee.org/document/9626089",
  },
];

// Sort publications by year (newest first)
const publications = [...publicationsData].sort((a, b) => b.year - a.year);

const allTags = [
  "All",
  "Mathematical & Computational Modeling",
  "Multiphysics Modeling (Mechanical / Thermal / Electrical / Mass Transport)",
  "Fluid & Particle Dynamics (CFD / Microfluidics / Particle Tracing)",
  "Magnetic & Field-Driven Systems",
  "Interface & Phase Modeling (Phase Field / Level Set)",
  "Cellular & Biofabrication Modeling",
  "Nanomaterials & Polymers",
  "Physicochemical, Magnetic & Optical Characterization",
  "Microfluidic",
  
];

export const Publications = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedPublication, setSelectedPublication] = useState<Publication | null>(null);

  const filteredPublications =
    selectedTag === "All" ? publications : publications.filter((pub) => pub.tags.includes(selectedTag));

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold">Peer-Reviewed Publications & Research Highlights</h2>
          </div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Scientific contributions across modeling, nanomaterials, and AI-driven biomedical engineering, integrating
            in-silico and experimental approaches.
          </p>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              className="cursor-pointer hover:scale-105 transition-transform px-4 py-2 text-sm"
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {filteredPublications.map((pub) => (
              <CarouselItem key={pub.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card
                  className="h-full cursor-pointer hover:scale-105 transition-transform hover:shadow-lg"
                  onClick={() => setSelectedPublication(pub)}
                >
                  {pub.image ? (
                    <img src={pub.image} alt={pub.title} className="h-48 w-full object-cover" />
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-primary/40" />
                    </div>
                  )}

                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge variant="secondary" className="shrink-0">
                        {pub.year}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {pub.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg line-clamp-3 leading-tight">{pub.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="italic text-sm mb-3">{pub.journal}</CardDescription>
                    <div className="flex flex-wrap gap-1">
                      {pub.tags.slice(0, 3).map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Modal Dialog */}
        <Dialog open={!!selectedPublication} onOpenChange={() => setSelectedPublication(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedPublication && (
              <>
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

                {selectedPublication.image && (
                  <img
                    src={selectedPublication.image}
                    alt={selectedPublication.title}
                    className="w-full h-64 object-cover rounded-lg my-4"
                  />
                )}

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
                      {selectedPublication.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Link button */}
                  {selectedPublication.link !== "#" && (
                    <Button asChild className="w-full sm:w-auto">
                      <a
                        href={selectedPublication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Full Paper
                      </a>
                    </Button>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

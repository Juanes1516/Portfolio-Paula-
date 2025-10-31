import { useState, useCallback, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import uniandesLogo from "@/assets/uniandes-logo.png";
import gnaLogo from "@/assets/gna-logo.png";
import { GraduationCap, Briefcase, Award, ExternalLink, ChevronLeft, ChevronRight, FlaskConical, BookOpenCheck, ClipboardList } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

// Support both simple strings and rich items with inline links
type TimelineItem = 
  | string 
  | {
      text: string;
      link?: { label: string; url: string };
    };

interface TimelineEventSection {
  title: string;
  icon: "GraduationCap" | "FlaskConical" | "BookOpenCheck" | "ClipboardList";
  items: TimelineItem[];
  links?: {
    label: string;
    url: string;
  }[];
}
interface TimelineEvent {
  id: string;
  startDate: string;
  endDate: string;
  type: "education" | "work";
  title: string;
  institution: string;
  location: string;
  shortDescription: string;
  fullDescription: string[];
  achievements?: string[];
  links?: {
    label: string;
    url: string;
  }[];
  logo?: string;
  ranking?: string;
  highlights?: string[];
  sections?: TimelineEventSection[];
}
const SectionIconMap = {
  GraduationCap,
  FlaskConical,
  BookOpenCheck,
  ClipboardList
} as const;
const events: TimelineEvent[] = [{
  id: "bachelor",
  startDate: "2018",
  endDate: "2021",
  type: "education",
  title: "Bachelor of Biomedical Engineering",
  institution: "Universidad de los Andes",
  location: "Bogotá, Colombia",
  shortDescription: "QS Top 220 Universities Worldwide (2025). Government Scholarship: Ser Pilo Paga",
  fullDescription: [],
  sections: [{
    title: "Admissions & Scholarship",
    icon: "GraduationCap",
    items: ["Awarded the “Ser Pilo Paga” National Scholarship by the Government of Colombia, a full-tuition program granted to top national performers in the Colombian High School State Examinations (ICFES, 2018)", "Full-ride funding that enabled completion of the undergraduate program at Universidad de los Andes."]
  }, {
    title: "Undergraduate Research",
    icon: "FlaskConical",
    items: [
      {
        text: "Conducted undergraduate research under the supervision of Prof. Juan Carlos Cruz and Prof. Carolina Muñoz on the development of a mathematical model describing cellular spheroid fusion using a viscoelastic framework. The work was presented as an oral long presentation and published in the IEEE Proceedings (DOI: 10.1109/ICEHTMC52121.2021.9626089).",
        link: {
          label: "View Paper",
          url: "https://ieeexplore.ieee.org/abstract/document/9626089"
        }
      }
    ]
  }, {
    title: "Teaching Assistance (TA)",
    icon: "BookOpenCheck",
    items: ["Teaching Assistant for the course \"Nanobiotechnology in Medical Sciences\" (with Prof. Juan Carlos Cruz).", "Prepared lecture materials and problem sets; developed quizzes; graded assignments and exams; held office hours and student support sessions."]
  }, {
    title: "Administrative & Event Support",
    icon: "ClipboardList",
    items: ["Served as an Administrative and Logistics Assistant for the 2nd International Congress on Biomedical Engineering and Bioengineering (CI-IB&BI 2021) under the supervision of Prof. Mario Valderrama.", "Responsibilities included coordinating the event program, organizing speaker sessions, managing session chairs, and supporting logistics and communications across academic and research teams."],
    links: [{
      label: "View Conference Proceedings (Memorias CI-IB&BI 2021)",
      url: "https://ingbiomedica.uniandes.edu.co/sites/default/files/investigacion/Memorias%20CI-IB%26BI%202021.pdf?_t=1707244492"
    }]
  }],
  achievements: ["Government Scholarship — Ser Pilo Paga (2018–2021).", "Undergraduate research on mathematical modeling of spheroid fusion (presented at a scientific congress).", "Teaching Assistant and academic support in Biomedical Engineering."],
  highlights: ["Teaching Assistant", "Scholarship Recipient"],
  logo: uniandesLogo,
  ranking: "QS #212"
}, {
  id: "admin",
  startDate: "2022",
  endDate: "2023",
  type: "work",
  title: "Administrative Assistant",
  institution: "Universidad de los Andes",
  location: "Faculty of Engineering",
  shortDescription: "Academic coordination and research project support",
  fullDescription: [],
  sections: [{
    title: "Administrative & Event Support",
    icon: "ClipboardList",
    items: ["Led the full administrative and logistical coordination of the Innovation Week, a multidisciplinary academic event organized by the Faculty of Engineering at Universidad de los Andes.", "Oversaw the scheduling and organization of more than 30 academic, entrepreneurial, and networking activities, bringing together over 1,000 participants across engineering, design, and business programs.", "Managed all logistics, including venue setup, supplier coordination, and event timelines.", "Directed communications with companies, high schools, and juries participating in activities such as the Business Breakfast, Directors' Breakfast, and the Shark Tank Uniandino competition.", "Ensured successful operation of workshops and exhibitions, promoting collaboration between academia and the private sector and reinforcing the university's leadership in innovation."]
  }],
  logo: uniandesLogo
}, {
  id: "master",
  startDate: "2022",
  endDate: "2023",
  type: "education",
  title: "Master's in Biomedical Engineering",
  institution: "Universidad de los Andes",
  location: "Bogotá, Colombia",
  shortDescription: "QS Global Ranking: #212 (2025)",
  fullDescription: [],
  sections: [
    {
      title: "Overview",
      icon: "GraduationCap",
      items: [
        "Graduated with the second-highest GPA of the master's cohort (4.8/5.0), conducting research at the interface of nanomaterials, microfluidics, and artificial intelligence.",
        "Integrated experimental and computational methods to accelerate the development of 3D bioprinted tissue models and low-cost biomedical devices."
      ]
    },
    {
      title: "Thesis – Multiphysics Modeling of Magnetically Assisted Spheroid Fusion",
      icon: "FlaskConical",
      items: [
        {
          text: "Title: A mathematical phase-field model predicts superparamagnetic nanoparticle-accelerated fusion of HeLa spheroids for field-guided biofabrication (Scientific Reports, 2025)",
          link: {
            label: "View Paper",
            url: "https://www.nature.com/articles/s41598-025-04495-2"
          }
        },
        "Developed a robust multiphysics computational model coupling magnetostatics, fluid dynamics, and cell mechanics to predict and control the fusion of SPION-labeled spheroids under magnetic fields.",
        "The framework, implemented in COMSOL Multiphysics, integrated: Phase-field equations for viscoelastic fusion and neck growth (Differential Adhesion Hypothesis-consistent). Magnetic field solver for NdFeB sources to compute B, H, and scalar potential; magnetic gradients generated magnetophoretic forces that drive tissue coalescence. Particle tracing & drag dynamics (Haider–Levenspiel model) to evaluate cell motion and fusion rates. Numerical solvers: GMRES + multigrid (stationary) and MUMPS (time-dependent), with adaptive meshing for stability.",
        "Experimental validation: SPIONs characterized via FTIR, zeta potential, TGA, D²TG, and TEM; fusion tracked by confocal imaging and Python-based quantitative analysis.",
        "Results: Magnetic actuation reduced spheroid fusion time from ~7 days to ~48 h, achieving R² ≈ 0.99 between simulated and experimental profiles across 2–4 spheroid systems. The model remains stable under increasing magnetic gradients and spheroid numbers, demonstrating predictive robustness and biomedical relevance.",
        "Skills demonstrated: multiphysics simulation (AC/DC, Particle Tracing), coupled PDE systems, numerical solver configuration, nanomaterial synthesis and characterization, and quantitative image analysis."
      ]
    },
    {
      title: "Publications",
      icon: "BookOpenCheck",
      items: [
        {
          text: "Molecules (2022): Study of Spheroids Fusion via Multiphysics Simulations — Designed and validated a magnetically coupled fusion model; quantified tissue coalescence under magnetic gradients.",
          link: {
            label: "View Paper",
            url: "https://doi.org/10.3390/molecules27196198"
          }
        },
        {
          text: "Polymers (2023): Low-Cost Microfluidic Devices for Biomedical Applications — Co-authored a comprehensive review on polymer-based microfluidic fabrication (PDMS, PMMA, thermoplastics) for organ-on-chip devices.",
          link: {
            label: "View Paper",
            url: "https://doi.org/10.3390/polym15071742"
          }
        },
        {
          text: "Frontiers in Bioengineering & Biotechnology (2023): Breaking the Clean Room Barrier — Analyzed surface functionalization methods and low-cost polymer manufacturing for microfluidic devices.",
          link: {
            label: "View Paper",
            url: "https://doi.org/10.3389/fbioe.2023.1176557"
          }
        },
        {
          text: "Education for Chemical Engineers (2022): Critique: Simulation Apps — Authored a CFD-based pedagogical critique of a bioreactor simulation tool (Sartorius D-DCU 100 L), highlighting COMSOL App Builder as a resource for accessible process simulation.",
          link: {
            label: "View Paper",
            url: "https://doi.org/10.1016/j.ece.2022.11.001"
          }
        }
      ]
    },
    {
      title: "Conferences & Oral Presentations",
      icon: "ClipboardList",
      items: [
        "ACS Fall 2023, Oral Presentation — Low-cost microfluidic device for efficient assembly of cell spheroids: modeling, simulation, manufacture, and testing.",
        "ACS Fall 2022, Oral Presentation — Design, simulation, and testing of a pinched-flow microfluidic geometry to produce uniform spheroids for 3D bioprinting.",
        "2nd International Electronic Conference on Biomolecules (2022) — Study of Spheroids Fusion via Multiphysics Simulations: Feasibility of Applying Permanent Magnetic Field Gradients (Poster Presentation)."
      ]
    },
    {
      title: "Core Competencies",
      icon: "GraduationCap",
      items: [
        "Multiphysics modeling (CFD, Magnetostatics, Laminar Flow).",
        "AI-assisted simulation analysis and automation (Python).",
        "Microfluidic device design and low-cost fabrication.",
        "Polymer characterization and surface modification.",
        "Experimental validation of computational predictions.",
        "Advanced scientific communication (oral & written)."
      ]
    }
  ],
  achievements: ["Thesis published in Scientific Reports", "Second-highest GPA in cohort"],
  logo: uniandesLogo,
  ranking: "QS #212"
}, {
  id: "gna",
  startDate: "Dec 2023",
  endDate: "Apr 2025",
  type: "work",
  title: "Research Assistant",
  institution: "Grupo de Neurociencias de Antioquia (GNA)",
  location: "Universidad de Antioquia",
  shortDescription: "Nanomaterials and neurobiology research",
  fullDescription: [],
  sections: [
    {
      title: "Overview",
      icon: "GraduationCap",
      items: [
        "Conducted advanced interdisciplinary research at the intersection of nanotechnology, molecular neurobiology, and artificial intelligence.",
        "Main research focus areas included the design of nanobiosensors, AI-driven molecular prediction models, synthesis and characterization of multifunctional nanomaterials, and computational modeling of nanoscale biomedical systems."
      ]
    },
    {
      title: "Key Research Focus",
      icon: "FlaskConical",
     items: [
  "1 Artificial Intelligence & Computational Modeling",
  "Designed, trained, and validated a neural network predicting lipid–protein interactions, supporting early diagnosis of neurodegenerative diseases.",
  "Implemented data preprocessing and model validation strategies to improve predictive accuracy and biological interpretability.",
  "Integrated in-silico modeling with wet-lab data, enabling explainable AI workflows for lipidomic analysis.",

  "2 Nanomaterial Synthesis & Characterization",
  "Synthesized and characterized diverse nanostructures: iron oxide nanoparticles (magnetite & maghemite), metal–organic frameworks (MOFs) with biomedical functionality, polymeric nanoparticles for controlled drug delivery, and carbon quantum dots (CQDs) for fluorescence-based biosensing.",
  "Applied TEM, FTIR, XRD, DLS, zeta potential, and magnetometry (VSM) to ensure reproducibility and surface control.",
  "Investigated peptide immobilization on nanostructured surfaces, both experimentally and through molecular dynamics simulations (GROMACS) to assess binding stability and orientation under physiological conditions.",

  "3 Microfluidic & Multiphysics Simulation",
  "Developed lab-on-a-chip platforms optimized through COMSOL Multiphysics simulations, coupling laminar flow, diffusion, and electromagnetic fields.",
  "Designed chips for lipid–protein interaction assays and magnetic nanoparticle manipulation, achieving sub-millimeter precision in particle sorting and detection."
]

    },
    {
      title: "Publications",
      icon: "BookOpenCheck",
      items: [
        {
          text: "Frontiers in Bioengineering & Biotechnology (2024) — Redefining vascular repair: revealing cellular responses on PEUU–gelatin electrospun vascular grafts for endothelialization and immune responses on in-vitro models",
          link: {
            label: "View Paper",
            url: "https://doi.org/10.3389/fbioe.2024.1369550"
          }
        },
        {
          text: "Micromachines (2024) — Zweifach–Fung microfluidic device for efficient microparticle separation: cost-effective fabrication using CO₂ laser-ablated PMMA",
          link: {
            label: "View Paper",
            url: "https://doi.org/10.3390/mi15091121"
          }
        },
        {
          text: "Micromachines (2024) — Magnetic-field-enhanced microfluidic separation for biosensing and nanoparticle transport optimization",
          link: {
            label: "View Paper",
            url: "https://doi.org/10.3390/mi15111299"
          }
        },
        {
          text: "ACS Omega (2024) — Design, characterization, and evaluation of textile systems and coatings for sports use applications in the design of biomedical devices",
          link: {
            label: "View Paper",
            url: "https://doi.org/10.1021/acsomega.4c07266"
          }
        }
      ]
    },
    {
      title: "Conference Presentations",
      icon: "ClipboardList",
      items: [
        "PPS 2024 – 39th International Conference of the Polymer Processing Society — Accelerating Tissue Maturation through Magnetized Cell Spheroids: A Bioprinting Approach Enhanced by Stochastic Multiphysics Modeling in Tissue Engineering (Oral Presentation)",
        "Colegio Colombiano de Neurociencias (@COLNE) – 2025 — Fluorescent Nanoparticles on a Chip as an Early Lipid Signature-Based Diagnostic Tool for Alzheimer's Disease Risk (Oral Presentation)"
      ]
    },
    {
      title: "Core Skills Developed",
      icon: "GraduationCap",
      items: [
        "Deep learning for biological interaction prediction (Python, TensorFlow).",
        "Multiphysics simulation (COMSOL AC/DC, laminar flow, particle tracing).",
        "Molecular dynamics (GROMACS) for peptide–nanoparticle interaction analysis.",
        "Nanomaterial synthesis (iron oxides, MOFs, CQDs, polymers).",
        "Integration of in-silico and experimental data in neurobiological research.",
        "Advanced scientific writing and oral presentation at international conferences."
      ]
    }
  ],
  highlights: ["Artificial Intelligence & Data-Driven Research", "Nanomaterial Design & Characterization",
  "CFD & Molecular Dynamics Simulations"],
  links: [{
    label: "Visit GNA",
    url: "https://gna.org.co/neurobiologia-celular-y-molecular/"
  }],
  logo: gnaLogo
}, {
  id: "professor",
  startDate: "Apr 2025",
  endDate: "Present",
  type: "work",
  title: "Instructor Professor",
  institution: "Universidad de los Andes",
  location: "Department of Biomedical Engineering",
  shortDescription: "Teaching + Research + Innovation",
  fullDescription: [],
  sections: [
    {
      title: "Courses & Teaching",
      icon: "GraduationCap",
      items: [
        "Design of Experiments & Biostatistics — Foundation in probability, statistical inference, and experimental design; emphasizes data‑driven modeling and machine learning.",
        "Nanoengineering — Integrates computational and experimental approaches for nanomaterial synthesis and microfluidic device design. Combines COMSOL simulations with lab validation and encourages innovative biomedical solutions.",
        "Biomaterials — Covers physical, chemical, and biocompatibility requirements for synthetic and natural materials; emphasizes polymer synthesis, surface functionalization, 3D printing, and simulation of material–tissue interactions.",
        "3D Bioprinting — Introduces bioink formulation and printing technologies (extrusion, inkjet, laser) with hands‑on CAD, rheological characterization, and multiphysics modeling.",
        "Nanobiotechnology — Explores quantum dots, metallic nanoparticles, liposomes, polymeric and MOF nanomaterials; uses GROMACS for molecular dynamics and predicts nanomaterial–biomolecule interactions."
      ]
    },
    {
      title: "Research Focus",
      icon: "FlaskConical",
      items: [
        "AI & Computational Modeling — Developed and validated a neural network for lipid–protein interaction prediction and early neurodegenerative disease diagnostics. Coupled in‑silico models with experimental data for improved biological interpretation.",
        "Nanomaterial Synthesis & Characterization — Synthesized iron oxide nanoparticles, MOFs, polymeric nanocarriers, and carbon quantum dots; characterized using TEM, FTIR, XRD, DLS, zeta potential, and magnetometry; investigated peptide immobilization via experiments and molecular dynamics simulations.",
        "Microfluidic & Multiphysics Simulation — Designed lab‑on‑a‑chip devices with COMSOL simulations for particle separation and magnetic nanoparticle manipulation, achieving high recall and precision."
      ]
    },
{
  title: "Publications & Book Chapters",
  icon: "BookOpenCheck",
  items: [
    {
      text: "Scientific Reports (2025) – A mathematical phase-field model predicts superparamagnetic nanoparticle-accelerated fusion of HeLa spheroids for field-guided biofabrication.",
      link: {
        label: "View Paper",
        url: "https://www.nature.com/articles/s41598-025-04495-2"
      }
    },
    {
      text: "Expert Opinion on Drug Delivery (2025) – Magnetoliposomes for nanomedicine: synthesis, characterization, and applications in drug, gene, and peptide delivery.",
      link: {
        label: "View Paper",
        url: "https://doi.org/10.1080/17425247.2025.2506829"
      }
    },
    {
      text: "RSC Drug Delivery & Biomolecular Technologies (2025) – Nanocarrier design for targeted drug delivery.",
      link: {
        label: "View Paper",
        url: "https://doi.org/10.1039/D4BM01361A"
      }
    },
    {
      text: "Nanocarriers for Nucleic Acids and Proteins (Taylor & Francis, 2025) – Chapter: Carbon-Based Nanocarriers — Carbon Nanotubes, Graphene Oxide, Fullerenes, and Carbon Dots.",
      link: {
        label: "View Chapter",
        url: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003473183-6/carbon-based-nanocarriers-cristian-rodr%C3%ADguez-paula-guzm%C3%A1n-sastoque-coryna-rodriguez-bazurto-juan-rojas-hern%C3%A1ndez-luis-reyes-juan-cruz"
      }
    },
    {
      text: "Nanocarriers for Nucleic Acids and Proteins (Taylor & Francis, 2025) – Chapter: Delivery of Nucleic Acids Using Nanocarriers — siRNA and miRNA Delivery, mRNA and DNA Delivery, CRISPR-Cas Systems.",
      link: {
        label: "View Chapter",
        url: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003473183-11/delivery-nucleic-acids-using-nanocarriers-paula-guzmán-sastoque-maría-camila-monsalve-cristian-rodríguez-stiven-castellanos-juan-cruz-luis-reyes"
      }
    },
    {
      text: "Antimicrobial Peptides: A Roadmap for Accelerating Discovery and Development (Elsevier, 2025) – Chapter: Classical and emerging approximations for the screening of antimicrobial peptide libraries.",
      link: {
        label: "View Chapter",
        url: "https://www.sciencedirect.com/science/article/abs/pii/B9780443153938000099"
      }
    }
  ]
},
    {
      title: "Teaching Excellence & Mentoring",
      icon: "ClipboardList",
      items: [
        "Average teaching evaluation: 4.9/5.0, among the highest in the Faculty of Engineering.",
        "Only Instructor Professor in the Biomedical Engineering Department; mentor for undergraduate and master's theses in Biomedical and Chemical Engineering.",
        "Leads interdisciplinary projects combining AI, materials science, microfabrication, and simulation."
      ]
    }
  ],
  highlights: [
    "AI‑Driven Statistical & Machine Learning Foundations",
    "Advanced Nanomaterials & Microfluidics",
    "Multiphysics Modeling & In‑Silico Simulation"
  ],
  logo: uniandesLogo
}];
export const AcademicTimeline = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'center',
    dragFree: true,
    containScroll: 'trimSnaps',
    startIndex: events.length - 1 // Start from last card
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);
  const openModal = (event: TimelineEvent, index: number) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
    // Auto-center the selected card
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedEvent(null), 300);
  };
  return <section className="min-h-0 h-auto bg-gradient-to-br from-white via-blue-50/30 to-white px-6 py-8 relative font-[Roboto,sans-serif] overflow-visible isolate">
      {/* Scientific background motifs */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] overflow-visible">
        {/* Molecular structures */}
        <svg className="absolute top-10 left-10 w-64 h-64" viewBox="0 0 200 200">
          <circle cx="50" cy="50" r="8" fill="currentColor" className="text-primary" />
          <circle cx="100" cy="70" r="8" fill="currentColor" className="text-primary" />
          <circle cx="150" cy="50" r="8" fill="currentColor" className="text-primary" />
          <line x1="50" y1="50" x2="100" y2="70" stroke="currentColor" strokeWidth="2" className="text-primary" />
          <line x1="100" y1="70" x2="150" y2="50" stroke="currentColor" strokeWidth="2" className="text-primary" />
        </svg>
        
        {/* Neural network */}
        <svg className="absolute top-1/3 right-20 w-80 h-80" viewBox="0 0 200 200">
          {[...Array(3)].map((_, i) => <circle key={i} cx={50 + i * 50} cy="50" r="6" fill="currentColor" className="text-secondary" />)}
          {[...Array(4)].map((_, i) => <circle key={i} cx={30 + i * 45} cy="120" r="6" fill="currentColor" className="text-secondary" />)}
        </svg>

        {/* Nanostructures */}
        <svg className="absolute bottom-20 left-1/4 w-72 h-72" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="40" stroke="currentColor" fill="none" strokeWidth="1" className="text-primary" />
          <circle cx="100" cy="100" r="30" stroke="currentColor" fill="none" strokeWidth="1" className="text-primary" />
          <circle cx="100" cy="100" r="20" stroke="currentColor" fill="none" strokeWidth="1" className="text-primary" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10 overflow-visible h-auto min-h-0">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-5xl font-bold text-[hsl(var(--navy))]">
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advancing Biomedical Engineering through Nanotechnology, Artificial Intelligence, and Multiphysics Simulation
          </p>
        </div>

        {/* Timeline Legend */}
        <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-gold to-amber-500 shadow-md"></div>
            <span>Professional Positions (Above)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary shadow-md"></div>
            <span>Education Milestones (Below)</span>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative py-8 h-auto min-h-0 overflow-visible">
          {/* Horizontal glowing timeline ribbon with shadow */}
          <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 hidden lg:block z-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-primary/30 to-gold/20 rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-gold/40 via-primary/50 to-gold/40 rounded-full blur-sm animate-pulse"></div>
            {/* Subtle shadow behind the line */}
            <div className="absolute inset-x-0 -inset-y-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent blur-xl"></div>
          </div>

          {/* Navigation Buttons - Hidden on large screens */}
          <Button variant="outline" size="icon" onClick={scrollPrev} disabled={!canScrollPrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border-primary/20 hover:border-primary/40 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 xl:hidden" aria-label="Previous">
            <ChevronLeft className="w-6 h-6 text-primary" />
          </Button>
          
          <Button variant="outline" size="icon" onClick={scrollNext} disabled={!canScrollNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border-primary/20 hover:border-primary/40 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 xl:hidden" aria-label="Next">
            <ChevronRight className="w-6 h-6 text-primary" />
          </Button>

          {/* Carousel Container */}
          <div className="overflow-visible h-auto min-h-0 pt-[110px] pb-[90px]" ref={emblaRef} style={{
          clipPath: 'none'
        }}>
            <div className="flex flex-col lg:flex-row touch-pan-y scroll-snap-x snap-mandatory gap-9 px-20 xl:gap-8 xl:px-4 xl:justify-center py-0 overflow-visible h-auto min-h-0">
              {events.map((event, index) => {
              const isEducation = event.type === "education";
              const isAbove = !isEducation; // Professional above, education below
              const shouldAlternate = index % 2 === 0;
              return <div key={event.id} className={`relative flex-shrink-0 xl:flex-shrink flex flex-col items-center animate-fade-in my-10 lg:my-0 snap-center overflow-visible ${isAbove ? 'lg:-translate-y-24' : 'lg:translate-y-24'}`} style={{
                animationDelay: `${index * 100}ms`,
                width: '280px'
              }}>
                    {/* Vertical connector line to ribbon */}
                    <div className={`absolute left-1/2 w-px -translate-x-1/2 bg-gradient-to-b hidden lg:block z-10 opacity-60 ${isAbove ? 'top-full h-16 from-gold/60 to-transparent' : 'bottom-full h-16 from-primary/60 to-transparent'}`}></div>
                    
                    {/* Circle marker on the line */}
                    <div className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full hidden lg:block z-10 transition-all duration-300 group-hover:scale-150 ${isAbove ? 'top-full mt-16 bg-gold shadow-lg shadow-gold/50' : 'bottom-full mb-16 bg-primary shadow-lg shadow-primary/50'}`}></div>

                    {/* Capsule Card - Fused Icon + Info */}
                    <button onClick={() => openModal(event, index)} className={`relative z-20 group cursor-pointer transition-all duration-500 hover:scale-105 ${isAbove ? 'hover:-translate-y-2' : 'hover:translate-y-2'} focus:outline-none focus:ring-2 focus:ring-offset-2 ${isEducation ? 'focus:ring-primary' : 'focus:ring-gold'} w-full overflow-visible`} aria-label={`View details for ${event.title}`}>
                    {/* Glassmorphism Card */}
                    <div className={`relative backdrop-blur-md bg-white/70 border-2 rounded-[28px] px-4 py-5 shadow-xl w-full overflow-visible ${isEducation ? 'border-primary/20 hover:border-primary/40 hover:shadow-primary/20 hover:shadow-2xl' : 'border-gold/20 hover:border-gold/40 hover:shadow-gold/20 hover:shadow-2xl'} transition-all duration-500`}>
                      
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 rounded-3xl opacity-5 bg-gradient-to-br ${isEducation ? 'from-primary to-secondary' : 'from-gold to-amber-500'}`}></div>
                      
                      {/* Subtle glow effect on hover */}
                      <div className={`absolute -inset-1 rounded-[28px] opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-lg ${isEducation ? 'bg-gradient-to-br from-primary/20 to-secondary/20' : 'bg-gradient-to-br from-gold/20 to-amber-500/20'}`}></div>

                      <div className="relative space-y-3">
                        {/* Icon Header */}
                        <div className="flex items-center justify-center">
                          {isEducation ? <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/30 flex items-center justify-center">
                              <GraduationCap className="w-7 h-7 text-white" />
                            </div> : <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold to-amber-500 shadow-lg shadow-gold/30 flex items-center justify-center">
                              <Briefcase className="w-7 h-7 text-white" />
                            </div>}
                        </div>

                        {/* Date + QS row */}
                        <div className="flex items-center justify-center gap-2 flex-wrap">
                          <Badge className={`text-xs font-semibold px-3 py-1 ${isEducation ? "bg-gradient-to-r from-primary to-secondary text-white" : "bg-gradient-to-r from-gold to-amber-500 text-white"}`}>
                            {event.startDate} — {event.endDate}
                          </Badge>

                          {event.ranking && <Badge className="text-[10px] font-semibold px-2 py-0.5 bg-amber-400 text-white" aria-label={`QS World Rank ${event.ranking.replace('QS #', '')}`}>
                              <Award className="w-3 h-3 mr-1 inline-block" />
                              {event.ranking}
                            </Badge>}
                        </div>

                        {/* Logo */}
                        {event.logo && <div className="flex justify-center">
                            <img src={event.logo} alt={`${event.institution} logo`} className="h-10 w-10 object-contain opacity-80" />
                          </div>}

                        {/* Title */}
                        <h3 className="text-base font-bold text-[hsl(var(--navy))] text-center leading-tight">
                          {event.title}
                        </h3>

                        {/* Institution */}
                        <div className="text-center space-y-1">
                          <p className="text-sm font-semibold text-foreground">
                            {event.institution}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {event.location}
                          </p>
                        </div>

                        {/* Hover hint */}
                        <p className={`text-xs text-center pt-2 font-medium transition-all duration-300 group-hover:scale-105 ${isEducation ? 'text-primary' : 'text-gold'}`}>
                          Click to view details →
                        </p>
                      </div>
                    </div>
                  </button>
                </div>;
            })}
            </div>
          </div>

          {/* Swipe hint for mobile/tablet */}
          <div className="text-center mt-8 text-sm text-muted-foreground xl:hidden">
            <p>← Swipe to explore timeline →</p>
          </div>
        </div>

        {/* Footer Tagline */}
        
      </div>

      {/* Modal Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto fixed z-[1000]">
          {selectedEvent && <>
              <DialogHeader>
                <div className="flex items-start gap-4 mb-4">
                  {/* Logo */}
                  {selectedEvent.logo && <img src={selectedEvent.logo} alt={`${selectedEvent.institution} logo`} className="h-16 w-16 object-contain flex-shrink-0" />}
                  
                  <div className="flex-1">
                    {/* Date Badge */}
                    <Badge className={`mb-3 ${selectedEvent.type === "education" ? "bg-gradient-to-r from-primary to-secondary text-white" : "bg-gradient-to-r from-[hsl(var(--navy))] to-[hsl(var(--blue-medium))] text-white"}`}>
                      {selectedEvent.startDate} — {selectedEvent.endDate}
                      {selectedEvent.ranking && <span className="ml-2 inline-flex items-center">
                          <Award className="w-3 h-3 mr-1" />
                          {selectedEvent.ranking}
                        </span>}
                    </Badge>
                    
                    {/* Title */}
                    <DialogTitle className="text-2xl font-bold text-[hsl(var(--navy))] mb-2">
                      {selectedEvent.title}
                    </DialogTitle>
                    
                    {/* Institution */}
                    <p className="text-base font-semibold text-foreground">
                      {selectedEvent.institution}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {selectedEvent.location}
                    </p>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                {/* Sections or Full Description */}
                {selectedEvent.sections?.length ? selectedEvent.sections.map((sec, i) => {
              const IconCmp = SectionIconMap[sec.icon];
              return <div key={i} className={i > 0 ? "border-t border-primary/10 pt-6" : ""}>
                        <h4 className="text-lg font-bold text-[hsl(var(--navy))] flex items-center gap-2">
                          <IconCmp className="w-5 h-5 text-primary" />
                          {sec.title}
                        </h4>

                        <ul className="space-y-2 mt-3">
                          {sec.items.map((it, idx) => {
                            const isRich = typeof it !== "string";
                            const text = isRich ? it.text : it;
                            const link = isRich && it.link ? it.link : undefined;

                            return (
                              <li
                                key={idx}
                                className="flex items-start justify-between gap-3 text-sm text-foreground"
                              >
                                {/* Left: bullet + text */}
                                <div className="flex items-start gap-3 pr-2">
                                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                                  <span>{text}</span>
                                </div>

                                {/* Right: small button (if item has a link) */}
                                {link ? (
                                  <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-primary/30 text-primary hover:bg-primary/5 text-xs font-medium transition flex-shrink-0"
                                    aria-label={`Open: ${link.label}`}
                                  >
                                    {link.label}
                                    <ExternalLink className="w-3.5 h-3.5" />
                                  </a>
                                ) : null}
                              </li>
                            );
                          })}
                        </ul>

                        {sec.links?.length ? <div className="flex flex-wrap gap-3 mt-4">
                            {sec.links.map((lnk, j) => <a key={j} href={lnk.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:text-secondary hover:underline font-medium">
                                {lnk.label}
                                <ExternalLink className="w-4 h-4" />
                              </a>)}
                          </div> : null}
                      </div>;
            }) : <div className="space-y-3">
                    <h4 className="text-lg font-bold text-[hsl(var(--navy))] flex items-center gap-2">
                      {selectedEvent.type === "education" ? <GraduationCap className="w-5 h-5 text-primary" /> : <Briefcase className="w-5 h-5 text-primary" />}
                      Overview
                    </h4>
                    <ul className="space-y-2">
                      {selectedEvent.fullDescription.map((desc, i) => <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                          <span className="text-primary mt-1 flex-shrink-0">•</span>
                          <span>{desc}</span>
                        </li>)}
                    </ul>
                  </div>}

                {/* Achievements */}
                {selectedEvent.achievements && selectedEvent.achievements.length > 0 && <div className="space-y-3 border-t border-primary/10 pt-6">
                    <h4 className="text-lg font-bold text-[hsl(var(--navy))] flex items-center gap-2">
                      <Award className="w-5 h-5 text-gold" />
                      Key Achievements & Courses
                    </h4>
                    <ul className="space-y-2">
                      {selectedEvent.achievements.map((achievement, i) => <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                          <Award className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>)}
                    </ul>
                  </div>}

                {/* Highlights */}
                {selectedEvent.highlights && selectedEvent.highlights.length > 0 && <div className="flex flex-wrap gap-2 border-t border-primary/10 pt-6">
                    {selectedEvent.highlights.map((highlight, i) => <Badge key={i} variant="secondary" className="text-sm py-1 px-3">
                        {highlight}
                      </Badge>)}
                  </div>}

                {/* Links */}
                {selectedEvent.links && selectedEvent.links.length > 0 && <div className="flex flex-wrap gap-3 border-t border-primary/10 pt-6">
                    {selectedEvent.links.map((link, i) => <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:text-secondary hover:underline font-medium">
                        {link.label}
                        <ExternalLink className="w-4 h-4" />
                      </a>)}
                  </div>}
              </div>
            </>}
        </DialogContent>
      </Dialog>
    </section>;
};
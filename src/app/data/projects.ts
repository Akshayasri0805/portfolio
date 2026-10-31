import { portfolioLinks } from "./links";
import euclidImage from "../../images/euclid.png";
import ruchiImage from "../../images/ruchi.png";
import bankOfBarodaImage from "../../images/bank-of-baroda.jpeg";

export const projects = [
  {
    id: "euclid",
    slug: "euclid",
    title: "Euclid",
    category: "Scientific CAD Platform",
    image: euclidImage,
    imageFit: "contain",
    naturalAspect: true,
    year: "2025—26",
    client: "Aegion Dynamic Solutions",
    role: "End-to-end UX/UI Design",
    description: "A scientific CAD platform for microfluidic chip design, created to help engineers and researchers navigate complex technical workflows with greater clarity.",
    details: [
      "Led UX audits, competitive analysis, and workflow research.",
      "Restructured information architecture, navigation, and core user flows.",
      "Designed a canvas-first workspace with streamlined toolbars.",
      "Built reusable UI components and interaction patterns.",
      "Collaborated with engineers and stakeholders to translate technical requirements.",
    ],
    caseStudyUrl: portfolioLinks.euclidCaseStudy,
  },
  {
    id: "ruchi",
    slug: "ruchi",
    title: "Ruchi",
    category: "AI Conversational Product",
    image: ruchiImage,
    year: "2025—26",
    client: "Aegion Dynamic Solutions",
    role: "Interaction & Product Design",
    description: "A voice-first AI cooking assistant focused on hands-free interaction, contextual guidance, and human-centered support throughout the cooking experience.",
    details: [
      "Designed onboarding and personalization experiences.",
      "Mapped journeys across discovery, recording, publishing, and community engagement.",
      "Created AI chat and voice-led cooking interactions.",
      "Designed cooking progress, timers, and contextual recovery guidance.",
      "Prototyped interactions in Figma and documented motion behavior.",
    ],
    caseStudyUrl: portfolioLinks.ruchiCaseStudy,
  },
  {
    id: "bank-of-baroda",
    slug: "bank-of-baroda",
    title: "Bank of Baroda",
    category: "UX Audit & Usability Analysis",
    image: bankOfBarodaImage,
    imageFit: "contain",
    naturalAspect: true,
    year: "2024—25",
    client: "XIGAA",
    role: "UX Research & Audit",
    description: "A structured UX audit of the Bank of Baroda mobile application, approached as a usability analysis and research project.",
    details: [
      "Reviewed the mobile experience through a UX audit lens.",
      "Structured the work around usability analysis and research.",
      "Documented observations without inventing unsupported metrics or outcomes.",
    ],
    caseStudyUrl: portfolioLinks.bankOfBarodaAudit,
  },
];

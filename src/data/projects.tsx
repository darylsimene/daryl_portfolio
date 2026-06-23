import szGuidelines from "../assets/sz_guidelines.png";
import advocate from "../assets/advocate.png";
import pos from "../assets/pos_empCredSystem.png";
import ai_web from "../assets/ai_web_apps.png";
import szLogo from "../assets/sz_logos.png";

export type Project = {
    id: number;
    title: string;
    coverImage: string;
    carouselImages: string[];
    figmaUrl?: string;
    websiteUrl?: string;
    tags: string[];
    description: string;
};

export const projects: Project[] = [
    {
        id: 1,
        title: "SupportZebra Web Design Guidelines",
        coverImage: szGuidelines,
        carouselImages: [],
        figmaUrl: "https://www.figma.com/design/YOUR_FILE_KEY/YOUR_FILE_NAME",
        tags: ["Figma", "UI/UX"],
        description:
            "Architected a unified design system from Figma variables to a shared React/Tailwind NPM package, eliminating UI fragmentation across all enterprise tools and significantly accelerating frontend development cycles.",
    },
    {
        id: 2,
        title: "Advocate Landing Site and Application Tracking System",
        coverImage: advocate,
        carouselImages: [],
        figmaUrl: "https://www.figma.com/design/YOUR_FILE_KEY/YOUR_FILE_NAME",
        tags: ["Figma", "UI/UX"],
        description:
            "A comprehensive case study demonstrating a full-scale digital transformation for a BPO enterprise. From creating the core brand identity, a landing page, and redesigning a data-dense ATS into an intuitive, high-velocity workspace.",
    },
    {
        id: 3,
        title: "Multi-Store POS and Employee Credit System",
        coverImage: pos,
        carouselImages: [],
        figmaUrl: "https://www.figma.com/design/YOUR_FILE_KEY/YOUR_FILE_NAME",
        tags: ["Figma", "UI/UX"],
        description:
            "A scalable multi-store POS system engineered with deep corporate integrations. It synchronizes multi-location retail operations while instantly connecting to an internal employee credit network for frictionless workplace purchases.",
    },
];

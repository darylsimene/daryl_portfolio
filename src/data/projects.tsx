import szGuidelines from "../assets/sz_guidelines.png";
import advocate from "../assets/advocate.png";
import pos from "../assets/pos_empCredSystem.png";
import ai_web from "../assets/ai_web_apps.png";
import szLogo from "../assets/sz_logos.png";

//sz web design
import szdg01 from "../assets/sz-design-guidelines/szdg-01.png";
import szdg02 from "../assets/sz-design-guidelines/szdg-02.png";
import szdg03 from "../assets/sz-design-guidelines/szdg-03.png";

//advocate
import advocate01 from "../assets/advocate/advocate-01.png";
import advocate02 from "../assets/advocate/advocate-02.png";
import advocate03 from "../assets/advocate/advocate-03.png";
import advocate04 from "../assets/advocate/advocate-04.png";
import advocate05 from "../assets/advocate/advocate-05.png";
import advocate06 from "../assets/advocate/advocate-06.png";

//pos
import pos01 from "../assets/pos/pos-01.png";
import pos02 from "../assets/pos/pos-02.png";

//ai web apps
import ai01 from "../assets/ai-web-apps/ai-01.png";
import ai02 from "../assets/ai-web-apps/ai-02.png";
import ai03 from "../assets/ai-web-apps/ai-03.png";

//sz logos
import szLogos from "../assets/sz-logos/sz-logos.png";
import szLogosAts from "../assets/sz-logos/ats_sc.png";
import szLogosPMS from "../assets/sz-logos/pms_sc.png";
import szLogosRSZrc from "../assets/sz-logos/reszource.png";
import szLogosXpnsz from "../assets/sz-logos/xpensz.png";

//ems
import ems01 from "../assets/ems/ems-01.png";
import ems02 from "../assets/ems/ems-02.png";
import ems03 from "../assets/ems/ems-03.png";

//expensz images for carousel
import xpensz01 from "../assets/xpenSZ/xpensz-01.png";
import xpensz02 from "../assets/xpenSZ/xpensz-02.png";
import xpensz03 from "../assets/xpenSZ/xpensz-03.png";
import xpensz04 from "../assets/xpenSZ/xpensz-04.png";
import xpensz05 from "../assets/xpenSZ/xpensz-05.png";

//lockerflow images for carousel
import lockerflow01 from "../assets/LockerFlow/lf-01.png";
import lockerflow02 from "../assets/LockerFlow/lf-02.png";
import lockerflow03 from "../assets/LockerFlow/lf-03.png";
import lockerflow04 from "../assets/LockerFlow/lf-04.png";
import lockerflow05 from "../assets/LockerFlow/lf-05.png";

//performance management system images for carouse
import spm01 from "../assets/spm/spm-01.png";
import spm02 from "../assets/spm/spm-02.png";
import spm03 from "../assets/spm/spm-03.png";

// nopa
import nopa01 from "../assets/nopa/nopa-01.png";
import nopa02 from "../assets/nopa/nopa-02.png";
import nopa03 from "../assets/nopa/nopa-03.png";

//journey tracker
import jt01 from "../assets/journey-tracker/jt-01.png";
import jt02 from "../assets/journey-tracker/jt-02.png";
import jt03 from "../assets/journey-tracker/jt-03.png";
import jt04 from "../assets/journey-tracker/jt-04.png";

//reszource
import rszrc01 from "../assets/reSZource/rszrc-01.png";
import rszrc02 from "../assets/reSZource/rszrc-02.png";
import rszrc03 from "../assets/reSZource/rszrc-03.png";
import rszrc04 from "../assets/reSZource/rszrc-04.png";
import rszrc05 from "../assets/reSZource/rszrc-05.png";

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
        carouselImages: [szdg01, szdg02, szdg03],
        figmaUrl: "https://www.figma.com/design/jPePA6ynamEQ4kUAbPqp0t/ERP-Global-System-Component?m=auto&t=ip6mOpYwV5fCYrOr-1",
        tags: ["Figma", "UI/UX"],
        description:
            "Architected a unified design system from Figma variables to a shared React/Tailwind NPM package, eliminating UI fragmentation across all enterprise tools and significantly accelerating frontend development cycles.",
    },
    {
        id: 2,
        title: "Advocate Landing Site and Application Tracking System",
        coverImage: advocate,
        carouselImages: [advocate01, advocate02, advocate03, advocate04, advocate05, advocate06],
        figmaUrl: "https://www.figma.com/design/uumh4Dmjxp4DY5CmGnZUal/Advocate?m=auto&t=ip6mOpYwV5fCYrOr-1",
        tags: ["Figma", "UI/UX", "ATS"],
        description:
            "A comprehensive case study demonstrating a full-scale digital transformation for a BPO enterprise. From creating the core brand identity, a landing page, and redesigning a data-dense ATS into an intuitive, high-velocity workspace.",
    },
    {
        id: 3,
        title: "Multi-Store POS and Employee Credit System",
        coverImage: pos,
        carouselImages: [pos01, pos02],
        figmaUrl:
            "https://www.figma.com/design/9h5570RJ2c2ftGqgXuUn0V/Multi-Store-POS-and-Employee-Credit-System?m=auto&t=ip6mOpYwV5fCYrOr-1",
        tags: ["Figma", "UI/UX"],
        description:
            "A multi-store point-of-sale (POS) system integrated with an employee credit management feature. The system allows for seamless transactions across multiple retail locations while providing employees with a credit system to manage their purchases and track their spending.",
    },
    {
        id: 4,
        title: "AI Web Apps for QA and In-App AI Assistant",
        coverImage: ai_web,
        carouselImages: [ai01, ai02, ai03],
        figmaUrl: "https://www.figma.com/design/iU9LEDldjw91pCcJYO2FwP/AI-Assistant-In-App?m=auto&t=ip6mOpYwV5fCYrOr-1",
        tags: ["Figma", "UI/UX"],
        description:
            "A suite of AI-powered web applications designed to enhance user experience and streamline workflows. The applications include a QA system that leverages AI for automated testing and an in-app AI assistant that provides real-time support and guidance to users.",
    },
    {
        id: 5,
        title: "SupportZebra Logos",
        coverImage: szLogo,
        carouselImages: [szLogos, szLogosAts, szLogosPMS, szLogosRSZrc, szLogosXpnsz],
        figmaUrl: "https://www.figma.com/design/UPxpfCGjFKjhIRdAWNsXoE/ERP-SZ-Logos?m=auto&t=ip6mOpYwV5fCYrOr-6",
        tags: ["Figma", "UI/UX"],
        description: " A collection of logos designed for SupportZebra, reflecting the brand's identity and values. ",
    },
    {
        id: 6,
        title: "Employee Management System",
        coverImage: ems01,
        carouselImages: [ems01, ems02, ems03],
        figmaUrl: "https://www.figma.com/design/DMBLbkBU1UQmgTITcHgjoR/inszpire--Employe-Management-System-?m=auto&t=ip6mOpYwV5fCYrOr-6",
        tags: ["Figma", "UI/UX"],
        description:
            "An internal HR web app that centralizes everything about your people — employee profiles, team structures, positions, and HR requests like transfers or info updates — all with configurable approval workflows, role-based access control, and a full audit trail of every change made.",
    },
    {
        id: 7,
        title: "Expense Request Management System",
        coverImage: xpensz01,
        carouselImages: [xpensz01, xpensz02, xpensz03, xpensz04, xpensz05],
        figmaUrl: undefined,
        tags: ["Replit", "AI", "Web App"],
        description:
            "Expensz is for handling reimbursements, cash advances, and purchase orders. Employees submit requests that automatically route through the right chain of approvers — their supervisor(s), any additional reviewers, the comptroller, and the President/COO when needed — with role-based permissions, email notifications, file attachments, and a clear visual workflow that shows where each request is in the approval process and when each step happened.",
    },
    {
        id: 8,
        title: "LockerFlow",
        coverImage: lockerflow01,
        carouselImages: [lockerflow01, lockerflow02, lockerflow03, lockerflow04, lockerflow05],
        figmaUrl: undefined,
        tags: ["Replit", "AI", "Web App"],
        description:
            "Lockerflow is a workplace storage management system where employees scan QR codes to check in and check out storage units — lockers, phone holders, umbrella racks, helmets, and headsets — while an admin dashboard gives managers a real-time view of usage, transaction history, and inventory across multiple buildings and floors.",
    },
    {
        id: 9,
        title: "Performance Management System",
        coverImage: spm01,
        carouselImages: [spm01, spm02, spm03],
        figmaUrl: "https://www.figma.com/design/eJcprZ09CzFpZxpdezcBDJ/Performance-Management-System?node-id=1-7194&t=3xxCH28Z0T185COr-1",
        tags: ["Replit", "AI", "Web App", "Figma"],
        description:
            "A web app that helps manage the full employee performance lifecycle — from setting goals and tracking progress through check-ins, to running structured evaluation workflows with a 3-signature approval process. Managers and admins get reporting dashboards, completion rate tracking, and automated email reminders, while employees can view their own goals and evaluations. The system also handles more advanced scenarios like Corrective Action Plans (CAPs) for performance issues, configurable deadlines per department, and role-based access so that admins, managers, and employees each see only what's relevant to them",
    },
    {
        id: 10,
        title: "Notice of Performance Action (NOPA) Generator",
        coverImage: nopa02,
        carouselImages: [nopa01, nopa02, nopa03],
        tags: ["Replit", "AI", "Web App"],
        description:
            "A web app for HR teams to create and manage Notice of Personnel Action forms. It covers regularizations, promotions, salary adjustments, and transfers through guided multi-step forms, digital signature approvals, and a reports dashboard with full role-based access control.",
    },

    {
        id: 11,
        title: "Reservation and Boooking System",
        coverImage: rszrc02,
        carouselImages: [rszrc01, rszrc02, rszrc03, rszrc04, rszrc05],
        tags: ["Replit", "AI", "Web App"],
        description:
            "Reszource Management is a smart workspace reservation system built for SupportZebra that need to manage shared physical spaces efficiently. It lets employees browse and book meeting rooms or workstations, while giving administrators full control over floor plans, seat assignments, and asset tracking. The system keeps everyone in sync in real time, so availability is always accurate across the entire organization.",
    },
    {
        id: 12,
        title: "Journey Tracker",
        coverImage: jt04,
        carouselImages: [jt01, jt02, jt03, jt04],
        tags: ["Replit", "AI", "Web App"],
        description:
            "JourneyTracker is an internal HR tool that helps a company track employees through every stage of their work lifecycle — from the moment they apply, through onboarding, and into active employment.",
    },
];

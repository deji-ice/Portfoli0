// import { DockerLogo, ExpressLogo, JavascriptLogo, MongoDbLogo, NextJsLogo, PostmanLogo, ReactLogo, SassLogo, TailwindLogo, VercelLogo, ViteLogo } from "@/Assets";
import { JobExperience, Project } from "@/types/types";


export const projects: Project[] = [
  {
    id: crypto.randomUUID(),
    projectName: "HypurScope",
    projectImage: "https://res.cloudinary.com/dhvwthnzq/image/upload/v1755956439/hyperscope/e244d187-992a-422c-adfb-1907049a0634.png",
    projectDescription: `HypurScope is a real-time blockchain explorer for HyperEVM, HyperLiquid L1, and HyperCore, turning raw blockchain data into user-friendly analytics, visualizations, and actionable notifications. It aggregates data from multiple APIs, delivering clear insights, real-time tracking, and alerts to developers, traders, and analysts.`,
    demoLink: "https://hypurscope.xyz/",
    githubLink: "https://github.com/hypurscope/hypurscope-fe",
    tools: [
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "ReChart",
      "shadcnUi",
    ],
    year: 2025,
  },
  {
    id: crypto.randomUUID(),
    projectName: "Afren.ai",
    projectImage: "https://res.cloudinary.com/dhvwthnzq/image/upload/v1752309935/afren_mnsv72.png",
    projectDescription: `I contributed to developing the user-facing platform for Afren.ai, an AI-first hiring solution designed to remove guesswork from the freelance marketplace. By building a responsive, optimized frontend with React, TypeScript, Redux, Tailwind CSS, and Framer Motion, I helped create a seamless system where businesses connect with verified African talent through AI-powered interviews and real skills assessments. My work on the AI matchmaking flow and performance optimization ensured smooth, accurate connections between freelancers and employers.`,
    demoLink: "https://www.afren.ai/",
    tools: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "Redux",
      "shadcnUi",
      "Chakraui",
      "Axios",
      "postman"

    ],
    year: 2025,
  },
  {
    id: crypto.randomUUID(),
    projectName: "StreamScapeX",
    projectImage: "https://res.cloudinary.com/dhvwthnzq/image/upload/v1752306905/Steamscapex_pnoltc.png",
    projectDescription: `
  StreamScapeX is a fully functional streaming platform built for educational purposes using Next.js, TypeScript, Tailwind CSS, Framer Motion, shadcn/ui, and TMDB to deliver a smooth, responsive movie and TV experience. This project is strictly for learning and demonstration only and is not for commercial use, as it does not hold any rights to distribute copyrighted content.
      `,
    demoLink: "https://www.streamscapex.live/",
    githubLink: "https://github.com/deji-ice/streaming-app-next",
    tools: [
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "TMDB",
      "shadcnUi",
    ],
    year: 2024,
  },
  {
    id: crypto.randomUUID(),
    projectName: "Furnisphere",
    projectImage: "https://res.cloudinary.com/dhvwthnzq/image/upload/v1752245211/furnisphere_hlgcjb.png",
    projectDescription: "Furnisphere is a modern furniture-themed web project built to showcase my Figma-to-code implementation, frontend development, and web accessibility skills. Developed with Next.js, TypeScript, and Tailwind CSS, it features a fully responsive design, smooth animations with Framer Motion, seamless smooth scrolling using Lenis, and a clean, user-friendly interface that follows accessibility best practices. Furnisphere isn’t a live store but a demonstration of high-quality, accessible UI and UX design in code.",
    demoLink: "https://furnisphere-alpha.vercel.app/",
    githubLink: "https://github.com/deji-ice/furnisphere",
    tools: [
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
    ],
    year: 2024,
  },
  {
    id: crypto.randomUUID(),
    projectName: "Transparent Governance Foundation",
    projectImage: "https://res.cloudinary.com/dhvwthnzq/image/upload/v1739445608/mines/38ffadab-3a96-4aa2-890c-5a0f0b8ac4e3.png",
    projectDescription: "Transparent Governance Foundation is a web application built to promote transparency and accountability in governance. Utilizing modern web technologies to create an interactive and informative platform for civic engagement and governmental oversight.",
    demoLink: "https://www.transparencegovfoundation.org/",
    githubLink: "https://github.com/deji-ice/TransparentGovernanceFoundation",
    tools: [
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "Cloudinary",
      "Paystack"
    ]
  },
  {
    id: crypto.randomUUID(),
    projectName: "MetaSecure-web3.0",
    projectImage: "https://res.cloudinary.com/dhvwthnzq/image/upload/v1753115194/Screenshot_2025-07-21_172341_zalzo8.png",
    projectDescription: "MetaSecure Web3.0 is a decentralized application (dApp) built using Solidity and React. This project leverages the power of blockchain technology to enhance web security and provide decentralized solutions.",
    demoLink: "https://meta-secure-web3-0.vercel.app/",
    githubLink: "https://github.com/deji-ice/MetaSecure-web3.0",
    tools: [
      "React",
      "JavaScript",
      "Solidity",
      "Axios",
      "tailwindCSS",
      "Ethers.js",
    ]
  },
  {
    id: crypto.randomUUID(),
    projectName: "HarvestGrove",
    projectImage: "https://res.cloudinary.com/dhvwthnzq/image/upload/v1706018424/mines/Screenshot_62_xmbyau.png",
    projectDescription: "Transforming a Figma design into a vibrant HarvestGrove landing page, I utilized React, Framer Motion, and GSAP for dynamic animations. With Tailwind CSS and Cloudinary, the result is a visually stunning and responsive digital showcase that harmonizes artistry and technology.",
    demoLink: "https://harvestgrove.vercel.app",
    githubLink: "https://github.com/deji-ice/HarvestGrovee",
    tools: [

      "React",
      "Javascript",
      "TailwindCSS",
      "GSAP",
      "Framer Motion",
      "Cloudinary",
    ],
  },
  {
    id: crypto.randomUUID(),
    projectName: "Photographer Portfolio Showcase",
    projectImage: "https://res.cloudinary.com/dhvwthnzq/image/upload/v1691492785/cartizn/Screenshot_2023-08-08_100540_txylyj.png",
    projectDescription: "An Artistic Fusion of Technology and Imagery, i crafted a captivating portfolio website for a photographer using React, Framer Motion, and GSAP to bring imagery to life. Leveraged Tailwind CSS for a polished design and integrated Cloudinary for seamless image loading. Collaborated with a designer to harmonize artistry and technology, resulting in a visually stunning digital showcase.",
    demoLink: "https://cartizn.vercel.app/",
    githubLink: "https://github.com/deji-ice/cartizn",
    tools: [
      "React",
      "React-Router",
      "GSAP",
      "Framer Motion",
      "Javascript",
      "TailwindCSS",
      "SEO",
      "Cloudinary",
    ],
  },
  {
    id: crypto.randomUUID(),
    projectName: "AirBnb Clone",
    projectImage: "https://res.cloudinary.com/dhvwthnzq/image/upload/v1706101494/Screenshot_63_mkyrpo.png",
    projectDescription: "Crafting an Airbnb-inspired frontend clone with TypeScript and static data. Elevate the user experience with seamless property browsing, responsive design, and an intuitive interface. A showcase of design and functionality inspired by Airbnb's renowned simplicity.",
    demoLink: "https://airbnb-500-c.vercel.app/",
    githubLink: "https://github.com/deji-ice/airbnb-500C/",
    tools: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "DaisyUI",
      "Unsplash",
      "Cloudinary",
    ],
  },
  {
    id: crypto.randomUUID(),
    projectName: "Blog with Embedded Sanity CMS",
    projectImage: `https://res.cloudinary.com/dhvwthnzq/image/upload/v1700045704/mines/Screenshot_407_tmrvrf.png`,
    projectDescription: "A personal blog website using Next.js 13 and TypeScript, with an embedded content management system from Sanity. Leveraged Tailwind CSS for responsive design and utilized Next.js SSG and revalidation for optimal performance. Implemented dynamic routing to generate pages for each blog post and used server-side rendering to enhance SEO. Ensured a seamless user experience with lazy loading and image optimization.",
    demoLink: "https://thecodechronicles.vercel.app/",
    githubLink: "https://github.com/deji-ice/nextjs-blog",
    tools: [
      "Typescript",
      "NextJS",
      "Sanity",
      "TailwindCSS",
    ],
  },
  {
    id: crypto.randomUUID(),
    projectName: "Africash Fintech Landing Page",
    projectImage: `https://res.cloudinary.com/dhvwthnzq/image/upload/v1700045703/mines/Screenshot_392_w80o0x.png`,
    projectDescription: "Africash is a fintech landing page built with React, Tailwind CSS, and Framer Motion. The landing page is designed to promote the Africash financial platform with a modern and responsive user interface. Features include easy navigation, smooth animations, and informative sections highlighting the platform's key benefits.",
    demoLink: "https://africash.netlify.app/",
    githubLink: "https://github.com/deji-ice/Africash",
    tools: ["React", "TailwindCSS", "Framer Motion",]
  },
];

// export const logos: LogoData[] = [
//   {
//     alt: "Solidity",
//     src: `https://res.cloudinary.com/dhvwthnzq/image/upload/v1733995420/Solidity_Programming_Language_os73lb.svg`,
//   },
//   {
//     alt: "React",
//     src: ReactLogo,
//   },
//   {
//     alt: "typescript",
//     src: "https://abrudz.github.io/logos/TypeScript.svg",
//   },
//   {
//     alt: "nextjs",
//     src: NextJsLogo,
//   },
//   {
//     alt: "javascript",
//     src: JavascriptLogo,
//   },
//   {
//     alt: "tailwindcss",
//     src: TailwindLogo,
//   },
//   {
//     alt: "mongodb",
//     src: MongoDbLogo,
//   },
//   {
//     alt: "SASS",
//     src: SassLogo,
//   },
//   {
//     alt: "gsap",
//     src: "https://pbs.twimg.com/profile_images/1713633504431394816/h28jJ1qM_400x400.jpg",
//   },
//   {
//     alt: "Docker",
//     src: DockerLogo,
//   },
//   {
//     alt: "ExpressJS",
//     src: ExpressLogo,
//   },
//   {
//     alt: "Vercel",
//     src: VercelLogo,
//   },
//   {
//     alt: "Vite",
//     src: ViteLogo,
//   },
//   {
//     alt: "Postman",
//     src: PostmanLogo,
//   }
// ];

export const experiences: JobExperience[] = [
  {
    occupation: "Frontend Engineer",
    companyName: "GEN",
    dateStart: "10/2025",
    dateEnd: "Present",
    responsibilities: [
      `Contributed to developing the Welsly investment dashboard (200+ active users) and Wyrr merchant app, implementing features for portfolio management, stock tracking, and merchant operations while upgrading the dashboard from V1 to V2 with 30% performance improvement.`,
      `Developed responsive marketing websites for 3 flagship products (Welsly, Gen Financial, Wyrr) using web standards, improving page load performance by 35% and enhancing SEO visibility.`,
      `Collaborated with cross-functional teams in agile sprints, working closely with product designers and engineers to deliver features and optimize UI/UX implementation.`,
      `Built 25+ reusable React components aligned with the design system, reducing feature development time by 40% and ensuring UI consistency across applications.`,
    ],
  },
  {
    occupation: "Frontend Engineer",
    companyName: "Afren.ai",
    dateStart: "04/2025",
    dateEnd: "08/2025",
    responsibilities: [
      `Integrated AI-driven matchmaking features into the frontend platform, improving recommendation accuracy and enhancing customer satisfaction.`,
      `Implemented secure authentication systems and protected route logic to ensure user privacy and platform security.`,
      `Developed and maintained responsive, high-performance user interfaces for Afren.ai's web assets, including the landing page, blog, and core frontend platform, driving user engagement and brand consistency.`,
      `Collaborated closely with backend engineers and UI/UX designers to ensure seamless integration and consistency across the product experience.`,
    ],
  },
  {
    occupation: "Fullstack Javascript Instructor",
    companyName: "GoMyCode",
    dateStart: "09/2023",
    dateEnd: "07/2025",
    responsibilities: [
      `Developed engaging coding exercises using React, TypeScript, Node.js, and REST APIs that helped students improve their full-stack skills and boosted performance by 30%.`,
      `Implemented industry best practices including Agile methodology and peer code reviews, creating a collaborative learning environment that increased project success rates by 40%.`,
      `Integrated practical industry standards such as Git version control and test-driven development, producing graduates with demonstrable skills in modern development workflows.`,
      `Led workshops on responsive design with CSS Grid, Flexbox, and Tailwind CSS, driving a 50% improvement in frontend competency and enabling students to deploy professional interfaces in 4 weeks.`,
    ],
  },
  {
    occupation: "Frontend Developer",
    companyName: "Sabiroad",
    dateStart: "04/2022",
    dateEnd: "04/2023",
    responsibilities: [
      "Collaborated with a team of three to build an internal admin portal for the operations team, enabling payment fixes, user role management, and system configuration — which improved operational efficiency by 20%.",
      "Built a simplified frontend interface for testing and triggering backend actions, allowing non-technical team members to interact with endpoints without needing Postman.",
      "Worked closely with backend engineers to integrate APIs and services, reducing data retrieval time by 30% and ensuring smooth frontend-backend communication.",
      "Partnered with UI/UX designers to enhance usability and visual consistency, leading to a 25% drop in bounce rate and a 15% improvement in user satisfaction among internal users.",
    ],
  },
  {
    occupation: "Software Intern",
    companyName: "First Bank PLC",
    dateStart: "01/2020",
    dateEnd: "06/2020",
    responsibilities: [
      `Collaborated with a team of five developers to create an insurance online application using ASP.NET, resulting in a 20% increase in customer acquisition and a 15% improvement in overall application efficiency.`,
      `Learned C# and the ASP.NET framework and applied them in two projects, contributing to a 30% reduction in development time and a 25% increase in code quality.`,
      `Developed a Subscription Video App using ASP.NET as a self skill-building project, enhancing my proficiency in C# and the ASP.NET framework while gaining hands-on experience in application development and database management.`,
    ],
  },
];

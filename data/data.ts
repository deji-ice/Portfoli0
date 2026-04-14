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
    demoLink: "https://stream.scapex.workers.dev/",
    githubLink: "https://github.com/deji-ice/streaming-app-next",
    tools: [
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "TMDB",
      "shadcnUi",
    ],
    year: 2025,
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
    year: 2025,
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
    ],
    year: 2024,
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
    ],
    year: 2024,
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
    year: 2024,
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
    year: 2023,
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
    year: 2023,
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
    year: 2023,
  },
  {
    id: crypto.randomUUID(),
    projectName: "Africash Fintech Landing Page",
    projectImage: `https://res.cloudinary.com/dhvwthnzq/image/upload/v1700045703/mines/Screenshot_392_w80o0x.png`,
    projectDescription: "Africash is a fintech landing page built with React, Tailwind CSS, and Framer Motion. The landing page is designed to promote the Africash financial platform with a modern and responsive user interface. Features include easy navigation, smooth animations, and informative sections highlighting the platform's key benefits.",
    demoLink: "https://africash.netlify.app/",
    githubLink: "https://github.com/deji-ice/Africash",
    tools: ["React", "TailwindCSS", "Framer Motion",],
    year: 2022,
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
    occupation: "Lead Frontend Engineer",
    companyName: "Clona",
    companyUrl: "https://clona.trade",
    dateStart: "11/2025",
    dateEnd: "Present",
    responsibilities: [
      `Leading frontend development for a copy trading platform built on HyperLiquid, architecting the UI with React, Next.js, TypeScript, and Tailwind CSS.`,
      `Building real-time trading interfaces and portfolio tracking features for DeFi users.`,
    ],
  },
  {
    occupation: "Frontend Engineer",
    companyName: "Gen Financial",
    companyUrl: "https://gen.financial/",
    dateStart: "10/2025",
    dateEnd: "Present",
    responsibilities: [
      `Contributing to the Vantar investment dashboard (200+ users) and Wyrr merchant app — portfolio management, stock tracking, and merchant operations with a 30% performance uplift in the V2 upgrade.`,
      `Built responsive marketing sites for 3 products (Vantar, Gen Financial, Wyrr), improving page load by 35% and SEO visibility.`,
      `Created 25+ reusable React components aligned with the design system, cutting feature development time by 40%.`,
    ],
  },
  {
    occupation: "Frontend Engineer",
    companyName: "Afren.ai",
    companyUrl: "https://afren.ai",
    dateStart: "04/2025",
    dateEnd: "08/2025",
    responsibilities: [
      `Integrated AI-driven matchmaking features and built secure authentication with protected routing.`,
      `Developed responsive interfaces for the landing page, blog, and core platform, driving engagement and brand consistency.`,
    ],
  },
  {
    occupation: "Software Engineering Instructor",
    companyName: "GOMYCODE",
    companyUrl: "https://gomycode.com",
    dateStart: "09/2023",
    dateEnd: "07/2025",
    responsibilities: [
      `Built coding exercises in React, TypeScript, Node.js, and REST APIs — boosting student performance by 30%.`,
      `Led workshops on responsive design (CSS Grid, Flexbox, Tailwind CSS), driving 50% improvement in frontend competency.`,
      `Integrated Git, TDD, and Agile practices into the curriculum, producing job-ready graduates.`,
    ],
  },
  {
    occupation: "Frontend Developer",
    companyName: "Sabiroad Logistics International",
    companyUrl: "https://sabiroad.com/",
    dateStart: "04/2022",
    dateEnd: "04/2023",
    responsibilities: [
      `Built an internal admin portal with a team of three — payment fixes, user role management, and system config, improving ops efficiency by 20%.`,
      `Integrated APIs with backend engineers, reducing data retrieval time by 30%.`,
      `Partnered with UI/UX designers to cut bounce rate by 25% and lift user satisfaction by 15%.`,
    ],
  },
  // {
  //   occupation: "Software Intern",
  //   companyName: "First Bank PLC",
  //   dateStart: "01/2020",
  //   dateEnd: "06/2020",
  //   responsibilities: [
  //     `Collaborated with five developers to build an insurance application using ASP.NET, increasing customer acquisition by 20%.`,
  //     `Built a Subscription Video App in C#/ASP.NET as a self-directed project for hands-on experience in app development and database management.`,
  //   ],
  // },
];

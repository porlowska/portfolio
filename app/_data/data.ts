import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiAwwwards } from "react-icons/si";

export const about = {
  heading: "Fueled by Curiosity",
  liner:
    "Front-End --> Full Stack Developer| UI/UX Enthusiast | Business-Savvy Innovator",
  description: [
    "I’m Polly, a London-based front-end developer with a passion for creating responsive, engaging, and visually stunning web experiences. Skilled in React and Next.js, I specialize in building interfaces that prioritize user experience while integrating dynamic animations and transitions using Framer. With experience as a startup founder, I bring a unique blend of technical, design, and business skills to every project, helping brands make a real impact online.",
    "In addition to front-end development, I'm constantly expanding my technical horizon by exploring backend development, database management, and rapid API creation. This continuous learning mindset enables me to bridge the gap between front-end and back-end systems, making me a well-rounded developer who can tackle complex, full-stack projects as needed.",
    "With a natural drive for both individual and collaborative work, I thrive in diverse settings—whether I'm leading a project independently or brainstorming solutions with a team. If you're looking for a developer who understands the pulse of business and can bring your digital vision to life, let’s connect!",
  ],
  features: [
    {
      h: "Skilled in Front-End Technologies: ",
      b: "Skilled in HTML5, CSS3, JavaScript, React, Next.js, and creating animations with Framer to bring interfaces to life.",
    },
    {
      h: "UI/UX and Design Skills: ",
      b: "Experienced in Figma for wireframing, mockups, and crafting user-centered designs that balance aesthetics with functionality.",
    },
    {
      h: "Business Insight: ",
      b: "As a former startup founder, I understand the needs of growing businesses and can shape tech solutions that support broader business goals.",
    },
  ],
};

export const socials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/polly-orlowska/",
    icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    href: "https://github.com/porlowska",
    icon: FaGithub,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/polly_orlowska/",
    icon: FaInstagram,
  },
];

export const projects = [
  {
    name: "PO Game Board",
    shortBody:
      "An interactive gaming platform featuring classic games like Snake, Wordle, and Tic-Tac-Toe. Built for seamless play across all devices.",
    longBody:
      "PO Game Board is a user-friendly platform developed with React.js, JavaScript, and Tailwind CSS, bringing popular games like Snake, Wordle, and Tic-Tac-Toe together in a single interface. The goal of this project is to offer a fun, engaging gaming experience accessible on any device. The app’s responsive design ensures smooth interaction on both desktop and mobile, thanks to Tailwind CSS for layout optimization. The component-based architecture of React enables easy updates and maintenance, making the platform flexible for future game additions. Each game has been thoughtfully designed to offer smooth, responsive feedback, contributing to an immersive user experience, regardless of screen size or device.",
    imageUrl: "/pic/loading.png",
    links: [
      {
        name: "Deployed",
        href: "https://po-game-board.netlify.app",
        icon: SiAwwwards,
      },
      {
        name: "GitHub",
        href: "https://github.com/porlowska/game-board",
        icon: FaGithub,
      },
      {
        name: "Linkedin",
        href: "https://www.linkedin.com/posts/polly-orlowska_reactjs-javascript-frontenddeveloper-activity-7260297394276257792-m-My?utm_source=share&utm_medium=member_desktop",
        icon: FaLinkedinIn,
      },
    ],
  },
  {
    name: "Wimbledon Pets",
    shortBody:
      "A full-service website for Wimbledon Pets, showcasing dog care services and enhancing SEO visibility, migrated from Wix to Next.js for better performance and cost-efficiency.",
    longBody:
      "The Wimbledon Pets website is a full-featured platform showcasing various dog care services, including listings for dog walking, boarding, and sitting. Originally developed on Wix, this project was redeveloped in Next.js to improve site performance, flexibility, and reduce hosting costs by migrating to Netlify. The site includes a user-friendly services section, an About page highlighting the carers, client testimonials, a contact form, and an Instagram feed. Optimizing the site for SEO significantly improved search engine ranking, helping Wimbledon Pets attract more clients organically. This project demonstrates the benefits of moving from a drag-and-drop builder to a custom-coded solution, providing Wimbledon Pets with a scalable, professional online presence.",
    imageUrl: "/pic/wimbledon-pets.png",
    links: [
      {
        name: "Deployed",
        href: "https://wimbledon-pets.co.uk",
        icon: SiAwwwards,
      },
      {
        name: "GitHub",
        href: "https://github.com/porlowska/wimbledon-pets",
        icon: FaGithub,
      },
      {
        name: "Linkedin",
        href: "https://www.linkedin.com/posts/polly-orlowska_frontenddevelopment-webdevelopment-nextjs-activity-7261814173423038464-rl-p?utm_source=share&utm_medium=member_desktop",
        icon: FaLinkedinIn,
      },
    ],
  },
  {
    name: "Taste Quest",
    shortBody:
      "A recipe search platform enabling users to find recipes by name and filter results, creating a personalized food exploration experience.",
    longBody:
      "Taste Quest is an application that streamlines recipe discovery, making it easy for users to find specific recipes using names and filters like cuisine type, diet, and intolerances. The platform, powered by the Spoonacular API, is designed for food enthusiasts looking for inspiration with a personalized touch. Developed with Tailwind CSS and Figma for a modern UI, the design focuses on accessibility across all devices. Working in collaboration with Mindera Code Academy peers, this project also emphasized teamwork and agile development principles. Taste Quest stands out as a final project that highlights the importance of a polished, user-centered design to deliver an enjoyable browsing experience, accessible from any device.",
    imageUrl: "/pic/loading.png",
    links: [
      {
        name: "Deployed",
        href: "https://taste-quest.netlify.app",
        icon: SiAwwwards,
      },
      {
        name: "GitHub",
        href: "https://github.com/porlowska/Taste-Quest",
        icon: FaGithub,
      },
      {
        name: "Linkedin",
        href: "https://www.linkedin.com/posts/polly-orlowska_project-showcase-taste-quest-application-activity-7236326065042862080-6JTT?utm_source=share&utm_medium=member_desktop",
        icon: FaLinkedinIn,
      },
    ],
  },
  {
    name: "Career Keys",
    shortBody:
      "A tool to enhance job applications by aligning resumes with job requirements using advanced keyword extraction.",
    longBody:
      "Career Keys is an innovative job application tool designed to improve the efficiency and effectiveness of the job search process. This application collects job listings and uses AI-powered keyword extraction to help job seekers enhance their resumes to align with employer needs. Built with React and Node.js, the project arose from a need to simplify the job application process. Its single-page application structure is optimized for responsive, cross-platform usability, allowing job seekers to seamlessly integrate relevant keywords into their resumes for higher chances of being noticed by ATS systems. The project demonstrates the power of a user-centered design paired with backend data processing, offering a real solution to common job search challenges.",
    imageUrl: "/pic/career-keys.png",
    links: [
      {
        name: "Deployed",
        href: "https://career-keys.netlify.app/",
        icon: SiAwwwards,
      },
      {
        name: "GitHub",
        href: "https://github.com/porlowska/career-keys",
        icon: FaGithub,
      },
      {
        name: "Linkedin",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7165374145281642498/",
        icon: FaLinkedinIn,
      },
    ],
  },
  {
    name: "Portfolio Banner",
    shortBody:
      "An animated banner created with Framer for React, showcasing creativity and animation skills in web design.",
    longBody:
      "The Portfolio Banner project is my first venture into creating dynamic animations using Framer with React. This animated banner, intended for use as a portfolio highlight, showcases interactive and animated design, adding a modern twist to web interfaces. The project pushed my skills in frontend animation and honed my understanding of how animations can improve user experience and engagement. This banner not only demonstrates my technical skills but also reflects my passion for merging creativity with functionality in web design.",
    imageUrl: "/pic/loading.png",
    links: [
      {
        name: "Portfolio",
        href: "https://porlowska.dev",
        icon: SiAwwwards,
      },
      {
        name: "GitHub",
        href: "https://github.com/porlowska/portfolio",
        icon: FaGithub,
      },
      {
        name: "Linkedin",
        href: "https://www.linkedin.com/posts/polly-orlowska_webdesign-animation-react-activity-7262159876913557505-dIRS?utm_source=share&utm_medium=member_desktop",
        icon: FaLinkedinIn,
      },
    ],
  },
  {
    name: "Yugen",
    shortBody:
      "A platform offering deeper travel inspiration for more meaningful connections with destinations.",
    longBody:
      "Yugen is a travel inspiration platform designed to go beyond traditional travel planning by focusing on the cultural, environmental, and personal growth aspects of travel. The platform aims to provide users with a space to discover destinations on a deeper level, connecting them with authentic experiences that promote mindful travel. This approach helps users to curate trips that go beyond sightseeing, encouraging meaningful engagement with the places they visit and the people they meet.",
    imageUrl: "/pic/yugen.png",
    links: [
      {
        name: "Deployed",
        href: "https://tejpatta.github.io/Travel-Inspiration/",
        icon: SiAwwwards,
      },
      {
        name: "GitHub",
        href: "https://github.com/tejpatta/Travel-Inspiration",
        icon: FaGithub,
      },
      {
        name: "Linkedin",
        href: "https://www.linkedin.com/posts/polly-orlowska_im-happy-to-share-this-y%C5%ABgen-project-activity-7149071868497391616-WXcm?utm_source=share&utm_medium=member_desktop",
        icon: FaLinkedinIn,
      },
    ],
  },
  {
    name: "EULE Club (under construction)",
    shortBody:
      "As lead developer, I’m shaping EULE Club’s entire front-end strategy with branding and Figma designs.",
    longBody:
      "At EULE Club, I serve as the lead developer, responsible for implementing a comprehensive front-end strategy. This project includes branding creation, which involved developing a cohesive color palette, typography, and social media assets. After finalizing the branding, I crafted intuitive Figma designs that enhance user experience and ensure a seamless look across all platforms. Each page, from the homepage to the sponsorship and event pages, is developed with a mobile-first approach in Next.js, ensuring responsiveness and scalability. EULE Club’s platform is structured to support dynamic content, CMS integration, and e-commerce features as the business grows.",
    imageUrl: "/pic/loading.png",
    links: [
      {
        name: "Deployed",
        href: "eule.pro",
        icon: SiAwwwards,
      },
      {
        name: "GitHub",
        href: "",
        icon: FaGithub,
      },
      {
        name: "Linkedin",
        href: "",
        icon: FaLinkedinIn,
      },
    ],
  },
  {
    name: "I-Woman Social Page (under construction)",
    shortBody:
      "A social platform for i-woman, with frontend and backend integrations enhancing user experience.",
    longBody:
      "As the frontend developer at i-woman, I am currently working on a social page that involves both frontend and backend functionalities to improve user interaction. I have designed the homepage, Contact Us page, and Team page to be user-friendly and visually appealing. The project also includes creating dynamic and reusable components in TypeScript, as well as integrating Microsoft Graph API to allow real-time team updates. This experience has expanded my full-stack capabilities, adding backend skills like building API calls to handle data fetching and error management. The I-Woman Social Page is shaping up to be a comprehensive platform that will enhance the online presence and community engagement for i-woman.",
    imageUrl: "/pic/loading.png",
    links: [
      {
        name: "Deployed",
        href: "",
        icon: SiAwwwards,
      },
      {
        name: "GitHub",
        href: "",
        icon: FaGithub,
      },
      {
        name: "Linkedin",
        href: "",
        icon: FaLinkedinIn,
      },
    ],
  },
  {
    name: "I-Woman Landing Page (under construction)",
    shortBody:
      "A temporary landing page to inform users of the i-woman site’s development, reducing hosting costs.",
    longBody:
      "The i-woman landing page serves as a placeholder to communicate the site’s ongoing development. This temporary page is a self-managed project that reduces hosting costs by limiting server usage. It offers an essential communication tool for the business while maintaining online presence during the construction phase. Built entirely in-house, this landing page demonstrates the company’s commitment to transparency with its users and allows i-woman to retain a cost-effective digital presence while the full platform is in development.",
    imageUrl: "/pic/loading.png",
    links: [
      {
        name: "Deployed",
        href: "",
        icon: SiAwwwards,
      },
      {
        name: "GitHub",
        href: "",
        icon: FaGithub,
      },
      {
        name: "Linkedin",
        href: "",
        icon: FaLinkedinIn,
      },
    ],
  },
];

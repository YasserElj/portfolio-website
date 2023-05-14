import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from '../types/sections';
import { StringKeyValueType } from '../types';
import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks: StringKeyValueType = {
  facebook: 'https://www.facebook.com/vatsalsinghkv',
  instagram: 'https://www.instagram.com/elj.yasser',
  twitter: 'https://twitter.com/eljaridayasser',
  github: 'https://github.com/yasserelj',
  linkedin: 'https://www.linkedin.com/in/yasser-el-jarida-700151196/',
};

export const author = {
  name: 'Yasser El jarida',
  email: 'yassereljarida@gmail.com',
};

export const seoData = {
  title: 'Yasser El jarida | Big Data and Cloud Computing Engineer',
  description:
    'Yasser El Jarida is a 2nd year engineering student in ENSET Mohammedia who is studying Big Data and Cloud Computing as well as other software engineering technologies.',
  author: author.name,
  image:
    'https://user-images.githubusercontent.com/68834718/217467445-0b0d2d63-f8ad-4702-8474-814eb2cbb3be.png',
  url: 'https://vatsalsinghkv.vercel.app/',
  keywords: [
    'Yasser',
    'Yasser El jarida',
    '@eljaridayasser',
    'yassereljarida',
    'Portfolio',
    'Yasser Portfolio ',
    'Yasser El jarida Portfolio',
  ],
};

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'journey', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: author.name,
  tagline: 'Big Data and Cloud Computing Engineer.',
  // description: 'I am a 2nd year engineering student in ENSET Mohammedia who is studying Big Data and Cloud Computing as well as other software engineering technologies.',
  // description:
  //   "I'm a passionate Full Stack web developer having an experience of web  applications with React.js, Next.js and Blockchain development on Ethereum, Solidity and Web3.js.",
  specialText: 'Currently looking for an internship',
  // either button or simple text (information)
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: false,
  },
};

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'about me',
  // Paragraphs need to be changed from containers/About.tsx
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'Apache Spark',
      'Apache Hadoop',
      'Solidity',
      'Web3Js',
      'Truffle',
      'Ganache'
    ],
  },
  img: '/yasser-elj.jpg',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'Data processing',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/data.json',
        dark: '/lotties/data.json',
      },
      points: [
        'Built data processing pipelines using Hadoop and Spark to analyze and transform large datasets in Python/Java.',
        'Leveraged Java-based Hadoop MapReduce framework to manipulate and aggregate big data in a distributed environment.',
        'Built real-time data processing systems using Spark Streaming to handle streaming data from various sources and perform real-time analytics.',
        'Used Spark SQL to build complex SQL queries on top of distributed datasets, enabling faster data exploration and analysis.',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/

        { name: 'python', icon: 'vscode-icons:file-type-python' },
        { name: 'hadoop', icon: 'logos:hadoop' },
        { name: 'spark', icon: 'devicon:apachespark' },
        { name: 'java', icon: 'logos:java' },
        { name: 'mysql', icon: 'logos:mysql' },
      ],
    },
    {
      id: getId(),
      title: 'Software developement',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Developed responsive websites using HTML, CSS, and Bootstrap, ensuring optimal user experience across devices.',
        'Built server-side applications using Node.js and Express, leveraging the power of JavaScript to create fast and scalable web applications.',
        'Developed enterprise web applications using Java, Spring JEE, and Angular, leveraging the power of these technologies to create scalable and maintainable applications.',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/

        { name: 'java', icon: 'logos:java' },
        { name: 'angularjs', icon: 'logos:angular-icon' },
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'mysql', icon: 'logos:mysql' },
        { name: 'mongodb', icon: 'logos:mongodb-icon' },
        // { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
      ],
    },
    {
      id: getId(),
      title: 'blockchain development',
      lottie: {
        light: '/lotties/ethereum-dark.json',
        dark: '/lotties/ethereum-dark.json',
      },
      points: [
        'Developed and deployed Ethereum smart contracts using Solidity, enabling the creation of decentralized applications (dApps) on the Ethereum blockchain.',
        'Utilized Ganache for local Ethereum blockchain development and testing.',
        'Worked with IPFS (InterPlanetary File System) to store and distribute content on the decentralized web.',
        'Developing NFT Smart Contracts using ERC-721 Token Standard.',
      ],
      softwareSkills: [
        { name: 'ethereum', icon: 'logos:ethereum' },
        { name: 'solidity', icon: 'logos:solidity' },
        { name: 'IPFS', icon: 'skill-icons:ipfs-dark' },
        { name: 'truffle', icon: 'logos:truffle-icon' },
        { name: 'ganache', icon: 'logos:ganache-icon' },
        { name: 'web3js', icon: 'logos:web3js' },
        { name: 'metamask', icon: 'logos:metamask-icon' },
      ],
    }
  ],
};

// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: "Academic journey",
  experiences: [
    {
      company: 'ENSET Mohammedia',
      companyUrl: '',
      role: 'ENSET Mohammedia',
      started: '2021',
      upto: 'now',
      tasks: [
        '1st and 2nd year of computer engineering: Big Data and cloud Computing'
      ],
    },
    {
      company: 'CPGE',
      companyUrl: '',
      role: 'PREPARATORY CLASSES',
      started: '2019',
      upto: '2021',
      tasks: [
        'Preparatory classes Ibn Abdoun High School - Khouribga'
      ],
    },
    {
      company: 'BACCALAUREATE',
      companyUrl: '',
      role: 'BACCALAUREATE IN MATHEMATICAL SCIENCES',
      started: '2019',
      upto: '',
      tasks: [
        'Abou El Kacem Ezzayani High School - Khénifra'
      ],
    },
  ],
};

// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [

    {
      id: getId(),
      name: 'Discord weather bot',
      url: 'https://github.com/YasserElj/WeatherDiscordBot',
      repo: 'https://github.com/YasserElj/WeatherDiscordBot',
      img: '/Projects_Images/DiscordBot.png',
      year: 2021,
      tags: ['Python', 'discord.py', 'Beautiful Soup'],
    },

    {
      id: getId(),
      name: 'Hackathon Blockchain and AI in service of health',
      url: 'Hackathon.pdf',
      repo: 'Hackathon.pdf',
      img: '/Projects_Images/hackathon.jpg',
      year: 2021,
      tags: ['Python', 'discord.py', 'Beautiful Soup'],
    },
    {
      id: getId(),
      name: 'Arcade Space Race',
      url: 'https://github.com/YasserElj/Arcade_Space_Race_Challenge',
      repo: 'https://github.com/YasserElj/Arcade_Space_Race_Challenge',
      img: '/Projects_Images/Arcade_pygame.png',
      year: 2022,
      tags: ['Python', 'Pygame'],
    },
    {
      id: getId(),
      name: 'Space Game Javafx',
      url: 'https://github.com/YasserElj/SpaceGameJavaFX',
      repo: 'https://github.com/YasserElj/SpaceGameJavaFX',
      img: '/Projects_Images/javafxSpaceGame.jpg',
      year: 2022,
      tags: ['Java', 'Javafx'],
    },
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    'I’m currently looking for an innternship',
    'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
  ],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    // {
    //   icon: 'mdi:instagram',
    //   url: socialLinks.instagram,
    // },
    {
      icon: 'lucide:twitter',
      url: socialLinks.twitter,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
    // {
    //   icon: 'lucide:facebook',
    //   url: socialLinks.facebook,
    // },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: 'By Yasser El jarida',
  link: 'https://github.com/YasserElj/portfolio-website',
};

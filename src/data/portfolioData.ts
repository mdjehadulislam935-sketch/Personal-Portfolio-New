import {
  PersonalInfo,
  SkillItem,
  ProjectItem,
  ServiceItem,
  ExperienceItem,
  EducationItem,
  AchievementItem,
  SocialLink,
  StatItem
} from '../types';

export const personalData: PersonalInfo = {
  fullName: 'M D Jihadul Islam Sojib',
  nickname: 'ZihaD',
  tagline: 'Turning Ideas Into Digital Experiences. Web Designer | Digital Creator',
  taglineRoles: ['Web Designer', 'Digital Creator', 'Freelancer', 'Developer'],
  introduction: "Hello! I'm M D Jihadul Islam Sojib, a passionate digital creator and aspiring web developer who enjoys turning ideas into creative digital experiences.",
  fullAbout: "Hello! I'm M D Jihadul Islam Sojib, a passionate digital creator and aspiring web developer who enjoys turning ideas into creative digital experiences. I'm currently exploring HTML, CSS, JavaScript, AI tools, web design, graphic design, and e-commerce. I enjoy learning new technologies, experimenting with creative ideas, and building useful and interactive websites. For me, every project is an opportunity to learn something new and improve my skills. I believe that creativity, consistency, and continuous learning are the keys to growing in the digital world. I'm always interested in discovering new ideas, taking on new challenges, and transforming simple concepts into something unique.",
  goal: 'To continuously develop my skills, create meaningful digital projects, and build a strong identity in the world of technology and digital creativity.',
  dob: '29 OCTOBER',
  location: 'Basantapur,Ful-Gazi-3942,Feni',
  nationality: 'Bangladesh',
  email: 'mdjehadulislam935@gmail.com',
  phone: '+880 1893-665896',
  whatsappPhone: '+880 1893-665896',
  visitingCardWebsite: 'comingsoon.com.bd',
  qrWebsite: 'Jihadulislam.com',
  cvLink: 'sojibcv.com',
  profileImage: 'images/profile.jpg',
  coverImage: 'images/cover.jpg',
  logoImage: 'images/logo.png',
};

export const skillsData: SkillItem[] = [
  {
    id: 'skill-1',
    name: 'Digital Marketing',
    percentage: 35,
    category: 'Marketing',
    iconName: 'TrendingUp',
    description: 'Campaign execution, audience outreach, social media ad placements, and brand positioning.'
  },
  {
    id: 'skill-2',
    name: 'E-Commerce Bangladesh',
    percentage: 85,
    category: 'E-Commerce',
    iconName: 'ShoppingBag',
    description: 'Online store operation, Mohasagor dropshipping, order fulfillment, product research, and local customer service.'
  },
  {
    id: 'skill-3',
    name: 'AI & Creative Tools',
    percentage: 65,
    category: 'Technology',
    iconName: 'Bot',
    description: 'Prompt engineering, AI-driven visual generation, intelligent workflow automation, and digital assistance.'
  },
  {
    id: 'skill-4',
    name: 'Digital Creativity',
    percentage: 45,
    category: 'Design',
    iconName: 'Sparkles',
    description: 'Creative visual concepts, UI layouts, aesthetic graphic elements, and multimedia presentations.'
  },
  {
    id: 'skill-5',
    name: 'Digital Platforms',
    percentage: 70,
    category: 'Technology',
    iconName: 'Layers',
    description: 'Web navigation systems, social platform management, content pipelines, and digital ecosystem integration.'
  },
  {
    id: 'skill-6',
    name: 'Data & Office Work',
    percentage: 75,
    category: 'Operations',
    iconName: 'Database',
    description: 'High-accuracy data entry, document formatting, PDF to Word/Excel conversion, and administrative precision.'
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: 'project-1',
    name: 'Single Company — Fun Website',
    description: 'A creative and interactive fun website designed for friends, featuring animated UI, RGB lighting effects, interactive elements, and entertaining features.',
    image: 'images/project2.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'RGB FX', 'UI Animation'],
    liveLink: 'https://mdjehadulislam935-sketch.github.io/Single-Company-Ltd/',
    featured: true
  },
  {
    id: 'project-2',
    name: 'Birthday Wish Website',
    description: 'An interactive and personalized birthday wish website featuring custom animations, images, music, and a creative greeting experience.',
    image: 'images/project1.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Audio FX', 'Custom Animations'],
    liveLink: 'https://drithday.com.sojib',
    featured: true
  },
  {
    id: 'project-3',
    name: 'Personal Profile Website',
    description: 'A modern personal digital identity website showcasing my profile, skills, experience, services, projects, social links, and professional information.',
    image: 'images/project3.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'AI-Assisted Development', 'Cyber UI'],
    liveLink: 'https://sojib.crad.com',
    featured: true
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Ai Website Design',
    description: 'Modern, responsive and mobile-friendly websites using HTML, CSS and JavaScript enhanced with AI productivity.',
    icon: 'Globe',
    deliverables: ['Custom Responsive Code', 'Mobile Optimization', 'Modern Visual Polish']
  },
  {
    id: 'srv-2',
    title: 'UI & Web Design',
    description: 'Clean, attractive and interactive website interfaces with modern animations and creative layouts.',
    icon: 'Palette',
    deliverables: ['Interactive Prototyping', 'Modern Glass Aesthetics', 'Smooth Micro-interactions']
  },
  {
    id: 'srv-3',
    title: 'PDF Conversion',
    description: 'Convert PDF files into editable Word or Excel documents while maintaining the original structure as much as possible.',
    icon: 'FileText',
    deliverables: ['Table Preservation', 'Editable Typography', 'High-Fidelity Output']
  },
  {
    id: 'srv-4',
    title: 'Data Entry',
    description: 'Accurate and organized data entry, copy-paste, web research and basic data management.',
    icon: 'Database',
    deliverables: ['100% Accuracy Checks', 'Structured Spreadsheets', 'Web Research Gathering']
  },
  {
    id: 'srv-5',
    title: 'AI-Assisted Digital Solutions',
    description: 'Use modern AI tools to create creative content, website ideas, prompts and digital solutions.',
    icon: 'Cpu',
    deliverables: ['Prompt Engineering', 'Smart Content Creation', 'AI Workflow Boost']
  },
  {
    id: 'srv-6',
    title: 'E-Commerce Support',
    description: 'Basic assistance with online shop setup, product research, product listing and e-commerce management.',
    icon: 'ShoppingBag',
    deliverables: ['Product Listings', 'Supplier Research', 'Inventory & Store Organization']
  },
  {
    id: 'srv-7',
    title: 'Graphic & Digital Design',
    description: 'Create simple digital graphics, social media designs, promotional materials and creative visuals.',
    icon: 'Brush',
    deliverables: ['Social Media Banners', 'Brand Identity Elements', 'Visual Thumbnails']
  },
  {
    id: 'srv-8',
    title: 'Social Media Support',
    description: 'Basic support for social media pages, content organization, posts and digital communication.',
    icon: 'Share2',
    deliverables: ['Post Scheduling Assistance', 'Community Replies', 'Page Cleanliness']
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-3',
    company: 'Private Company — Riyadh, Kingdom of Saudi Arabia',
    role: 'Private Sector Professional',
    period: '18 February 2026 — Present',
    location: 'Riyadh, Kingdom of Saudi Arabia',
    description: 'Currently working in the private sector in Riyadh, contributing to daily operations and taking responsibility for assigned tasks in a professional work environment. This experience is helping me develop practical workplace skills, responsibility, teamwork, time management, and adaptability in an international working environment.',
    badge: 'Current / International',
    type: 'International'
  },
  {
    id: 'exp-2',
    company: 'Mohasagor Dropshipping',
    role: 'Part-Time Dropshipping Reseller',
    period: '1 November 2024 — 1 January 2026',
    location: 'Online / Bangladesh',
    description: 'Worked as a part-time dropshipping reseller through Mohasagor.com.bd. Managed product promotion through social media platforms, particularly Facebook, responded to customer inquiries, processed orders, and focused on delivering a smooth customer experience while building practical knowledge in online sales and e-commerce.',
    badge: 'E-Commerce Growth',
    type: 'E-Commerce'
  },
  {
    id: 'exp-1',
    company: 'Bangladesh Krishi Bank (BKB)',
    role: 'Customer Service Assistant',
    period: '26 September 2023 — 27 January 2026',
    location: 'Bangladesh',
    description: 'Provided customer support and banking-related services, handled client queries, assisted with account-related activities, and supported smooth day-to-day operations. Developed practical experience in customer communication, service management, and professional workplace responsibilities.',
    badge: 'Banking & Customer Trust',
    type: 'Banking'
  }
];

export const educationData: EducationItem[] = [
  {
    id: 'edu-1',
    institution: 'Devpur Islamia Fazil Degree Madrasa',
    degree: 'Higher Secondary Certificate (HSC)',
    group: 'Humanities',
    batch: 'HSC 2025',
    location: 'Muonuhat, Bangladesh',
    description: 'I completed my Higher Secondary education in the Humanities group from Devpur Islamia Fazil Degree Madrasha, Muonurhat, as part of the HSC 2025 batch. This stage of my academic journey helped me develop a broader perspective, strengthen my communication and learning skills, and build a foundation for my future goals in the digital and technology-driven world.'
  }
];

export const achievementsData: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'Professional Experience',
    description: 'Gained hands-on customer service and banking experience through professional work at Bangladesh Krishi Bank.',
    icon: 'Building2',
    tag: 'Institutional'
  },
  {
    id: 'ach-2',
    title: 'E-Commerce Experience',
    description: 'Built practical experience in online sales and dropshipping while working as a part-time reseller with Mohasagor.',
    icon: 'TrendingUp',
    tag: 'Commercial'
  },
  {
    id: 'ach-3',
    title: 'Digital Skills Journey',
    description: 'Developed practical skills in web design, HTML, CSS, JavaScript and modern AI tools through continuous self-learning and personal projects.',
    icon: 'Code2',
    tag: 'Technical'
  },
  {
    id: 'ach-4',
    title: 'Personal Projects',
    description: 'Created and experimented with multiple personal web projects, combining creative design, animation and interactive features.',
    icon: 'Sparkles',
    tag: 'Creative'
  },
  {
    id: 'ach-5',
    title: 'International Work Experience',
    description: 'Started a new professional chapter in Riyadh, Kingdom of Saudi Arabia, gaining experience in an international working environment.',
    icon: 'Globe2',
    tag: 'Global'
  }
];

export const statisticsData: StatItem[] = [
  {
    label: 'Projects Completed',
    value: 10,
    suffix: '+',
    icon: 'FolderCheck',
    description: 'Digital web projects, interactive web pages & experiments'
  },
  {
    label: 'Skills',
    value: 4,
    suffix: '+',
    icon: 'Layers',
    description: 'Core disciplines across Web, E-Commerce, AI & Operations'
  },
  {
    label: 'Clients',
    value: 200,
    suffix: '+',
    icon: 'Users',
    description: 'Satisfied customers served across banking & dropshipping'
  },
  {
    label: 'Experience',
    value: 3,
    suffix: '+',
    icon: 'Award',
    description: 'Years of combined banking, dropshipping & professional experience'
  }
];

export const socialLinksData: SocialLink[] = [
  {
    id: 'soc-fb',
    name: 'Facebook',
    url: 'https://www.facebook.com/share/17VVngCYnc/',
    icon: 'Facebook',
    color: '#1877F2',
    category: 'Social',
    displayHandle: 'MD Jihadul Islam'
  },
  {
    id: 'soc-ig',
    name: 'Instagram',
    url: 'https://www.instagram.com/jihadulislam_05?stkn=MTVwYWsyMjJ2emI4NA==',
    icon: 'Instagram',
    color: '#E4405F',
    category: 'Social',
    displayHandle: '@jihadulislam_05'
  },
  {
    id: 'soc-tt1',
    name: 'TikTok Profile 1',
    url: 'https://www.tiktok.com/@mdzihadul___islam___05',
    icon: 'Video',
    color: '#00F2FE',
    category: 'Social',
    displayHandle: '@mdzihadul___islam___05'
  },
  {
    id: 'soc-tt2',
    name: 'TikTok Profile 2',
    url: 'https://www.tiktok.com/@mdsojib_08',
    icon: 'Film',
    color: '#FE2C55',
    category: 'Social',
    displayHandle: '@mdsojib_08'
  },
  {
    id: 'soc-wa-direct',
    name: 'WhatsApp Direct',
    url: 'https://wa.me/8801893665896',
    icon: 'MessageSquare',
    color: '#25D366',
    category: 'Main',
    displayHandle: '+880 1893-665896'
  },
  {
    id: 'soc-wa-ch1',
    name: 'WhatsApp Channel 1',
    url: 'https://whatsapp.com/channel/0029VbDb6ZEAO7RCuror1b1d',
    icon: 'Radio',
    color: '#25D366',
    category: 'Community',
    displayHandle: 'Community Channel 1'
  },
  {
    id: 'soc-wa-ch2',
    name: 'WhatsApp Channel 2',
    url: 'https://whatsapp.com/channel/0029VbDEXCN5K3zb7Sc4gI0R',
    icon: 'Radio',
    color: '#25D366',
    category: 'Community',
    displayHandle: 'Community Channel 2'
  },
  {
    id: 'soc-tg-prof',
    name: 'Telegram Profile',
    url: 'https://t.me/mdjihaduislam_05',
    icon: 'Send',
    color: '#229ED9',
    category: 'Main',
    displayHandle: '@mdjihaduislam_05'
  },
  {
    id: 'soc-tg-ch',
    name: 'Telegram Channel',
    url: 'https://t.me/Romantic_Moment_Uss',
    icon: 'Compass',
    color: '#0088cc',
    category: 'Community',
    displayHandle: '@Romantic_Moment_Uss'
  },
  {
    id: 'soc-mail',
    name: 'Official Email',
    url: 'mailto:mdjehadulislam935@gmail.com',
    icon: 'Mail',
    color: '#EA4335',
    category: 'Main',
    displayHandle: 'mdjehadulislam935@gmail.com'
  }
];

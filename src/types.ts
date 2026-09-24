export interface PersonalInfo {
  fullName: string;
  nickname: string;
  tagline: string;
  taglineRoles: string[];
  introduction: string;
  fullAbout: string;
  goal: string;
  dob: string;
  location: string;
  nationality: string;
  email: string;
  phone: string;
  whatsappPhone: string;
  visitingCardWebsite: string;
  qrWebsite: string;
  cvLink: string;
  profileImage: string;
  coverImage: string;
  logoImage: string;
}

export interface SkillItem {
  id: string;
  name: string;
  percentage: number;
  category: string;
  iconName: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  deliverables?: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  badge?: string;
  type: 'Banking' | 'E-Commerce' | 'International';
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  group: string;
  batch: string;
  location: string;
  description: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  tag: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  color: string;
  category: 'Main' | 'Social' | 'Community';
  displayHandle?: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  icon: string;
  description: string;
}

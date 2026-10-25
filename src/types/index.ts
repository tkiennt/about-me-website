export interface Course {
  code: string;
  name: string;
  desc: string;
  credits?: number;
}

export interface ProjectTakeaway {
  problem: string;
  solution: string;
  engineeringTakeaway: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  status: 'Completed' | 'In Progress' | 'Production' | 'Research';
  period: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  architectureHighlight?: string;
  takeaway: ProjectTakeaway;
}

export interface Semester {
  id: number;
  term: string;
  title: string;
  academicYear: string;
  status: 'Completed' | 'In Progress' | 'Upcoming';
  gpa?: string;
  description: string;
  courses: Course[];
  projects: Project[];
}

export interface SchoolMilestone {
  year: string;
  title: string;
  desc: string;
  type?: 'award' | 'activity' | 'leadership';
}

export interface SchoolStage {
  id: 'high-school' | 'secondary-school' | 'primary-school';
  name: string;
  subtitle: string;
  schoolName: string;
  period: string;
  badge: string;
  highlights: SchoolMilestone[];
  reflection: string;
}

export interface MartialArtDetail {
  discipline: string;
  rank: string;
  experience: string;
  role: string;
  medals: string[];
  philosophy: string;
  engineeringAnalogy: string;
}

export interface BasketballDetail {
  position: string;
  experience: string;
  role: string;
  tournaments: string[];
  philosophy: string;
  teamworkAnalogy: string;
}

export interface ProfileInfo {
  name: string;
  title: string;
  university: string;
  campus: string;
  major: string;
  cohort: string;
  expectedGraduation: string;
  status: string;
  bio: string;
  careerGoals: string[];
  contacts: {
    email: string;
    github: string;
    linkedin: string;
    location: string;
    cvUrl: string;
  };
  metrics: {
    label: string;
    value: string;
    sublabel: string;
  }[];
}

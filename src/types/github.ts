export interface UserProfile {
  name: string;
  githubHandle: string;
  subUsername: string;
  email: string;
  role: string;
  university: string;
  location: string;
  avatarUrl: string;
  bio: string;
  stats: {
    totalRepos: number;
    totalCommits: number;
    totalPRs: number;
    totalIssues: number;
    activeBranches: string[];
  };
  languages: {
    name: string;
    percentage: number;
    color: string;
  }[];
}

export interface TimelineProject {
  id: string;
  title: string;
  period: string;
  status: 'Active' | 'Completed' | 'Maintained';
  isConfidential?: boolean;
  confidentialNotice?: string;
  category: 'FPT Capstone & Core' | 'Mobile (Flutter)' | 'Client & Game' | 'Tools & Practice';
  repos: {
    name: string;
    url?: string;
    role: 'Owner' | 'Collaborator' | 'Owner (Fork)';
    commits: number;
    branch: string;
    isPrivate?: boolean;
  }[];
  description: string;
  contributions: string[];
  techStack: string[];
}

export interface RepositoryItem {
  id: number;
  name: string;
  url?: string;
  role: 'Owner' | 'Collaborator' | 'Owner (Fork)';
  isPrivate: boolean;
  isConfidential?: boolean;
  language: string;
  branch: string;
  commits: number;
  subsystem: string;
}

export interface UpstreamRepo {
  id: number;
  forkName: string;
  forkUrl?: string;
  upstreamParent: string;
  defaultBranch: string;
  syncStatus: 'Merged & Synced' | 'Identical' | 'Diverged';
  isConfidential?: boolean;
  note: string;
}

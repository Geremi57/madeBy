export interface Contributor {
  name: string;
  role?: string;
  avatar?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
  cv?: string;
}

export interface CreditsProps {
  project?: string;
  contributors: Contributor[];
}
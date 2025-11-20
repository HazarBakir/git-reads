export interface RepositoryInfo {
  owner: string;
  repo: string;
  branch?: string;
}

export interface RepositoryContextType {
  repositoryInfo: RepositoryInfo | null;
  setRepositoryInfo: (info: RepositoryInfo | null) => void;
}

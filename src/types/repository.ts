export interface RepositoryInfo {
  owner: string;
  repo: string;
  branch?: string;
}

export interface RepositoryContextType {
  repositoryInfo: RepositoryInfo;
  setRepositoryInfo: (info: RepositoryInfo) => void;
}

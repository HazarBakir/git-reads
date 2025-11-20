import { type RepositoryInfo } from "@/types";
import { useState, type ReactNode } from "react";
import { RepositoryContext } from "./RepositoryContext";

export function RepositoryProvider({ children }: { children: ReactNode }) {
  const [repositoryInfo, setRepositoryInfo] = useState<RepositoryInfo | null>(null);

  return (
    <RepositoryContext.Provider value={{ repositoryInfo, setRepositoryInfo }}>
      {children}
    </RepositoryContext.Provider>
  );
}

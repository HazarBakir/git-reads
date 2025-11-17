import { createContext } from "react";
import type { RepositoryContextType } from "@/types";

export const RepositoryContext = createContext<
  RepositoryContextType | undefined
>(undefined);

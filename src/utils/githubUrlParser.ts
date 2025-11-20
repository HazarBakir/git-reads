import type { RepositoryInfo } from "@/types";

export interface ParsedGitHubUrl {
  owner: string;
  repo: string;
  branch?: string;
  isValid: boolean;
}


export function parseGitHubUrl(url: string): ParsedGitHubUrl {
  const result: ParsedGitHubUrl = {
    owner: "",
    repo: "",
    branch: undefined,
    isValid: false,
  };

  if (!url || typeof url !== "string") {
    return result;
  }

  let cleanUrl = url.trim();

  if (!cleanUrl.startsWith("http://") && !cleanUrl.startsWith("https://")) {
    cleanUrl = `https://${cleanUrl}`;
  }

  try {
    const urlObj = new URL(cleanUrl);

    if (urlObj.hostname !== "github.com" && urlObj.hostname !== "www.github.com") {
      return result;
    }

    const pathParts = urlObj.pathname.split("/").filter(Boolean);

    if (pathParts.length < 2) {
      const directMatch = url.trim().match(/^([a-zA-Z0-9._-]+)\/([a-zA-Z0-9._-]+)$/);
      if (directMatch) {
        result.owner = directMatch[1];
        result.repo = directMatch[2];
        result.branch = "main";
        result.isValid = true;
        return result;
      }
      return result;
    }

    const owner = pathParts[0];
    const repo = pathParts[1];

    if (!/^[a-zA-Z0-9._-]+$/.test(owner) || !/^[a-zA-Z0-9._-]+$/.test(repo)) {
      return result;
    }

    result.owner = owner;
    result.repo = repo;

    if (pathParts.length >= 4 && (pathParts[2] === "tree" || pathParts[2] === "blob")) {
      result.branch = pathParts[3];
    } else {
      result.branch = "main";
    }

    result.isValid = true;
    return result;
  } catch {
    const directMatch = url.trim().match(/^([a-zA-Z0-9._-]+)\/([a-zA-Z0-9._-]+)$/);
    if (directMatch) {
      result.owner = directMatch[1];
      result.repo = directMatch[2];
      result.branch = "main";
      result.isValid = true;
      return result;
    }
    return result;
  }
}

export function toRepositoryInfo(parsed: ParsedGitHubUrl): RepositoryInfo | null {
  if (!parsed.isValid || !parsed.owner || !parsed.repo) {
    return null;
  }

  return {
    owner: parsed.owner,
    repo: parsed.repo,
    branch: parsed.branch || "main",
  };
}


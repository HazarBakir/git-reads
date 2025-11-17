import { type RepositoryInfo } from "@/types";

export async function FetchReadme(repoInfo: RepositoryInfo): Promise<string> {
  try {
    const branch = repoInfo.branch || "main";
    const rawUrl = `https://raw.githubusercontent.com/${repoInfo.owner}/${repoInfo.repo}/${branch}/README.md`;

    const response = await fetch(rawUrl);

    if (!response.ok) {
      const alternatives = ["README", "readme.md", "Readme.md"];
      for (const alt of alternatives) {
        const altUrl = `https://raw.githubusercontent.com/${repoInfo.owner}/${repoInfo.repo}/${branch}/${alt}`;
        const altResponse = await fetch(altUrl);
        if (altResponse.ok) {
          return await altResponse.text();
        }
      }
      throw new Error(
        `Unable to fetch README: ${response.status} ${response.statusText}`
      );
    }

    return await response.text();
  } catch (error) {
    console.error("Error fetching README:", error);
    throw error;
  }
}

export async function FetchBranches(
  repoInfo: RepositoryInfo
): Promise<string[]> {
  const apiUrl = `https://api.github.com/repos/${repoInfo.owner}/${repoInfo.repo}/branches`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      return [repoInfo.branch || "main"];
    }
    const data: { name: string }[] = await response.json();
    return Array.isArray(data)
      ? data.map((branch) => branch.name)
      : [repoInfo.branch || "main"];
  } catch (error) {
    return [repoInfo.branch || "main"];
  }
}

import type { ReadmeSection, TOCItem } from "@/types/parser";
import { generateHeadingId } from "@/utils/generateHeadingId";

export function parseReadmeSections(readmeResponseData: {
  content?: string;
  encoding?: string;
}): ReadmeSection[] {
  if (!readmeResponseData || !readmeResponseData.content) {
    return [];
  }

  let decodedContent = "";
  try {
    if (readmeResponseData.encoding === "base64") {
      decodedContent = atob(readmeResponseData.content.replace(/\n/g, ""));
    } else {
      decodedContent = readmeResponseData.content;
    }
  } catch (error) {
    console.error("Error decoding README content:", error);
    return [];
  }

  const lines = decodedContent.split(/\r?\n/);

  const sections: ReadmeSection[] = [];
  let currentHeading = "";
  let currentDescriptionLines: string[] = [];

  for (const line of lines) {
    const headingMatch = /^#{1,6}\s+(.*)/.exec(line);
    if (headingMatch) {
      if (currentHeading || currentDescriptionLines.length > 0) {
        sections.push({
          heading: currentHeading,
          description: currentDescriptionLines.join("\n").trim(),
        });
      }
      currentHeading = headingMatch[1].trim();
      currentDescriptionLines = [];
    } else {
      currentDescriptionLines.push(line);
    }
  }
  if (
    currentHeading ||
    currentDescriptionLines.some((line) => line.trim() !== "")
  ) {
    sections.push({
      heading: currentHeading,
      description: currentDescriptionLines.join("\n").trim(),
    });
  }

  return sections.filter(
    (section) => section.heading !== "" || section.description !== ""
  );
}

export function parseTOC(markdown: string): TOCItem[] {
  if (!markdown) {
    return [];
  }

  const lines = markdown.split(/\r?\n/);
  const toc: TOCItem[] = [];
  let inCodeBlock = false;
  let codeBlockFence = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    const fenceMatch = line.match(/^(\s*)(`{3,}|~{3,})(.*)$/);
    if (fenceMatch) {
      if (inCodeBlock && fenceMatch[2] === codeBlockFence) {
        inCodeBlock = false;
        codeBlockFence = "";
      } else if (!inCodeBlock) {
        inCodeBlock = true;
        codeBlockFence = fenceMatch[2];
      }
      continue;
    }

    if (inCodeBlock) {
      continue;
    }

    const headingMatch = /^(#{1,6})\s+(.+)$/.exec(line);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2].trim();

      const id = generateHeadingId(text);

      toc.push({ level, text, id });
    }
  }

  return toc;
}

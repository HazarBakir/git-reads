export function formatTitle(title: string): string {
  const normalized = title.replace(/[-_.]/g, " ").replace(/\s+/g, " ").trim();
  return normalized.replace(/\b\w/g, (match) => match.toUpperCase());
}

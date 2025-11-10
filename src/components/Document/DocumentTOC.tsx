import type { TOCItem } from "../../lib/parser";

export function DocumentTOC({ toc }: { toc: TOCItem[] }) {
  return (
    <nav className="document-toc">
      <h2 className="document-toc-title">Table of Contents</h2>
      <ul className="document-toc-list">
        {toc.map((item, index) => (
          <li
            key={index}
            className={`document-toc-item document-toc-level-${item.level}`}
          >
            <a href={`#${item.id}`} className="document-toc-link">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

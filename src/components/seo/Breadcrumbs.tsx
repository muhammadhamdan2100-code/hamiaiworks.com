import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SITE } from "@/lib/data/site";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

/**
 * Renders a visible breadcrumb trail and a matching BreadcrumbList JSON-LD
 * block. Always include "Home" as the first item's implicit root — this
 * component adds it automatically.
 */
export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const fullTrail = [{ label: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: fullTrail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${SITE.url}${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="section-inner px-6 md:px-10 pt-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-ink-faint">
          {fullTrail.map((item, i) => {
            const isLast = i === fullTrail.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={12} className="text-ink-faint" />}
                {isLast ? (
                  <span aria-current="page" className="text-ink-muted">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-ink-muted transition-colors">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

import { join } from 'path';
import { parseDir } from '$lib/utils/parser';

export type HaikuItem = {
  slug: string;                 // "YYYY-MM-DD"
  date: { published: string; updated?: string }; // reuse your parser shape
  weekday: string;              // "月"/"Tue" etc.
  content: string;              // rendered by marker in parser
  filename: string;             // original filename (optional)
};

function weekdayLabel(ymd: string, locale = 'en-EN') {
  const [y, m, d] = ymd.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return new Intl.DateTimeFormat(locale, {
    weekday: 'short',
    timeZone: 'Asia/Tokyo'
  }).format(dt);
}

/** Hydrator for your parser: filename → date/weekday, no frontmatter needed */
function hydrateHaiku(_frontMatter: any, article: string, filename: string): HaikuItem {
  const slug = filename.replace(/\.md$/, '');        // "YYYY-MM-DD"
  const weekday = weekdayLabel(slug);
  return {
    slug,
    date: { published: slug, updated: slug },        // so parseDir’s sort works
    weekday,
    content: article,
    filename
  };
}

/** Read a single month’s directory: content/haiku/<year>/<month> */
export function getByMonth(year: string, month: string): HaikuItem[] {
  const dir = join('content', 'haiku', year, month);
  // parseDir sorts by published desc; flip to oldest→newest for reading
  return parseDir(dir, hydrateHaiku).sort((a: HaikuItem, b: HaikuItem) =>
    a.slug > b.slug ? 1 : -1
  );
}

/** List available months based on folder contents (optional) */
export function getMonths(): { year: string; month: string }[] {
  // You can implement this later by reading directories if you want an archive.
  // Keeping the API here for future expansion.
  return [];
}

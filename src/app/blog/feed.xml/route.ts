import { writing } from '@/config/Writing';

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export function GET() {
  const items = writing
    .map(
      (article) => `<item>
  <title>${escapeXml(article.title)}</title>
  <link>${escapeXml(article.href)}</link>
  <guid>${escapeXml(article.href)}</guid>
  <description>${escapeXml(article.description)}</description>
  <pubDate>${new Date(`${article.date}T00:00:00Z`).toUTCString()}</pubDate>
</item>`,
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>Krish Jaiswal — Writing</title>
  <link>https://itskrish.vercel.app/blog</link>
  <description>Notes and tutorials by Krish Jaiswal.</description>
${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}

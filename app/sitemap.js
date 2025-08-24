export default async function sitemap() {
  const base = 'https://example.com';
  return [
    { url: base + '/', lastModified: new Date() },
    { url: base + '/products', lastModified: new Date() },
    { url: base + '/blog', lastModified: new Date() },
  ];
}

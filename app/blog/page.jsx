import { getCollectionOrLocal } from '../../lib/firebase';

export const metadata = { title: 'Blog — PACE' };

export default async function Blog() {
  const posts = await getCollectionOrLocal('posts');
  return (
    <div className="container-p py-10">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map(b => (
          <article key={b.slug} className="card p-4">
            <img src={b.cover} alt={b.title} className="w-full h-48 object-cover rounded-xl"/>
            <h3 className="font-semibold mt-3">{b.title}</h3>
            <p className="text-sm text-gray-600">{b.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

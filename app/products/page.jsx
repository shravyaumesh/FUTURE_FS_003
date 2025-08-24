import { getCollectionOrLocal } from '../../lib/firebase';

export const metadata = { title: 'Products — PACE' };

export default async function Products() {
  const products = await getCollectionOrLocal('products');
  return (
    <div className="container-p py-10">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p => (
          <article key={p.id} className="card p-4">
            <img
              src={p.image}   // ✅ use actual image path from JSON/Firebase
              alt={p.name}
              className="w-full h-48 object-cover rounded-xl"
            />
            <div className="mt-4">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
              <p className="mt-2 font-semibold">${p.price}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

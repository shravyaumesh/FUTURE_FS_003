import { getCollectionOrLocal } from "../lib/firebase";
import HomeClient from "./HomeClient";

export const dynamic = "force-static"; // optional

export default async function Page() {
  // ✅ Fetch server-side
  const products = await getCollectionOrLocal("products");
  const posts = await getCollectionOrLocal("posts");

  return <HomeClient products={products} posts={posts} />;
}

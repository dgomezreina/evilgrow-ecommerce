import { Products } from "@/app/components/Products";

export default async function CategoryPage({ params }: { params: { categoryId: string } }) {
  return (
    <main>
      <h1 className="text-4xl font-bold text-center mt-8">Category Page</h1>
      <Products categoryId={params.categoryId} />
    </main>
  );
}

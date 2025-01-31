import { getProducts } from "@/app/lib/api";
import Link from "next/link";


export const Products = async ({ categoryId }: { categoryId: string }) => {
  const products = await getProducts({ categoryId });

  // Si no hay productos, mostramos un mensaje
  if (products.length === 0)
    return (
      <section className="py-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          No products found in this category.
        </h2>
      </section>
    );

  return (
    <section className="py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Products in Category
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 flex flex-col items-center"
          >
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
            )}
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 text-center mb-4">
              {product.description || "No description available"}
            </p>
            
            <Link
              href={`/store/${product.slug}`}
              className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              View Product
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

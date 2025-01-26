import { getCategories } from "@/app/lib/get-categories";
import Link from "next/link";

export const Categories = async () => {
  const categories = await getCategories();

  // Si no hay categorías, no renderizamos nada
  if (categories.length === 0) return null;

  return (
    <section className="w-full py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">All Categories</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white dark:bg-zinc-900 rounded-lg shadow hover:shadow-lg transition-shadow p-6 flex flex-col items-center"
          >
            {category.image && (
              <img
                src={category.image}
                alt={category.name}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
            )}
            <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
            <p className="text-gray-600 text-center mb-4">
              {category.description || "No description available"}
            </p>
            <Link
              href={`/categories/${category.slug}`}
              className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              View Category
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

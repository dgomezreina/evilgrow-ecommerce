import { query } from "./strapi";

const { STRAPI_HOST } = process.env;

export async function getProducts({ categoryId }: { categoryId: string }) {
    try {
        const response = await query(
            `products?filters[product_category][slug][$contains]=${categoryId}&populate=images`
        );
        return response?.data?.map(({ name, slug, description, images }) => ({
            name,
            slug,
            description,
            image: images?.[0]?.url ? `${STRAPI_HOST}${images[0].url}` : null, // Accede a la primera imagen en el array
        })) || [];
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
  }
  
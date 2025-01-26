import { query } from "./strapi";

const { STRAPI_HOST } = process.env;

export async function getCategories() {
    try {
        const response = await query(
            "product-categories?fields[0]=name&fields[1]=slug&fields[2]=description&populate[image][fields][0]=url"
        );
        return response?.data?.map(({ name, slug, description, image }) => ({
            name,
            slug,
            description,
            image: image?.url ? `${STRAPI_HOST}${image.url}` : null,
        })) || [];
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
}

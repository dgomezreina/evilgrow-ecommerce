const { STRAPI_HOST, STRAPI_TOKEN } = process.env;

export function query(url: string) {
  return fetch(`${STRAPI_HOST}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  }).then((res) => res.json());
}


export async function getHomeInfo() {
  try {
    const response = await query("home?populate[image][fields][0]=url");
    return response?.data || {};
  } catch (error) {
    return {};
  }
}




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

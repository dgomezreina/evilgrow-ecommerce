import { query } from "./strapi";

const { STRAPI_HOST } = process.env;

export async function getCategories() {
  try {
    // Llamada a la API
    const response = await query(
      "product-categories?fields[0]=name&fields[1]=slug&fields[2]=description&populate[image][fields][0]=url"
    );

    // Validación: Aseguramos que haya datos en la respuesta
    if (!response?.data) {
      console.warn("No data found in categories response.");
      return [];
    }

    // Transformación: Mapeamos los datos al formato deseado
    return response.data.map((category: { name: any; slug: any; description: any; image: any; }) => {
      const { name, slug, description, image: rawImage } = category;
      const image = rawImage?.url ? `${STRAPI_HOST}${rawImage.url}` : null; // Validamos la URL de la imagen
      return { name, slug, description, image };
    });
  } catch (error) {
    // Manejo de errores: Registramos el problema y devolvemos un array vacío
    console.error("Error fetching categories:", error);
    return [];
  }
}

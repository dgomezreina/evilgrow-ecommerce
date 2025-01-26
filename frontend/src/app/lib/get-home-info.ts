import { query } from "./strapi";

export async function getHomeInfo() {
  try {
    const response = await query("home?populate[image][fields][0]=url");
    return response?.data || {};
  } catch (error) {
    return {};
  }
}

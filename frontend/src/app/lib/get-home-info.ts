import { query } from "./strapi";

export async function getHomeInfo() {
  try {
    const response = await query("home?populate=*");
    return response?.data || {};
  } catch (error) {
    return {};
  }
}

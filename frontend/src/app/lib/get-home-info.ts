import { query } from "./strapi";

export async function getHomeInfo() {
  try {
    const response = await query("home");
    return response?.data || {};
  } catch (error) {
    return {};
  }
}

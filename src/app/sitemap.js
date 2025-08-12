import { headers } from "next/headers";
import seoMetadata from "@/data/cbs_seo_metadata.json";

export const dynamic = "force-dynamic";

// Convert seoMetadata JSON entries to route list
function getRoutesFromSeoJson() {
  const seen = new Set();
  const routes = [];
  for (const item of seoMetadata) {
    if (!item?.path) continue;
    // Skip parameter placeholder entries if a concrete route is already present
    if (seen.has(item.path)) continue;
    seen.add(item.path);
    routes.push({
      url: item.path,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: item.path === "/" ? 1.0 : 0.7,
    });
  }
  return routes;
}

export default async function sitemap() {
  const headersList = headers();
  const defaultDomain = "www.colbrownschool.com";
  const isProd = process.env.NODE_ENV === "production";
  const hostHeader = headersList.get("host");
  const domain = isProd ? defaultDomain : hostHeader || defaultDomain;
  const protocol = isProd ? "https" : "http";
  const baseUrl = `${protocol}://${domain}`;

  const allRoutes = getRoutesFromSeoJson();

  return allRoutes.map((route) => ({
    ...route,
    url: `${baseUrl}${route.url}`,
  }));
}

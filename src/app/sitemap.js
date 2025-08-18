import { headers } from "next/headers";
import seoMetadata from "@/data/cbs_seo_metadata.json";

export const dynamic = "force-dynamic";

// ✅ Fetch ALL WP blog slugs with pagination
async function getWpBlogSlugs() {
  const auth = Buffer.from(
    `${process.env.WP_USER}:${process.env.WP_PASS}`
  ).toString("base64");

  let allPosts = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const res = await fetch(
      `https://www.colbrownschool.com/blog/wp-json/wp/v2/posts?per_page=100&page=${page}&_fields=slug,modified`,
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.error(`❌ Failed to fetch WP slugs (page ${page})`);
      break;
    }

    const posts = await res.json();

    if (posts.length === 0) {
      hasMore = false;
    } else {
      allPosts = [...allPosts, ...posts];
      page++;
    }
  }

  return allPosts.map((post) => ({
    url: `/blog/${post.slug}`,
    lastModified: new Date(post.modified || Date.now()),
    changeFrequency: "weekly",
    priority: 0.6,
  }));
}

// Convert seoMetadata JSON entries to route list
function getRoutesFromSeoJson() {
  const seen = new Set();
  const routes = [];
  for (const item of seoMetadata) {
    if (!item?.path) continue;
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

  // ✅ Load both: static JSON routes + WP blog slugs
  const [seoRoutes, wpRoutes] = await Promise.all([
    Promise.resolve(getRoutesFromSeoJson()),
    getWpBlogSlugs(),
  ]);

  const allRoutes = [...seoRoutes, ...wpRoutes];

  return allRoutes.map((route) => ({
    ...route,
    url: `${baseUrl}${route.url}`,
  }));
}

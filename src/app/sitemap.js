import { headers } from "next/headers";
import seoMetadata from "@/data/cbs_seo_metadata.json";

export const dynamic = "force-dynamic";

// ✅ Fetch ALL WP blog slugs with pagination
async function getWpBlogSlugs() {
  // Hardcoded credentials to bypass environment variable issues
  const WP_USER = "seoteam";
  const WP_PASS = "1()M(@3wg(D!W(fumDcO5WYi";

  const auth = Buffer.from(`${WP_USER}:${WP_PASS}`).toString("base64");

  let allPosts = [];
  let page = 1;
  let hasMore = true;
  const maxPages = 20; // Prevent infinite loops in production

  try {
    while (hasMore && page <= maxPages) {
      const apiUrl = `https://www.colbrownschool.com/blog/wp-json/wp/v2/posts?per_page=100&page=${page}&_fields=slug,modified`;

      console.log(`🔍 Fetching WordPress posts page ${page}...`);

      const res = await fetch(apiUrl, {
        headers: {
          Authorization: `Basic ${auth}`,
        },
        cache: "no-store",
        // Add timeout for production
        signal: AbortSignal.timeout(15000), // 15 second timeout
      });

      if (!res.ok) {
        console.error(
          `❌ Failed to fetch WP slugs (page ${page}): ${res.status} ${res.statusText}`
        );
        console.error(
          "Response headers:",
          Object.fromEntries(res.headers.entries())
        );
        break;
      }

      const posts = await res.json();
      console.log(`✅ Fetched ${posts.length} posts from page ${page}`);

      if (posts.length === 0) {
        hasMore = false;
      } else {
        allPosts = [...allPosts, ...posts];
        page++;
      }
    }

    console.log(`🎯 Total WordPress posts fetched: ${allPosts.length}`);

    return allPosts.map((post) => ({
      url: `/blog/${post.slug}`,
      lastModified: new Date(post.modified || Date.now()),
      changeFrequency: "weekly",
      priority: 0.6,
    }));
  } catch (error) {
    console.error("❌ Error fetching WordPress posts:", error.message);
    console.error("Error details:", error);

    // Return empty array instead of failing completely
    return [];
  }
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
  try {
    const headersList = headers();
    const defaultDomain = "www.colbrownschool.com";
    const isProd = process.env.NODE_ENV === "production";
    const hostHeader = headersList.get("host");
    const domain = isProd ? defaultDomain : hostHeader || defaultDomain;
    const protocol = isProd ? "https" : "http";
    const baseUrl = `${protocol}://${domain}`;

    console.log("🚀 Generating sitemap...");
    console.log("Environment:", process.env.NODE_ENV);
    console.log("Domain:", domain);
    console.log("Protocol:", protocol);

    // ✅ Load both: static JSON routes + WP blog slugs
    const [seoRoutes, wpRoutes] = await Promise.all([
      Promise.resolve(getRoutesFromSeoJson()),
      getWpBlogSlugs(),
    ]);

    const allRoutes = [...seoRoutes, ...wpRoutes];

    console.log(`📊 Sitemap generated successfully:`);
    console.log(`   - Static routes: ${seoRoutes.length}`);
    console.log(`   - WordPress routes: ${wpRoutes.length}`);
    console.log(`   - Total routes: ${allRoutes.length}`);

    return allRoutes.map((route) => ({
      ...route,
      url: `${baseUrl}${route.url}`,
    }));
  } catch (error) {
    console.error("❌ Sitemap generation failed:", error.message);
    console.error("Error details:", error);

    // Fallback: return only static routes if everything fails
    console.log("🔄 Falling back to static routes only...");
    const fallbackRoutes = getRoutesFromSeoJson();

    return fallbackRoutes.map((route) => ({
      ...route,
      url: `https://www.colbrownschool.com${route.url}`,
    }));
  }
}

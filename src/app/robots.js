import { headers } from "next/headers";

export default function robots() {
  const headersList = headers();
  const defaultDomain = "www.colbrownschool.com";
  const isProd = process.env.NODE_ENV === "production";
  const hostHeader = headersList.get("host");
  const domain = isProd ? defaultDomain : hostHeader || defaultDomain;
  const protocol = isProd ? "https" : "http";
  const baseUrl = `${protocol}://${domain}`;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/private", "/api"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

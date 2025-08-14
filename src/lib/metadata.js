import seoMetadata from "../data/cbs_seo_metadata.json";

export function findMetadataByPath(path) {
  // Remove trailing slash if present
  const cleanPath = path.endsWith("/") ? path.slice(0, -1) : path;

  // Find metadata for the exact path
  const metadata = seoMetadata.find((item) => item.path === cleanPath);

  if (metadata) {
    return {
      title: metadata.title,
      description: metadata.description,
      canonical: `https://www.colbrownschool.com${metadata.canonical}`,
    };
  }

  // Try to match dynamic/parameterized routes like ":param"
  for (const item of seoMetadata) {
    // Build a regex that matches paths with dynamic segments defined via :param
    // Example: "/boarding-life/sports-at-cbs/:sport" => /^\/boarding-life\/sports-at-cbs\/[^/]+$/
    if (item.path && item.path.includes(":")) {
      const dynamicPattern = new RegExp(
        `^${item.path
          .split("/")
          .map((segment) =>
            segment.startsWith(":")
              ? "[^/]+"
              : segment.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")
          )
          .join("/")}$`
      );
      if (dynamicPattern.test(cleanPath)) {
        return {
          title: item.title,
          description: item.description,
          // For dynamic paths, prefer the actual resolved path for canonical
          canonical: `https://www.colbrownschool.com${cleanPath}`,
        };
      }
    }
  }

  // If no exact match, return default metadata
  return {
    title: "Best Boarding School In Dehradun For Boys | Residential School",
    description:
      "Looking for a Boarding School For Boys In India? Col Brown School is a Top Boarding Schools in Dehradun, Uttarakhand, and specializes in boarding education!",
    canonical: `https://www.colbrownschool.com${cleanPath}`,
  };
}

export function generateMetadataForPath(path) {
  const metadata = findMetadataByPath(path);

  return {
    title: metadata.title,
    description: metadata.description,
    keywords:
      "education, school, CBS, learning, boarding school, residential school, boys school, Dehradun schools, Col Brown School",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    authors: [{ name: "Col Brown School" }],
    creator: "Col Brown School",
    publisher: "Col Brown School",
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: "website",
      url: metadata.canonical,
      siteName: "Col Brown School",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
    },
    alternates: {
      canonical: metadata.canonical,
    },
  };
}

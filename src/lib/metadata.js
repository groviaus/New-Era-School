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
      canonical: `https://www.neweraschool.com${metadata.canonical}`,
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
          canonical: `https://www.neweraschool.com${cleanPath}`,
        };
      }
    }
  }

  // If no exact match, return default metadata
  return {
    title:
      "New Era School | Progressive English Medium School in Jamia Nagar, Delhi",
    description:
      "New Era School, established in 1968, is a recognized progressive English Medium School in Jamia Nagar, Delhi. Committed to value-based education and holistic development of students.",
    canonical: `https://www.neweraschool.com${cleanPath}`,
  };
}

export function generateMetadataForPath(path) {
  const metadata = findMetadataByPath(path);

  return {
    title: metadata.title,
    description: metadata.description,
    keywords:
      "New Era School, English Medium School, Jamia Nagar, Delhi, education, progressive school, value-based education, Dr Saeed Ansari, established 1968",
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
    authors: [{ name: "New Era School" }],
    creator: "New Era School",
    publisher: "New Era School",
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: "website",
      url: metadata.canonical,
      siteName: "New Era School",
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

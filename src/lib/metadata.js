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

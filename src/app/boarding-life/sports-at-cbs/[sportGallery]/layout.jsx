import { generateMetadataForPath } from "@/lib/metadata";

export function generateMetadata({ params }) {
  const sport = params?.sportGallery;
  // Use the concrete path so canonical is specific, while JSON will match via dynamic rule
  const path = `/boarding-life/sports-at-cbs/${sport ?? ""}`.replace(/\/$/, "");
  return generateMetadataForPath(path || "/boarding-life/sports-at-cbs/:sport");
}

export default function Layout({ children }) {
  return <>{children}</>;
}

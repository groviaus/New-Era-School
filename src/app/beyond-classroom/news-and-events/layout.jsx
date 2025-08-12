import { generateMetadataForPath } from "@/lib/metadata";

export function generateMetadata() {
  return generateMetadataForPath("/beyond-classroom/news-and-events");
}

export default function Layout({ children }) {
  return <>{children}</>;
}

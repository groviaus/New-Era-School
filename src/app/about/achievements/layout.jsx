import { generateMetadataForPath } from "@/lib/metadata";

export function generateMetadata() {
  return generateMetadataForPath("/about/achievements");
}

export default function Layout({ children }) {
  return <>{children}</>;
}

import { generateMetadataForPath } from "@/lib/metadata";

export function generateMetadata() {
  return generateMetadataForPath("/about/infrastructure");
}

export default function Layout({ children }) {
  return <>{children}</>;
}

import { generateMetadataForPath } from "@/lib/metadata";

export function generateMetadata() {
  return generateMetadataForPath("/about/our-visionary-leaders");
}

export default function Layout({ children }) {
  return <>{children}</>;
}

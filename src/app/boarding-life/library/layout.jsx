import { generateMetadataForPath } from "@/lib/metadata";

export function generateMetadata() {
  return generateMetadataForPath("/boarding-life/library");
}

export default function Layout({ children }) {
  return <>{children}</>;
}

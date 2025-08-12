import { generateMetadataForPath } from "@/lib/metadata";

export function generateMetadata() {
  return generateMetadataForPath("/academics/advanced-pedagogy");
}

export default function Layout({ children }) {
  return <>{children}</>;
}

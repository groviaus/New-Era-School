import { generateMetadataForPath } from "@/lib/metadata";

export function generateMetadata() {
  return generateMetadataForPath("/academics/curriculum");
}

export default function Layout({ children }) {
  return <>{children}</>;
}

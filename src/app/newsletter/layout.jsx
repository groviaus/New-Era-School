import { generateMetadataForPath } from "@/lib/metadata";

export function generateMetadata() {
  return generateMetadataForPath("/newsletter");
}

export default function Layout({ children }) {
  return <>{children}</>;
}

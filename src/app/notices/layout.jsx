import { generateMetadataForPath } from "@/lib/metadata";

export function generateMetadata() {
  return generateMetadataForPath("/notices");
}

export default function Layout({ children }) {
  return <>{children}</>;
}

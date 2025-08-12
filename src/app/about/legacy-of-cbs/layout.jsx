import { generateMetadataForPath } from "@/lib/metadata";

export function generateMetadata() {
  return generateMetadataForPath("/about/legacy-of-cbs");
}

export default function Layout({ children }) {
  return <>{children}</>;
}

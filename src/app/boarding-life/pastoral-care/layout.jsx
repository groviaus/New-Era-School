import { generateMetadataForPath } from "@/lib/metadata";

export function generateMetadata() {
  return generateMetadataForPath("/boarding-life/pastoral-care");
}

export default function Layout({ children }) {
  return <>{children}</>;
}

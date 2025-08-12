import { generateMetadataForPath } from "@/lib/metadata";

export function generateMetadata() {
  return generateMetadataForPath("/boarding-life/overview");
}

export default function Layout({ children }) {
  return <>{children}</>;
}

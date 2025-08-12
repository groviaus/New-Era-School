import { generateMetadataForPath } from "@/lib/metadata";

export function generateMetadata() {
  return generateMetadataForPath("/boarding-life/safety-security");
}

export default function Layout({ children }) {
  return <>{children}</>;
}

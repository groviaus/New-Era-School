import { generateMetadataForPath } from "@/lib/metadata";

export function generateMetadata() {
  return generateMetadataForPath("/admission/fee-details");
}

export default function Layout({ children }) {
  return <>{children}</>;
}

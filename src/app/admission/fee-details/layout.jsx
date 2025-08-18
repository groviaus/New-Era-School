import { generateMetadataForPath } from "@/lib/metadata";

export function generateMetadata() {
  return generateMetadataForPath("/admissions/fee-details");
}

export default function Layout({ children }) {
  return <>{children}</>;
}

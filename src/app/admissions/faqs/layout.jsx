import { generateMetadataForPath } from "@/lib/metadata";

export function generateMetadata() {
  return generateMetadataForPath("/admissions/faqs");
}

export default function Layout({ children }) {
  return <>{children}</>;
}

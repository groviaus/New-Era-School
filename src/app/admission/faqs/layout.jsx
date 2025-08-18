import { generateMetadataForPath } from "@/lib/metadata";

export function generateMetadata() {
  return generateMetadataForPath("/admission/faqs");
}

export default function Layout({ children }) {
  return <>{children}</>;
}

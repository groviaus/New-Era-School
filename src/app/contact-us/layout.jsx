import { generateMetadataForPath } from "@/lib/metadata";

export function generateMetadata() {
  return generateMetadataForPath("/contact-us");
}

export default function Layout({ children }) {
  return <>{children}</>;
}

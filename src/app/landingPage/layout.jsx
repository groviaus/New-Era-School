import { generateMetadataForPath } from "@/lib/metadata";

export function generateMetadata() {
  // No dedicated SEO entry for /landingPage; fallback will use defaults with canonical
  return generateMetadataForPath("/landingPage");
}

export default function Layout({ children }) {
  return <>{children}</>;
}

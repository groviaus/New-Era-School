import { generateMetadataForPath } from "@/lib/metadata";

export function generateMetadata() {
  return generateMetadataForPath("/boarding-life/medical-facilities");
}

export default function Layout({ children }) {
  return <>{children}</>;
}

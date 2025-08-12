import { generateMetadataForPath } from "@/lib/metadata";

export function generateMetadata() {
  return generateMetadataForPath("/about/faculty-staff");
}

export default function Layout({ children }) {
  return <>{children}</>;
}

import { generateMetadataForPath } from "@/lib/metadata";

export function generateMetadata() {
  return generateMetadataForPath("/admissions/registration");
}

export default function Layout({ children }) {
  return <>{children}</>;
}

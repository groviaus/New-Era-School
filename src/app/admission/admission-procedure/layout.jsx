import { generateMetadataForPath } from "@/lib/metadata";

export function generateMetadata() {
  return generateMetadataForPath("/admission/admission-procedure");
}

export default function Layout({ children }) {
  return <>{children}</>;
}

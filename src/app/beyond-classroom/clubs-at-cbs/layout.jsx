import { generateMetadataForPath } from "@/lib/metadata";

export function generateMetadata() {
  return generateMetadataForPath("/beyond-classroom/clubs-at-cbs");
}

export default function Layout({ children }) {
  return <>{children}</>;
}

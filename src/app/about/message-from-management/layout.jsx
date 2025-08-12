import { generateMetadataForPath } from "@/lib/metadata";

export function generateMetadata() {
  return generateMetadataForPath("/about/message-from-management");
}

export default function Layout({ children }) {
  return <>{children}</>;
}

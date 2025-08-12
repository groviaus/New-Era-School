import { generateMetadataForPath } from "@/lib/metadata";

export function generateMetadata() {
  return generateMetadataForPath("/beyond-classroom/adventure-excursion");
}

export default function Layout({ children }) {
  return <>{children}</>;
}

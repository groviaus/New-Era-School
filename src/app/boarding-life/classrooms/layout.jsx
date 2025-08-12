import { generateMetadataForPath } from "@/lib/metadata";

export function generateMetadata() {
  return generateMetadataForPath("/boarding-life/classrooms");
}

export default function Layout({ children }) {
  return <>{children}</>;
}

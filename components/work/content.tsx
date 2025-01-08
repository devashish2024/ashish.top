import MDXContent from "@/components/layout/mdxcontent";

export default function Content({ content }: { content: string }) {
  return <MDXContent source={content} />;
}

import MDXContent from "@/components/mdx/mdx";

export default function Content({ content }: { content: string }) {
  return <MDXContent source={content} />;
}

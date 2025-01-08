import Content from "./content";
import Meta from "./meta";
import Summary from "./summary";

export default function ProjectPage({
  slug,
  image,
  title,
  publishedAt,
  summary,
  content,
  categories,
}: {
  slug: string;
  image: string;
  title?: string;
  publishedAt?: string;
  summary?: string;
  content: string;
  categories: string[];
}) {
  return (
    <>
      <Meta
        slug={slug}
        image={image}
        title={title}
        publishedAt={publishedAt}
        categories={categories}
      />

      <main className="prose dark:prose-invert">
        {summary && <Summary summary={summary} />}
        <Content content={content} />
      </main>
    </>
  );
}

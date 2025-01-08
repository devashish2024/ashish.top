import Content from "./content";
import Meta from "./meta";
import Summary from "./summary";

export default function ProjectPage({
  slug,
  image = null,
  title,
  publishedAt,
  summary,
  content,
  categories,
}: {
  slug: string;
  image?: string | null;
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

      <main>
        {summary && <Summary summary={summary} />}
        <Content content={content} />
      </main>
    </>
  );
}

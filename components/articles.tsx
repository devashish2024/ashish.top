import { articles } from "@/data/interviews";
import Link from "next/link";

export default async function Articles() {
  return (
    <div>
      <div className="text-2xl font-semibold font-serif">Articles</div>
      <p className="text-sm mt-2 mb-8">
        Also featured by some articles on the internet, including Zee News.
      </p>
      <div className="flex flex-col justify-between gap-4">
        <div className="grid grid-cols-2 gap-4">
          {articles.map((article, index) => (
            <Link
              href={article.url}
              target="_blank"
              passHref
              className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              key={index}
            >
              <div className="text-xl font-semibold font-serif">
                <span className="text-primary hover:brightness-90">
                  {article.site}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

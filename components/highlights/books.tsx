import Link from "next/link";
import ActionLink from "../ui/actionlink";

export default async function Books() {
  return (
    <div>
      <div className="text-2xl font-semibold font-serif">Books</div>
      <div className="space-x-1">
        <p className="text-sm inline-flex">
          I&apos;ve also self-authored and published nearly 8 books on Google
          Books!
        </p>
        <ActionLink
          label="List of my books"
          href="#"
          target="_blank"
          className="text-sm inline-flex !mt-2"
        />
      </div>
    </div>
  );
}

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
          href={`https://www.google.com/search?sa=X&sca_esv=454e20719506dd47&udm=36&sxsrf=AHTn8zr-QB2gheT-_f8FawbBUjBjoF4_Nw:1740251060225&udm=36&q=inauthor:%22Ashish+Agarwal%22&ved=2ahUKEwiJ546y_NeLAxXESmwGHc0GNJcQ9Ah6BAgFEAY&biw=1366&bih=582&dpr=1`}
          target="_blank"
          className="text-sm inline-flex !mt-2"
        />
      </div>
    </div>
  );
}

import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function ActionLink({
  label,
  href,
  className = "",
  icon = true,
  ...props
}: {
  label: string;
  href: string;
  className?: string;
  icon?: boolean;
  [key: string]: any;
}) {
  return (
    <Link
      href={href}
      target={href.startsWith("/") || href === "#" ? undefined : "_blank"}
      className={twMerge(
        "justify-center lg:justify-start flex items-center group gap-2 mt-6 text-gray-900 dark:text-gray-300 underline-offset-4 hover:underline",
        className,
      )}
      {...props}
    >
      {label}{" "}
      {icon && (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="transition-all duration-75 inline-block align-text-bottom size-4 -translate-x-1 group-hover:translate-x-0 motion-safe:transition"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12H3"
            className="scale-x-0 origin-right [transform-box:fill-box] group-hover:scale-x-100 motion-safe:transition"
          />
        </svg>
      )}
    </Link>
  );
}

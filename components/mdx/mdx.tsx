import "@/styles/mdx.css";

import { JSX } from "react";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import Link from "next/link";

import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

export function TypographyH1({ children, ...props }: any) {
  return (
    <h1
      className="scroll-m-20 text-3xl font-semibold tracking-tight font-serif"
      {...props}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children, ...props }: any) {
  return (
    <h2
      className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight font-serif first:mt-0"
      {...props}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({ children, ...props }: any) {
  return (
    <h3
      className="scroll-m-20 text-xl font-semibold tracking-tight font-serif"
      {...props}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({ children, ...props }: any) {
  return (
    <h4
      className="scroll-m-20 text-lg font-semibold tracking-tight font-serif"
      {...props}
    >
      {children}
    </h4>
  );
}

export function TypographyP({ children, ...props }: any) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6" {...props}>
      {children}
    </p>
  );
}

export function TypographyBlockquote({ children, ...props }: any) {
  return (
    <blockquote
      className="mt-6 border-l-2 italic pl-6 font-serif my-4 block"
      {...props}
    >
      {children}
    </blockquote>
  );
}

function A({ children, ...props }: any) {
  return <Link {...props}>{children}</Link>;
}

const components = {
  h1: TypographyH1,
  h2: TypographyH2,
  h3: TypographyH3,
  h4: TypographyH4,
  p: TypographyP,
  blockquote: TypographyBlockquote,
  a: A,
};

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <div className="mdx-content space-y-4">
      <MDXRemote
        {...props}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeHighlight],
          },
        }}
        components={{ ...components, ...(props.components || {}) }}
      />
    </div>
  );
}

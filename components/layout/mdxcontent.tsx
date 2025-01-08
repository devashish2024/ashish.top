import { JSX } from "react";
import { highlight } from "sugar-high";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import Link from "next/link";

// import Counter from "@/components/counter";

function Code({ children, ...props }: any) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function H1({ children, ...props }: any) {
  return <h1 {...props}>{children}</h1>;
}

function H2({ children, ...props }: any) {
  return <h2 {...props}>{children}</h2>;
}

function H3({ children, ...props }: any) {
  return <h3 {...props}>{children}</h3>;
}

function H4({ children, ...props }: any) {
  return <h4 {...props}>{children}</h4>;
}

function H5({ children, ...props }: any) {
  return <h5 {...props}>{children}</h5>;
}

function H6({ children, ...props }: any) {
  return <h6 {...props}>{children}</h6>;
}

function P({ children, ...props }: any) {
  return <p {...props}>{children}</p>;
}

function A({ children, ...props }: any) {
  return <Link {...props}>{children}</Link>;
}

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  a: A,
};

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}

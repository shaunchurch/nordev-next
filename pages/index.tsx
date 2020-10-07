import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

import Link from "next/link";

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      content: "good dog",
    },
  };
};

export default function IndexRoute({ content }) {
  return (
    <main>
      Hello world! {content}
      <Link href="/pagetwo">
        <a>Page Two</a>
      </Link>
    </main>
  );
}

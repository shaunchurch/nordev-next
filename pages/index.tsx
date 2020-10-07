import Link from "next/link";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { useQuery } from "react-query";
import { Post } from "@prisma/client";
import { ReactQueryDevtools } from "react-query-devtools";

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      content: "good dog",
    },
  };
};

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts");
  return await res.json();
}

export default function IndexRoute({ content }) {
  const { isLoading, error, data } = useQuery<Post[]>("post", getPosts);
  const { data: data2 } = useQuery<Post[]>("post-2", getPosts);

  return (
    <main>
      <ul>
        {data?.map((post) => {
          return <li>{post.title}</li>;
        })}
      </ul>
      <Link href="/pagetwo">
        <a>Page Two</a>
      </Link>
      <ReactQueryDevtools initialIsOpen />
    </main>
  );
}

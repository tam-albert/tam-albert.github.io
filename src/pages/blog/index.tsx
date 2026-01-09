import Layout from '../../components/layout';
import { getSortedPostsData, BlogPost } from '../../lib/blog';
import Link from 'next/link';
import { GetStaticProps } from 'next';

interface BlogProps {
  allPostsData: BlogPost[];
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Blog({ allPostsData }: BlogProps) {
  return (
    <Layout>
      <div className="flex flex-col space-y-12">
        <h1 className="text-lg font-bold tracking-tight text-black">Blog</h1>

        <div className="flex flex-col space-y-6">
          {allPostsData.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex justify-between items-baseline gap-4"
            >
              <h2 className="text-gray-900 group-hover:text-black group-hover:underline underline-offset-4 decoration-1 transition-all">
                {post.title}
              </h2>
              <time className="text-sm text-gray-400 font-mono shrink-0">
                {new Date(post.date).getFullYear()}
              </time>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

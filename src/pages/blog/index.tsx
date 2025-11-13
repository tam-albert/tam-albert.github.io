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
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Blog</h1>
          <p className="text-gray-700">Work in progress...</p>
        </div>

        <div className="space-y-6">
          {allPostsData.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <article className="border border-gray-300 rounded-lg p-6 hover:border-gray-400 transition-colors">
                <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-700 transition-colors">
                  {post.title}
                </h2>
                <time className="text-sm text-gray-600 mb-3 block">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <p className="text-gray-800">{post.excerpt}</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

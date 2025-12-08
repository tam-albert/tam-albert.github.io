import Layout from '../../components/layout';
import { getAllPostSlugs, getPostData, BlogPost } from '../../lib/blog';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';

interface PostProps {
  postData: BlogPost;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.slug as string);
  return {
    props: {
      postData,
    },
  };
};

export default function Post({ postData }: PostProps) {
  return (
    <Layout>
      <div className="max-w-3xl">
        <Link
          href="/blog"
          className="text-gray-700 hover:text-black transition-colors mb-8 inline-block"
        >
          &larr; Back to blog
        </Link>

        <article className="space-y-6">
          <header className="space-y-4">
            <h1 className="text-4xl font-bold">{postData.title}</h1>
            <div className="flex items-center gap-4 flex-wrap">
              <time className="text-gray-600">
                {new Date(postData.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              {postData.tags && postData.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {postData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          <div
            className="prose prose-lg max-w-none prose-headings:text-black prose-p:text-gray-800 prose-a:text-blue-700 hover:prose-a:text-blue-900 prose-strong:text-black prose-ul:text-gray-800 prose-ol:text-gray-800"
            dangerouslySetInnerHTML={{ __html: postData.content || '' }}
          />
        </article>
      </div>
    </Layout>
  );
}

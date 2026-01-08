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
          className="text-gray-500 hover:text-black transition-colors mb-10 inline-flex items-center gap-2 text-sm group"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-200">&larr;</span>
          Back to blog
        </Link>

        <article className="space-y-10">
          <header className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{postData.title}</h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-500">
              <time className="font-mono text-sm">
                {new Date(postData.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              {postData.tags && postData.tags.length > 0 && (
                <>
                  <span className="hidden sm:inline text-gray-300">&bull;</span>
                  <div className="flex flex-wrap gap-3">
                    {postData.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm text-gray-500 font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </header>

          <div
            className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:text-black prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-black prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-gray-600 prose-strong:text-black prose-ul:text-gray-600 prose-ol:text-gray-600"
            dangerouslySetInnerHTML={{ __html: postData.content || '' }}
          />
        </article>
      </div>
    </Layout>
  );
}

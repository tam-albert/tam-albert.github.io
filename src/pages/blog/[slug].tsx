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
      <div className="max-w-none w-full">
        <Link
          href="/blog"
          className="text-gray-500 hover:text-black transition-colors mb-8 inline-flex items-center gap-2 text-sm font-medium"
        >
          <span>&larr;</span>
          Back to blog
        </Link>

        <article className="flex flex-col space-y-8">
          <header className="flex flex-col space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-black">{postData.title}</h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 font-mono">
              <time>
                {new Date(postData.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              {postData.tags && postData.tags.length > 0 && (
                <>
                  <span className="text-gray-300">|</span>
                  <div className="flex flex-wrap gap-2">
                    {postData.tags.map((tag) => (
                      <span key={tag}>#{tag}</span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </header>

          <div
            className="prose prose-gray max-w-none 
              prose-headings:font-bold prose-headings:text-black prose-headings:tracking-tight
              prose-p:text-gray-600 prose-p:leading-relaxed 
              prose-a:text-black prose-a:underline prose-a:underline-offset-4 prose-a:decoration-1 hover:prose-a:decoration-2
              prose-strong:text-black prose-strong:font-semibold
              prose-ul:text-gray-600 prose-ol:text-gray-600
              prose-code:text-black prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-sm prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-gray-50 prose-pre:border prose-pre:border-gray-100 prose-pre:text-gray-800"
            dangerouslySetInnerHTML={{ __html: postData.content || '' }}
          />
        </article>
      </div>
    </Layout>
  );
}

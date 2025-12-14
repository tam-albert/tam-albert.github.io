import Layout from '../../components/layout';
import { getSortedPostsData, getAllTags, BlogPost } from '../../lib/blog';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { useState, useMemo } from 'react';

interface BlogProps {
  allPostsData: BlogPost[];
  allTags: string[];
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  const allTags = getAllTags();
  return {
    props: {
      allPostsData,
      allTags,
    },
  };
};

export default function Blog({ allPostsData, allTags }: BlogProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    if (!selectedTag) return allPostsData;
    return allPostsData.filter(
      (post) => post.tags && post.tags.includes(selectedTag)
    );
  }, [allPostsData, selectedTag]);

  return (
    <Layout>
      <div className="space-y-2">
        <div>
          <h1 className="text-3xl font-bold mb-1">Blog</h1>
          <p className="text-gray-700">Work in progress...</p>
        </div>

        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedTag === null
                  ? 'bg-black text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedTag === tag
                    ? 'bg-black text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        <div className="space-y-2">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <article className="border border-gray-300 rounded-lg p-3 hover:border-gray-400 transition-colors">
                <h2 className="text-xl font-bold mb-1 group-hover:text-blue-700 transition-colors">
                  {post.title}
                </h2>
                <time className="text-sm text-gray-600 mb-1 block">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <p className="text-gray-800 mb-2">{post.excerpt}</p>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

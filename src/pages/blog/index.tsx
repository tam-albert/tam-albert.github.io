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
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Blog</h1>
          <p className="text-gray-500">Thoughts, tutorials, and updates.</p>
        </div>

        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1 rounded-full text-sm transition-all duration-200 ${
                selectedTag === null
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-full text-sm transition-all duration-200 ${
                  selectedTag === tag
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        <div className="space-y-10">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <article className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h2 className="text-2xl font-semibold group-hover:text-gray-600 transition-colors">
                    {post.title}
                  </h2>
                  <time className="text-sm text-gray-400 font-mono shrink-0">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gray-400 font-mono"
                      >
                        #{tag}
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

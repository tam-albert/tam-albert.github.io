import Layout from "../../components/layout";
import { getSortedPostsData, getAllTags, BlogPost } from "../../lib/blog";
import Link from "next/link";
import { GetStaticProps } from "next";
import { useState } from "react";

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

  const filteredPosts = selectedTag
    ? allPostsData.filter((post) => post.tags && post.tags.includes(selectedTag))
    : allPostsData;

  return (
    <Layout>
      <div className="flex flex-col space-y-12">
        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  selectedTag === tag
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        <div className="flex flex-col space-y-6">
          {filteredPosts.map((post) => (
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

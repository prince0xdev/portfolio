import BlogCard from "./BlogCard";

export default function BlogList({ posts }: { posts: any[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          title={post.metadata.title}
          summary={post.metadata.summary}
          image={post.metadata.image}
          date={post.metadata.publishedAt}
          slug={post.slug}
        />
      ))}
    </div>
  );
}

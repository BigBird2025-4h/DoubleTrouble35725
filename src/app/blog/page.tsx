import Link from "next/link";
import { getPosts } from "../../lib/posts";

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div>
      <h1 className="font-display text-3xl sm:text-4xl mb-8 text-steel-blue">
        Blog / Media
      </h1>

      <div className="grid gap-6">
        {posts.map((post, i) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div
              className={`paper-panel p-6 transition hover:-translate-y-1 ${
                i % 2 === 0 ? "print-shadow-blue" : "print-shadow-red"
              }`}
            >
              <h2 className="font-display text-lg text-charcoal">
                {post.title}
              </h2>

              <p className="text-sm text-charcoal/60 mt-1 font-semibold">
                {new Date(post.date).toDateString()}
              </p>

              <p className="text-charcoal/80 mt-3 text-sm font-medium">
                {post.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

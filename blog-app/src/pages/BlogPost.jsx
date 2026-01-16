import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostBySlug } from '../lib/posts';

// individual blog post page
export function BlogPost() {
  // getting the slug from the url to find the right post
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  // if the post doesn't exist, show a 404 type message
  if (!post) {
    return (
      <div className="page">
        <div className="not-found">
          <h1>oops, can't find that one</h1>
          <p>this post doesn't exist or maybe i deleted it in a moment of panic</p>
          <Link to="/blog" className="back-link">
            ← back to all posts
          </Link>
        </div>
      </div>
    );
  }

  // showing the full post
  return (
    <div className="page">
      <article className="blog-post">
        <Link to="/blog" className="back-link">
          ← back to all posts
        </Link>

        <h1 className="blog-post-title">{post.title}</h1>

        <div className="blog-post-meta">
          <span className="post-author">by {post.author}</span>
          <span className="post-date">{post.date}</span>
        </div>

        {/* splitting content by paragraphs so it looks nice */}
        <div className="blog-post-content">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
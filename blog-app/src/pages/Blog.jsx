import React from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../lib/posts';

// main blog page where all the posts show up
export function Blog() {
  // grabbing all posts from our data file
  const posts = getAllPosts();

  return (
    <div className="page">
      <h1 className="page-title">Blog</h1>
      <p className="page-subtitle">
        Thoughts, rants, and random observations from yours truly
      </p>

      {/* mapping through all posts and showing them as cards */}
      <div className="posts-grid">
        {posts.map((post) => (
          <article key={post.id} className="post-card">
            <Link to={`/blog/${post.slug}`} className="post-link">
              <h2 className="post-title">{post.title}</h2>
              <div className="post-meta">
                <span className="post-author">by {post.author}</span>
                <span className="post-date">{post.date}</span>
              </div>
              {/* showing just a preview of the post */}
              <p className="post-excerpt">
                {post.content.substring(0, 150)}...
              </p>
              <span className="read-more">read more →</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
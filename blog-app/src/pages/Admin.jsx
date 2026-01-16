import React from 'react';
import { getAllPosts } from '../lib/posts';

// admin dashboard - where i can see all my posts and pretend i'm organized
export function Admin() {
  const posts = getAllPosts();

  return (
    <div className="page">
      <h1 className="page-title">Dashboard</h1>
      <p className="page-subtitle">
        Welcome back! Here's all your posts (that you definitely remember writing)
      </p>

      {/* showing all posts in a simple list */}
      <div className="admin-posts">
        <div className="admin-stats">
          <div className="stat-card">
            <h3>{posts.length}</h3>
            <p>Total Posts</p>
          </div>
          <div className="stat-card">
            <h3></h3>
            <p>Drafts in your head</p>
          </div>
          <div className="stat-card">
            <h3>0</h3>
            <p>Posts scheduled (we don't plan ahead here)</p>
          </div>
        </div>

        <div className="admin-post-list">
          <h2>all posts</h2>
          {posts.map((post) => (
            <div key={post.id} className="admin-post-item">
              <div className="admin-post-info">
                <h3>{post.title}</h3>
                <p className="admin-post-meta">
                  by {post.author} • {post.date}
                </p>
              </div>
              <div className="admin-post-actions">
                {/* these buttons don't do anything yet but they look official */}
                <button className="edit-button">edit</button>
                <button className="delete-button">delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

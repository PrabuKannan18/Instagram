import React from 'react'
import posts from '../db/db.json'

function Posts() {
  return (
    <div className="posts-wrapper d-flex justify-content-center align-items-center flex-column mt-4">
      {posts.posts && posts.posts.length > 0 ? (
        posts.posts.map((post) => (
          <div className="post-card  p-3 rounded mb-4" key={post.id}>
            <div className="d-flex align-items-center mb-2">
              <img className="dp rounded-circle me-2" src={post.userProfile} alt="User" />
              <div>
                <div className="userName fw-semibold">{post.username}</div>
                <small className="text-muted">{post.timestamp}</small>
              </div>
            </div>

            <img src={post.postImage} className="post-image mb-2" alt="Post" />

            <div className="d-flex gap-3 fs-5 mb-2">
              <i className="bi bi-heart"></i>
              <i className="bi bi-chat"></i>
              <i className="bi bi-send"></i>
              <div className='ms-auto'>
                <i className="bi bi-bookmark"></i>
              </div>
            </div>

            <div className="mb-1 fw-bold">{post.likes} likes</div>
            <div>{post.caption}</div>
            <div className='text-secondary fs-14'>View all 20 comments</div>
            {post.comments.map((u) => (
              <div className='mt-1' key={u.username}>
                <div className="userName fw-semibold fs-14">{u.username}</div>
                <div className="text-muted fs-14">{u.text}</div>
              </div>
            ))}
            <div className='d-flex mt-1'>
              <div className='text-secondary fs-14'>Add a comment...</div>
              <div className='ms-auto'>
                <i className="bi bi-emoji-smile fs-14"></i>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </div>
  );
}

export default Posts;

import React from 'react';
import suggestion from '../db/db.json';

function Suggestion() {
  return (
    <div className='suggestions'>
      <div className='d-flex justify-content-between mb-2'>
        <h6 className='text-muted'>Suggested for you</h6>
        <h6 className='see-all'>See All</h6>
      </div>

      {suggestion.suggestions.map((user) => (
        <div className='d-flex align-items-center mb-2' key={user.id}>
          <img src={user.userProfile} className='dp rounded-circle' alt="User" />
          <div className='ms-2 flex-grow-1'>
            <h6 className='mb-0 suggestion-name'>{user.username}</h6>
            <small className="text-muted">Followed by ...</small>
          </div>
          <div className='ms-auto'>
            <span className='text-primary follow-text'>Follow</span>
          </div>
        </div>
      ))}

      {/* Instagram-like footer */}
      <div className="mt-4">
        <p className="text-muted small" style={{ lineHeight: "1.6", fontSize: "12px" }}>
          About · Help · Press · API · Jobs · Privacy · Terms · Locations · Language <br />
          Meta Verified
        </p>
        <p className="text-muted small" style={{ fontSize: "12px" }}>
          © 2025 Instagram from Meta
        </p>
      </div>
    </div>
  );
}

export default Suggestion;

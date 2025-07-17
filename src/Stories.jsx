import React from 'react';
import data from '../db/db.json';

function Stories() {
  return (
    <div className="story-bar d-flex gap-3  justify-content-center px-3 py-2 mt-2">
      {data.stories.length > 0 ? (
        data.stories.map((story) => (
          <div key={story.id} className="text-center">
            <div className="story-ring d-flex justify-content-center align-items-center">
              <img
                className="dp-story rounded-circle"
                src={story.userProfile}
                alt={story.username}
              />
            </div>
            <div style={{ width: '80px' }} className="text-truncate small mt-1">
              {story.username}
            </div>
          </div>
        ))
      ) : (
        <div>Loading stories...</div>
      )}
    </div>
  );
}

export default Stories;

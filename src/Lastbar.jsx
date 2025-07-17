import React from 'react'
import Profile from './Profile'
import Suggestion from './Suggestion'

function Lastbar() {
  return (
    <div className='lastbar-wrapper py-5 px-2'>
      <Profile />
      <Suggestion />
    </div>
  );
}

export default Lastbar;

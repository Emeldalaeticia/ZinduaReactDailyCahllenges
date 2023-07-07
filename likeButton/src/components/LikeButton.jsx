import React, { useState } from 'react';

import '../App.css'

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className='flex items-center space-x-2'>
      <button
        className={`flex items-center p-2 rounded-md focus:outline-none ${liked ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        onClick={handleClick}>
          
        <span>{liked ? 'Liked' : 'Like'}</span>
      </button>
    </div>
  );
}

export default LikeButton

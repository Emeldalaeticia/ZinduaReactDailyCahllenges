import React, { useState } from 'react';
import '../App.css';

const LikeButton = ({ likes, onLike }) => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    if (!liked) {
      onLike(1);
    } else {
      onLike(-1);
    }
    setLiked(!liked);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        className={`flex items-center p-2 rounded-md focus:outline-none ${
          liked ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
        }`}
        onClick={handleClick}
      >
        {liked ? 'Like' : 'Like'}
      </button>
      <span className="text-gray-700 ml-10">{likes} {likes === 1 ? 'like' : 'likes'}</span>
    </div>
  );
};

export default LikeButton;

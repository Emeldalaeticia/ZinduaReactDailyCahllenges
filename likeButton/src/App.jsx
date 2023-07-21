import React, { useReducer } from 'react';
import LikeButton from './components/LikeButton';
import likeReducer from './hooks/likeReducer'

const initialState = {
  totalLikes: 0,
};

const App = () => {
  const [state, dispatch] = useReducer(likeReducer, initialState);

  const handleLike = (increment) => {
    dispatch({ type: 'INCREMENT_LIKES', payload: increment });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <LikeButton likes={state.totalLikes} onLike={handleLike} />
    </div>
  );
};

export default App;

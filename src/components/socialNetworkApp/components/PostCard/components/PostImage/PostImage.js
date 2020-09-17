import React from 'react';

function PostImage({ imageUrl, size }) {
  return (
    <div>
      <img src={imageUrl} alt="user-post" className={size} />
    </div>
  );
}

export default PostImage;

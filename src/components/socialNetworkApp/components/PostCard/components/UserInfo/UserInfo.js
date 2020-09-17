import React from 'react';

const UserInfo = ({ avatarUrl, ubication, username }) => {
  return (
    <div className="w-50 flex items-center">
      <img src={avatarUrl} alt="user-profile" className="w-20 br-100" />
      <div>
        <p className="b secondary-text-color">{username}</p>
        {ubication ? (
          <p className="f6 light-gray-text-color">{ubication}</p>
        ) : null}
      </div>
    </div>
  );
};

export default UserInfo;

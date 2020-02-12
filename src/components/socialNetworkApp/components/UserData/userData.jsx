import React from 'react';

const UserData = props => {
  return (
    <div className="form-group flex flex-column items-center pa2">
      <img
        src="https://images.assetsdelivery.com/compings_v2/alekseyvanin/alekseyvanin1809/alekseyvanin180900805.jpg"
        alt="user-avatar"
        className="user-avatar"
      />
      <p className="f3 mt3 b secondary-text-color">John Doe</p>
      <p className="user-description f6 tc pa3 light-gray-text-color">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A quasi nobis
        accusantium vel quam atque.
      </p>
    </div>
  );
};

export default UserData;

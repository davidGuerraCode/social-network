import React from 'react';
import { HeaderContainer as Header } from '../Header';
import { UserDataContainer as UserData } from '../UserData';
import { PostCardContainer as PostCard } from '../PostCard';
import { InfoCard } from '../InfoCard';

const UserProfileContainer = props => {
  return (
    <>
      <header className="bb b--light-silver br4">
        <Header></Header>
        <UserData></UserData>
        <InfoCard></InfoCard>
      </header>
      <div className="mv3">
        <PostCard></PostCard>
      </div>
    </>
  );
};

export default UserProfileContainer;

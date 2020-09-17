import React from 'react';
import { HeaderContainer as Header } from '../../components/Header';
import { PostCardContainer as PostCard } from '../../components/PostCard';

const UserProfileContainer = (props) => {
  // Here we can use the context hook for provide the data to the components via props.
  return (
    <>
      <Header></Header>
      <PostCard></PostCard>
    </>
  );
};

export default UserProfileContainer;

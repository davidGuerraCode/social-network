import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { UserInfo } from './components/UserInfo';
import { PostImage } from './components/PostImage';
import { Interactions } from './components/Interactions';

const PostCard = (props) => {
  return (
    <div className="mv4">
      <section className="flex items-center justify-between pr3">
        <UserInfo
          avatarUrl="https://images.assetsdelivery.com/compings_v2/alekseyvanin/alekseyvanin1809/alekseyvanin180900805.jpg"
          ubication="Some place on hearth"
          username="John Doe"
        />
        <div>
          <span>
            <button type="button" className="btn-default">
              <FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon>
            </button>
          </span>
        </div>
      </section>
      <main>
        <PostImage
          imageUrl="https://images.unsplash.com/photo-1525806047694-f14aa78cf38c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
          size="w-100"
        />
      </main>
      <section>
        <Interactions />
      </section>
    </div>
  );
};

export default PostCard;

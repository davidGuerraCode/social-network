import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

const PostCard = props => {
  return (
    <>
      <section className="flex items-center justify-between pr3">
        <div className="w-50 flex items-center">
          <img
            src="https://images.assetsdelivery.com/compings_v2/alekseyvanin/alekseyvanin1809/alekseyvanin180900805.jpg"
            alt="user-data"
            className="w-20 br-100"
          />
          <div className="">
            <p className="b secondary-text-color">John Doe</p>
            <p className="f6 light-gray-text-color">ubication / More info</p>
          </div>
        </div>
        <div className="">
          <span>
            <button type="button" className="btn-default">
              <FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon>
            </button>
          </span>
        </div>
      </section>
      <main className="">
        <img
          src="https://images.unsplash.com/photo-1525806047694-f14aa78cf38c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
          alt="user-post"
          className="w-100"
        />
      </main>
      <section className="flex justify-between pa2">
        <div className="flex items-center">
          <span>
            <button type="button" className="ph2 btn-default">
              <FontAwesomeIcon icon={faHeart} className="f3"></FontAwesomeIcon>
            </button>
          </span>
          <span className="btn-icons">
            <button type="button" className="ph3 btn-default">
              <FontAwesomeIcon
                icon={faComment}
                className="f3"
              ></FontAwesomeIcon>
            </button>
          </span>
        </div>
        <div className="flex items-center">
          <span>
            <button className="pr2 btn-default">
              <FontAwesomeIcon
                icon={faBookmark}
                className="f3"
              ></FontAwesomeIcon>
            </button>
          </span>
        </div>
      </section>
      <section className="ph3 pv2">
        <div>
          <button type="button" className="btn-default">
            <span className="f6 b">1.200 likes</span>
          </button>
        </div>
      </section>
      <section className="ph3 flex">
        <p className="f6 tj">
          <label className="b mr1">JohnDoe</label>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          exercitationem possimus! Necessitatibus porro aut assumenda enim,
          doloribus voluptatem ut blanditiis?
        </p>
      </section>
    </>
  );
};

export default PostCard;

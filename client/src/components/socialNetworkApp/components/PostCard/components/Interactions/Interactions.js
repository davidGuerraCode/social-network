import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

function Interactions() {
  return (
    <>
      <section className="flex justify-between pa2">
        <div className="flex items-center">
          <span>
            <button type="button" className="ph2 btn-default">
              <FontAwesomeIcon icon={faHeart} className="f3"></FontAwesomeIcon>
            </button>
          </span>
          <span className="btn-icons">
            <button type="button" className="ph2 btn-default">
              <FontAwesomeIcon
                icon={faComment}
                className="f3"></FontAwesomeIcon>
            </button>
          </span>
        </div>
        <div className="flex items-center">
          <span>
            <button className="pr2 btn-default">
              <FontAwesomeIcon
                icon={faBookmark}
                className="f3"></FontAwesomeIcon>
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
}

export default Interactions;

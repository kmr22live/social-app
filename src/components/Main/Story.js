import React from "react";
import { storyobj } from "../../constants";

export default function Story() {
  return (
    <div className="d-flex gap-2 mb-n3">
      <div className="position-relative">
        <div className="card post-add-card px-4 px-sm-5 shadow-none d-flex align-items-center justify-content-center text-center">
          <div>
            <a
              className="stretched-link btn btn-light rounded-circle icon-md"
              href="#!"
            >
              <i className="fa-solid fa-plus"></i>
            </a>
            <h6 className="mt-2 mb-0 small">Post a Story</h6>
          </div>
        </div>
      </div>

      <div
        id="stories"
        className="storiesWrapper stories-square stories user-icon carousel scroll-enable "
      >
        {storyobj.map(({ name, proImg }, index) => {
          return (
            <div key={index} className="story">
              <a className="item-link ">
                <img lazy="eager" src={proImg} />
                <strong className="name">{name}</strong>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

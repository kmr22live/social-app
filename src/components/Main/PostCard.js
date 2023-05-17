import React, { useContext, useEffect, useState } from "react";
import { storyPost1 } from "../../assets/image";
import Dropzone from "./Dropzone";
import { PostContext } from "../../contexts/Context";
import { MODEL_PHOTO_OR_VIDEO } from "../../contexts/Action-types";
import { v4 as uuidv4 } from "uuid";

export default function PostCard() {
  const initialState = {
    name: "Sam Lanson",
    work: "Web Developer at Webestica",
    thoughts: "",
    img: "",
    id: "",
  };

  const { state, dispatch } = useContext(PostContext);
  const [input, setInput] = useState(initialState);

  const getfiles = (data) => {
    setInput({ ...input, img: data });
  };

  const handleChange = (e) => {
    setInput({ ...input, thoughts: e.target.value });
  };

  const handleSubmit = () => {
    let submittingData = { ...input, id: uuidv4() };
    dispatch({ type: "POST", payload: submittingData });
    setInput({ ...input, thoughts: "", img: "" });
  };

  return (
    <>
      <div className="card card-body share-post-card">
        <div className="d-flex mb-3">
          <div className="avatar avatar-xs me-2">
            <a href="">
              <img
                className="avatar-img rounded-circle"
                src={storyPost1}
                alt=""
              />
            </a>
          </div>
          <form className="w-100">
            <textarea
              className="form-control pe-4 border-0"
              rows="2"
              data-autoresize=""
              placeholder="Share your thoughts..."
            ></textarea>
          </form>
        </div>
        <ul className="nav nav-pills nav-stack small">
          <li className="nav-item">
            <a
              className="nav-link py-1 px-2 mb-0"
              data-bs-toggle="modal"
              data-bs-target="#feedActionPhoto"
              onClick={() =>
                dispatch({ type: MODEL_PHOTO_OR_VIDEO, payload: true })
              }
            >
              <i className="fa-solid fa-image"></i>Photo
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link py-1 px-2 mb-0"
              href=""
              data-bs-toggle="modal"
              data-bs-target="#feedActionPhoto"
              onClick={() =>
                dispatch({ type: MODEL_PHOTO_OR_VIDEO, payload: false })
              }
            >
              <i className="fa-solid fa-video"></i>Video
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link py-1 px-2 mb-0">
              <i className="fa-solid fa-folder-closed"></i>
              Event
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link py-1 px-2 mb-0"
              href=""
              data-bs-toggle="modal"
              data-bs-target="#modalCreateFeed"
            >
              <i className="fa-solid fa-face-smile"></i>
              Feeling /Activity
            </a>
          </li>
          <li className="nav-item dropdown ms-lg-auto">
            <a
              className="nav-link bg-light py-1 px-2 mb-0"
              href=""
              id="feedActionShare"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa-solid fa-ellipsis"></i>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="feedActionShare"
            >
              <li>
                <a className="dropdown-item" href="">
                  <i className="fa-regular fa-envelope"></i>Create a poll
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="">
                  <i className="fa-regular fa-bookmark"></i>Ask a question
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="">
                  <i className="fa-regular fa-pen-to-square"></i>Help
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div
        className="modal fade"
        id="modalCreateFeed"
        tabIndex="-1"
        aria-labelledby="modalLabelCreateFeed"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabelCreateFeed">
                Create post
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="d-flex mb-3">
                <div className="avatar avatar-xs me-2">
                  <img
                    className="avatar-img rounded-circle"
                    src={storyPost1}
                    alt=""
                  />
                </div>
                <form className="w-100">
                  <textarea
                    className="form-control share-thoughts pe-4 fs-3 lh-1 border-0"
                    rows="4"
                    placeholder="Share your thoughts..."
                    value={input.thoughts}
                    onChange={handleChange}
                  ></textarea>
                </form>
              </div>
              <div className="hstack create-post-text-only gap-2">
                <a
                  className="icon-md bg-success bg-opacity-10 rounded-circle text-success"
                  href=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Photo"
                >
                  <i className="fa-regular fa-image"></i>
                </a>
                <a
                  className="icon-md bg-info bg-opacity-10 text-info rounded-circle"
                  href=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Video"
                >
                  <i className="fa-solid fa-video"></i>
                </a>
                <a
                  className="icon-md bg-danger bg-opacity-10 text-danger rounded-circle"
                  href=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Events"
                >
                  <i className="fa-regular fa-calendar"></i>
                </a>
                <a
                  className="icon-md bg-warning bg-opacity-10 text-warning rounded-circle"
                  href=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Feeling/Activity"
                >
                  <i className="fa-solid fa-face-smile"></i>
                </a>
                <a
                  className="icon-md bg-light text-secondary rounded-circle"
                  href=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Check in"
                >
                  <i className="fa-solid fa-location-dot"></i>
                </a>
                <a
                  className="icon-md bg-primary bg-opacity-10 text-primary rounded-circle"
                  href=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Tag people on top"
                >
                  <i className="fa-solid fa-tag"></i>
                </a>
              </div>
            </div>
            <div className="modal-footer create-post-footer row justify-content-between">
              <div className="col-lg-3">
                <select
                  className="form-select"
                  data-position="top"
                  data-search-enabled="false"
                >
                  <option value="Public">Public</option>
                  <option value="friends">Friends</option>
                  <option value="private">Only me</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>
              <div className="col-lg-8 text-sm-end">
                <button type="button" className="btn me-2 create-live-last-btn">
                  <i className="fa-solid fa-video pe-1"></i> Live video
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  data-bs-dismiss="modal"
                  className="btn create-post-last-btn"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="feedActionPhoto"
        tabIndex="-1"
        aria-labelledby="feedActionPhotoLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header feedActionPhotoLabel">
              <h5 className="modal-title" id="feedActionPhotoLabel">
                Add post {state.modelPhotoOrVideo ? "photo" : "video"}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="d-flex mb-3">
                <div className="avatar avatar-xs me-2">
                  <img
                    className="avatar-img rounded-circle"
                    src={storyPost1}
                    alt=""
                  />
                </div>

                <form className="w-100">
                  <textarea
                    className="form-control share-thoughts pe-4 fs-3 lh-1 border-0"
                    rows="2"
                    placeholder="Share your thoughts..."
                    value={input.thoughts}
                    onChange={handleChange}
                  ></textarea>
                </form>
              </div>

              <div>
                <label className="form-label">Upload attachment</label>
                <div className="dropzone dropzone-default border-dashed shadow-none">
                  <Dropzone onSubmit={getfiles} />
                </div>
              </div>
            </div>

            <div className="modal-footer ">
              <button
                type="button"
                className="btn create-live-last-btn me-2"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="submit"
                data-bs-dismiss="modal"
                className="btn create-post-last-btn"
                onClick={handleSubmit}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useContext, useState } from "react";
import { storyPost1 } from "../../assets/image";
import { PostContext } from "../../contexts/Context";
import { HIDE_POST } from "../../contexts/Action-types";

export default function Allpost() {
  const initialComment = {
    name: "Sam Lanson",
    img: storyPost1,
    id: "",
    comments: "",
  };
  const [commentInput, setCommentInput] = useState(initialComment);
  const { state, dispatch } = useContext(PostContext);
  const handlehidePost = (e) => {
    dispatch({ type: HIDE_POST, payload: e.target.id });
  };

  const handleCommentschange = (e) => {
    setCommentInput({ ...commentInput, comments: e.target.value });
  };

  const handleCommentsSubmit = () => {
    // let comment2 = state.post[0].comments;
    // comment2.push(commentInput);
    // console.log(comment2);
    // dispatch({ type: ADD_COMMENTS, payload: comment2 });
    // setCommentInput("");
  };

  return (
    <>
      {state.post.map((data, index) => {
        return (
          <div className="card post-card-body" key={`allPostcards` + index}>
            <div className="card-header border-0 pb-0">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="avatar avatar-story me-2">
                    <a href="">
                      <img
                        className="avatar-img rounded-circle"
                        src={storyPost1}
                        alt=""
                      />
                    </a>
                  </div>
                  <div>
                    <div className="nav nav-divider">
                      <h6 className="nav-item card-title mb-0">
                        <a className="name">{data.name}</a>
                      </h6>
                      <span className="nav-item small time-post"> 2hr</span>
                    </div>
                    <p className="mb-0 small">{data.work}</p>
                  </div>
                </div>
                <div className="dropdown">
                  <a
                    href=""
                    className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                    id="cardFeedAction"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-ellipsis"></i>
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="cardFeedAction"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-bookmark pe-2"></i>Save post
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="fa-solid fa-person-circle-minus pe-2"></i>
                        Unfollow {data.name}
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item handle-hide-post"
                        onClick={handlehidePost}
                        id={data.id}
                      >
                        <i className="fa-regular fa-circle-xmark pe-2"></i>
                        Delete post
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="fa-solid fa-user-slash pe-2"></i>Block
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-flag pe-2"></i>Report post
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body">
              <p className="thoughts">{data.thoughts}</p>
              {data.img && (
                <img className="card-img" src={data.img} alt="Post" />
              )}
              <ul className="nav nav-stack py-3 small">
                <li className="nav-item">
                  <a className="nav-link active liked-post">
                    <i className="fa-solid fa-thumbs-up pe-1"></i>Liked (56)
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link comments-post" href="#!">
                    <i className="fa-solid fa-comment pe-1"></i>Comments (12)
                  </a>
                </li>
                <li className="nav-item dropdown share-z-index ms-sm-auto">
                  <a className="nav-link mb-0 share-post" aria-expanded="false">
                    <i className="fa-solid fa-share ps-1"></i>Share (3)
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="cardShareAction"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="bi bi-envelope fa-fw pe-2"></i>Send via
                        Direct Message
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="bi bi-bookmark-check fa-fw pe-2"></i>
                        Bookmark
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="bi bi-link fa-fw pe-2"></i>Copy link to
                        post
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="bi bi-share fa-fw pe-2"></i>Share post via
                        …
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="bi bi-pencil-square fa-fw pe-2"></i>Share
                        to News Feed
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="d-flex mb-3">
                <div className="me-2">
                  <a href="">
                    <img
                      className="avatar-img rounded-circle"
                      src={storyPost1}
                      alt=""
                    />
                  </a>
                </div>
                <form className="nav nav-item w-100 comments-typing position-relative">
                  <textarea
                    className="form-control share-thoughts pe-5 bg-light"
                    rows="1"
                    placeholder="Add a comment..."
                    value={commentInput.comments}
                    onChange={handleCommentschange}
                  ></textarea>
                  <button
                    className="nav-link comments-send-btn "
                    onClick={handleCommentsSubmit}
                  >
                    <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </form>
              </div>
              <ul className="comment-wrap list-unstyled comment-wrap-comments">
                {data?.comments?.length > 0 &&
                  data?.comments.map((firstcomment, index) => {
                    return (
                      <li className="comment-item" key={`comment1` + index}>
                        <div className="d-flex position-relative">
                          <div className="avatar avatar-xs">
                            <a href="#!">
                              <img
                                className="avatar-img rounded-circle"
                                src={firstcomment.img}
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="ms-2">
                            <div className="bg-light rounded-start-top-0 p-3 rounded">
                              <div className="d-flex justify-content-between">
                                <h6 className="mb-1">
                                  <a href="#!"> {firstcomment.name}</a>
                                </h6>
                                <small className="ms-2">5hr</small>
                              </div>
                              <p className="small mb-0">
                                {firstcomment.comments}
                              </p>
                            </div>
                            <ul className="nav nav-divider py-2 small">
                              <li className="nav-item">
                                <a className="nav-link" href="#!">
                                  Like (3)
                                </a>
                              </li>
                              <div className="point-divider">•</div>
                              <li className="nav-item">
                                <a className="nav-link" href="#!">
                                  Reply
                                </a>
                              </li>
                              <div className="point-divider">•</div>
                              <li className="nav-item">
                                <a className="nav-link" href="#!">
                                  View 5 replies
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="comment-item-nested list-unstyled">
                          {firstcomment?.reply?.length > 0 &&
                            firstcomment?.reply.map((nestedcomments, index) => {
                              return (
                                <li
                                  className="comment-item"
                                  key={`nestedComments` + index}
                                >
                                  <div className="d-flex">
                                    <div className="avatar avatar-xs">
                                      <a href="#!">
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={nestedcomments.img}
                                          alt=""
                                        />
                                      </a>
                                    </div>
                                    <div className="ms-2">
                                      <div className="bg-light p-3 rounded">
                                        <div className="d-flex justify-content-between">
                                          <h6 className="mb-1">
                                            <a href="#!">
                                              {" "}
                                              {nestedcomments.name}{" "}
                                            </a>
                                          </h6>
                                          <small className="ms-2">2hr</small>
                                        </div>
                                        <p className="small mb-0">
                                          {nestedcomments.comments}
                                        </p>
                                      </div>
                                      <ul className="nav nav-divider py-2 small">
                                        <li className="nav-item">
                                          <a className="nav-link" href="#!">
                                            Like (5)
                                          </a>
                                        </li>
                                        <div className="point-divider">•</div>
                                        <li className="nav-item">
                                          <a className="nav-link" href="#!">
                                            Reply
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </li>
                              );
                            })}
                        </ul>
                        <a
                          href=""
                          className="btn btn-link btn-sm text-secondary d-flex align-items-center mb-3 ms-5"
                        >
                          Load more replies
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className=" border-0 pt-0">
              <a
                href=""
                className="btn btn-link btn-sm text-secondary d-flex align-items-center"
              >
                Load more comments
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}

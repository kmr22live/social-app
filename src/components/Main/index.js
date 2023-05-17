import React from "react";
import Sidebar from "./Sidebar";
import Story from "./Story";
import PostCard from "./PostCard";
import Allpost from "./Allpost";
import { story1, story2, story3, story4, story5 } from "../../assets/image";

export default function Main() {
  return (
    <main>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3">
            <div className="d-flex align-items-center d-lg-none">
              <button
                className="border-0 bg-transparent"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasSideNavbar"
                aria-controls="offcanvasSideNavbar"
              >
                <span className="btn btn-primary">
                  <i className="fa-solid fa-sliders-h"></i>
                </span>
                <span className="h6 mb-0 fw-bold d-lg-none ms-2">
                  My profile
                </span>
              </button>
            </div>

            <Sidebar />
          </div>

          <div className="col-md-8 col-lg-6 vstack gap-4">
            <Story />
            <PostCard />
            <Allpost />

            <a
              href=""
              role="button"
              className="btn btn-loader btn-primary-soft"
              data-bs-toggle="button"
              aria-pressed="true"
            >
              <span className="load-text"> Load more </span>
              <div className="load-icon">
                <div className="spinner-grow spinner-grow-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </a>
          </div>

          <div className="col-lg-3 who-to-follow">
            <div className="row g-4">
              <div className="col-sm-6 col-lg-12">
                <div className="card">
                  <div className="card-header pb-0 border-0">
                    <h5 className="card-title mb-0">Who to follow</h5>
                  </div>
                  <div className="card-body">
                    <div className="hstack gap-2 mb-3">
                      <div className="avatar">
                        <a href="#!">
                          <img
                            className="avatar-img rounded-circle"
                            src={story1}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="overflow-hidden">
                        <a className="h6 mb-0" href="#!">
                          Judy Nguyen
                        </a>
                        <p className="mb-0 small text-truncate">News anchor</p>
                      </div>
                      <a
                        className="btn btn-primary rounded-circle icon-md ms-auto"
                        href="#"
                      >
                        <i className="fa-solid fa-circle-plus"></i>
                      </a>
                    </div>
                    <div className="hstack gap-2 mb-3">
                      <div className="avatar avatar-story">
                        <a href="#!">
                          <img
                            className="avatar-img rounded-circle"
                            src={story2}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="overflow-hidden">
                        <a className="h6 mb-0" href="#!">
                          Amanda Reed
                        </a>
                        <p className="mb-0 small text-truncate">
                          Web Developer
                        </p>
                      </div>
                      <a
                        className="btn btn-primary rounded-circle icon-md ms-auto"
                        href="#"
                      >
                        <i className="fa-solid fa-circle-plus"></i>
                      </a>
                    </div>

                    <div className="hstack gap-2 mb-3">
                      <div className="avatar">
                        <a href="#">
                          <img
                            className="avatar-img rounded-circle"
                            src={story3}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="overflow-hidden">
                        <a className="h6 mb-0" href="#!">
                          Billy Vasquez
                        </a>
                        <p className="mb-0 small text-truncate">News anchor</p>
                      </div>
                      <a
                        className="btn btn-primary rounded-circle icon-md ms-auto"
                        href="#"
                      >
                        <i className="fa-solid fa-circle-plus"></i>
                      </a>
                    </div>

                    <div className="hstack gap-2 mb-3">
                      <div className="avatar">
                        <a href="#">
                          <img
                            className="avatar-img rounded-circle"
                            src={story4}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="overflow-hidden">
                        <a className="h6 mb-0" href="#!">
                          Lori Ferguson
                        </a>
                        <p className="mb-0 small text-truncate">
                          Web Developer at Webestica
                        </p>
                      </div>
                      <a
                        className="btn btn-primary rounded-circle icon-md ms-auto"
                        href="#"
                      >
                        <i className="fa-solid fa-circle-plus"></i>
                      </a>
                    </div>

                    <div className="hstack gap-2 mb-3">
                      <div className="avatar">
                        <a href="#">
                          <img
                            className="avatar-img rounded-circle"
                            src={story5}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="overflow-hidden">
                        <a className="h6 mb-0" href="#!">
                          Carolyn Ortiz
                        </a>
                        <p className="mb-0 small text-truncate">News anchor</p>
                      </div>
                      <a
                        className="btn btn-primary rounded-circle icon-md ms-auto"
                        href="#"
                      >
                        <i className="fa-solid fa-circle-plus"></i>
                      </a>
                    </div>

                    <div className="d-grid mt-3">
                      <a
                        className="btn btn-sm btn-primary viewmore-btn"
                        href="#!"
                      >
                        View more
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-12 today-news">
                <div className="card">
                  <div className="card-header pb-0 border-0">
                    <h5 className="card-title mb-0">Today’s news</h5>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <h6 className="mb-0">
                        <a>Ten questions you should answer truthfully</a>
                      </h6>
                      <small>2hr</small>
                    </div>
                    <div className="mb-3">
                      <h6 className="mb-0">
                        <a>Five unbelievable facts about money</a>
                      </h6>
                      <small>3hr</small>
                    </div>
                    <div className="mb-3">
                      <h6 className="mb-0">
                        <a>Best Pinterest Boards for learning about business</a>
                      </h6>
                      <small>4hr</small>
                    </div>
                    <div className="mb-3">
                      <h6 className="mb-0">
                        <a>Skills that you can learn from business</a>
                      </h6>
                      <small>6hr</small>
                    </div>
                    <a
                      href="#!"
                      role="button"
                      className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center"
                      data-bs-toggle="button"
                      aria-pressed="true"
                    >
                      <div className="spinner-dots me-2">
                        <span className="spinner-dot"></span>
                        <span className="spinner-dot"></span>
                        <span className="spinner-dot"></span>
                      </div>
                      View all latest news
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

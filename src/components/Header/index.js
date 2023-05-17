import React from "react";
import { avatar1, logo } from "../../assets/image";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>

          <a
            className="navbar-toggler navbar-toggler-animation ms-auto icon-md btn btn-light p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-sliders"></i>
          </a>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="nav mt-3 mt-lg-0 flex-nowrap align-items-center px-4 px-lg-0">
              <div className="nav-item w-100">
                <form className="rounded search-form position-relative">
                  <input
                    className="form-control search-text bg-light"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                  />
                  <a className="btn bg-transparent px-2 py-0 position-absolute top-50 start-0 translate-middle-y">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </a>
                </form>
              </div>
            </div>

            <ul className="navbar-nav navbar-nav-scroll ms-auto">
              <li className="nav-item demo-drop dropdown px-2">
                <a
                  className="nav-link active"
                  id="homeMenu"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Demo<i className="fa-solid fa-angle-down"></i>
                </a>
                <ul
                  className="dropdown-menu demo-dropdown-show"
                  aria-labelledby="homeMenu"
                >
                  <li>
                    <a className="dropdown-item active" href="">
                      Home default
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Home classic
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Home post
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Home video
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Home event
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Landing page
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      App download
                    </a>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <a className="dropdown-item" href="">
                      <i
                        className="fa-solid fa-cloud-arrow-down"
                        style={{ color: "#22ec4b" }}
                      ></i>
                      Buy Social!
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown page-drop px-2">
                <a
                  className="nav-link"
                  id="pagesMenu"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages<i className="fa-solid fa-angle-down"></i>
                </a>
                <ul
                  className="dropdown-menu page-dropdown"
                  aria-labelledby="pagesMenu"
                >
                  <li>
                    <a className="dropdown-item" href="">
                      Albums
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Celebration
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Messaging
                    </a>
                  </li>

                  <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-toggle" href="">
                      Profile
                    </a>
                    <ul className="dropdown-menu" data-bs-popper="none">
                      <li>
                        <a className="dropdown-item" href="">
                          Feed
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="">
                          About
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="">
                          Connections
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="">
                          Media
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="">
                          Videos
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="">
                          Events
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="">
                          Activity
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Events
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Events 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Event details
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Event details 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Groups
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Group details
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Post videos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Post video details
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Post details
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Video details
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Blog details
                    </a>
                  </li>

                  <li className="dropdown-divider"></li>
                  <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-toggle" href="">
                      Dropdown levels
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown account-drop px-2">
                <a
                  className="nav-link"
                  id="postMenu"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Account<i className="fa-solid fa-angle-down"></i>
                </a>
                <ul
                  className="dropdown-menu account-dropdown"
                  aria-labelledby="postMenu"
                >
                  <li>
                    <a className="dropdown-item" href="">
                      Create a page
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Notifications
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Help center
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Help details
                    </a>
                  </li>

                  <li className="dropdown-submenu dropstart">
                    <a className="dropdown-item dropdown-toggle" href="">
                      Authentication
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      data-bs-popper="none"
                    >
                      <li>
                        <a className="dropdown-item" href="">
                          Sign in
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="">
                          Sing up
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="">
                          Forgot password
                        </a>
                      </li>
                      <li className="dropdown-divider"></li>
                      <li>
                        <a className="dropdown-item" href="">
                          Sign in advance
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="">
                          Sing up advance
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="">
                          Forgot password advance
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Error 404
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Offline
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      Privacy &amp; terms
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item network-drop">
                <a className="nav-link" href="">
                  My network
                </a>
              </li>
            </ul>
          </div>

          <ul className="nav flex-nowrap align-items-center ms-sm-3 icons-right-nav">
            <li className="nav-item ms-2">
              <a
                className="nav-link icon-md btn btn-light p-0 famessage"
                href=""
              >
                <i className="fa-solid fa-message"></i>
              </a>
            </li>
            <li className="nav-item ms-2">
              <a className="nav-link icon-md btn btn-light p-0 fagear" href="">
                <i className="fa-solid fa-gear"></i>
              </a>
            </li>
            <li className="nav-item dropdown ms-2">
              <a className="nav-link icon-md btn btn-light p-0 fabell">
                <span className="badge-notif animation-blink"></span>
                <i className="fa-solid fa-bell"></i>
              </a>
            </li>

            <li className="nav-item ms-2 dropdown">
              <a className="nav-link btn icon-md p-0" href="">
                <img
                  className="avatar-img rounded-2 profile-img-header"
                  src={avatar1}
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

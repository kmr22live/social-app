import React from "react";
import {
  avatar1,
  profileBell,
  profileCalender,
  profileChat,
  profileEarth,
  profileHome,
  profilePerson,
  profileSettings,
  profilebg,
} from "../../assets/image";

export default function Sidebar() {
  return (
    <nav className="navbar-expand-lg">
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasSideNavbar"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close text-reset ms-auto"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body d-block px-2 px-lg-0">
          <div className="card overflow-hidden">
            <img className="h-50px profile-background" src={profilebg} />
            <div className="card-body pt-0">
              <div className="text-center body-field">
                <div className="avatar avatar-lg mt-n5 mb-3">
                  <a href="">
                    <img
                      className="avatar-img profile-avatar-img rounded border border-white border-3"
                      src={avatar1}
                      alt=""
                    />
                  </a>
                </div>
                <h5 className="mb-0">
                  <a href="" className="profile-name">
                    Sam Lanson
                  </a>
                </h5>
                <small>Web Developer at Webestica</small>
                <p className="mt-3">
                  I'd love to change the world, but they won't give me the
                  source code.
                </p>

                <div className="hstack gap-2 gap-xl-3 justify-content-center">
                  <div>
                    <h6 className="mb-0">256</h6>
                    <small>Post</small>
                  </div>
                  <div className="vr"></div>
                  <div>
                    <h6 className="mb-0">2.5K</h6>
                    <small>Followers</small>
                  </div>
                  <div className="vr"></div>
                  <div>
                    <h6 className="mb-0">365</h6>
                    <small>Following</small>
                  </div>
                </div>
              </div>
              <hr className="profile-hr" />
              <ul className="nav profile-links flex-column fw-bold gap-2">
                <li className="nav-item">
                  <a className="nav-link" href="">
                    <img
                      className="me-2 h-20px fa-fw"
                      src={profileHome}
                      alt=""
                    />
                    <span>Feed </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    <img
                      className="me-2 h-20px fa-fw"
                      src={profilePerson}
                      alt=""
                    />
                    <span>Connections </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    <img
                      className="me-2 h-20px fa-fw"
                      src={profileEarth}
                      alt=""
                    />
                    <span>Latest News </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    <img
                      className="me-2 h-20px fa-fw"
                      src={profileCalender}
                      alt=""
                    />
                    <span>Events </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    <img
                      className="me-2 h-20px fa-fw"
                      src={profileChat}
                      alt=""
                    />
                    <span>Groups </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    <img
                      className="me-2 h-20px fa-fw"
                      src={profileBell}
                      alt=""
                    />
                    <span>Notifications </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    <img
                      className="me-2 h-20px fa-fw"
                      src={profileSettings}
                      alt=""
                    />
                    <span>Settings </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-footer text-center">
              <a className="btn btn-link btn-sm" href="">
                View Profile
              </a>
            </div>
          </div>

          <ul className="nav profile-last-footer small mt-4 justify-content-center lh-1">
            <li className="nav-item">
              <a className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Support</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="_blank" href="docs/index.html">
                Docs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="help.html">
                Help
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="privacy-and-terms.html">
                Privacy &amp; terms
              </a>
            </li>
          </ul>
        </div>
        <p className="small footer-copywrite text-center mt-1">
          ©2023
          <a className="text-body" href="">
            Webestica
          </a>
        </p>
      </div>
    </nav>
  );
}

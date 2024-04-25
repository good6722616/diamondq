import React from "react";
function SideMenu() {
  return (
    <>
      <div className="side_menu style-1" id="side_menu">
        <a className="side_menu_cls">
          <i className="fal fa-times fs-3"></i>
        </a>
        <div className="content">
          <div className="logo">
            <a href="#" className="w-100 d-flex flex-row align-items-center">
              <img src="/home8_portfolio/assets/img/diamondq_nobg.ico" alt="" />
              <h5 class="font-weight-bold mx-2">DiamondQ Construction</h5>
            </a>
          </div>
          <div className="pages_links">
            <ul>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home.
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About.
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Services.
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Reviews.
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact.
                </a>
              </li>
            </ul>
          </div>
          <div className="side_foot">
            <h5> get in touch </h5>
            <div className="row">
              <div className="col-lg-6">
                <a href="#">
                  <i className="fal fa-phone me-2"></i> (949) 385 3379
                </a>
              </div>
              <div className="col-lg-6">
                <a href="#">
                  <i className="fal fa-envelope me-2 mt-4 mt-lg-0"></i>
                  diamondqcon@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="side_overlay"></div>
    </>
  );
}

export default SideMenu;

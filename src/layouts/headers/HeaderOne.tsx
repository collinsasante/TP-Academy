import { useState } from "react";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";

export default function HeaderOne() {
  const [open, setOpen] = useState(false);
  const [opneMenu, setOpneMenu] = useState(false);

  return (
    <header id="navigation">
      <div className="container-fluid">
        <div className="row">
          <div className="col-30 left-col align-self-center rk_style">
            <div className="site-logo">
              <Link to="/">
                <img src="assets/img/logo.svg" alt="Edumon" />
              </Link>
            </div>
            <div className="course_cat">
              <ul className="cat_list">
                <li>
                  <a href="#">
                    <i className="bx bx-grid-alt"></i> Category
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="#">Web Design</a>
                    </li>
                    <li>
                      <a href="#">Fitness</a>
                    </li>
                    <li>
                      <a href="#">WordPress</a>
                    </li>
                    <li>
                      <a href="#">React</a>
                    </li>
                    <li>
                      <a href="#">Shopify</a>
                    </li>
                    <li>
                      <a href="#">Java</a>
                    </li>
                    <li>
                      <a href="#">PHP</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-40 justify-content-center d-flex align-self-center">
            <nav id="main-menu">
              <NavMenu />
            </nav>
          </div>

          <div className="col-30 right-col align-self-center text-end">
            <div className="searchcart">
              <a
                style={{ cursor: "pointer" }}
                onClick={() => setOpen(!open)}
                className="sicon search-btn"
              >
                <svg fill="none" viewBox="0 0 20 20">
                  <path
                    fill="#fff"
                    d="M7.536.044a8.418 8.418 0 00-5.1 2.434C1.476 3.44.826 4.487.413 5.745a8.018 8.018 0 000 5.08 7.977 7.977 0 002.03 3.27c1.906 1.896 4.503 2.756 7.182 2.377a8.529 8.529 0 003.846-1.579c.117-.09.223-.156.239-.152.015.008 1.198 1.164 2.628 2.57 1.628 1.603 2.655 2.584 2.749 2.627a.627.627 0 00.89-.47c.063-.327.281-.093-3.999-4.32l-1.335-1.322.226-.265c.976-1.13 1.62-2.56 1.867-4.123.094-.61.094-1.727 0-2.345-.277-1.793-1.062-3.333-2.37-4.634A8.463 8.463 0 007.536.044zm1.87 1.309c1.578.23 2.964.918 4.061 2.012 1.344 1.349 2.043 3.025 2.043 4.92 0 .7-.063 1.18-.227 1.786-.828 3.08-3.635 5.209-6.869 5.209-1.925 0-3.713-.73-5.049-2.067a6.958 6.958 0 01-1.84-3.17c-.288-1.082-.288-2.434 0-3.516A7.082 7.082 0 016.572 1.52c.89-.23 1.98-.297 2.835-.168z"
                  />
                </svg>
              </a>
            </div>
            <a href="#" className="white-btn bt">
              Login / Register
            </a>
          </div>
        </div>
      </div>

      <div className={`search_box ${open ? "active" : ""}`}>
        <div
          className="close-btn"
          onClick={() => setOpen(false)}
          style={{ display: open ? "block" : "none" }}
        >
          <i className="ti-close"></i>
        </div>

        <div
          className="search-data"
          style={{ display: open ? "block" : "none" }}
        >
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" required />
            <div className={`line ${open ? "active" : ""}`}></div>
            <label style={{ display: open ? "block" : "none" }}>
              Type to search..
            </label>
            <button type="submit">
              <span
                className="ti-search"
                style={{ display: open ? "block" : "none" }}
              ></span>
            </button>
          </form>
        </div>
      </div>

      <div
        id="sm_menu_ham"
        className={`${opneMenu ? "open" : ""}`}
        onClick={() => setOpneMenu(!opneMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <MobileMenu opneMenu={opneMenu} />
    </header>
  );
}

import React from "react";
import "./bootstrap-icons.css";
import "./bootstrap.min.css";
import "./templatemo-topic-listing.css";
function Topicsdetail() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="" />
      <meta name="author" content="" />
      <title>Topic Detail Page</title>
      {/* CSS FILES */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Open+Sans&display=swap"
        rel="stylesheet"
      />
      <link href="css/bootstrap.min.css" rel="stylesheet" />
      <link href="css/bootstrap-icons.css" rel="stylesheet" />
      <link href="css/templatemo-topic-listing.css" rel="stylesheet" />
      {/*

TemplateMo 590 topic listing

https://templatemo.com/tm-590-topic-listing

*/}
      <main>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <i className="bi-back" />
              <span>Helpify</span>
            </a>
            <div className="d-lg-none ms-auto me-4">
              <a href="#top" className="navbar-icon bi-person smoothscroll" />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-lg-5 me-lg-auto">
                <li className="nav-item">
                  <a
                    className="nav-link click-scroll"
                    href="index.html#section_1"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link click-scroll"
                    href="index.html#section_2"
                  >
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link click-scroll"
                    href="index.html#section_4"
                  >
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link click-scroll" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="d-none d-lg-block">
                <a href="#top" className="navbar-icon bi-person smoothscroll" />
              </div>
            </div>
          </div>
        </nav>
        <header className="site-header d-flex flex-column justify-content-center align-items-center">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-5 col-12 mb-5">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Homepage</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Web Design
                    </li>
                  </ol>
                </nav>
                <h2 className="text-white">
                  Introduction to <br /> Web Design 101
                </h2>
                <div className="d-flex align-items-center mt-5">
                  <a
                    href="#topics-detail"
                    className="btn custom-btn custom-border-btn smoothscroll me-4"
                  >
                    Read More
                  </a>
                  <a
                    href="#top"
                    className="custom-icon bi-bookmark smoothscroll"
                  />
                </div>
              </div>
              <div className="col-lg-5 col-12">
                <div className="topics-detail-block bg-white shadow-lg">
                  <img
                    src="images/topics/undraw_Remote_design_team_re_urdx.png"
                    className="topics-detail-block-image img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
        <section
          className="topics-detail-section section-padding"
          id="topics-detail"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12 m-auto">
                <h3 className="mb-4">Introduction to Web Design</h3>
                <p>
                  So how can you stand out, do something unique and interesting,
                  build an online business, and get paid enough to change life.
                  Please visit TemplateMo website to download free website
                  templates.
                </p>
                <p>
                  <strong>There are so many ways to make money online</strong>.
                  Below are several platforms you can use to find success. Keep
                  in mind that there is no one path everyone can take. If that
                  were the case, everyone would have a million dollars.
                </p>
                <blockquote>
                  Freelancing your skills isn’t going to make you a millionaire
                  overnight.
                </blockquote>
                <div className="row my-4">
                  <div className="col-lg-6 col-md-6 col-12">
                    <img
                      src="images/businesswoman-using-tablet-analysis.jpg"
                      className="topics-detail-block-image img-fluid"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 mt-4 mt-lg-0 mt-md-0">
                    <img
                      src="images/colleagues-working-cozy-office-medium-shot.jpg"
                      className="topics-detail-block-image img-fluid"
                    />
                  </div>
                </div>
                <p>
                  Most people start with freelancing skills they already have as
                  a side hustle to build up income. This extra cash can be used
                  for a vacation, to boost up savings, investing, build
                  business.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-padding section-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-12">
                <img
                  src="images/rear-view-young-college-student.jpg"
                  className="newsletter-image img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-5 col-12 subscribe-form-wrap d-flex justify-content-center align-items-center">
                <form
                  className="custom-form subscribe-form"
                  action="#"
                  method="post"
                  role="form"
                >
                  <h4 className="mb-4 pb-2">Get Newsletter</h4>
                  <input
                    type="email"
                    name="subscribe-email"
                    id="subscribe-email"
                    pattern="[^ @]*@[^ @]*"
                    className="form-control"
                    placeholder="Email Address"
                    required=""
                  />
                  <div className="col-lg-12 col-12">
                    <button type="submit" className="form-control">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12 mb-4 pb-2">
              <a className="navbar-brand mb-2" href="index.html">
                <i className="bi-back" />
                <span>Helpify</span>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <h6 className="site-footer-title mb-3">Resources</h6>
              <ul className="site-footer-links">
                <li className="site-footer-link-item">
                  <a href="#" className="site-footer-link">
                    Home
                  </a>
                </li>
                <li className="site-footer-link-item">
                  <a href="#" className="site-footer-link">
                    How it works
                  </a>
                </li>
                <li className="site-footer-link-item">
                  <a href="#" className="site-footer-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
              <h6 className="site-footer-title mb-3">Information</h6>
              <p className="text-white d-flex mb-1">
                <a href="tel: 305-240-9671" className="site-footer-link">
                  305-240-9671
                </a>
              </p>
              <p className="text-white d-flex">
                <a href="mailto:info@company.com" className="site-footer-link">
                  helpify@iiitl.com
                </a>
              </p>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mt-4 mt-lg-0 ms-auto">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  English
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item" type="button">
                      Thai
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      Myanmar
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      Arabic
                    </button>
                  </li>
                </ul>
              </div>
              <p className="copyright-text mt-lg-5 mt-4">
                Copyright © 2048. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* JAVASCRIPT FILES */}
    </>
  );
}
export default Topicsdetail;

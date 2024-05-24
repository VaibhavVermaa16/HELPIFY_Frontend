import React from "react";
import "./bootstrap-icons.css";
import "./bootstrap.min.css";
import "./templatemo-topic-listing.css";
function Topiclisting(){
    return(
        <>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Topic Listing Page</title>
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
                    <a className="nav-link click-scroll" href="index.html#section_1">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link click-scroll" href="index.html#section_2">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link click-scroll" href="index.html#section_4">
                      Team
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link click-scroll" href="#">
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
              <div className="row align-items-center">
                <div className="col-lg-5 col-12">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Homepage</a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        Topics Listing
                      </li>
                    </ol>
                  </nav>
                  <h2 className="text-white">Topics Listing</h2>
                </div>
              </div>
            </div>
          </header>
          <section className="section-padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-12 text-center">
                  <h3 className="mb-4">Popular Topics</h3>
                </div>
                <div className="col-lg-8 col-12 mt-3 mx-auto">
                  <div className="custom-block custom-block-topics-listing bg-white shadow-lg mb-5">
                    <div className="d-flex">
                      <img
                        src="images/topics/undraw_Remote_design_team_re_urdx.png"
                        className="custom-block-image img-fluid"
                        alt=""
                      />
                      <div className="custom-block-topics-listing-info d-flex">
                        <div>
                          <h5 className="mb-2">Web Design</h5>
                          <p className="mb-0">
                            Topic Listing includes home, listing, detail and contact
                            pages. Feel free to modify this template for your custom
                            websites.
                          </p>
                          <a
                            href="topics-detail.html"
                            className="btn custom-btn mt-3 mt-lg-4"
                          >
                            Learn More
                          </a>
                        </div>
                        <span className="badge bg-design rounded-pill ms-auto">
                          14
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="custom-block custom-block-topics-listing bg-white shadow-lg mb-5">
                    <div className="d-flex">
                      <img
                        src="images/topics/undraw_online_ad_re_ol62.png"
                        className="custom-block-image img-fluid"
                        alt=""
                      />
                      <div className="custom-block-topics-listing-info d-flex">
                        <div>
                          <h5 className="mb-2">Advertising</h5>
                          <p className="mb-0">
                            Visit TemplateMo website to download free CSS templates.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit
                            animi necessitatibus
                          </p>
                          <a
                            href="topics-detail.html"
                            className="btn custom-btn mt-3 mt-lg-4"
                          >
                            Learn More
                          </a>
                        </div>
                        <span className="badge bg-advertising rounded-pill ms-auto">
                          30
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="custom-block custom-block-topics-listing bg-white shadow-lg mb-5">
                    <div className="d-flex">
                      <img
                        src="images/topics/undraw_Podcast_audience_re_4i5q.png"
                        className="custom-block-image img-fluid"
                        alt=""
                      />
                      <div className="custom-block-topics-listing-info d-flex">
                        <div>
                          <h5 className="mb-2">Podcast</h5>
                          <p className="mb-0">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit
                            animi necessitatibus
                          </p>
                          <a
                            href="topics-detail.html"
                            className="btn custom-btn mt-3 mt-lg-4"
                          >
                            Learn More
                          </a>
                        </div>
                        <span className="badge bg-music rounded-pill ms-auto">
                          20
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-12">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center mb-0">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">Prev</span>
                        </a>
                      </li>
                      <li className="page-item active" aria-current="page">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          4
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          5
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </section>
          <section className="section-padding section-bg">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-12">
                  <h3 className="mb-4">Trending Topics</h3>
                </div>
                <div className="col-lg-6 col-md-6 col-12 mt-3 mb-4 mb-lg-0">
                  <div className="custom-block bg-white shadow-lg">
                    <a href="topics-detail.html">
                      <div className="d-flex">
                        <div>
                          <h5 className="mb-2">Investment</h5>
                          <p className="mb-0">
                            Lorem Ipsum dolor sit amet consectetur
                          </p>
                        </div>
                        <span className="badge bg-finance rounded-pill ms-auto">
                          30
                        </span>
                      </div>
                      <img
                        src="images/topics/undraw_Finance_re_gnv2.png"
                        className="custom-block-image img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 mt-lg-3">
                  <div className="custom-block custom-block-overlay">
                    <div className="d-flex flex-column h-100">
                      <img
                        src="images/businesswoman-using-tablet-analysis.jpg"
                        className="custom-block-image img-fluid"
                        alt=""
                      />
                      <div className="custom-block-overlay-text d-flex">
                        <div>
                          <h5 className="text-white mb-2">Finance</h5>
                          <p className="text-white">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Sint animi necessitatibus aperiam repudiandae nam omnis
                          </p>
                          <a
                            href="topics-detail.html"
                            className="btn custom-btn mt-2 mt-lg-3"
                          >
                            Learn More
                          </a>
                        </div>
                        <span className="badge bg-finance rounded-pill ms-auto">
                          25
                        </span>
                      </div>
                      <div className="social-share d-flex">
                        <p className="text-white me-4">Share:</p>
                        <ul className="social-icon">
                          <li className="social-icon-item">
                            <a href="#" className="social-icon-link bi-twitter" />
                          </li>
                          <li className="social-icon-item">
                            <a href="#" className="social-icon-link bi-facebook" />
                          </li>
                          <li className="social-icon-item">
                            <a href="#" className="social-icon-link bi-pinterest" />
                          </li>
                        </ul>
                        <a href="#" className="custom-icon bi-bookmark ms-auto" />
                      </div>
                      <div className="section-overlay" />
                    </div>
                  </div>
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
                  <span>Topic</span>
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
                      FAQs
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
                    info@company.com
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
                  Copyright © 2048 Topic Listing Center. All rights reserved.
                  <br />
                  <br />
                  Design:{" "}
                  <a rel="nofollow" href="https://templatemo.com" target="_blank">
                    TemplateMo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
        {/* JAVASCRIPT FILES */}
      </>
      
    );
}
export default Topiclisting;
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../images/Caretaker.jpg";
import Labour from "../images/Labour.jpg";
import img3 from "../images/health_aide.jpg";
//import img4 from "./images/Caretaker.jpg";
import img5 from "../images/Caregiver.jpg";
import img6 from "../images/FarmWorker.jpg";
import img7 from "../images/tractor.jpg";
import img8 from "../images/crop.jpg";
import img9 from "../images/faq_graphic.jpg";

const Main = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>

      <section
        class="hero-section d-flex justify-content-center align-items-center"
        id="section_1"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-12 mx-auto">
              <h1 class="text-white text-center">Caring Made Easy</h1>

              <h6 class="text-center">platform for helpers around you</h6>

              <form
                method="get"
                class="custom-form mt-4 pt-2 mb-lg-0 mb-5"
                role="search"
              >
                <div class="input-group input-group-lg">
                  <span
                    class="input-group-text bi-search"
                    id="basic-addon1"
                  ></span>

                  <input
                    name="keyword"
                    type="search"
                    class="form-control"
                    id="keyword"
                    placeholder="Need help ...?"
                    aria-label="Search"
                  />

                  <button type="submit" class="form-control">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section class="featured-section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-12 mb-4 mb-lg-0">
              <div class="custom-block bg-white shadow-lg">
                <a href="topics-detail.html">
                  <div class="d-flex">
                    <div>
                      <h5 class="mb-2">Caretaker</h5>

                      <p class="mb-0">
                        Find a caretaker tailored to your specific requirements
                        and schedule.{" "}
                      </p>
                      <a
                        href="/services"
                        class="btn custom-btn mt-2 mt-lg-3"
                        style={{ backgroundColor: "rgb(38, 120, 251)" }}
                      >
                        <Link
                          to="/service"
                          style={{ color: "white", textDecoration: "none" }}
                          onMouseEnter={(e) =>
                            (e.target.style.color = "rgb(100, 0, 10)")
                          }
                          onMouseLeave={(e) => (e.target.style.color = "white")}
                        >
                          Explore
                        </Link>
                      </a>
                    </div>

                    <span class="badge bg-design rounded-pill ms-auto">#</span>
                  </div>

                  <img src={img1} class="custom-block-image img-fluid" alt="" />
                </a>
              </div>
            </div>

            <div class="col-lg-6 col-12">
              <div class="custom-block custom-block-overlay">
                <div class="d-flex flex-column h-100">
                  <img
                    src={Labour}
                    class="custom-block-image img-fluid"
                    alt=""
                  />

                  <div class="custom-block-overlay-text d-flex">
                    <div>
                      <h5 class="text-white mb-2">Agro-care</h5>

                      <p class="text-white">
                        Get farm equipments , labours located in your nearby
                        areas at efficient price.
                      </p>

                      <a
                        href="topics-detail.html"
                        className="btn custom-btn mt-2 mt-lg-3"
                        style={{ backgroundColor: "rgb(38, 120, 251)" }}
                      >
                        <Link
                          to="/service"
                          style={{ color: "white", textDecoration: "none" }}
                          onMouseEnter={(e) =>
                            (e.target.style.color = "rgb(100, 0, 10)")
                          }
                          onMouseLeave={(e) => (e.target.style.color = "white")}
                        >
                          Explore
                        </Link>
                      </a>
                    </div>

                    <span class="badge bg-finance rounded-pill ms-auto">#</span>
                  </div>

                  <div class="social-share d-flex">
                    <p class="text-white me-4">Share:</p>

                    <ul class="social-icon">
                      <li class="social-icon-item">
                        <a href="#" class="social-icon-link bi-twitter"></a>
                      </li>

                      <li class="social-icon-item">
                        <a href="#" class="social-icon-link bi-facebook"></a>
                      </li>

                      <li class="social-icon-item">
                        <a href="#" class="social-icon-link bi-pinterest"></a>
                      </li>
                    </ul>

                    <a href="#" class="custom-icon bi-bookmark ms-auto"></a>
                  </div>

                  <div class="section-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="explore-section section-padding" id="section_2">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <h2 class="mb-4" id="services18">
                Our Services
              </h2>
            </div>
          </div>
        </div>

        <div class="container-fluid">
          <div class="row">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="design-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#design-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="design-tab-pane"
                  aria-selected="true"
                >
                  Personal-care
                </button>
              </li>

              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="marketing-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#marketing-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="marketing-tab-pane"
                  aria-selected="false"
                >
                  Farm-care
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="design-tab-pane"
                  role="tabpanel"
                  aria-labelledby="design-tab"
                  tabindex="0"
                >
                  <div class="row">
                    <div class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                      <div class="custom-block bg-white shadow-lg">
                        <Link to="/service">
                          <div class="d-flex">
                            <div>
                              <h5 class="mb-2">Heath Aide</h5>

                              <p class="mb-0">
                                Personalized care plans delivered by our
                                certified caregivers to support your unique
                                needs.
                              </p>
                            </div>

                            <span class="badge bg-design rounded-pill ms-auto">
                              #
                            </span>
                          </div>

                          <img
                            src={img3}
                            class="custom-block-image img-fluid"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                      <div class="custom-block bg-white shadow-lg">
                        <Link to="/service">
                          <div class="d-flex">
                            <div>
                              <h5 class="mb-2">Home Cleaning</h5>

                              <p class="mb-0">
                                Relax, We've Got This: Personalized Cleaning
                                Plans Delivered to Your Door
                              </p>
                            </div>

                            <span class="badge bg-design rounded-pill ms-auto">
                              #
                            </span>
                          </div>

                          <img
                            src={img1}
                            class="custom-block-image img-fluid"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-12">
                      <div class="custom-block bg-white shadow-lg">
                        <Link to="/service">
                          <div class="d-flex">
                            <div>
                              <h5 class="mb-2">Certified Caregiver</h5>

                              <p class="mb-0">
                                We're Here for You: Personalized Care Plans with
                                Compassionate Caregivers
                              </p>
                            </div>

                            <span class="badge bg-design rounded-pill ms-auto">
                              #
                            </span>
                          </div>

                          <img
                            src={img5}
                            class="custom-block-image img-fluid"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade"
                  id="marketing-tab-pane"
                  role="tabpanel"
                  aria-labelledby="marketing-tab"
                  tabindex="0"
                >
                  <div class="row">
                    <div class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                      <div class="custom-block bg-white shadow-lg">
                        <a href="topics-detail.html">
                          <div class="d-flex">
                            <div>
                              <h5 class="mb-2">Farm Workers</h5>

                              <p class="mb-0">
                                Get skilled labours to work on your farm as per
                                your demands
                              </p>
                            </div>

                            <span class="badge bg-advertising rounded-pill ms-auto">
                              #
                            </span>
                          </div>

                          <img
                            src={img6}
                            class="custom-block-image img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                      <div class="custom-block bg-white shadow-lg">
                        <a href="topics-detail.html">
                          <div class="d-flex">
                            <div>
                              <h5 class="mb-2">Farm-utilities</h5>

                              <p class="mb-0">
                                Rent your utilities or borrow as per your needs
                              </p>
                            </div>

                            <span class="badge bg-advertising rounded-pill ms-auto">
                              #
                            </span>
                          </div>

                          <img
                            src={img7}
                            class="custom-block-image img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-12">
                      <div class="custom-block bg-white shadow-lg">
                        <a href="topics-detail.html">
                          <div class="d-flex">
                            <div>
                              <h5 class="mb-2">Analysis</h5>

                              <p class="mb-0">
                                Give your crops a health checkup
                              </p>
                            </div>

                            <span class="badge bg-advertising rounded-pill ms-auto">
                              #
                            </span>
                          </div>

                          <img
                            src={img8}
                            class="custom-block-image img-fluid"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="timeline-section section-padding" id="section_3">
        <div class="section-overlay"></div>

        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <h2 class="text-white mb-4">Why choose Helpify?</h2>
            </div>

            <div class="col-lg-10 col-12 mx-auto">
              <div class="timeline-container">
                <ul
                  class="vertical-scrollable-timeline"
                  id="vertical-scrollable-timeline"
                >
                  <div class="list-progress">
                    <div class="inner"></div>
                  </div>

                  <li>
                    <h4 class="text-white mb-3">Accessibility:</h4>

                    <p class="text-white">
                      This website acts as a hub for individuals seeking
                      caretaking services, self-help support, or farm labor
                      assistance. It offers a centralized platform to easily
                      find and connect with relevant services or individuals,
                      addressing the challenge of limited resources and
                      awareness.
                    </p>

                    <div class="icon-holder">
                      <i class="bi-search"></i>
                    </div>
                  </li>

                  <li>
                    <h4 class="text-white mb-3">Efficiency:</h4>

                    <p class="text-white">
                      Our website simplifies the process of finding help or
                      offering support. It eliminates the need for
                      time-consuming searches and phone calls, providing a
                      one-stop solution. Users can easily browse listings,
                      connect directly with caregivers, self-help groups, or
                      farm laborers, saving time and effort while making
                      informed decisions.
                    </p>

                    <div class="icon-holder">
                      <i class="bi-bookmark"></i>
                    </div>
                  </li>

                  <li>
                    <h4 class="text-white mb-3">Community Building:</h4>

                    <p class="text-white">
                      This website promotes community and mutual support by
                      connecting those in need with willing helpers. It fosters
                      collaboration, empathy, and resource-sharing,
                      strengthening social bonds and promoting a culture of
                      assistance and solidarity. Through this platform,
                      individuals can both receive and provide help, creating a
                      positive and supportive environment for all.
                    </p>

                    <div class="icon-holder">
                      <i class="bi-book"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-12 text-center mt-5">
              <p class="text-white">
                Want to learn more?
                <a href="#" class="btn custom-btn custom-border-btn ms-3">
                  Check out Youtube
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="faq-section section-padding" id="section_4">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-12">
              <h2 class="mb-4">Frequently Asked Questions</h2>
            </div>

            <div class="clearfix"></div>

            <div class="col-lg-5 col-12">
              <img src={img9} class="img-fluid" alt="FAQs" />
            </div>

            <div class="col-lg-6 col-12 m-auto">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Can we trust helpify?
                    </button>
                  </h2>

                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Helpify is user authenticated and verified by
                      professionals.{" "}
                      <strong>We ensure the safety of our users,</strong> and
                      build a fostering comunity dedicated to connecting
                      individiduals in need with those who are eager to offer
                      assistance.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Can we trust Helpify?
                    </button>
                  </h2>

                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      You can search on Google with <strong>keywords</strong>{" "}
                      such as templatemo portfolio, templatemo one-page layouts,
                      photography, digital marketing, etc.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Guarenty of safe products delivered in agriculture domain?
                    </button>
                  </h2>

                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      You can modify any of this with custom CSS or overriding
                      our default variables. It's also worth noting that just
                      about any HTML can go within the
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="contact-section section-padding section-bg"
        id="section_5"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-12 text-center">
              <h2 class="mb-5">Get in touch</h2>
            </div>

            <div class="col-lg-5 col-12 mb-4 mb-lg-0">
              <iframe
                class="google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.065641062665!2d-122.4230416990949!3d37.80335401520422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858127459fabad%3A0x808ba520e5e9edb7!2sFrancisco%20Park!5e1!3m2!1sen!2sth!4v1684340239744!5m2!1sen!2sth"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div class="col-lg-3 col-md-6 col-12 mb-3 mb-lg- mb-md-0 ms-auto">
              <h4 class="mb-3">Address</h4>

              <p>
                Indian Institute of Information Technology Lucknow, Uttar
                Pradesh (226002)
              </p>

              <p class="d-flex align-items-center mb-1">
                <span class="me-2">Phone</span>

                <a href="tel: 305-240-9671" class="site-footer-link">
                  305-240-9671
                </a>
              </p>

              <p class="d-flex align-items-center">
                <span class="me-2">Email</span>

                <a href="mailto:info@company.com" class="site-footer-link">
                  helpify@iiitl.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;

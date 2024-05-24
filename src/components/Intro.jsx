import React from "react";
export const Intro = () => (
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
  </>
);

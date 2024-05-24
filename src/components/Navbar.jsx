// import React from "react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const changeBackground = () => {
      // Your scroll handler function
      console.log(window.scrollY);
    };

    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);


   const navigate = useNavigate();

   const handleClick = (e) => {
     e.preventDefault();
     navigate("/");

     // Add a timeout to allow the page to navigate and then perform the scroll
     setTimeout(() => {
       const element = document.getElementById("section_4");
       if (element) {
         element.scrollIntoView({ behavior: "smooth" });
       }
     }, 100);
   };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${isSticky ? "sticky" : ""}`}
        style={{ backgroundColor: "#80d0c7" }}
      >
        {/* style={{backgroundImage: 'linear-gradient(15deg, #13547a 0%, #80d0c7 100%)'}} */}
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
                <a className="nav-link click-scroll" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link click-scroll">
                  <Link
                    to="/service"
                    style={{ color: "white", textDecoration: "none" }}
                    onMouseEnter={(e) =>
                      (e.target.style.color = "rgb(19, 84, 122)")
                    }
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                  >
                    SERVICE
                  </Link>
                </a>
              </li>

              {/* <li className="nav-item">
                <a className="nav-link click-scroll">
                  <AnchorLink
                    href="#section_4"
                    style={{ color: "white", textDecoration: "none" }}
                    onMouseEnter={(e) =>
                      (e.target.style.color = "rgb(19, 84, 122)")
                    }
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                  >
                    Faqs
                  </AnchorLink>
                </a>
              </li> */}
              <li className="nav-item">
                <a
                  className="nav-link click-scroll"
                  href="/"
                  onClick={handleClick}
                >
                  <span
                    style={{ color: "white", textDecoration: "none" }}
                    onMouseEnter={(e) =>
                      (e.target.style.color = "rgb(19, 84, 122)")
                    }
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                  >
                    Faqs
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link click-scroll ">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link click-scroll">
                  {/* <Link to='/contact' style={{color: 'white', ':hover': {color: 'blue'}}}>CONTACT</Link> */}
                  <Link
                    to="/contact"
                    style={{ color: "white", textDecoration: "none" }}
                    onMouseEnter={(e) =>
                      (e.target.style.color = "rgb(19, 84, 122)")
                    }
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                  >
                    CONTACT
                  </Link>
                </a>
              </li>
            </ul>
            <div className="d-none d-lg-block">
              <Link to="/login">
                <a className="navbar-icon bi-person smoothscroll" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;


import React, {useEffect}  from "react";
import contactUs from '../images/contactUs.jpg';
const Contact =()=>{
  useEffect(() => {
    document.title = "Contact us";
  }, []);


  const sent=(e)=>{
    e.preventDefault();
    alert("Feedback sent succesfully!")

  }
    return(
        <>
        <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="" />
      <meta name="author" content="" />
      <title>Topic Listing Contact Page</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Open+Sans&display=swap"
        rel="stylesheet"
      />
      <link href="./bootstrap.min.css" rel="stylesheet" />
      <link href="./bootstrap-icons.css" rel="stylesheet" />
      <link href="./templatemo-topic-listing.css" rel="stylesheet" />
  
      <main>
       
        <header className="site-header d-flex flex-column justify-content-center align-items-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">
                        Homepage</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Contact Form
                    </li>
                  </ol>
                </nav>
                <h2 className="text-white">Contact Form</h2>
              </div>
            </div>
          </div>
        </header>
        <section className="section-padding section-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12">
                <h3 className="mb-4 pb-2">We'd love to hear from you</h3>
              </div>
              <div className="col-lg-6 col-12">
                <form
                  action="#"
                  method="post"
                  className="custom-form contact-form"
                  role="form"
                >
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required=""
                        />
                        <label htmlFor="floatingInput">Name</label>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          className="form-control"
                          placeholder="Email address"
                          required=""
                        />
                        <label htmlFor="floatingInput">Email address</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          name="subject"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required=""
                        />
                        <label htmlFor="floatingInput">Subject</label>
                      </div>
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          placeholder="Tell me about the project"
                          defaultValue={""}
                        />
                        <label htmlFor="floatingTextarea">
                          Tell me about the project
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12 ms-auto">
                      <button type="submit" className="form-control" onClick={sent}>
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-5 col-12 mx-auto mt-5 mt-lg-0">
                <img
                  className="form-control"
                  src={contactUs}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
        </>
    )
}

export default Contact;
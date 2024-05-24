// import React from "react";
// import helpify from './images/helpify.png';
// import manLogin from './images/manLogin.png';
// import './Login.css';
// function Register() {
//   return (
//     <>
//       <meta charSet="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <title>Registration Form</title>
//       <link rel="stylesheet" th:href="@{../css/styles.css}" />
//       <link rel="stylesheet" href="styles.css" />
//       <div className="navbar-top ">
//         <nav className="navbar d-fluid">
//           <div id="logo">
//             <img id="logoimg" src={helpify} alt="" />
//           </div>
//           <div id="links">
//             <ul className="nav-links">
//               <li>
//                 <a className="lnk" href="index.html">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a className="lnk" href="Aboutus.html">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a className="lnk" href="ContactUs.html">
//                   Contact Us
//                 </a>
//               </li>
//               <li>
//                 <a className="lnk" href="Profile.html">
//                   Profile
//                 </a>
//               </li>
//             </ul>
//           </div>
//           {/* <div class="signup">
//               <a href="Signup.html"><button type="button" class="btn btn-primary m-3">Sign-Up</button></a>
//             </div> */}
//         </nav>
//       </div>
//       <div className="minor4">
//         <div className="image1">
//           <img src={manLogin} alt="" />
//         </div>
//         <div className="container2">
//           {/* <div class="message" th:if="${message != null}">
//            [[${message}]]
//         </div> */}
//           {/* <div class="image1">
//             <img src="myimage-removebg-preview.png" alt="">
//         </div> */}
//           <h2 className="headingup">Registration Form</h2>
//           <form
//             className="formh"
//             th:action="@{/registration}"
//             method="post"
//             role="form"
//             th:object="${user}"
//           >
//             <div className="form-group">
//               <label htmlFor="fullname">Fullname:</label>
//               <input
//                 th:field="*{fullname}"
//                 type="text"
//                 id="fullname"
//                 name="fullname"
//                 placeholder="Enter your fullname"
//                 required=""
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email:</label>
//               <input
//                 th:field="*{email}"
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 required=""
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password:</label>
//               <input
//                 th:field="*{password}"
//                 type="password"
//                 id="password"
//                 name="password"
//                 placeholder="Enter your password"
//                 required=""
//               />
//             </div>
//             {/* <input type="submit" value="Register"> */}
//             <button type="submit" className="submitbutton">
//               Register
//             </button>
//             {/* <p class="textt">Already have an account ? LOGIN</p> */}
//             <p className="textt">
//               Already have an account?{" "}
//               <a href="login.html" className="linkkk">
//                 LOGIN HERE
//               </a>
//             </p>
//           </form>
//         </div>
//       </div>
//       {/* <div class="contact">
//         <p class="description">
        
//         </p>
//         <br>
//         <br>
//       </div>
//       <div class="group-4">
//         <div class="contact">
//           <a href="#" target="_b" class="social_item">
//             <i data-feather="github"></i><br>
//             <i data-feather="twitter"></i><br>
//             <i data-feather="linkedin"></i><br>
//             <i data-feather="instagram"></i>
//           </a>
//         </div>
//       </div>
//       <div class="group-3">
//         <div class="contact">
//           <br>
          
          
//           <h3 class="title">Contact</h3>
//           <div class="contact_info">
//             <p class="description">
//               IIITL, LUCKNOW
//             </p>
//             <p class="description">
//               <a href="#" target="_b" class="social_item">
//                 <i data-feather="phone"></i>
//                 <span>/ +91 95303 03124</span>
//               </a>
//             </p>
//             <p class="description">
//               <a href="#" target="_b" class="social_item">
//                 <i data-feather="mail"></i>
//                 <span>/ helpify@gmail.com </span>
//               </a>
          
//             </p>
//           </div>
//         </div>
//         <div class="social">
          
//           <h3 class="title">Quick links</h3>
//           <div class="social_items">
//             <a href="#" target="_b" class="social_item">
//               <i data-feather="home"></i>
//               <span>HOME</span>
//             </a>
//             <a href="#" target="_blank" class="social_item">
//               <i data-feather="triangle"></i>
//               <span>About us </span>
//             </a>
//             <a href="#" target="_blank" class="social_item">
//               <i data-feather="triangle"></i>
//               <span>Our team</span>
//             </a>
//           </div>
//         </div>
//       </div>
//       </div>
//        */}
//     </>
//   );
// }
// export default Register;


import React from "react";
import helpify from './images/helpify.png';
import manLogin from './images/manLogin.png';
import './Login.css'; // Import CSS file

function Register() {
  return (
    <>
      <title>Registration Form</title>
      <link rel="stylesheet" href="../css/styles.css" />
      <link rel="stylesheet" href="styles.css" /> 
      <div className="navbar-top">
        <nav className="navbar d-fluid">
          <div id="logo">
            <img id="logoimg" src={helpify} alt="" />
          </div>
          <div id="links">
            <ul className="nav-links">
              <li>
                <a className="lnk" href="index.html">
                  Home
                </a>
              </li>
              <li>
                <a className="lnk" href="Aboutus.html">
                  About Us
                </a>
              </li>
              <li>
                <a className="lnk" href="ContactUs.html">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="lnk" href="Profile.html">
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="minor4">
        <div className="image1">
          <img src={manLogin} alt="" />
        </div>
        <div className="container2">
          <h2 className="headingup">Registration Form</h2>
          <form
  className="formh"
  action="/registration" 
  method="post"
  role="form"
>


            <div className="form-group">
              <label htmlFor="fullname">Fullname:</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Enter your fullname"
                required=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required=""
              />
            </div>
            <button type="submit" className="submitbutton">
              Register
            </button>
            <p className="textt">
              Already have an account?{" "}
              <a href="login.html" className="linkkk">
                LOGIN HERE
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;

import React, {useEffect} from "react";
import "../AboutUs.css";
import farmer1 from "../images/farmer1.jpg";
import image2 from "../images/image2.jpg";
import Rahul from "../images/Rahul.jpg";
import Hardee from "../images/Hardee.jpg";
import Ananya from "../images/Ananya.jpg";
import Bhumika from "../images/Bhumika.jpg";
import Vaibhav from "../images/Vaibhav.jpg";
import Nachiket from "../images/Nachiket.jpg";

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Page";
  }, []);
  return (
  <>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ABOUT US</title>
    <link rel="stylesheet" href="aboutus.css" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossOrigin="anonymous"
    />
    <div className="containerss">
      <div id={1}>
        <h1 id="top">HELPIFY</h1>
        <p id="para1">
          Greetings from the helpify team ! We offer a crucial service for those
          in need of assisstance with care giving farm utilities, farm
          labours and SHGs
        </p>
        <button
          type="button"
          className="btn btn-primary"
          style={{ marginLeft: "45%", marginTop: 5 }}
        >
          Get In Touch
        </button>
      </div>
      <div id={2}>
        <img
          src="https://th.bing.com/th/id/R.e8d85e6518231bb06015dda79f85a821?rik=0dYiPNUfiwagiQ&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1684577%2fthumbs%2fo-HELPING-OTHERS-facebook.jpg&ehk=i9bGyJxT6W0jvwPTVG0bO%2fOzuvRM1ZFaBfHIbN%2bocqw%3d&risl=&pid=ImgRaw&r=0  "
          alt="helpify"
          id="image1"
        />
      </div>
    </div>
    <div className="container20">
      <div id="image3" style={{ display: "inline", marginTop:0}}>
        <img src={farmer1} alt="farmer" id="farmer1" />
        <img src={image2} alt="senior" id="image2" />
      </div>
      <div id="newdiv">
        <ul>
          <li id="small" style={{color:"#FFFFFF"}}>About Us</li>
        </ul>
        <h3 id="believe">We believe in treating our</h3>
        <h3 id="cli">clients with dignity</h3>
        <p>
          At HELPIFY, we understand the importance of maintaining open
          communication and involving families in this process process.
        </p>
        <div id="seconddiv" className="d-flex">
          <div id="mission" className="lll">
            <h3>Our Mission</h3>
            <p>
              We are on a mission to help people with caretaking assisstance,
              providing services to them and farm labourers. We help people
              form SHGs so that they could take benefits from it, connect with
              each other and ensure women 
            </p>
          </div>
          <div id="values">
            <h3 style={{ textAlign: "left" }}>Our Values</h3>
            <p style={{ textAlign: "left" }}>
              We take pride in offering reliable and efficient solutions if you
              need assistance with farm management, livestock care, or crop
              maintenance, our team is here to help. We strive to build
              long-lasting relationships with our clients by providing
              personalized services and exceptional customer support
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container3">
      <div className="ourteamheading">
        <h1 id="meet">Meet The Team</h1>
      </div>
      <div className="groupteam3">
        <div className="groupteam2">
          <img
            src={Vaibhav}
            alt="vaibhav"
            className="groupteam"
          />
          <h4>Vaibhav Verma</h4>
          
        </div>
        <div className="groupteam2">
          <img
            src={Ananya}
            alt="ananya"
            className="groupteam"
          />
          <h4>Ananya Kuchhal</h4>
        </div>
        <div className="groupteam2">
          <img
            src={Nachiket}
            alt="nachiket"
            className="groupteam"
          />
          <h4>Nachiket Deore</h4>
        </div>
      </div>
      <div className="groupteam3">
        <div className="groupteam2">
          <img src={Hardee} alt="hardi" className="groupteam" />
          <h4>Hardee Parekh</h4>
        </div>
        <div className="groupteam2">
          <img src={Rahul} alt="rahul" className="groupteam" />
          <h4>Rahul Naskar</h4>
        </div>
        <div className="groupteam2">
          <img
            src={Bhumika}
            alt="bhumika"
            className="groupteam"
          />
          <h4>Bhumika Wahane</h4>
        </div>
      </div>
    </div>
  </>
);
}
export default AboutUs;

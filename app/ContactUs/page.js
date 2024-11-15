"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faWarning } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Message from "../Message/page";

export default function ContactUs() {
  const [valus, setValus] = useState({
    name: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [showWrong, setShowWrong] = useState({
    name: false,
    lastname: false,
    email: false,
  });
  const [message, setMessage] = useState(false);
  //############ Function Values ############## //
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValus({
      ...valus,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (checkvalues()) {
      setMessage(true);
    } else {
      console.log("Validation failed.");
    }
  }
  function checkvalues() {
    const newErrors = {
      name: valus.name === "",
      lastname: valus.lastname === "",
      email: !/\S+@\S+\.\S+/.test(valus.email),
    };
    setShowWrong(newErrors);
    return !Object.values(newErrors).includes(true);
  }
  return (
    <div className="contact" id="contact">
      {message && <Message />}
      <div className="main">
        <div className="header-tittle">
          <h1>CONTACT</h1>
          <button>
            Book an Appointment Online <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <div className="contact-container">
          <div className="left-side">
            <div className="inform">
              <div className="inform_main">
                <div className="addres">
                  <div className="tittle">
                    <h3>ADDRESS</h3>
                  </div>
                  <div className="pargh">
                    <p>500 Terry Francine Street San Francisco, CA 94158</p>
                  </div>
                </div>
                <div className="numb">
                  <div className="tittle">
                    <h3>CONTACT US</h3>
                  </div>
                  <div className="pargh">
                    <span>123-456-7890</span>
                    <br />
                    <span> info@mysite.com</span>
                  </div>
                </div>
                <div className="opening">
                  <div className="tittle">
                    <h3>OPENING HOURS</h3>
                  </div>
                  <div className="pargh">
                    <span>
                      mon-fri:
                      <br /> 10am - 7pm <br />
                    </span>

                    <span>
                      Sat - Sun :
                      <br />
                      11am - 4pm
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="right-side">
            <div className="contactus">
              <div className="form">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>First name*</label>
                    <input
                      value={valus.name}
                      onChange={handleChange}
                      name="name"
                    />
                    {showWrong.name && (
                      <label style={{ marginTop: "4px", color: "red" }}>
                        <FontAwesomeIcon icon={faWarning} /> Enter a first name.
                      </label>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Last name*</label>
                    <input
                      value={valus.lastname}
                      onChange={handleChange}
                      name="lastname"
                    />
                    {showWrong.lastname && (
                      <label style={{ marginTop: "4px", color: "red" }}>
                        <FontAwesomeIcon icon={faWarning} /> Enter a last name.
                      </label>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Email*</label>
                    <input
                      value={valus.email}
                      onChange={handleChange}
                      name="email"
                    />
                    {showWrong.email && (
                      <label style={{ marginTop: "4px", color: "red" }}>
                        <FontAwesomeIcon icon={faWarning} /> Enter an email
                        address like example@hotmil.com.
                      </label>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <input
                      value={valus.message}
                      onChange={handleChange}
                      name="message"
                    />
                  </div>
                  <div className="button">
                    <button onClick={checkvalues}>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="created">
            <span>
              © 2035 by BRW BAR inc. Powered and secured by{" "}
              <span className="by">Me</span>
            </span>
          </div>
          <div className="ourLinks">
            <span>
              <FontAwesomeIcon icon={faFacebook} />
            </span>
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <span>
              <FontAwesomeIcon icon={faTwitter} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import "../d.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faArrowDown,
  faArrowLeft,
  faArrowUp,
  faBars,
  faClose,
  faStore,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import { useState } from "react";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Header from "../Header/page";
import ContactUs from "../ContactUs/page";
import Message2 from "../message2/page";

export default function ClientDeteils() {
  const [date, setDate] = useState(dayjs());
  const [isVisible, setIsVisible] = useState(false);
  const [activeT, setActiveT] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [content, setContent] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });
  const [showWrong, setShowWrong] = useState({
    name: false,
    number: false,
    email: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContent({
      ...content,
      [name]: value,
    });
  };

  function handleValidation() {
    const newErrors = {
      name: content.name === "",
      number: content.number === "",
      email: !/\S+@\S+\.\S+/.test(content.email),
    };
    setShowWrong(newErrors);
    return !Object.values(newErrors).includes(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (handleValidation()) {
      setShowMessage(true);
    } else {
      console.log("Validation failed.");
    }
  }

  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  function handleMessageClick(e) {
    e.preventDefault();
    if (handleValidation()) {
      setShowMessage(true);
    } else {
      console.log("Validation failed.");
    }
  }

  function onClose() {
    setShowMessage(false);
  }

  return (
    <div className="mains">
      <div className="client">
        <div className="main-content">
          <div className="back">
            <h5>
              <Link href={"/"}>
                <FontAwesomeIcon icon={faArrowLeft} /> Back
              </Link>
            </h5>
          </div>
          <div className="containerr">
            <div className="grids">
              <div className="details">
                <div className="details1">
                  <h3>Client Details</h3>
                </div>
                <div className="details2">
                  <span>Tell us a bit about yourself</span>
                </div>
                <div className="details3">
                  <p>
                    Already have an account?{" "}
                    <span>
                      <a href="#">Log in</a>
                    </span>
                    for faster booking.
                  </p>
                </div>
                <div className="main_form">
                  <form onSubmit={handleSubmit}>
                    <div className="fromMain">
                      <div className="form-group">
                        <label>Name *</label>
                        <input
                          value={content.name}
                          onChange={handleChange}
                          name="name"
                        />
                        {showWrong.name && (
                          <label style={{ marginTop: "4px", color: "red" }}>
                            <FontAwesomeIcon icon={faWarning} /> Enter a name.
                          </label>
                        )}
                      </div>
                      <div className="form-group">
                        <label>Email *</label>
                        <input
                          value={content.email}
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
                    </div>
                    <div className="fromMain2">
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input
                          value={content.number}
                          onChange={handleChange}
                          name="number"
                        />
                        {showWrong.number && (
                          <label style={{ marginTop: "4px", color: "red" }}>
                            <FontAwesomeIcon icon={faWarning} /> Enter Number .
                          </label>
                        )}
                      </div>
                      <div className="form-group">
                        <label>Add Your Message</label>
                        <input
                          value={content.message}
                          onChange={handleChange}
                          name="message"
                        />
                      </div>
                    </div>
                    <button type="submit" style={{ display: "none" }}>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <div className="books">
                <div className="child3">
                  <div className="toggle-container">
                    <div className="toggle-header" onClick={toggleVisibility}>
                      <span className="toggle-label">Server Details</span>
                      <span>
                        {isVisible ? (
                          <FontAwesomeIcon icon={faArrowUp} />
                        ) : (
                          <FontAwesomeIcon icon={faArrowDown} />
                        )}
                      </span>
                    </div>
                    <div
                      className={`text-container ${isVisible ? "fade-in" : "fade-out"
                        }`}
                    >
                      {isVisible && (
                        <div>
                          <p className="toggle-text">BRW Custom Shaping</p>
                          <span className="low">
                            {" "}
                            {date.format("YYYY-MM-DD")} at {activeT}
                          </span>
                          <br />
                          <span className="low">
                            NewYork <br /> Staff Member #1
                            <br /> 45mnt <br />
                            $30
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <button className="cart" onClick={handleMessageClick}>
                    Add To Cart
                  </button>
                  <button className="book" onClick={handleSubmit}>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          {showMessage && <Message2 onClose={onClose} />}
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

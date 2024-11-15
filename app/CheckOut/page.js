"use client";
import "../d.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faBars,
  faClose,
  faLock,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Header from "../Header/page";
import ContactUs from "../ContactUs/page";
import Message5 from "../message5/page";
import Message6 from "../message6/page";
import { usePackage } from "../../context/page";
export default function CheckOut() {
  const [showMessage, setShowMessage] = useState(false);
  const [showMessage2, setShowMessage2] = useState(false);
  useEffect(() => {
    setShowMessage(true);
  }, []);
  function onClose() {
    setShowMessage(false);
  }
  function onClose2() {
    setShowMessage2(false);
  }
  const { selectedPackage } = usePackage();
  if (!selectedPackage) {
    return <div>No package selected!</div>;
  }
  return (
    <div className="check_out">
      {showMessage && <Message5 onClose={onClose} />}
      {showMessage2 && <Message6 onClose2={onClose2} />}
      <div className="window">
        <div className="content">
          <div className="headTittle">
            <h4>Checkout</h4>
          </div>
          <hr></hr>
          <div className="container_check">
            <div className="singUp">
              <div className="singUp_Tittle">
                <h6>
                  <span>1</span>Sign Up
                </h6>
              </div>
              <div className="pargh">
                <p>
                  To purchase this plan and use its benefits in the future, log
                  in to your account or sign up.
                </p>
              </div>
              <div className="buttons">
                <button
                  onClick={() => {
                    setShowMessage2(true);
                  }}
                >
                  Sing Up
                </button>
                <button
                  onClick={() => {
                    setShowMessage2(true);
                  }}
                >
                  Log In
                </button>
              </div>
              <hr></hr>
            </div>
            <div className="orderDetiles">
              <div className="content23">
                <div className="margins">
                  <div className="tittleOrder">
                    <span>Order summary</span>
                  </div>
                  <div className="orderSalary">
                    <span>{selectedPackage.name}</span>
                    <span>${selectedPackage.sal}</span>
                  </div>
                  <div className="time">
                    {" "}
                    <span>Duration: 12 months</span>
                    <hr></hr>
                  </div>
                  <div className="totalOrder">
                    <div className="total">
                      <div className="name">
                        <span>Total</span>
                      </div>
                      <div className="salaryTotal">
                        <span>${selectedPackage.sal}</span>
                        <span>every month</span>
                      </div>
                    </div>
                    <div className="date">
                      <span>{selectedPackage.charged}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="secure">
                <span>
                  <FontAwesomeIcon icon={faLock} /> Secure Checkout
                </span>
              </div>
            </div>
            <div className="payMent">
              <span>2 PayMent</span>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
}

"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faBars, faClose, faStore } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import "../d.css";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
export default function Message5({ onClose }) {
  return (
    <div className="message4">
      <div className="windowOn" style={{ textAlign: "center" }}>
        <span>
          <FontAwesomeIcon icon={faClose} onClick={onClose} />
        </span>
        <h3>You can’t order this plan at the moment</h3>
        <span>Please contact us to complete the purchase.</span>
        <div className="box">
          <button onClick={onClose}>Got It</button>
        </div>
      </div>
    </div>
  );
}

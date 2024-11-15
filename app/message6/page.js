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
export default function Message6({ onClose2 }) {
  return (
    <div className="message6">
      <div className="close">
        <span>
          <FontAwesomeIcon icon={faClose} onClick={onClose2} />
        </span>
      </div>

      <div className="windowOn6">
        <h2>This Site Not Available</h2>
        <span>Come Back Soon.</span>
        <div className="box">
          <button onClick={onClose2}>Close This Tab</button>
        </div>
      </div>
    </div>
  );
}

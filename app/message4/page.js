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
export default function Message4({ closeMessage, onLeavingBookng }) {
  return (
    <div className="message4">
      <div className="windowOn">
        <span>
          <FontAwesomeIcon icon={faClose} onClick={closeMessage} />
        </span>
        <h3>Leave without booking?</h3>
        <span>If you leave now, your appointment won’t be saved.</span>
        <div className="box">
          <button onClick={onLeavingBookng}>Leave Booking</button>
          <button onClick={closeMessage}>Continue Booking</button>
        </div>
      </div>
    </div>
  );
}

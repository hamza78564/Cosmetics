"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faBars, faClose, faStore } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
export default function Fixed() {
  return (
    <div className="fixed">
      <div className="logos">
        <ul>
          <li>
            <a href={"https://www.facebook.com/"} target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href={"https://www.instagram.com"} target="_blank">
              {" "}
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href={"https://twitter.com"} target="_blank">
              {" "}
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

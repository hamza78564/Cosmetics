"use client";
import "../d.css";
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
import Image from "next/image";
export default function Profile({ selectedImage, onClose }) {
  return (
    <div className="profile">
      <FontAwesomeIcon icon={faClose} onClick={onClose} />
      <div className="main-profile">
        <div className="box1">
          <Image
            src={selectedImage}
            alt="photo_instagram"
            width={600}
            height={450}
          />
        </div>
        <div className="box2">
          <div className="topBox">
            <div className="box2-main">
              <div className="titttle">
                <div className="ncont">
                  <span className="n">N</span>
                </div>
                <div className="main-tittle"> 
                  <span>browbarinc_template</span>
                  <span>August 28, 2024</span>
                </div>
              </div>
              <div className="img">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
          </div>
          <div className="bottombox">
            <div className="hashtags">
              <span>
                @wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com 6
                days ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

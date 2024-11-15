"use client";
import Image from "next/image";
import "../d.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faUserPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Header from "../Header/page";
import ContactUs from "../ContactUs/page";

export default function Opps() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="main">
      {loading ? (
        <div className="loading-animation">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="oops">
          <div className="box-Oops">
            <h1>There is maintenance on site, check back later.</h1>
            <Link href={"/"}>
              <h3 className="text-center">Back To Main Site</h3>
            </Link>
          </div>
        </div>
      )}

      <ContactUs />
    </div>
  );
}

"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faAngleLeft,
  faBars,
  faClose,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

export default function Header() {
  const navRef = useRef();
  const [store, setStore] = useState(false);

  function showNavBar() {
    navRef.current.classList.toggle("respons");
  }

  const handleLinkClick = () => {
    setStore(false);
    navRef.current.classList.remove("respons");
  };

  return (
    <div className="header">
      <div className="main-Head">
        <div className="mainName">
          <div className="children_1">
            <span>BRW</span>
          </div>
          <div className="children_2">
            <span>BAR</span>
            <span>inc</span>
          </div>
        </div>
        <div className="nav">
          <div className="navBar" ref={navRef}>
            <ul>
              <Link href="/#about" passHref>
                <li onClick={handleLinkClick}>ABOUT</li>
              </Link>
              <Link href="/Treatments" passHref>
                <li onClick={handleLinkClick}>TREATMENTS</li>
              </Link>
              <Link href="/Packages" passHref>
                <li onClick={handleLinkClick}>PACKAGES</li>
              </Link>
              <Link href="/#contact" passHref>
                <li onClick={handleLinkClick}>CONTACT</li>
              </Link>
              <Link href="/oops" passHref>
                <li onClick={handleLinkClick}>Log In</li>
              </Link>

              <button
                className="navBTN navClose"
                style={{ border: "none", background: "none" }}
                onClick={showNavBar}
              >
                <FontAwesomeIcon icon={faClose} style={{ cursor: "pointer" }} />
              </button>
            </ul>
          </div>

          <div
            className="store"
            style={{ cursor: "pointer" }}
            onClick={() => setStore(!store)}
          >

            <Link href="#" passHref>
              <li>
                <FontAwesomeIcon icon={faStore} />
                <span>0</span>
              </li>
            </Link>
          </div>
          <button
            className="navBTN navOpen"
            style={{ border: "none", background: "none", marginRight: "60px" }}
            onClick={showNavBar}
          >
            <FontAwesomeIcon icon={faBars} style={{ cursor: "pointer" }} />
          </button>
        </div>
      </div>
      <div className={store ? "storeNav" : ""}>
        <div className={!store ? "windowBack" : "windowBack showIt"}>
          <div className="headerTittle">
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              icon={faAngleLeft}
              onClick={() => setStore(!store)}
            />
            <h4>MY CART</h4>
          </div>
          <div className="body">
            <span>Cart Is Empty</span>
          </div>
        </div>
      </div>
    </div>
  );
}

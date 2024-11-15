"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faCheck, faSadCry } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Message2({ onClose }) {
  return (
    <div className="message2">
      <div className="windowOn">
        <h3>Sorry We Cant Accept Online Order :( </h3>

        <div className="box">
          <button
            onClick={onClose}
            style={{ backgroundColor: "transparent", padding: "7px 54px" }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

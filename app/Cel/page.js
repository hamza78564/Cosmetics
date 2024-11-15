// Cel.js
"use client";

import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Cel() {
  const [date, setDate] = useState(dayjs());
  const [activeT, setActiveT] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  function handleBackground(time) {
    setActiveT(time);
  }

  const shouldDisableDate = (date) => date.isBefore(dayjs(), "day");

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="container">
        <StaticDatePicker
          orientation="portrait"
          openTo="day"
          value={date}
          onChange={(newDate) => setDate(newDate)}
          renderInput={(params) => <TextField {...params} />}
          shouldDisableDate={shouldDisableDate}
        />
        <div className="child2">
          <div className="content">
            <h3>Date Is :</h3>
            <span>{date.format("YYYY-MM-DD")}</span>
          </div>
          <div className="content2">
            <button
              onClick={() => handleBackground("10:00")}
              className={activeT === "10:00" ? "bg" : ""}
            >
              10:00
            </button>
            <button
              onClick={() => handleBackground("10:30")}
              className={activeT === "10:30" ? "bg" : ""}
            >
              10:30
            </button>
            <button
              onClick={() => handleBackground("11:00")}
              className={activeT === "11:00" ? "bg" : ""}
            >
              11:00
            </button>
          </div>
        </div>
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
              className={`text-container ${isVisible ? "fade-in" : "fade-out"}`}
            >
              {isVisible && (
                <div>
                  <p className="toggle-text">BRW Custom Shaping</p>
                  <span className="low">
                    {date.format("YYYY-MM-DD")} at {activeT}
                  </span>
                  <br />
                  <span className="low">
                    NewYork <br /> Staff Member #1 <br /> 45mnt <br /> $30
                  </span>
                </div>
              )}
            </div>
          </div>
          <Link
            href={`/ClientDeteils?date=${date.format(
              "YYYY-MM-DD"
            )}&time=${activeT}`}
          >
            <button>Next</button>
          </Link>
        </div>
      </div>
    </LocalizationProvider>
  );
}

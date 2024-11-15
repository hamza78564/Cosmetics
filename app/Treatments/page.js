"use client";
import "../d.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faBars, faClose, faStore } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import ContactUs from "../ContactUs/page";
import Message3 from "../message3/page";

export default function TreatMents() {
  const TreatMentsList = ({ treatments }) => (
    <>
      {treatments.map((treatment, index) => (
        <div className="box" key={index}>
          <div className="mainTittle">{treatment.tittle}</div>
          <div className="times">{treatment.time}</div>
          <div className="salary">{treatment.sal}</div>
          <div className="butn">
            <button
              onClick={() => {
                handleShowMessage(treatment);
              }}
            >
              Make an Appointment
            </button>
          </div>
        </div>
      ))}
    </>
  );
  const data1 = [
    { tittle: "Brow Tint", time: "1hr", sal: "$45" },
    { tittle: "Brw Custom Shaping", time: "45min", sal: "$30" },
    { tittle: "Brow Extionsions", time: "1hr 30min", sal: "$75" },
    { tittle: "Brow Microblading", time: "2hr", sal: "$125" },
    { tittle: "Brow Thread", time: "35min", sal: "$25" },
    { tittle: "Brow Waxing", time: "20min", sal: "$20" },
  ];
  const data2 = [
    { tittle: "Lash Lift", time: "45min", sal: "$75" },
    { tittle: "Lash Extenstions", time: "2hr", sal: "$129" },
    { tittle: "Lash Tinting", time: "50 min", sal: "$67" },
  ];
  const [showAlldata, setShowAllData] = useState(true);
  const [showdata1, setShowData1] = useState(false);
  const [showdata2, setShowData2] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  function handleAllServices() {
    setShowAllData(true);
    setShowData1(false);
    setShowData2(false);
  }
  function handleData1() {
    setShowData1(true);
    setShowAllData(false);
    setShowData2(false);
  }
  function handleData2() {
    setShowData2(true);
    setShowAllData(false);
    setShowData1(false);
  }
  // Show MEssage
  function handleShowMessage(treatment) {
    setSelectedTreatment(treatment);
    setShowMessage(true);
  }
  function onClose() {
    setShowMessage(false);
  }
  // function handleClickOutSide(event) {
  //   if (!event.target.closest(".windowOn")) {
  //     setShowMessage(false);
  //   }
  // }
  // useEffect(() => {
  //   if (showMessage) {
  //     document.addEventListener("click", handleClickOutSide);
  //   }
  //   return () => document.removeEventListener("click", handleClickOutSide);
  // }, [showMessage]);

  return (
    <div className="treatMents">
      <div className="main_Treat">
        <div className="tittle">
          <h1>WHAT WE DO</h1>
        </div>
        <div className="lists">
          <div className="ul">
            <ul>
              <li
                onClick={handleAllServices}
                className={showAlldata ? "active_line" : ""}
              >
                All Services
              </li>
              <li
                onClick={handleData1}
                className={showdata1 ? "active_line" : ""}
              >
                Brow Treatment
              </li>
              <li
                onClick={handleData2}
                className={showdata2 ? "active_line" : ""}
              >
                Lashes Treatment
              </li>
            </ul>
          </div>
        </div>
        {showAlldata && (
          <div className="grids">
            <div className="grid1">
              <TreatMentsList treatments={data1} />
            </div>
            <div className="grid2">
              <TreatMentsList treatments={data2} />
            </div>
            <div className="grid3"></div>
          </div>
        )}
        {showdata1 && (
          <div className="grids">
            <div className="grid1">
              <TreatMentsList treatments={data1} />
            </div>
          </div>
        )}
        {showdata2 && (
          <div className="grids">
            <div className="grid2">
              <TreatMentsList treatments={data2} />
            </div>
          </div>
        )}
      </div>

      {showMessage && (
        <Message3 treatment={selectedTreatment} onClose={onClose} />
      )}
      <ContactUs />
    </div>
  );
}

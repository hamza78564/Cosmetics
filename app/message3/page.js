"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faArrowLeft,
  faChevronDown,
  faClose,
  faDeleteLeft,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import Message4 from "../message4/page";

export default function Message3({ treatment, onClose }) {
  const [addService, setAddService] = useState(false);
  const [showMainData, setShowMeanData] = useState(true);
  const [showcont1, setShowCont1] = useState(false);
  const [showcont2, setShowCont2] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [showmessage4, setShowMessage4] = useState(false);

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const isAnySelected = selectedServices.length > 0;

  if (!treatment) return null;

  const servicePrices = {
    lashLift: 75,
    lashExtensions: 75,
    lashTinting: 75,
    browTint: 45,
    browShaping: 45,
    browMicroblading: 45,
    browThread: 45,
    browWaxing: 45,
  };
  function closeMessage() {
    setShowMessage4(false);
  }
  return (
    <div className="message3">
      {showmessage4 && (
        <Message4
          closeMessage={closeMessage}
          onLeavingBookng={() => {
            onClose();
            setShowMessage4(false);
          }}
        />
      )}
      {showMainData && (
        <div className="windowOn" style={{ zIndex: "2300" }}>
          <div className="header_Message">
            <h6>Your appointment</h6>
            <FontAwesomeIcon
              icon={faClose}
              onClick={() => {
                if (!showmessage4) {
                  setShowMessage4(true);
                } else {
                  setShowMessage4(false);
                  onClose();
                }
              }}
            />
          </div>
          <div className="content_Message">
            <div className="tittles">
              <span>{treatment.tittle} </span>
              <span>San Francisco</span>
              <span>
                With Staff Member #1 • {treatment.time} • {treatment.sal}
              </span>
            </div>
          </div>
          {selectedServices.length > 0 && (
            <div className="content_Message">
              {selectedServices.map((service) => (
                <div className="tittles" key={service}>
                  <span>{service.replace(/([A-Z])/g, " ")} </span>
                  <span>San Francisco</span>
                  <span style={{ cursor: "pointer" }}>
                    With Staff Member #1 • ${servicePrices[service]} •{" "}
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => {
                        setSelectedServices((prev) =>
                          prev.filter((s) => s !== service)
                        );
                      }}
                    />
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="lastTittle">
            <p>Do you want to add another service to this appointment?</p>
            <button
              onClick={() => {
                setAddService(true);
                setShowMeanData(false);
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
              Add Service
            </button>
          </div>
          <hr />
          <div className="data_time">
            <button>
              <Link href={"/oops"}>Select Date & Time </Link>
            </button>
          </div>
        </div>
      )}
      {addService && (
        <div className="windowOn">
          <div className="header_Message">
            <h6>Select another service</h6>
            <FontAwesomeIcon icon={faClose} onClick={onClose} />
          </div>
          <div className="cont">
            <div className="box_1">
              <header
                onClick={() => {
                  setShowCont1(!showcont1);
                  setShowCont2(false);
                }}
              >
                <span>Lashes Treatment</span>
                <span>
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </header>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: showcont1 ? "auto" : 0,
                  opacity: showcont1 ? 1 : 0,
                }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{ overflow: "hidden" }}
              >
                <section>
                  {["lashLift", "lashExtensions", "lashTinting"].map(
                    (service) => (
                      <div
                        key={service}
                        onClick={() => toggleService(service)}
                        style={{ cursor: "pointer", display: "flex" }}
                      >
                        <div
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            backgroundColor: selectedServices.includes(service)
                              ? "black"
                              : "transparent",
                            border: "1px solid black",
                            marginRight: "10px",
                          }}
                        />
                        <span>{service.replace(/([A-Z])/g, " ")} - $75</span>
                      </div>
                    )
                  )}
                </section>
              </motion.div>
            </div>
            <div className="box_2">
              <header
                onClick={() => {
                  setShowCont2(!showcont2);
                  setShowCont1(false);
                }}
              >
                <span>Brow Treatment</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </header>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: showcont2 ? "auto" : 0,
                  opacity: showcont2 ? 1 : 0,
                }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
              >
                <section>
                  {[
                    "browTint",
                    "browShaping",
                    "browMicroblading",
                    "browThread",
                    "browWaxing",
                  ].map((service) => (
                    <div
                      key={service}
                      onClick={() => toggleService(service)}
                      style={{ cursor: "pointer", display: "flex" }}
                    >
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          backgroundColor: selectedServices.includes(service)
                            ? "black"
                            : "transparent",
                          border: "1px solid black",
                          marginRight: "10px",
                        }}
                      />
                      <span>{service.replace(/([A-Z])/g, " $1")} - $45</span>
                    </div>
                  ))}
                </section>
              </motion.div>
            </div>
          </div>
          <footer>
            <button
              onClick={() => {
                setAddService(false);
                setShowMeanData(true);
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} /> Back
            </button>
            <button
              disabled={!isAnySelected}
              onClick={() => {
                setShowMeanData(true);
                setAddService(false);
              }}
            >
              Next
            </button>
          </footer>
        </div>
      )}
    </div>
  );
}

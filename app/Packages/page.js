"use client";
import "../d.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faBars, faClose, faStore } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import ContactUs from "../ContactUs/page";

import { selectClasses } from "@mui/material";
import { useRouter } from "next/navigation";
import { usePackage } from "../../context/page";

export default function Packages() {
  const [loading, setLoading] = useState([false, false, false]);
  const router = useRouter();
  const { setSelectedPackage } = usePackage();
  function handleSelect(index) {
    setLoading((prev) => {
      const newLoading = [...prev];
      newLoading[index] = true;
      return newLoading;
      //######
    });
    // ###### time
    setTimeout(() => {
      setLoading((prev) => {
        const newLoading = [...prev];
        newLoading[index] = false;
        return newLoading;
      });
      const selectedPackage = packagesData[index];
      setSelectedPackage(selectedPackage);
      router.push("/CheckOut");
    }, 2000);
  }
  let packagesData = [
    {
      name: "New Client Deal",
      sal: 120,
      features: ["3 Treatments", "Free consultation", "Online resources"],
      charged: "",
    },
    {
      name: "Platinum Unlimited",
      sal: 500,
      features: [
        "Unlimited touch ups",
        "10 Treatments",
        "Free consultation",
        "Weekly newsletter",
      ],
      charged: "You will be charged monthly for 12 months.",
      isAcitve: true,
    },
    {
      name: "Monthly Treatments",
      sal: 200,
      features: [
        "4 Treatments",
        "Free consultation",
        "Online resources",
        "Priority support",
      ],
      charged: "You will be charged monthly until canceled.",
    },
  ];

  return (
    <div className="packages">
      <div className="tittles">
        <div className="h4-content">
          <h4>LET YOUR NATURAL BEAUTY SHINE</h4>
        </div>
        <div className="natr">
          <span>Browse our packages, and take your pick</span>
        </div>
      </div>
      <div className="main-container">
        {packagesData.map((pkj, index) => (
          <div
            className={
              pkj.isAcitve ? " packages_salary center" : "packages_salary"
            }
            key={index}
          >
            <div className="salary_1">
              <div className="box1">
                <div className="head_tittle">
                  <h4>{pkj.name}</h4>
                </div>
                <div className="salary">
                  <h6>{pkj.sal}</h6>
                  <div className="dollar">$</div>
                </div>
                <div className="about_it">
                  <span>Great for trying our services</span>
                </div>
                <div className="expiration">
                  <span>Valid for 3 months</span>
                </div>
                <div className="submit_button">
                  <button
                    onClick={() => {
                      handleSelect(index);
                    }}
                  >
                    {loading[index] ? (
                      <div class="circles">
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                      </div>
                    ) : (
                      "Select"
                    )}
                  </button>
                </div>
              </div>
              <div className="box2">
                <div className="Features">
                  <ul>
                    {pkj.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ContactUs />
    </div>
  );
}

"use client";
import Image from "next/image";
import styles from "./page.module.css";
import "./d.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Header from "./Header/page";
import Content from "./Content/page";
import Fixed from "./Fixed/page";
import OurStory from "./OurStory/page";
import Celender from "./celender/page";
import FollowUs from "./FollowUs/page";
import ContactUs from "./ContactUs/page";
import Message from "./Message/page";

export default function Home() {
  return (
    <div>
      <Content />
      <OurStory />
      <Fixed />
      <Celender />
      <FollowUs />
      <ContactUs />
    </div>
  );
}

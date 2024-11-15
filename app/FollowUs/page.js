"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Profile from "../Profile/page"; // تأكد من أن المسار صحيح

export default function FollowUs() {
  let images = [
    "/inst1.jpg",
    "/inst2.jpg",
    "/inst3.jpg",
    "/inst4.jpg",
    "/inst5.jpg",
    "/inst6.jpg",
    "/inst7.jpg",
    "/inst8.jpg",
    "/inst9.jpg",
    "/inst10.jpg",
    "/inst11.jpg",
    "/inst12.jpg",
  ];

  const profileRef = useRef(null); // Ref to Profile component
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showProfile, setShowProfile] = useState(false);
  const [showsliderpc, setShowsliderpc] = useState(true);
  const [imagesToShow, setImagesToShow] = useState(4); // عدد الصور المعروضة
  const [hasMoreImages, setHasMoreImages] = useState(true); // للتحقق من وجود صور أخرى
  const [showLess, setShowLess] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  function checkWindowWidth() {
    if (window.innerWidth <= 448) {
      setShowsliderpc(false);
    } else {
      setShowsliderpc(true);
      
      setImagesToShow(4);
      setHasMoreImages(true);
      setCurrentIndex(0); 
      setShowLess(false);
    }
  }

  useEffect(() => {
    checkWindowWidth();
    window.addEventListener("resize", checkWindowWidth);

    return () => window.removeEventListener("resize", checkWindowWidth);
  }, []);

  const prevSlider = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - imagesToShow : prev - 1
    );
  };

  const nextSlider = () => {
    setCurrentIndex((prev) =>
      prev + imagesToShow >= images.length ? 0 : prev + 1
    );
  };

  function handleOpenProfile(src) {
    setSelectedImage(src);
    setShowProfile(true);
  }

  function handleClickOutside(event) {
    if (!event.target.closest(".profile")) {
      setShowProfile(false);
    }
  }

  useEffect(() => {
    if (showProfile) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showProfile]);

  function loadMoreImages() {
    setImagesToShow((prev) => {
      const newCount = prev + 4;
      if (newCount >= images.length) {
        setHasMoreImages(false);
        setShowLess(true);
        return images.length;
      }
      return newCount;
    });
  }
  function showLessImages() {
    setImagesToShow(4);
    setHasMoreImages(true);
    setShowLess(false);
    setCurrentIndex(0);
  }
  function onClose() {
    setShowProfile(false);
  }
  return (
    <div className="follow">
      {showProfile && (
        <div className="profile-cont" ref={profileRef}>
          <Profile selectedImage={selectedImage} onClose={onClose} />
        </div>
      )}
      <div className="tittle">
        <div className="mainTittle">
          <a href={"https://www.instagram.com/leomessi/"} target="blank">
            Follow Us <span>@leomessi </span>
            <FontAwesomeIcon icon={faArrowRight} onClick={prevSlider} />
          </a>
        </div>
      </div>

      <div className="grid_Follow">
        {showsliderpc ? (
          <div className="imageSlider row">
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{
                fontSize: "7vh",
                position: "absolute",
                right: "49px",
                top: "42%",
                width: "18px",
                zIndex: "10",
                cursor: "pointer",
                color: "cyan",
              }}
              onClick={nextSlider}
            />
            {images
              .slice(currentIndex, currentIndex + imagesToShow)
              .map((src, index) => (
                <div className="box col-lg-2 col-md-6" key={index}>
                  <Image
                    onClick={() => handleOpenProfile(src)}
                    alt={`photoInstagram ${index}`}
                    width="350"
                    height="350"
                    src={src}
                  />
                </div>
              ))}
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{
                fontSize: "7vh",
                position: "absolute",
                left: "49px",
                top: "42%",
                width: "18px",
                zIndex: "10",
                cursor: "pointer",
                color: "cyan",
              }}
              onClick={prevSlider}
            />
          </div>
        ) : (
          <div className="imageSlidermobile">
            {images.slice(0, imagesToShow).map((src, index) => (
              <div className="box col-lg-2 col-md-6" key={index}>
                <Image
                  onClick={() => handleOpenProfile(src)}
                  alt={`photoInstagram ${index}`}
                  width="350"
                  height="350"
                  src={src}
                />
              </div>
            ))}
            {hasMoreImages && (
              <button
                className="load-more-btn btn btn-primary"
                onClick={loadMoreImages}
              >
                Load More
              </button>
            )}
            {showLess && (
              <button
                className="show-less-btn btn btn-warning "
                onClick={showLessImages}
              >
                Show Less
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

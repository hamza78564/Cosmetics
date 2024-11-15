"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default function Message({ onComplate }) {
  let [check, setCheck] = useState(false);
  let [loading, setLoading] = useState(false);
  let [showSucces, setShowSucces] = useState(false);
  let [showMessage, setShowMessage] = useState(true);
  useEffect(() => {
    if (check) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        setShowSucces(true);
        const hidetimer = setTimeout(() => {
          setShowMessage(false);
          if (onComplate) onComplate();
        }, 1600);
        return () => clearTimeout(hidetimer);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [check, onComplate]);
  if (!showMessage) {
    return null;
  }

  return (
    <div className="message">
      {loading ? (
        <div className="windowOn">
          <h3>Loading ...</h3>
        </div>
      ) : showSucces ? (
        <div className="windowOn">
          <FontAwesomeIcon icon={faCheck} />
          <h3 className="h3">Verification Successful</h3>
        </div>
      ) : (
        <div className="windowOn">
          <h3>Verification</h3>
          <span>Please confirm you are human.</span>
          <div className="box">
            <input
              type="checkbox"
              checked={check}
              onChange={(ev) => setCheck(ev.target.checked)}
            />
            <span> I’m not a robot</span>
          </div>
        </div>
      )}
    </div>
  );
}

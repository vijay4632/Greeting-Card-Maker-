import React, { useRef } from "react";
import './Preview.css';
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG
} from "react-component-export-image";

const Preview = ({ Values }) => {
  const cardRef = useRef();

  const handleDownload = (type) => (e) => {
    e.preventDefault();
    const exportMap = {
      pdf: exportComponentAsPDF,
      png: exportComponentAsPNG,
      jpeg: exportComponentAsJPEG,
    };
    exportMap[type](cardRef, { fileName: `${Values.Recipient || "greeting-card"}` });
  };

  return (
    <section className="Preview">
      <div ref={cardRef} className="greeting-card">
        <h2>Happy {Values.Occasion || "Occasion"}!</h2>
        <p>Dear {Values.Recipient || "Recipient"},</p>
        <p style={{ minHeight: "60px" }}>
          {Values.Message || "Your greeting message will appear here."}
        </p>
        <p style={{ textAlign: "right", marginTop: "40px" }}>
          <strong>- {Values.Sender || "Sender"}</strong>
        </p>
      </div>
      <div className="Preview-Actions">
        <button onClick={handleDownload("pdf")}>Save as PDF</button>
        <button onClick={handleDownload("png")}>Save as PNG</button>
        <button onClick={handleDownload("jpeg")}>Save as JPEG</button>
      </div>
    </section>
  );
};

export default Preview;

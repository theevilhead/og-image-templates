import React from "react";
import Image from "next/image";

import bg from "./bg.png";

export default function WebsiteTemplateOne() {
  return (
    <div
      style={{
        width: "1200px",
        height: "630px",
        paddingTop: "60px",
        backgroundColor: "black",
        textAlign: "center",
        overflow: "hidden",
        border: "1px solid #d9d9d9",
      }}
    >
      {/* Blog post title */}
      <div
        style={{
          fontSize: 40,
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: 800,
          color: "white",
          // color: "#333",
          lineHeight: 1.5,
          whiteSpace: "pre-wrap",
          width: "80%",
          textAlign: "center",
          margin: "0 auto",
        }}
      >
        Big bold statement about your website with a live preview image of it.
      </div>
      <div style={{
        width: '70%',
        margin: '0 auto',
        marginTop: '3%',
      }}>
      <Image
        src={bg}
        alt="Website"
        style={{
          borderRadius: '5px',
        }}
      />
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";

import bg from "./bg.png";
import logoLight from "./logo-light.png";
import logoDark from "./logo-dark.png";

export default function WebsiteTemplateTwo() {
  return (
    <div
      style={{
        width: "1200px",
        height: "630px",
        padding: "60px",
        backgroundColor: "black",
        overflow: "hidden",
        border: "1px solid #d9d9d9",
        display: "flex",
        justifyContent: "space-between",
        color: "white",
        fontFamily: "Inter",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Image
          src={logoLight}
          width={150}
          alt={"Hashnode engineering blog post's og image"}
        />
        {/* Blog post title */}
        <div
          style={{
            fontSize: 36,
            fontStyle: "normal",
            paddingRight: "20px",
            fontWeight: 800,
            // color: "#333",
            lineHeight: 1.5,
            whiteSpace: "pre-wrap",
          }}
        >
          Big bold statement about your website with a live
          preview image of it.
        </div>
        <div>www.linear.app</div>
      </div>

      <Image
        src={bg}
        alt="Website"
        style={{
          borderRadius: "5px",
          position: "absolute",
          width: "1000px",
          bottom: 0,
          left: "50%",
          boxShadow: "0 0 20px 0 rgba(99,99,99, 0.2)",
        }}
      />
    </div>
  );
}

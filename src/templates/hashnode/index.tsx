import React from "react";
import Image from "next/image";

import logo from "./logo.png";
import bg from './bg.png';

export default function HashnodeTemplate() {
  return (
    <div
      style={{
        width: "1200px",
        height: "630px",
        padding: "100px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        backgroundColor: "black",
        justifyContent: "space-between",
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "40%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "85%",
      }}
    >
      <Image
        src={logo}
        width={250}
        alt={"Hashnode engineering blog post's og image"}
      />
      {/* Blog post title */}
      <div
        style={{
          fontSize: 40,
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: 800,
          color: "white",
          lineHeight: 1.2,
          whiteSpace: "pre-wrap",
          width: "50%",
          // marginTop: "60px",
        }}
      >
        Setting Up Post Schedules with EventBridge Scheduler
        & CDK
      </div>
      {/* Author name */}
      <div
        style={{
          fontSize: 20,
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: 600,
          color: "white",
          lineHeight: 1.2,
          whiteSpace: "pre-wrap",
          width: "50%",
          // marginTop: "20px",
        }}
      >
        Author name
      </div>
      {/* 
        Credit: 
        <a href="https://storyset.com/event">Event illustrations by Storyset</a>
      */}
    </div>
  );
}

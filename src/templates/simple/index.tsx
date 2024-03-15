import React from "react";

export default function SimpleTemplate() {
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
        justifyContent: "center",
        alignItems: "center",
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
          lineHeight: 1.5,
          whiteSpace: "pre-wrap",
          width: "80%",
          textAlign: "center",
        }}
      >
        Setting Up Post Schedules with EventBridge Scheduler
        & CDK
      </div>
    </div>
  );
}

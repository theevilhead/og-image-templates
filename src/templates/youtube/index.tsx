import React from "react";

export default function YoutubeTemplate() {
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
      <div>
        <h1
          style={{
            backgroundColor: "#fed330",
            padding: "0px 40px",
            borderRadius: "10px",
            marginBottom: "20px",
            fontSize: "75px",
            transform: "rotate(-2deg)",
            fontWeight: "bold",
          }}
        >
          21M views
        </h1>
      </div>
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
        Minim Lorem labore consectetur dolore et aliquip cupidatat culpa voluptate dolore.
      </div>
      <div>
        <h1
          style={{
            backgroundColor: "#26de81",
            padding: "5px 25px",
            borderRadius: "10px",
            marginBottom: "20px",
            transform: "rotate(-2deg)",
          }}
        >
          Amet ex duis et irure id sunt magna.
        </h1>
      </div>
    </div>
  );
}

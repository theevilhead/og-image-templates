import React from "react";

const title = "Very nice Nike shoes - 2022 edition";
const image =
  "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eca7ef50-a733-4ee0-9317-cb6001b7031d/jordan-air-200e-shoes-4JJb1D.png";
const website = "nike.com";
const price = "$49.99";

export default function ProductTemplate() {
  return (
    <div
      style={{
        width: "1200px",
        height: "630px",
        flex: 1,
        flexDirection: "row",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Blog post title */}
        <div>
          <div>{website}</div>
          <div
            style={{
              fontSize: 40,
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 800,
              lineHeight: 1.5,
              whiteSpace: "pre-wrap",
              width: "80%",
            }}
          >
            {title}
          </div>
        </div>
      </div>
      <div>
        <img
          src={image}
          alt={title}
          style={{
            width: "40%",
            height: "auto",
            objectFit: "contain",
            margin: "0 auto",
          }}
        />
      </div>
    </div>
  );
}

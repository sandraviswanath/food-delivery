import React from "react";
import "./Design.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { SiShopify } from "react-icons/si";

function Design() {
  const navigate = useNavigate();
  return (
    <div id="carbag" style={{ display: "flex" }}>
      <div>
        <img src="laptop.png" id="lap1" alt="" />
      </div>
      <div id="intro">
        <h1 id="heading">
          SHOPIO <SiShopify />{" "}
        </h1>
        <p id="para">
          Unleash a world of possibilities through our streamlined shopping app
          –<br /> your go-to destination for the latest in tech and innovation.
        </p>
        <br />
        <Button id="buttonadd3" onClick={() => navigate("/cart")}>
          My Cart
        </Button>
        <Button id="buttonadd3" href="#explore" style={{ marginLeft: 40 }}>
          Explore
        </Button>
      </div>
    </div>
  );
}

export default Design;

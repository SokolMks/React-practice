import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Contact = () => {
  return (
    <div>
      <Modal />
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/alex" className="ui header">
          Alex
        </Link>
        <p>
          Lore helo pelo melo gelo mefsefs efwef e wefwf wef w wef wef wf wef
          wef wf wegergregw r
        </p>
      </div>
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/sam" className="ui header">
          Sam
        </Link>
        <p>
          Lore helo pelo melo gelo mefsefs efwef e wefwf wef w wef wef wf wef
          wef wf wegergregw r
        </p>
      </div>
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/tom" className="ui header">
          Tom
        </Link>
        <p>
          Lore helo pelo melo gelo mefsefs efwef e wefwf wef w wef wef wf wef
          wef wf wegergregw r
        </p>
      </div>
    </div>
  );
};

export default Contact;

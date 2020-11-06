//https://whimsical.com/part-1-6MZ74CQM45k3QaNVNua9eu
import React from "react";
// https://react-icons.github.io/search
import { FaRocket } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { AiFillFire } from "react-icons/ai";
import { GiApothecary, GiBananaBunch } from "react-icons/gi";

import "./style.scss";

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;

export default function App() {
  return (
    <div>
      <Card
        title="Title"
        description={loremIpsum}
        onCancel={() => console.log("onCancel")}
        onConfirm={() => console.log("onConfirm")}
      />
    </div>
  );
}

function Card({ title, description, onCancel, onConfirm }) {
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__header-container">
          <FaRocket />
          <h1 className="card__header-title">{title}</h1>
        </div>
        <RiCloseLine onClick={onCancel} />
      </div>
      <div className="card__body">
        <p>{description}</p>
      </div>
      <div className="card__footer">
        <button
          className="card__button card__button--default"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="card__button card__button--primary"
          onClick={onConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

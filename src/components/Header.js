import React, { useState } from "react";

export default function Header({ currentPage, changePage }) {
  const [toggleHide, setHide] = useState(true);
  return (
    <div>
      <div className="d-flex justify-content-end align-items-center mt-2">
        <h3 className="font-weight-bold">Joseph Landry</h3>
        <img
          src="./menu.png"
          alt="menu"
          style={{
            width: "25px",
            height: "20px",
            cursor: "pointer",
            marginRight: "10px",
            marginLeft: "15px",
          }}
          onClick={() => setHide(!toggleHide)}
        />
      </div>
      <div
        className={`bg-dark ${toggleHide === true ? "hide" : ""}`}
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          zIndex: "2",
        }}
      >
        <ul
          className="list-unstyled d-flex flex-column align-items-center"
          style={{ fontSize: "20px" }}
        >
          <li className="mt-3">
            <a
              href="#Home"
              className={`text-decoration-none text-white ${
                currentPage === "Home" ? "hide" : ""
              }`}
              onClick={() => {
                changePage("Home");
                setHide(true);
              }}
            >
              Home
            </a>
          </li>
          <li className="mt-1">
            <a
              href="#Podcast"
              className={`text-decoration-none text-white ${
                currentPage === "Podcast" ? "hide" : ""
              }`}
              onClick={() => {
                changePage("Podcast");
                setHide(true);
              }}
            >
              Podcast
            </a>
          </li>
          <li className="mt-1">
            <a
              href="#Books"
              className={`text-decoration-none text-white ${
                currentPage === "Books" ? "hide" : ""
              }`}
              onClick={() => {
                changePage("Books");
                setHide(true);
              }}
            >
              Books
            </a>
          </li>
          <li className="mt-1">
            <a
              href="#Contact"
              className={`text-decoration-none text-white ${
                currentPage === "Contact" ? "hide" : ""
              }`}
              onClick={() => {
                changePage("Contact");
                setHide(true);
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

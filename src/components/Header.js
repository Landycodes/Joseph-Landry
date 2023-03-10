import React, { useState } from "react";

export default function Header({ currentPage, changePage }) {
  const [hide, setHide] = useState(true);
  const [slideOrHide, setSlide] = useState("hide");
  if (slideOrHide === "slide-out") {
    setTimeout(() => {
      setSlide("hide");
    }, 500);
  }
  hide === false
    ? (document.documentElement.style.overflowY = "hidden")
    : (document.documentElement.style.overflowY = "visible");
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
          onClick={() => {
            setSlide("slide-out");
            setHide(!hide);
          }}
        />
      </div>
      {/* menu card */}
      <div
        id="menu"
        className={`bg-dark ${hide === true ? slideOrHide : "slide-in"}`}
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          zIndex: "2",
        }}
      >
        <ul
          className="list-unstyled d-flex flex-column align-items-center mt-2"
          style={{ fontSize: "30px" }}
        >
          <li
            className={`mt-3 ${
              slideOrHide === "slide-out" && hide ? "hide" : ""
            }`}
          >
            <a
              href="#Home"
              className={`text-decoration-none text-white border-bottom ${
                currentPage === "Home" ? "hide" : ""
              }`}
              onClick={() => {
                setSlide("slide-out");
                setHide(true);
                changePage("Home");
              }}
            >
              Home
            </a>
          </li>
          <li
            className={`mt-1 ${
              slideOrHide === "slide-out" && hide ? "hide" : ""
            }`}
          >
            <a
              href="#Podcast"
              className={`text-decoration-none text-white border-bottom ${
                currentPage === "Podcast" ? "hide" : ""
              }`}
              onClick={() => {
                changePage("Podcast");
                setSlide("slide-out");
                setHide(true);
              }}
            >
              Podcast
            </a>
          </li>
          <li
            className={`mt-1 ${
              slideOrHide === "slide-out" && hide ? "hide" : ""
            }`}
          >
            <a
              href="#Books"
              className={`text-decoration-none text-white border-bottom ${
                currentPage === "Books" ? "hide" : ""
              }`}
              onClick={() => {
                changePage("Books");
                setSlide("slide-out");
                setHide(true);
              }}
            >
              Books
            </a>
          </li>
          <li
            className={`mt-1 ${
              slideOrHide === "slide-out" && hide ? "hide" : ""
            }`}
          >
            <a
              href="#Contact"
              className={`text-decoration-none text-white border-bottom ${
                currentPage === "Contact" ? "hide" : ""
              }`}
              onClick={() => {
                changePage("Contact");
                setSlide("slide-out");
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

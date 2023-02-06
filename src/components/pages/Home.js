import React, { useState } from "react";

export default function Home() {
  const [info, setInfo] = useState(true);
  const [slideOrHide, setSlide] = useState("hide");
  return (
    // about me pop up
    <div>
      <div className={`${info === true ? slideOrHide : "slide-up"}`} id="popup">
        <div className="d-flex flex-column">
          <div>
            <img
              src="home/close.png"
              alt="close"
              className="float-end m-2"
              onClick={() => {
                setInfo(!info);
                setTimeout(() => {
                  setSlide("hide");
                }, 500);
              }}
              style={{ height: "40px", width: "auto" }}
            />
          </div>
          <div className="m-4">
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac ut
              consequat semper viverra nam. Tristique magna sit amet purus
              gravida quis blandit turpis. Enim lobortis scelerisque fermentum
              dui faucibus. Accumsan sit amet nulla facilisi morbi tempus
              iaculis. Amet mattis vulputate enim nulla aliquet porttitor lacus
              luctus. Nunc eget lorem dolor sed viverra. Viverra tellus in hac
              habitasse. Urna nunc id cursus metus. Commodo sed egestas egestas
              fringilla phasellus faucibus scelerisque. Nam at lectus urna duis
              convallis convallis. Dictum non consectetur a erat nam at lectus
              urna duis. Lobortis scelerisque fermentum dui faucibus in ornare
              quam viverra orci. Pretium quam
            </p>
          </div>
        </div>
      </div>
      {/* button and images*/}

      <div className="d-flex flex-column align-items-center mt-3 mb-5">
        <div
          className="d-flex justify-content-between"
          style={{ width: "320px" }}
        >
          <button
            type="button"
            className="mt-2 mr-5 position-absolute btn btn-dark border border-white"
            onClick={() => {
              setSlide("slide-down");
              setInfo(!info);
            }}
          >
            About me
          </button>
          <img
            src="home/profile.jpg"
            alt="profile"
            style={{
              height: "200px",
              width: "auto",
              marginLeft: "125px",
            }}
            className="mb-3"
          />
        </div>
        <img
          src="home/bookfair.jpg"
          alt="bookfair"
          style={{ height: "250px", width: "auto", marginRight: "120px" }}
        />
        <img
          src="home/podcast.jpeg"
          alt="podcast"
          style={{ height: "250px", width: "auto", marginLeft: "100px" }}
          className="mt-3"
        />
      </div>
    </div>
  );
}

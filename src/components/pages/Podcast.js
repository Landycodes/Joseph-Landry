import React from "react";

export default function Podcast() {
  return (
    <div className="d-flex flex-column align-items-center h-100 mt-4">
      <img
        src="ATP.jpg"
        alt="alien talk podcast"
        style={{
          height: "250px",
          width: "auto",
          borderRadius: "5px",
          boxShadow: "-10px 10px 5px 3px black",
        }}
      ></img>
      <br></br>
      <h4>Listen for free on</h4>
      <ul className="list-unstyled border rounded" style={{ width: "250px" }}>
        <li className="border-bottom p-2">
          <a
            className="text-white text-decoration-none d-flex justify-content-between align-items-end"
            href="https://open.spotify.com/show/0c0jetha1fcPtBuZP1kMH9"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="pod/spotify.png"
              alt="spotify logo"
              style={{ height: "40px", width: "auto", borderRadius: "5px" }}
            />
            <h5>Spotify</h5>
            <div></div>
            <div></div>
          </a>
        </li>
        <li className="border-bottom p-2">
          <a
            className="text-white text-decoration-none d-flex justify-content-between align-items-end"
            href="https://www.audible.com/pd/Podcast/B08JJNZN81"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="pod/audible.png"
              alt="audible logo"
              style={{ height: "40px", width: "auto", borderRadius: "5px" }}
            />
            <h5>Audible</h5>
            <div></div>
            <div></div>
          </a>
        </li>
        <li className="border-bottom p-2">
          <a
            className="text-white text-decoration-none d-flex justify-content-between align-items-end"
            href="https://www.pandora.com/podcast/alien-talk-podcast/PC:75975"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="pod/pandora.png"
              alt="pandora logo"
              style={{ height: "40px", width: "auto", borderRadius: "5px" }}
            />
            <h5>Pandora</h5>
            <div></div>
            <div></div>
          </a>
        </li>
        <li className="border-bottom p-2">
          <a
            className="text-white text-decoration-none d-flex justify-content-between align-items-end"
            href="https://podcasts.apple.com/us/podcast/alien-talk-podcast/id1577035258"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="pod/apple.png"
              alt="Apple logo"
              style={{ height: "40px", width: "auto", borderRadius: "5px" }}
            />
            <h5>Apple Podcast</h5>
            <div></div>
            <div></div>
          </a>
        </li>
        <li className=" p-2">
          <a
            className="text-white text-decoration-none d-flex justify-content-between align-items-end"
            href="https://alientalk.buzzsprout.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="pod/buzzsprout.png"
              alt="buzzsprout logo"
              style={{ height: "40px", width: "auto", borderRadius: "5px" }}
            />
            <h5>Buzzsprout</h5>
            <div></div>
            <div></div>
          </a>
        </li>
      </ul>
      <br></br>
    </div>
  );
}

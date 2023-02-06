import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <form
          className="bg-dark p-3 d-flex flex-column align-items-center m-3 rounded"
          style={{ width: "300px" }}
        >
          <h3 className="text-center">Contact</h3>
          <div className="d-flex flex-column align-items-center">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Enter name"></input>

            <br></br>

            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Enter email"></input>

            <br></br>

            <label htmlFor="msg">Message</label>
            <textarea
              id="msg"
              type="text"
              placeholder="Type a message"
            ></textarea>
          </div>
          <br></br>
          <button type="submit" className="btn btn-light m-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

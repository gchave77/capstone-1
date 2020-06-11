import React from "react";
import img1 from "../images/person_1.jpg";
import img2 from "../images/person_2.jpg";
import img3 from "../images/person_3.jpg";
import img4 from "../images/person_4.jpg";

const Contact = () => {
  return (
    <div>
      <br></br>
      <h1>Drop us a line @ Tiare Travel</h1>
      <br></br>
      <div className="staff">
        <br></br>
        <img src={img1} alt="staff-1" />
        <span>' '</span>
        <img src={img2} alt="staff-2" />
        <span>' '</span>
        <img src={img3} alt="staff-3" />
        <span>' '</span>
        <img src={img4} alt="staff-4" />
      </div>
      <br></br>
    </div>
  );
};

export default Contact;

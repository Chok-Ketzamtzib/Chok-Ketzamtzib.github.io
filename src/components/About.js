import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="seven columns">
            <img
              className="profile-pic"
              src="images/profile-pic.jpg"
              alt="William Here"
            />
          </div>

          <div className="five columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br></br>
                  <span>{resumeData.address}</span>
                  <br></br>
                  <span>
                    <a href="mailto: {resumeData.email}">{resumeData.email}</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

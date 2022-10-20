import React, { Component } from "react";
export default class Music extends Component {
  render() {
    return (
      <div className="nav-links">
        <h2>Music</h2>
        <p id="all-songs" className="highlight">
          All Songs{" "}
          <span className="hidden">
            <i className="fas fa-chevron-right"></i>
          </span>
        </p>
        <p id="artists">
          Artists
          <span className="hidden">
            <i className="fas fa-chevron-right"></i>
          </span>
        </p>
        <p id="albums">
          Albums
          <span className="hidden">
            <i className="fas fa-chevron-right"></i>
          </span>
        </p>
      </div>
    );
  }
}

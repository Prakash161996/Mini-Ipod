import React from "react";
//Component for music controller and the event bounded for it
export default function MusicPlayerController(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 18,
      }}
    >
      <div className="outer-div">
        <div className="nav-options">
          <div id="fbm">
            <p className="menu" onClick={props.menuSelect}>
              MENU
            </p>
            <p className="forward">
              <i className="fas fa-fast-backward"></i>
            </p>
            <p className="backward">
              <i className="fas fa-fast-forward"></i>
            </p>
          </div>
          <p className="play-pause" onClickCapture={props.changeToPlayPause}>
            <div style={{ display: "flex" }}>
              <i className="fas fa-play"></i>
              <i className="fas fa-pause" style={{ paddingLeft: 4 }}></i>
            </div>
          </p>
          <div id="inner-div" onClick={props.optionSelected}></div>
        </div>
      </div>
    </div>
  );
}

import React, { Component } from "react";
import "../styles/screen.css";
import Menu from "./Menu";
import CoverFlow from "./CoverFlow";
import MusicPlayer from "./MusicPlayer";
import Games from "./Games";
import Settings from "./Settings";
import Music from "./Music";
import "../styles/buttonnav.css";
import song from "../audio/Voodoo_192(PagalWorld.com.se).mp3";
import IpodNavButton from "./IpodNavButton";
import Artists from "./Artists";
import Albums from "./Albums";
export default class ButtonNav extends Component {
  constructor(props) {
    super(props);
    this.audio = new Audio(song);
    this.state = {
      menuItem: "",
      timer: 0,
      width: 0,
    };
  }
  //Event for selecting the option from menu
  optionSelected = () => {
    let menuOption =
      document.getElementsByClassName("highlight")[0].textContent;
    this.setState({
      menuItem: menuOption,
    });
  };
  //Event triggered when menu is clicked
  menuSelect = () => {
    if (
      this.state.menuItem.trim() === "All Songs" ||
      this.state.menuItem.trim() === "Artists" ||
      this.state.menuItem.trim() === "Albums"
    ) {
      this.setState({
        menuItem: "Music",
      });
    } else {
      this.setState({
        menuItem: "",
      });
    }
  };
  //Event for pause and play the music and adjust the loader
  changeToPlayPause = () => {
    const play = document.getElementsByClassName("play")[0];
    const pause = document.getElementsByClassName("pause")[0];
    document.getElementsByClassName("loader-progress")[0].style.width =
      this.state.width + "px";
    let timerCount = setInterval(() => {
      let loader = document.getElementsByClassName("loader-progress")[0];
      if (this.audio.paused) {
        if (loader) {
          loader.style.width = this.state.width + "px";
          clearInterval(timerCount);
        }
      } else {
        if (this.state.timer === parseInt(this.audio.duration)) {
          this.setState({
            timer: 0,
            width: 0,
          });
          clearInterval(timerCount);
        } else {
          if (loader) {
            this.setState({
              timer: this.state.timer + 1,
              width: this.state.width + 265 / this.audio.duration,
            });
            loader.style.width = this.state.width + "px";
          } else {
            this.audio.pause();
          }
        }
      }
    }, 1000);
    if (play) {
      this.audio.play();
      let playElement = play.getElementsByTagName("i")[0].classList;
      playElement.remove("fal");
      playElement.remove("fa-play");
      playElement.add("fal");
      playElement.add("fa-pause");
      play.classList.remove("play");
      play.classList.add("pause");
    } else {
      this.audio.pause();
      let pauseElement = pause.getElementsByTagName("i")[0].classList;
      pauseElement.remove("fal");
      pauseElement.remove("fa-pause");
      pauseElement.add("fal");
      pauseElement.add("fa-play");
      pause.classList.remove("pause");
      pause.classList.add("play");
    }
  };
  render() {
    //Checks for the page to be displayed based on option selected from menu
    let menu = this.state.menuItem;
    menu = menu.trim();
    let currentMenu;
    let jsxVal;
    let classValue = "screen";
    if (menu !== "") {
      classValue = "white-background";
    }
    if (menu !== "") {
      classValue = "white-background";
    }
    if (menu === "Cover Flow") {
      jsxVal = <CoverFlow />;
      currentMenu = "CoverFlow";
    } else if (menu === "Music") {
      classValue = "screen";
      currentMenu = "Music";
      jsxVal = <Music />;
    } else if (menu === "Games") {
      jsxVal = <Games />;
      currentMenu = "Games";
    } else if (menu === "Settings") {
      jsxVal = <Settings />;
      currentMenu = "Settings";
    } else if (menu === "All Songs") {
      jsxVal = (
        <MusicPlayer
          timer={this.state.timer}
          fullLength={parseInt(this.audio.duration)}
          width={this.state.width}
        />
      );
      currentMenu = "Music Player";
    } else if (menu === "Artists") {
      jsxVal = <Artists />;
      currentMenu = "Artists";
    } else if (menu === "Albums") {
      jsxVal = <Albums />;
      currentMenu = "Albums";
    } else {
      jsxVal = <Menu />;
      currentMenu = "Menu";
    }
    /*renders the option selected page and button and passing the events as props to be used by other components*/
    return (
      <>
        <div className={classValue}>{jsxVal}</div>
        <IpodNavButton
          menuSelect={this.menuSelect}
          changeToPlayPause={this.changeToPlayPause}
          optionSelected={this.optionSelected}
          currentMenu={currentMenu}
        />
      </>
    );
  }
}

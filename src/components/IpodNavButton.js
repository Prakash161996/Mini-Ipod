import React, { Component } from "react";
import IpodPageController from "./IpodPageController";
import MenuTypeController from "./MenuTypeController";
import MusicPlayerController from "./MusicPlayerController";
export default class IpodNavButton extends Component {
  render() {
    if (
      this.props.currentMenu === "Menu" ||
      this.props.currentMenu === "" ||
      this.props.currentMenu === "Music"
    ) {
      return (
        <MenuTypeController
          menuSelect={this.props.menuSelect}
          changeToPlayPause={this.props.changeToPlayPause}
          optionSelected={this.props.optionSelected}
          currentMenu={this.props.currentMenu}
        />
      );
    } else if (this.props.currentMenu.trim() === "Music Player") {
      return (
        <MusicPlayerController
          menuSelect={this.props.menuSelect}
          changeToPlayPause={this.props.changeToPlayPause}
          currentMenu={this.props.currentMenu}
        />
      );
    } else {
      return (
        <IpodPageController
          menuSelect={this.props.menuSelect}
          currentMenu={this.props.currentMenu}
        />
      );
    }
  }
}

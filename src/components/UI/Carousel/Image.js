import React, { Component } from "react";
import Carousel from "react-material-ui-carousel";

import classes from "./Image.module.scss";

class Image extends Component {
  state = {
    autoPlay: false,
    timer: 500,
    animation: "fade",
    interval: 4000,
    indicators: false,
    navButtonsAlwaysVisible: true,
    timeout: 500,
  };
  render() {
    const imgs = Object.values(this.props.img.img);
    console.log(imgs);
    let list = [];
    imgs.forEach((item, key) => {
      list.push(
        <img src={item} alt={key} key={key} className={classes.carousel_img} />
      );
    });

    return (
      <div>
        <Carousel
          className={classes.carousel}
          timer={this.state.timer}
          animation={this.state.animation}
          indicators={this.state.indicators}
          timeout={this.state.timeout}
          navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
        >
          {list}
        </Carousel>
      </div>
    );
  }
}
export default Image;

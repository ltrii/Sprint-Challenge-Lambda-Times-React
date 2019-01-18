import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carousel: carouselData,
      curTab: 0,
    }
  }
  componentDidMount(){
    this.setState({ carousel: carouselData });
  }

  leftClick = () => {
    if(this.state.curTab === 0) {
      this.setState({ curTab: this.state.carousel.length - 1 });
    } else {
      this.setState({ curTab: this.state.curTab - 1});
    }
  }

  rightClick = () => {
    if(this.state.curTab === this.state.carousel.length - 1) {
      this.setState( { curTab: 0 });
    } else {
      this.setState({ curTab: this.state.curTab + 1});
    }
  }

  selectedImage = () => {
    let current = this.state.curTab;
    return <img src={this.state.carousel[current]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}
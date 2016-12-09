import React, { PropTypes } from 'react';
import Slideshow from './Slideshow.component';

class SlideshowContainer extends React.Component {
  
  constructor(props) {
    super(props);
    this._changeSlide = this._changeSlide.bind(this);
    this._updateTextPosition = this._updateTextPosition.bind(this);
    let slides = this.props.slides.slice();
    this.state = {
      currentSlide: 0,
      slides: slides,
      currentTextPosition: 0
    };
  }
  
  _changeSlide() {
    let currentIndex = this.state.currentSlide;
    if (currentIndex === (this.state.slides.length - 1)) {
      currentIndex = 0;
      this.setState({
        currentSlide: 0,
        slides: (this.state.slides.map(
          (n, i) => Object.assign(n, { visible: (currentIndex === i) })
        ))
      });
    } else {
      currentIndex += 1;
      this.setState({
        currentSlide: this.state.currentSlide + 1,
        slides: (this.state.slides.map(
          (n, i) => Object.assign(n, {
            visible: (currentIndex === i)
          })
        ))
      });
    }
  }
  
  _updateTextPosition() {
    let lastIndex = this.state.slides.length - 1;
    let currentIndex = this.state.currentTextPosition;
    this.setState({ currentTextPosition: (currentIndex === lastIndex) ? 0 : (currentIndex + 1)});
  }
  
  componentDidMount() {
    this._interval = setInterval(() => {
      this._changeSlide();
      this._updateTextPosition();
    }, 3500);
  }
  
  componentWillUnmount() {
    clearInterval(this._interval);
  }
  
  render() {
    return (
      <Slideshow slides={this.state.slides} currentTextPosition={this.state.currentTextPosition}/>
    );
  }
}

SlideshowContainer.propTypes = {
  className: PropTypes.string,
  slides: PropTypes.arrayOf(Object)
};

export default SlideshowContainer;

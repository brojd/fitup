import React, { PropTypes } from 'react';
import Image from '../Image/Image.component';
import classNames from 'classnames';
import styles from './Slideshow.stylesheet.css';

class Slideshow extends React.Component {
  constructor() {
    super();
    this.positions = [
      { top: '20px', left: '-100px' },
      { top: '70px', right: '-100px' },
      { top: '200px', left: '-130px' },
      { top: '120px', left: '10px' }
    ];
  }
  textPosition() {
    return this.positions[this.props.currentTextPosition];
  }
  render() {
    return (
      <div className={classNames(styles.Slideshow, 'uk-width-10-10')}>
        <div className={classNames(styles.slideSection, 'uk-width-4-10 uk-align-center')}>
          {
            this.props.slides.map(
              (slide, i) =>
                <div className={classNames(styles.slide, 'uk-align-center')}
                     key={slide.id}>
                  <Image src={this.props.slides[i].imgSrc}
                         alt={`image ${i}`}
                         width={600}
                         className={this.props.slides[i].visible===true ?
                            classNames('uk-align-center', styles.slide__img, 'fadeIn') :
                            classNames('uk-align-center', styles.slide__img, styles.hide)} />
                  <h2 className={this.props.slides[i].visible===true ?
                        classNames('uk-align-center', styles.slide__text, 'zoomInUp') :
                        classNames('uk-align-center', styles.slide__text, styles.hide)}
                      style={this.textPosition()} >
                    {this.props.slides[i].text}
                  </h2>
                </div>
            )
          }
        </div>
      </div>
    );
  }
}

Slideshow.propTypes = {
  slides: PropTypes.arrayOf(Object),
  currentTextPosition: PropTypes.number
};

export default Slideshow;

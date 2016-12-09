import React, { PropTypes } from 'react';

const Image = (props) => ((
  <img className={props.className}
       src={props.src}
       alt={props.alt}
       height={props.height}
       width={props.width}
       onClick = {props.onClick} />
));

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  className: PropTypes.string,
  onClick: PropTypes.func
};

Image.defaultProps = {
  height: 150,
  width: 150
};

export default Image;

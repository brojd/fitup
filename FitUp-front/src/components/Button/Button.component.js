import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Button = (props) => ((
  <button className={classNames('uk-button', props.className)}
          type={props.type}
          onClick={props.onClick}
          value={props.value}
          disabled={props.disabled}
          autoFocus={props.autoFocus} >
    {props.text}
  </button>
));

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  autoFocus: false
};

export default Button;

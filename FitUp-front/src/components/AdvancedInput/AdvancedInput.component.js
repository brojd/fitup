import React, { PropTypes } from 'react';
import styles from './AdvancedInput.stylesheet.css';
import classNames from 'classnames';
import Select from 'react-select';
import compact from 'lodash/compact';
import uniqBy from 'lodash/uniqBy';

class AdvancedInput extends React.Component {
  constructor() {
    super();
    this._handleChange = this._handleChange.bind(this);
    this._handleFocus = this._handleFocus.bind(this);
    this._handleBlur = this._handleBlur.bind(this);
    this._prepareItems = this._prepareItems.bind(this);
    this.state = {
      textInputFocused: false,
      choices: []
    };
  }
  _handleChange(e) {
    this.setState({
      choices: e
    });
    this.props.onChange(e);
  }
  _handleFocus() {
    this.props.onFocus();
  }
  _handleBlur() {
    this.props.onBlur();
  }
  _prepareItems() {
    let items = this.props.items.map((item) => {
      let fullName;
      if (item.surname) {
        fullName = `${item.name} ${item.surname}`;
      } else {
        fullName = item.name;
      }
      return {
        value: fullName,
        label: fullName
      };
    });
    return compact(uniqBy(items, 'value'));
  }
  render() {
    return (
      <div className={classNames(styles.advancedInputWrapper)}>
        <Select
          value={this.state.choices}
          multi={true}
          placeholder={this.props.placeholder}
          onChange={this._handleChange}
          onFocus={this._handleFocus}
          onBlur={this._handleBlur}
          options={this._prepareItems()}
          className={classNames('uk-width-8-10', styles.advancedInput,
                      {[styles.colorGray]: !this.state.textInputFocused})} />
      </div>
    );
  }
}

AdvancedInput.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  items: PropTypes.array
};

AdvancedInput.defaultProps = {
  items: []
};


export default AdvancedInput;

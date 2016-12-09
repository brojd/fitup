import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './SearchBar.stylesheet.css';
import compact from 'lodash/compact';
import uniqBy from 'lodash/uniqBy';
import Select from 'react-select';
import noop from 'lodash/noop';

class SearchBar extends React.Component {
  constructor() {
    super();
    this._handleChange = this._handleChange.bind(this);
    this._handleBlur = this._handleBlur.bind(this);
    this._handleFocus = this._handleFocus.bind(this);
    this.state = {
      textInputFocused: false,
      chosenItems: ''
    };
  }
  _handleChange(e) {
    this.setState({
      chosenItems: e
    });
    this.props.onChange(e);
  }
  _handleBlur() {
    this.props.onBlur();
  }
  _handleFocus() {
    this.props.onFocus();
    this.setState({textInputFocused: true});
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
        <Select
          value={this.state.chosenItems}
          multi={true}
          autoFocus={this.props.autofocus}
          placeholder={this.props.placeholder}
          onChange={this._handleChange}
          onBlur={this._handleBlur}
          onFocus={this._handleFocus}
          options={this._prepareItems()}
          className={classNames('uk-width-8-10', styles.searchBar__input,
                     {[styles.colorGray]: !this.state.textInputFocused},
                     {'tada': !this.state.textInputFocused})} />
    );
  }
}

SearchBar.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  autofocus: PropTypes.bool,
  items: PropTypes.array
};

SearchBar.defaultProps = {
  onBlur: noop,
  onFocus: noop
};

export default SearchBar;

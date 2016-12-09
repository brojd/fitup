import React, { Component, PropTypes } from 'react';
import Image from '../Image/Image.component';
import GymDetailsTd from '../GymDetailsTd/GymDetailsTd.component';
import styles from './GymsListElem.stylesheet.css';
import classNames from 'classnames';

class GymsListElem extends Component {
  constructor() {
    super();
    this._changePhoto = this._changePhoto.bind(this);
    this.state = {
      currentPhoto: ''
    };
  }
  _changePhoto(url) {
    this.setState({ currentPhoto: url });
  }
  componentDidMount() {
    this.setState({ currentPhoto: this.props.gym.photo_urls[0]});
  }
  
  render() {
    return (
      <table className={classNames('uk-width-10-10 uk-table', styles.gymTable)}>
        <thead>
          <tr>
            <th colSpan={5} className={classNames('uk-text-center', styles.gymTable__mainHeading)}>
              {this.props.gym.name}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={classNames('uk-width-3-10 uk-table-middle', styles.gymTable__td)}>
              <Image className={classNames('uk-thumbnail uk-align-center', styles.currentImg)}
                     alt={'gym logo'}
                     src={this.state.currentPhoto}
                     width={650} />
            </td>
            <GymDetailsTd gym={this.props.gym}/>
            <td className={classNames('uk-width-3-10', styles.gymTable__td)}>
              <h4 className={styles.gymTable__heading}>Description:</h4>
              <p className='uk-text uk-text-break uk-panel uk-panel-box'>
                {this.props.gym.description}
              </p>
            </td>
            <td className={classNames('uk-width-3-10', styles.gymTable__td)}>
              {this.props.gym.photo_urls.map((photoUrl, i) => {
                return (
                  <Image src={photoUrl}
                         alt={`${this.props.gym.name} photo`}
                         key={i}
                         className={classNames('uk-thumbnail uk-float-left', styles.thumbnail)}
                         width={108}
                         onClick={() => this._changePhoto(photoUrl)} />
                );
              })}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

GymsListElem.propTypes = {
  gym: PropTypes.object,
};

export default GymsListElem;

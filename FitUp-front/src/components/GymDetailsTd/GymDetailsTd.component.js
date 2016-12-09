import React, { PropTypes } from 'react';
import styles from './GymDetailsTd.stylesheet.css';
import Image from '../Image/Image.component';
import classNames from 'classnames';

const GymsDetailsTd = (props) => ((
  <td  className={classNames('uk-width-2-10', styles.gymTable__td)}>
    <ul className='uk-list'>
      <h4 className={styles.gymTable__heading}>{props.gym.name}</h4>
      <Image className='uk-float-right uk-width-3-10' src={props.gym.logo_url} alt='gym_logo' />
      <li className='uk-width-4-10 uk-float-left'>{props.gym.address.street} {props.gym.address.number},</li>
      <li className='uk-width-4-10 uk-float-left'>{props.gym.address.city}</li>
      <div className='uk-clearfix'></div>
    </ul>
    <ul className='uk-list'>
      <h4 className={styles.gymTable__heading}>Pricing:</h4>
      <li>
        {props.gym.pricing.map((price) => (
          <div key={price.name}>{price.name}: {price.price} PLN</div>
        ))}
      </li>
    </ul>
    <ul className='uk-list'>
      <h4 className={styles.gymTable__heading}>Cards accepted:</h4>
      <li>
        {props.gym.cards_accepted.map((card, i) => {
          if (card.accepted) {
            return (
              <div className='uk-badge uk-margin-small-right uk-margin-small-bottom uk-width-3-10'
                   key={i}>
                {card.name}
              </div>
            );
          }})
        }
      </li>
    </ul>
  </td>
));

GymsDetailsTd.propTypes = {
  gym: PropTypes.object
};

export default GymsDetailsTd;

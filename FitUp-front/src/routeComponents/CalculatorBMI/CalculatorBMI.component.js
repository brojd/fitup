import React, { Component } from 'react';
import styles from './CalculatorBMI.stylesheet.css';
import classNames from 'classnames';
import checkCategory from './checkCategory';
import Image from '../../components/Image/Image.component';
import bmi_img from './bmi_img.png';

class CalculatorBMI extends Component {
  constructor() {
    super();
    this._handleCalculate = this._handleCalculate.bind(this);
    this._handleWeightChange = this._handleWeightChange.bind(this);
    this._handleHeightChange = this._handleHeightChange.bind(this);
    this.state = {
      resultVisible: false,
      weightValid: true,
      heightValid: true
    };
  }
  _handleWeightChange(e) {
    if (e.target.value < 1) {
      e.target.value = null;
      this.setState({
        weight: e.target.value,
        weightValid: false
      });
    } else {
      this.setState({
        weight: e.target.value,
        weightValid: true
      });
    }
  }
  _handleHeightChange(e) {
    if (e.target.value < 1) {
      e.target.value = null;
      this.setState({
        height: e.target.value,
        heightValid: false
      });
    } else {
      this.setState({
        height: e.target.value,
        heightValid: true
      });
    }
  }
  _handleCalculate(e) {
    e.preventDefault();
    let result = (this.state.weight / (Math.pow(this.state.height / 100, 2))).toFixed(2);
    this.setState({
      result: result,
      resultVisible: true
    });
  }
  render() {
    let weightAlert;
    let heightAlert;
    let resultSection;
    if (this.state.weightValid) {
      weightAlert = null;
    } else {
      weightAlert = <div className={classNames(styles.alert, 'uk-text-center uk-width-8-10 uk-align-center')}>
                      Enter number greater than 0
                    </div>;
    }
    if (this.state.heightValid) {
      heightAlert = null;
    } else {
      heightAlert = <div className={classNames(styles.alert, 'uk-text-center uk-width-8-10 uk-align-center')}>
                      Enter number greater than 0
                    </div>;
    }
    if (!this.state.resultVisible) {
      resultSection = null;
    } else {
      resultSection = <section className={classNames(styles.resultSection,
                                                     'uk-align-center uk-width-6-10 uk-text-center zoomBounceIn')}>
                        <div className={styles.resultSection__line}>
                          Result: <span className={styles.resultSection__result}>{this.state.result}</span>
                        </div>
                        <div className={styles.resultSection__line}>
                          Category: <span className={styles.resultSection__result}>{checkCategory(this.state.result)}</span>
                        </div>
                      </section>;
    }
    return (
      <div>
        <div className={classNames(styles.calcWrapper, 'uk-float-right uk-width-8-10 slideInRightSkew')}>
          <Image src={bmi_img} className={styles.backImg} width={1050}/>
          <section className={classNames(styles.calculator, 'uk-width-6-10')}>
            <div className={classNames(styles.mainHeadingWrapper)}>
              <h2 className={classNames(styles.mainHeading, 'uk-text-center')}>BMI CALCULATOR</h2>
            </div>
            <form>
              <div>
                <h3 className={classNames(styles.inputHeading, 'uk-text-center')}>Enter your weight (kg)</h3>
                <input type='number'
                       onChange={this._handleWeightChange}
                       placeholder='your weight...'
                       className={classNames(styles.input, 'uk-width-4-10 uk-align-center')}/>
                {weightAlert}
              </div>
              <div>
                <h3 className={classNames(styles.inputHeading, 'uk-text-center')}>Enter your height (cm)</h3>
                <input type='number'
                       onChange={this._handleHeightChange}
                       placeholder='your height...'
                       className={classNames(styles.input, 'uk-width-4-10 uk-align-center')} />
                {heightAlert}
              </div>
              <button onClick={this._handleCalculate}
                      className={classNames(styles.calcButton, 'uk-align-center')}>Calculate</button>
            </form>
            {resultSection}
          </section>
        </div>
      </div>
    );
  }
}

export default CalculatorBMI;

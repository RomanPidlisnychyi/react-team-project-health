import React, { Component } from 'react';
import { connect } from 'react-redux';

// import PropTypes from 'prop-types';

import styles from './Home.module.css';

import Button from '../Button/Button';
// import CaloriesForm from "../CaloriesForm/CaloriesForm";
import { userOperations } from '../../redux/users';
import { notrecomendedproductsOperations } from '../../redux/notrecomendedproducts';

// export default function Home() {
//    return <h2 className={styles.titlePage}>Hello from Home public page</h2>
// }

class Home extends Component {
  static propTypes = {
    // height: PropTypes.number.isRequired,
    // age: PropTypes.number.isRequired,
    // currentWeight: PropTypes.number.isRequired,
    // desiredWeight: PropTypes.number.isRequired,
    // bloodGroup: PropTypes.number.isRequired,
  };

  state = {
    height: '',
    age: '',
    currentWeight: '',
    desiredWeight: '',
    bloodGroup: '',
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleRadio = e => {
    const { value } = e.target;
    this.setState({
      bloodGroup: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('thisSubmit.state:', this.state);
    // console.log('thisSubmit.props:', this.props);

    // const {
    //   height,
    //   age,
    //   currentWeight,
    //   desiredWeight,
    //   bloodGroup,
    // } = this.state;

    // const userParams = {
    //   height: height,
    //   age: age,
    //   currentWeight: currentWeight,
    //   desiredWeight: desiredWeight,
    //   bloodGroup: bloodGroup,
    // };

    // console.log('This user params send in a POST request:', userParams);

    const resultNotRecom = this.props.onGetListNotRecomendedProductsAndCalories(
      { ...this.state },
    );
    console.log('resultNotRecom:', resultNotRecom);

    const resultUserParams = this.props.onAddUserParams({ ...this.state });
    // const resultUserParams = this.props.onAddUserParams(userParams);
    console.log('resultUserParams:', resultUserParams);

    // this.handleClearForm(e);
  };

  handleClearForm = e => {
    e.preventDefault();
    this.setState({
      height: '',
      age: '',
      currentWeight: '',
      desiredWeight: '',
      bloodGroup: '',
    });
  };

  render() {
    const {
      height,
      age,
      currentWeight,
      desiredWeight,
      // bloodGroup,
    } = this.state;

    return (
      <div className={styles.wrapper}>
        <h2 className={styles.titleForm}>
          Просчитай свою суточную норму калорий прямо сейчас
        </h2>
        <form className={styles.dailyCaloriesForm} onSubmit={this.handleSubmit}>
          <div className={styles.dailyCaloriesLabelWrapper}>
            <label className={styles.dailyCaloriesLabel}>
              <span className={styles.dailyCaloriesName}>Рост &#42;</span>
              <input
                type="number"
                name="height"
                value={height}
                placeholder="80-220"
                min="80"
                max="220"
                required
                onChange={this.handleInput}
                className={styles.dailyCaloriesInput}
              />
            </label>
            <label className={styles.dailyCaloriesLabel}>
              <span className={styles.dailyCaloriesName}>Возраст &#42;</span>
              <input
                type="number"
                name="age"
                value={age}
                placeholder="14-100"
                min="14"
                max="100"
                required
                onChange={this.handleInput}
                className={styles.dailyCaloriesInput}
              />
            </label>
            <label className={styles.dailyCaloriesLabel}>
              <span className={styles.dailyCaloriesName}>
                Текущий вес &#42;
              </span>
              <input
                type="number"
                name="currentWeight"
                value={currentWeight}
                placeholder="40-260"
                min="40"
                max="260"
                required
                onChange={this.handleInput}
                className={styles.dailyCaloriesInput}
              />
            </label>
            <label className={styles.dailyCaloriesLabel}>
              <span className={styles.dailyCaloriesName}>
                Желаемый вес &#42;
              </span>
              <input
                type="number"
                name="desiredWeight"
                value={desiredWeight}
                placeholder="30-220"
                min="30"
                max="220"
                required
                onChange={this.handleInput}
                className={styles.dailyCaloriesInput}
              />
            </label>
            <label className={styles.dailyCaloriesLabel}>
              <div className={styles.inputRadioWrapper}>
                <span className={styles.dailyCaloriesName}>
                  Группа крови &#42;
                </span>

                <div className={styles.radioGroupWrapper}>
                  <label className={styles.inputRadioLabel}>
                    <input
                      type="radio"
                      name="bloodGroup"
                      value={1}
                      required
                      // checked={}
                      onChange={this.handleRadio}
                      className={styles.inputRadio}
                    />
                    <span className={styles.inputRadioName}>1</span>
                  </label>
                  <label className={styles.inputRadioLabel}>
                    <input
                      type="radio"
                      name="bloodGroup"
                      value={2}
                      required
                      onChange={this.handleRadio}
                      className={styles.inputRadio}
                    />
                    <span className={styles.inputRadioName}>2</span>
                  </label>
                  <label className={styles.inputRadioLabel}>
                    <input
                      type="radio"
                      name="bloodGroup"
                      value={3}
                      required
                      onChange={this.handleRadio}
                      className={styles.inputRadio}
                    />
                    <span className={styles.inputRadioName}>3</span>{' '}
                  </label>
                  <label className={styles.inputRadioLabel}>
                    <input
                      type="radio"
                      name="bloodGroup"
                      value={4}
                      required
                      onChange={this.handleRadio}
                      className={styles.inputRadio}
                    />
                    <span className={styles.inputRadioName}>4</span>
                  </label>
                </div>
              </div>
            </label>
          </div>
          <div className={styles.buttonWrapper}>
            <Button title={'Похудеть'} type="submit"></Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onAddUserParams: userOperations.addUserParams,
  onGetListNotRecomendedProductsAndCalories:
    notrecomendedproductsOperations.getListNotRecomendedProductsAndCalories,
};

export default connect(null, mapDispatchToProps)(Home);

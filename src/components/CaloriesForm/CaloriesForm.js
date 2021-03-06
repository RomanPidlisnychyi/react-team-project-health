import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './CaloriesForm.module.css';

import Button from '../Button/Button';

// const CaloriesForm = ({
class CaloriesForm extends Component {
  static propTypes = {
    height: PropTypes.number,
    age: PropTypes.number,
    currentWeight: PropTypes.number,
    desiredWeight: PropTypes.number,
    bloodGroup: PropTypes.number,
  };

  state = {
    height: '',
    age: '',
    currentWeight: '',
    desiredWeight: '',
    bloodGroup: '',
  };

  // componentDidMount() {
  //   //* fetch
  //   this.props.onFetchTasks();
  // }

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
    // console.log('thisSubmit.state:', this.state);
    console.log('thisSubmit.props:', this.props);

    const {
      height,
      age,
      currentWeight,
      desiredWeight,
      bloodGroup,
    } = this.state;

    const userParams = {
      height: Number(this.state.height),
      age: Number(this.state.age),
      currentWeight: Number(this.state.currentWeight),
      desiredWeight: Number(this.state.desiredWeight),
      bloodGroup: Number(this.state.bloodGroup),
    };

    console.log('This user params send in a POST request:', userParams);

    const { fetchListNotRecomendedProducts, onAddUserParams } = this.props;

    //! notRecomendedProducts
    fetchListNotRecomendedProducts
      .getListNotRecomendedProductsAndCalories(userParams)
      .then(data => {
        if (data) {
          console.log('Success notRecomProduct:', data);
          return;
        }
        console.log('Щось пішло не так! Спробуйте ввести параметри ще раз!');
        this.handleClearForm(e);
      });

    //! userParams
    onAddUserParams(userParams).then(data => {
      console.log('dataUserPar', data);

      if (data) {
        console.log(`Parametrs of user saved successfully: param: ${data}`);
        return;
      }
      console.log('Щось пішло не так! Спробуйте ввести параметри ще раз!');
      this.handleClearForm(e);
    });
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
      bloodGroup,
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
                placeholder="140-210"
                min="140"
                max="210"
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
                placeholder="14-110"
                min="14"
                max="110"
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
                placeholder="40-250"
                min="40"
                max="250"
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
                placeholder="40-250"
                min="40"
                max="250"
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

// const mapStateToProps = state => {};

// const mapDispatchToProps = () => {};

// export default connect(mapStateToProps, mapDispatchToProps)(CaloriesForm);
export default CaloriesForm;

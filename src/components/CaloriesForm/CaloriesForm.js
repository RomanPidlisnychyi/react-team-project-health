import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NewModal from '../Modal/NewModal';
import ModalCalories from '../Modal/ModalCalories';
import styles from './CaloriesForm.module.css';

import { notrecomendedproductsOperations } from '../../redux/notrecomendedproducts';
import { authOperations, authSelectors } from '../../redux/auth';

import Button from '../Button/Button';

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
    showModal: false,
    disabled: true, //* неактивна
    // disabled: false, //* активна
  };

  componentDidMount() {
    const {
      height,
      age,
      currentWeight,
      desiredWeight,
      bloodGroup,
    } = this.props.userParams;

    if (bloodGroup) {
      this.setState({ height, age, currentWeight, desiredWeight, bloodGroup });
    }

    this.onDisable(this.props.userParams);
  }

  componentDidUpdate() {
    const {
      height,
      age,
      currentWeight,
      desiredWeight,
      bloodGroup,
    } = this.props.userParams;

    if (bloodGroup && !this.state.bloodGroup) {
      this.setState({ height, age, currentWeight, desiredWeight, bloodGroup });
    }
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.setState({ disabled: false });
  };

  onModalClose = () => {
    this.setState({ showModal: false });
  };

  handleRadio = e => {
    const { value } = e.target;

    this.setState({
      bloodGroup: Number(value),
      disabled: false,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const userParams = {
      height: Number(this.state.height),
      age: Number(this.state.age),
      currentWeight: Number(this.state.currentWeight),
      desiredWeight: Number(this.state.desiredWeight),
      bloodGroup: Number(this.state.bloodGroup),
    };

    this.onDisable(userParams);

    const {
      onGetListNotRecomendedProductsAndCalories,
      onAddUserParams,
      token,
    } = this.props;

    if (!token) {
      onGetListNotRecomendedProductsAndCalories(userParams).then(data => {
        if (data && data.dailyCalorieNormInteger) {
          this.setState({ showModal: true });
          return;
        }
        console.log('Щось пішло не так! Спробуйте ввести параметри ще раз!');
      });

      return;
    }

    onAddUserParams(userParams).then(data => {
      console.log('dataUserPar', data);

      if (data && data.age) {
        this.setState({ showModal: true });
        return;
      }
      console.log('Щось пішло не так! Спробуйте ввести параметри ще раз!');
      this.handleClearForm(e);
    });
  };

  onDisable = userParams => {
    const {
      height,
      age,
      currentWeight,
      desiredWeight,
      bloodGroup,
    } = this.props.userParams;

    height && age && currentWeight && desiredWeight && bloodGroup
      ? this.setState({ disabled: true })
      : this.setState({ disabled: false });
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
      showModal,
      disabled,
    } = this.state;

    return (
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
              // onkeyup={this.checkParams}
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
            <span className={styles.dailyCaloriesName}>Текущий вес &#42;</span>
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
            <span className={styles.dailyCaloriesName}>Желаемый вес &#42;</span>
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
                    checked={bloodGroup === 1}
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
                    checked={bloodGroup === 2}
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
                    checked={bloodGroup === 3}
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
                    checked={bloodGroup === 4}
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
          <Button title={'Похудеть'} type="submit" disabled={disabled}></Button>
          {showModal && (
            <NewModal onModalClose={this.onModalClose} closeButton={true}>
              <ModalCalories isModal={this.onModalClose} />
            </NewModal>
          )}
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  userParams: authSelectors.getParams(state),
  token: authSelectors.getToken(state),
});

const mapDispatchToProps = {
  onGetListNotRecomendedProductsAndCalories:
    notrecomendedproductsOperations.getListNotRecomendedProductsAndCalories,
  onAddUserParams: authOperations.params,
};

export default connect(mapStateToProps, mapDispatchToProps)(CaloriesForm);

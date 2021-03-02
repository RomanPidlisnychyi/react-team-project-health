import React from 'react';
import styles from './CaloriesForm.module.css';

const CaloriesForm = ({
  height,
  age,
  currentWeight,
  desiredWeight,
  bloodGroup,
}) => {
  return (
    <form className={styles.dailyCaloriesForm} onSubmit={this.handleSubmit}>
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
        <span className={styles.dailyCaloriesName}>Текущий вес &#42;</span>
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
        <span className={styles.dailyCaloriesName}>Желаемый вес &#42;</span>
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
          <span className={styles.dailyCaloriesName}>Группа крови &#42;</span>

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

      {/* <div className={styles.buttonWrapper}>
            <Button title={'Похудеть'} type="submit"></Button>
      </div> */}
    </form>
  );
};

export default CaloriesForm;

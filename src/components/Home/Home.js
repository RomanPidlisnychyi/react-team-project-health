import React, { Component } from "react";
import styles from "./Home.module.css";

import Button from "../Button/Button";

// export default function Home() {
//    return <h2 className={styles.titlePage}>Hello from Home public page</h2>
// }

class Home extends Component {
  state = {};

  handleInput(e) {
    console.log("e:", e);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

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
        {/* <h2 className={styles.titlePage}>Hello from Home public page</h2> */}
        <h2 className={styles.titleForm}>
          Просчитай свою суточную норму калорий прямо сейчас
        </h2>
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
              name="height"
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
              name="height"
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
              name="height"
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
            <div className={styles.dailyCaloriesInputRadioWrapper}>
              <span className={styles.dailyCaloriesName}>
                Группа крови &#42;
              </span>

              <div className={styles.dailyCaloriesRadioGroupWrapper}>
                <input
                  type="radio"
                  name="bloodGroup"
                  value={1}
                  required
                  className={styles.dailyCaloriesInputRadio}
                />
                <span className={styles.dailyCaloriesNameRadio}>1</span>
              {/* </div>
              <div className={styles.dailyCaloriesInputRadioWrapper}> */}
                <input
                  type="radio"
                  name="bloodGroup"
                  value={2}
                  required
                  className={styles.dailyCaloriesInputRadio}
                />
                <span className={styles.dailyCaloriesNameRadio}>2</span>
              {/* </div>
              <div className={styles.dailyCaloriesInputRadioWrapper}> */}
                <input
                  type="radio"
                  name="bloodGroup"
                  value={3}
                  required
                  className={styles.dailyCaloriesInputRadio}
                />
                <span className={styles.dailyCaloriesNameRadio}>3</span>
              {/* </div>
              <div className={styles.dailyCaloriesInputRadioWrapper}> */}
                <input
                  type="radio"
                  name="bloodGroup"
                  value={4}
                  required
                  className={styles.dailyCaloriesInputRadio}
                />
                <span className={styles.dailyCaloriesNameRadio}>4</span>
              </div>
            </div>
          </label>
          {/* <button type="submit" className={styles.dailyCaloriesButton}></button> */}
        </form>
        <Button></Button>
      </div>
    );
  }
}

export default Home;

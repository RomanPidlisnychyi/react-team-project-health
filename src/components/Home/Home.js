import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

// import apiURL from '../../services/apiURL';

import styles from './Home.module.css';

import Button from '../Button/Button';
// import CaloriesForm from "../CaloriesForm/CaloriesForm";
import { authOperations } from '../../redux/auth';
import { modalActions, modalSelectors } from '../../redux/modal/';

// import { notrecomendedproductsOperations } from '../../redux/notrecomendedproducts';
import fetchListNotRecomendedProducts from '../../services/fetchListNotRecomendedProducts';
import Modal from '../Modal/Modal';
import ModalCalories from '../Modal/ModalCalories';

// export default function Home() {
//    return <h2 className={styles.titlePage}>Hello from Home public page</h2>
// }

class Home extends Component {
  // const isModal = useSelector(modalSelectors);

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
    dailyCalorieNormInteger: null,
    listNotProducts: [],
    // listNotRecomendedProductsAndCalories: {},
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

    // const {
    //   height,
    //   age,
    //   currentWeight,
    //   desiredWeight,
    //   bloodGroup,
    // } = this.state;

    const userParams = {
      height: Number(this.state.height),
      age: Number(this.state.age),
      currentWeight: Number(this.state.currentWeight),
      desiredWeight: Number(this.state.desiredWeight),
      bloodGroup: Number(this.state.bloodGroup),
    };

    const {
      // onGetListNotRecomendedProductsAndCalories,
      onAddUserParams,
    } = this.props;

    //! notRecomendedProducts
    // let listNotRecomendedProductsAndCalories = {};
    const listNotRecomendedProductsAndCalories = fetchListNotRecomendedProducts
      // fetchListNotRecomendedProducts
      .getListNotRecomendedProductsAndCalories(userParams)
      // .then(response => response)
      .then(data => {
        if (data) {
          console.log('Success notRecomProduct:', data);

          this.setState({
            ...userParams,
            dailyCalorieNormInteger: data.dailyCalorieNormInteger,
            listNotProducts: data.listNotProducts,
          });

          // console.log('thisFetch.stateAfter:', this.state);

          return;
        }
        console.log('Щось пішло не так! Спробуйте ввести параметри ще раз!');
        this.handleClearForm(e);
      });

    //! userParams
    onAddUserParams(userParams).then(data => {
      // console.log('dataUserPar', data);

      if (data) {
        console.log(`Parametrs of user saved successfully: param: ${data}`);
        return;
      }
      console.log('Щось пішло не так! Спробуйте ввести параметри ще раз!');
      this.handleClearForm(e);
    });

    // console.log('thisSubmit.props:', this.props);
    // console.log('thisSubmit.state:', this.state);

    // console.log(
    //   'listNotRecomendedProductsAndCaloriesOutside:',
    //   listNotRecomendedProductsAndCalories,
    // );
    // const eeee = 200;

    this.showModalCalories();
  };

  componentDidUpdate() {
    this.showModalCalories = () => {
      // this.props.isModal({ isModal: true });
      // this.props.showModal({ showModal: true });
      // this.setState({ showModal: this.state.showModal });
      // this.setState({ showModal: true });

      // console.log('thisShow.props:', this.props);
      // console.log('thisShow.state:', this.state);
    };
  }

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
    // console.log('thisRender.props:', this.props);
    // console.log('thisRender.state:', this.state);

    const {
      height,
      age,
      currentWeight,
      desiredWeight,
      bloodGroup,
      dailyCalorieNormInteger,
      listNotProducts,
    } = this.state;

    const { isModal } = this.props;

    // console.log("isModal:", isModal);

    // console.log('dailyCalorieNormInteger:', dailyCalorieNormInteger);
    // console.log('listNotProducts:', listNotProducts);

    return (
      <>
        <div className={styles.wrapper}>
          <h2 className={styles.titleForm}>
            Просчитай свою суточную норму калорий прямо сейчас
          </h2>
          <form
            className={styles.dailyCaloriesForm}
            onSubmit={this.handleSubmit}
          >
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

        {/* {isModal && (
        <Modal>
          <ModalCalories />
        </Modal>
        )} */}

        {/* <Modal
          // calories={dailyCalorieNormInteger} 
          // listNotRecomendedProducts={listNotProducts}
          showModal={this.showModalCalories}
        >
          <ModalCalories
            calories={dailyCalorieNormInteger}
            listNotRecomendedProducts={listNotProducts}
          ></ModalCalories>
        </Modal> */}
      </>
    );
  }
}

// mapStateToProps =(state)=>{
//   // contacts: contactsSelectors.getVisibleContacts(state),
// }

const mapStateToProps = state => ({
  showModal: state.modal,
});

const mapDispatchToProps = {
  onAddUserParams: authOperations.params,
  isModal: modalActions.offModal,
  // isModal: modalActions.onModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default connect(null, mapDispatchToProps)(Home);

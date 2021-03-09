import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import styles from './Home.module.css';

import Button from '../Button/Button';
import CaloriesForm from '../CaloriesForm/CaloriesForm';

import {
  notrecomendedproductsOperations,
  notrecomendedproductsSelectors,
} from '../../redux/notrecomendedproducts';
import { authOperations } from '../../redux/auth';
import { modalActions, modalSelectors } from '../../redux/modal/';

import Modal from '../Modal/Modal';
import ModalCalories from '../Modal/ModalCalories';

class Home extends Component {
  // static propTypes = {
  //   height: PropTypes.number,
  //   age: PropTypes.number,
  //   currentWeight: PropTypes.number,
  //   desiredWeight: PropTypes.number,
  //   bloodGroup: PropTypes.number,
  // };

  state = {
    //   height: '',
    //   age: '',
    //   currentWeight: '',
    //   desiredWeight: '',
    //   bloodGroup: '',
    showModal: false,
  };

  // //! notRecomendedProducts
  // onGetListNotRecomendedProductsAndCalories(userParams).then(data => {
  //   if (data) {
  //     console.log(
  //       `NotRecomendedProducts of user saved successfully: param: ${data}`,
  //     );
  //     return;
  //   }
  //   console.log('Щось пішло не так! Спробуйте ввести параметри ще раз!');
  //   // this.handleClearForm(e);
  // });

  //! userParams
  // onAddUserParams(userParams).then(data => {
  //   if (data) {
  //     console.log(`Parametrs of user saved successfully: param: ${data}`);
  //     return;
  //   }
  //   console.log('Щось пішло не так! Спробуйте ввести параметри ще раз!');
  //              this.handleClearForm(e);
  // });

  // console.log('thisSubmit.props:', this.props);
  // console.log('thisSubmit.state:', this.state);

  // this.showModalCalories();
  // };

  componentDidUpdate() {
    this.showModalCalories = () => {
      // this.props.isModal({ isModal: true });
      // dispatch(modalActions.onModal())
      // this.props.showModal({ showModal: true });
      // this.setState({ showModal: this.state.showModal });
      // this.setState({ showModal: true });
      // console.log('thisShow.state:', this.state);
      // onClick={() => dispatch(modalActions.onModal())}
    };

    this.handleModal = () => {
      // console.log('thisShow.props:', this.props);
      this.setState({ showModal: !this.state.showModal });
    };
  }

  render() {
    // console.log('thisRender.props:', this.props);
    // console.log('thisRender.state:', this.state);

    const { dailyCalorieNormInteger, listNotProducts, isModal } = this.props;

    return (
      <>
        <div className={styles.wrapper}>
          <h2 className={styles.titleForm}>
            Просчитай свою суточную норму калорий прямо сейчас
          </h2>
          <div className={styles.wrapperForm}>
            <CaloriesForm />
          </div>
        </div>
        {/* {this.state.showModal && (
          <Modal handleModal={this.handleModal}>
            <ModalCalories
              calories={dailyCalorieNormInteger}
              listNotRecomendedProducts={listNotProducts}
            />
          </Modal>
        )} */}
      </>
    );
  }
}

const mapStateToProps = state => ({
  dailyCalorieNormInteger: notrecomendedproductsSelectors.getDailyCalorieNormInteger(
    state,
  ),
  listNotProducts: notrecomendedproductsSelectors.getListNotProducts(state),
});

const mapDispatchToProps = {
  onGetListNotRecomendedProductsAndCalories:
    notrecomendedproductsOperations.getListNotRecomendedProductsAndCalories,
  onAddUserParams: authOperations.params,
  // isModal: modalActions.offModal,
  // isModal: modalActions.onModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

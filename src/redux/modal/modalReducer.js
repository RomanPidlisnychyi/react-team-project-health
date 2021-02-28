import { createReducer } from "@reduxjs/toolkit";
import modalActions from "./modalActions";

const modal = createReducer(false, {
  [modalActions.onModal]: () => true,
  [modalActions.offModal]: () => false,
});

export default modal;

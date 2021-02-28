import { createAction } from "@reduxjs/toolkit";

const onModal = createAction("ON_MODAL");
const offModal = createAction("OFF_MODAL");

export default {
  onModal,
  offModal,
};

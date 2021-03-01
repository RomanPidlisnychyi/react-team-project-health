const getToken = state => state.auth.token.accessToken;
const getObjToken = state => state.auth.token;
const getUserName = state => state.auth.user.name;
const getError = state => state.auth.error;

export default { getToken, getObjToken, getUserName, getError };

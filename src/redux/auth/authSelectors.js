const getToken = state => state.auth.token.accessToken;
const getUserName = state => state.auth.user.name;
const getError = state => state.auth.error;

export default { getToken, getUserName, getError };

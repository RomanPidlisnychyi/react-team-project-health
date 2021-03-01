const getToken = state => state.auth.token.accessToken;
const getUserName = state => state.auth.user.name;

export default { getToken, getUserName };

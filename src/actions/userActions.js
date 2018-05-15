function userLogin() {
  return {
    type: 'USER_LOGIN',
    payload: 'John Doe',
  };
}

function userLogout() {
  return {
    type: 'USER_LOGIN',
    payload: null,
  };
}

export default {
  userLogin,
  userLogout,
};

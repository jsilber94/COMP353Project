export const loginRedux = (role, id) => {
  return {
    type: 'LOGIN',
    role,
    id,
  };
};

export const logoutRedux = () => {
  return {
    type: 'LOGOUT',
  };
};

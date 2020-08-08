export const loginRedux = (role, id, category) => {
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

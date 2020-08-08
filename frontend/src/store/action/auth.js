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

export const userRedux = (isAdmin,id) => {
  return {
    type: 'USER',
    isAdmin,
    id,
  };
};

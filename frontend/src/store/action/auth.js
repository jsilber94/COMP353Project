export const loginRedux = (role, id, category) => {
  return {
    type: 'LOGIN',
    role,
    id,
    category
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

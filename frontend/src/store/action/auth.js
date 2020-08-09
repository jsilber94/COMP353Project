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

export const categoryRedux = (role, id, category) => {
  return {
    type: 'CATEGORY',
    role,
    id,
    category: category
  };
};

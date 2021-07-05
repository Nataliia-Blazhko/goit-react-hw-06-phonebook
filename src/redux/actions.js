export const myAction = {
  type: "MY_ACTION",
  payload: "super payload",
};

export const myAction2 = (value) => {
  return {
    type: "MY_ACTION_2",
    payload: value,
  };
};

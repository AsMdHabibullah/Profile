export default (state = [], action) => {
  switch (action.type) {
    case "ABOUT":
      return action.paylode;
    default:
      return state;
  }
};

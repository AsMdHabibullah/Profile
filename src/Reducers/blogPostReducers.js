export default (state = [], action) => {
  switch (action.type) {
    case "BLOG":
      return action.paylode;
    default:
      return state;
  }
};

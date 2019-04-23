export default (state = [], action) => {
  switch (action.type) {
    case "SOCIAL":
      return action.paylode;
    default:
      return state;
  }
};

export default (state = [], action) => {
  switch (action.type) {
    case "EDUCATION":
      return action.paylode;
    default:
      return state;
  }
};

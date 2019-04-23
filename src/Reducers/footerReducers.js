export default (state = [], action) => {
  switch (action.type) {
    case "FOOTER":
      return action.paylode;
    default:
      return state;
  }
};

export default (state = [], action) => {
  switch (action.type) {
    case "REFERENCE":
      return action.paylode;
    default:
      return state;
  }
};

export default (state = [], action) => {
  switch (action.type) {
    case "CLIENTS":
      return action.paylode;
    default:
      return state;
  }
};

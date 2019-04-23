export default (state = [], action) => {
  switch (action.type) {
    case "EXPERINCE":
      return action.paylode;
    default:
      return state;
  }
};

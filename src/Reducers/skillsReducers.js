export default (state = [], action) => {
  switch (action.type) {
    case "SKILLS":
      return action.paylode;
    default:
      return state;
  }
};

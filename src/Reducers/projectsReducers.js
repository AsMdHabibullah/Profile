export default (state = [], action) => {
  switch (action.type) {
    case "PROJECTS":
      return action.paylode;
    default:
      return state;
  }
};

export default (state = [], action) => {
  switch (action.type) {
    case "TEAM_MEMBER":
      return action.paylode;
    default:
      return state;
  }
};

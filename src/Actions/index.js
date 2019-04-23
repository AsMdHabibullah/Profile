import Apis from "../Apis";

export const aboutActions = () => async dispatch => {
  const response = await Apis.get("about");
  dispatch({ type: "ABOUT", paylode: response.data });
};

export const skillsActions = () => async dispatch => {
  const response = await Apis.get("skills");
  dispatch({ type: "SKILLS", paylode: response.data });
};

export const projectsActions = () => async dispatch => {
  const response = await Apis.get("projects");
  dispatch({ type: "PROJECTS", paylode: response.data });
};

export const clientsActions = () => async dispatch => {
  const response = await Apis.get("clients");
  dispatch({ type: "CLIENTS", paylode: response.data });
};

export const teamMemberActions = () => async dispatch => {
  const response = await Apis.get("team_member");
  dispatch({ type: "TEAM_MEMBER", paylode: response.data });
};

export const socialActions = () => async dispatch => {
  const response = await Apis.get("social");
  dispatch({ type: "SOCIAL", paylode: response.data });
};

export const blogPostActions = () => async dispatch => {
  const response = await Apis.get("blog");
  dispatch({ type: "BLOG", paylode: response.data });
};


export const experinceActions = () => async dispatch => {
  const response = await Apis.get("experiences");
  dispatch({ type: "EXPERINCE", paylode: response.data });
};


export const educationActions = () => async dispatch => {
  const response = await Apis.get("education");
  dispatch({ type: "EDUCATION", paylode: response.data });
};


export const referenceActions = () => async dispatch => {
  const response = await Apis.get("reference");
  dispatch({ type: "REFERENCE", paylode: response.data });
};

export const footerActions = () => async dispatch => {
  const response = await Apis.get("footer");
  dispatch({ type: "FOOTER", paylode: response.data });
};

import { combineReducers } from "redux";
import aboutReducer from "./aboutReducer";
import skillsReducers from "./skillsReducers";
import claientsReducers from "./clientsReducers";
import projectsReducers from "./projectsReducers";
import teamMemberReducers from "./teamMemberReducers";
import socialReducers from "./socialReducers";
import footerReducers from "./footerReducers";
import blogPostReducers from "./blogPostReducers";
import educationReducers from "./educationReducers";
import experinceReducers from "./experinceReducers";
import referenceReducers from "./referenceReducers";

export default combineReducers({
  about: aboutReducer,
  skills: skillsReducers,
  projects: projectsReducers,
  claients: claientsReducers,
  teamMember: teamMemberReducers,
  social: socialReducers,
  blogPost: blogPostReducers,
  experince: experinceReducers,
  education: educationReducers,
  reference: referenceReducers,
  footer: footerReducers
});

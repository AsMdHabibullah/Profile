import React, { Component } from "react";
import { skillsActions } from "../../Actions";
import { connect } from "react-redux";

class CvSkills extends Component {
  componentDidMount() {
    this.props.skillsActions();
  }

  render() {
    if (this.props.skills === false) {
      return (
        <div className="cv-header">
          <h4>
            <i className="fab fa-creative-commons-nd" /> Pro Skills
          </h4>
          <h6>I have only development skill.</h6>
        </div>
      );
    } else {
      return (
        <div className="cv-header">
          <h4>
            <i className="fab fa-creative-commons-nd" /> Pro Skills
          </h4>
          {this.props.skills.map(skill => {
            return (
              <ul className="list">
                <li className="list-item" key={skill.id}>
                  <i class="fas fa-angle-double-right">{skill.skill_name}</i>
                </li>
              </ul>
            );
          })}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { skills: Object.values(state.skills) };
};

export default connect(
  mapStateToProps,
  { skillsActions }
)(CvSkills);

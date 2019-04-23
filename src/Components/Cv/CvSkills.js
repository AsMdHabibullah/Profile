import React, { Component } from "react";
import { skillsActions } from "../../Actions";
import { connect } from "react-redux";

class CvSkills extends Component {
  componentDidMount() {
    this.props.skillsActions();
  }

  renderSkill = () => {
    return this.props.skills.map(skill => {
      return (
        <div className="cv-header">
          <h4>
            <i class="fab fa-creative-commons-nd" /> Pro Skills
          </h4>
          <ul className="list">
            <li className="list-item" key={skill.id}>
              {skill.skill_name}
            </li>
          </ul>
        </div>
      );
    });
  };

  render() {
    return this.renderSkill();
  }
}

const mapStateToProps = state => {
  return { skills: Object.values(state.skills) };
};

export default connect(
  mapStateToProps,
  { skillsActions }
)(CvSkills);

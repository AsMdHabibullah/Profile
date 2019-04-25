import React, { Component } from "react";
import { skillsActions } from "../../Actions";
import { connect } from "react-redux";

class Skills extends Component {
  componentDidMount() {
    this.props.skillsActions()
  }

  renderSkills = () => {
    return (
      <div id="skill">
        <div className="container">
          <div className="project-header p-3">
            <h4>Skills Overview</h4>
          </div>
          <div className="row">
            {this.props.skills.map(skill => {
              return (
                <div className="col-lg-4 col-md-4 col-sm-6" key={skill.id}>
                  <div className="card p-3 mb-2 text-center align-items-center">
                    <h5 className="card-title">{skill.skill_name}</h5>
                    <img
                      className="client_img"
                      src={skill.thumbnail}
                      alt={skill.thumbnail ? "" : ""}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  render() {
    return this.renderSkills();
  }
}

const mapStateToProps = state => {
  return { skills: Object.values(state.skills) };
};

export default connect(
  mapStateToProps,
  { skillsActions }
)(Skills);

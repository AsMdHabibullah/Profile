import React, { Component } from "react";
import { skillsActions } from "../../Actions";
import { connect } from "react-redux";
import Claints from "./Claints";

class Skills extends Component {
  componentDidMount() {
    this.props.skillsActions();
  }

  renderSkill = () => {
    return this.props.skills.map(skill => {
      return (
        <div className="skill">
          <div className="container">
            <div className="row">
              <div className="col-md-6" id="skills">
                <div className="p-3 mb-5 text-center align-items-center">
                  <div className="project-header">
                    <h4>Skills Overview</h4>
                  </div>
                  <div className="row justify-content-start">
                    <div
                      className="col-xl-6 col-md-6 col-sm-12 col-xs-12"
                      key={skill.id}
                    >
                      <div className="card">
                        <h5 className="card-title">{skill.skill_name}</h5>
                        <img
                          className="client_img"
                          src={skill.thumbnail}
                          alt={skill.skill_name}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6" id="clients">
                <Claints />
              </div>
            </div>
          </div>
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
)(Skills);

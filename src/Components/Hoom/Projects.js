import React, { Component } from "react";
import { connect } from "react-redux";
import { projectsActions } from "../../Actions";
import { NavLink } from "react-router-dom";

class Projects extends Component {
  componentDidMount() {
    this.props.projectsActions();
  }

  renderProject = () => {
    return this.props.projects.map(item => {
      return (
        <div className="project">
        <div className="container">
          <div className="p-3 mb-5 text-center align-items-center">
            <div className="project-header">
              <h4>Projects Overview</h4>
            </div>
            <div className="row">
            <div className="col-xl-4 col-md-6 col-sm-12 col-xs-12" key={item.id}>
          <div className="card text-center">
            <NavLink to="/project-details">
              <div className="card-title">
                <h5 className="card-header">{item.title.slice(0, 20)}...</h5>
              </div>
              <div className="card-body">
                <img
                  className="project_img"
                  src={item.thumbnail}
                  alt="Project"
                />
              </div>
            </NavLink>
            <div className="card-footer text-muted">
              Tag: <span>{item.tag_name}</span>
            </div>
          </div>
        </div>
            </div>
          </div>
        </div>
      </div>
      );
    });
  };

  render() {
    return this.renderProject();
  }
}

const mapStateToProps = state => {
  return { projects: Object.values(state.projects) };
};

export default connect(
  mapStateToProps,
  { projectsActions }
)(Projects);

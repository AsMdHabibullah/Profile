import React, { Component } from "react";
import { connect } from "react-redux";
import { projectsActions } from "../../Actions";

class ProjectDetails extends Component {
  componentDidMount() {
    this.props.projectsActions();
  }

  renderProjectDetails = () => {
    return this.props.projects.map(item => {
      return (
        <div className="container">
          <div className="card transparenr blog p-3 mb-5">
            <div className="project-header">
              <h4>Project Details</h4>
            </div>

            <div className="card text-center" key={item.id}>
              <div className="card-title">
                <h5 className="card-header">{item.title}</h5>
              </div>
              <div className="card-body">
                <img
                  className="project_img"
                  src={item.thumbnail}
                  alt="Project"
                />
                <hr />
                <p className="card-text">{item.description}</p>
              </div>
              <h5>{item.ex_title}</h5>
              <hr />
              <div className="card-body">
                <p className="card-text">{item.ex_description}</p>
              </div>
              <div className="card-footer text-muted">
                Developer Name: {item.developer_name}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return this.renderProjectDetails();
  }
}

const mapStateToProps = state => {
  return { projects: Object.values(state.projects) };
};

export default connect(
  mapStateToProps,
  { projectsActions }
)(ProjectDetails);

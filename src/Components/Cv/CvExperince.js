import React, { Component } from "react";
import { connect } from "react-redux";
import { experinceActions } from "../../Actions";

class CvExperince extends Component {
  componentDidMount() {
    this.props.experinceActions();
  }

  renderExperince = () => {
    if (this.props.experince === false) {
      return (
        <div>
          <h4 className="cv_second_header">
            <i class="far fa-dot-circle" />
            Job Experinces
          </h4>
          <h4>I have only Development Skill.</h4>
        </div>
      );
    } else {
      return (
        <div>
          <h4 className="cv_second_header">
            <i class="far fa-dot-circle" />
            Job Experinces
          </h4>
          {this.props.experince.map(item => {
            return (
              <ul>
                <li key={item.id}>
                  <i class="fas fa-angle-double-down" />
                  <h5>
                    {item.job_exp_name} | {item.job_holder_title}
                  </h5>
                  Join date: {item.job_start_time} | Redign date:{" "}
                  {item.job_end_time}
                </li>
                <p>{item.job_description}</p>
              </ul>
            );
          })}
        </div>
      );
    }
  };

  render() {
    return this.renderExperince();
  }
}

const mapStateToProps = state => {
  return { experince: Object.values(state.experince) };
};

export default connect(
  mapStateToProps,
  { experinceActions }
)(CvExperince);

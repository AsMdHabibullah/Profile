import React, { Component } from "react";
import { connect } from "react-redux";
import { experinceActions } from "../../Actions";

class CvExperince extends Component {
  componentDidMount() {
    this.props.experinceActions();
  }

  renderExperince = () => {
    return this.props.experince.map(item => {
      return (
        <div>
          <h4 className="cv_second_header">
            <i class="far fa-dot-circle" />
            Job Experinces
          </h4>
          <ul>
            <li key={item.id}>
              <h5>
                {item.job_exp_name} | {item.job_holder_title}
              </h5>
              Join date: {item.job_start_time} | Redign date:{" "}
              {item.job_end_time}
            </li>
            <p>{item.job_description}</p>
          </ul>
        </div>
      );
    });
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

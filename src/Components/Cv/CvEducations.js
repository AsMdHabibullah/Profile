import React, { Component } from "react";
import { connect } from "react-redux";
import { educationActions } from "../../Actions";

class CvEducations extends Component {
  componentDidMount() {
    this.props.educationActions();
  }

  renderEducation = () => {
    return this.props.education.map(item => {
      return (
        <>
          <h4 className="cv_second_header">
            <i className="far fa-dot-circle" />
            Education
          </h4>
          <ul>
            <li key={item.id}>
              <h5>{item.edu_name}</h5>
              Start time: {item.edu_start_time} | End time: {item.edu_end_time}
            </li>
            <img src={item.edu_cartificate} alt={item.edu_name}/>
            <p>{item.edu_description}</p>
          </ul>
        </>
      );
    });
  };

  render() {
    return this.renderEducation();
  }
}

const mapStateToProps = state => {
  return { education: Object.values(state.education) };
};

export default connect(
  mapStateToProps,
  { educationActions }
)(CvEducations);

import React, { Component } from "react";
import { connect } from "react-redux";
import { referenceActions } from "../../Actions";

class CvReference extends Component {
  componentDidMount() {
    this.props.referenceActions();
  }

  renderReference = () => {
    return this.props.reference.map(item => {
      return (
        <>
          <h4 className="cv_second_header">
            <i className="far fa-dot-circle" />
            References
          </h4>
          <ul>
            <li key={item.id}>
              <h5>
                {item.recommend_person_name} |{" "}
                <span>{item.recommend_person_position}</span>
              </h5>
              <h6>{item.recommend_person_company_name}</h6>
            </li>
            <p>{item.recommend_person_anounce}</p>
          </ul>
        </>
      );
    });
  };

  render() {
    return this.renderReference();
  }
}

const mapStateToProps = state => {
  return { reference: Object.values(state.reference) };
};

export default connect(
  mapStateToProps,
  { referenceActions }
)(CvReference);

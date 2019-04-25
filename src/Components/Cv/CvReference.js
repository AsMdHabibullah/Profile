import React, { Component } from "react";
import { connect } from "react-redux";
import { referenceActions } from "../../Actions";

class CvReference extends Component {
  componentDidMount() {
    this.props.referenceActions();
  }

  renderReference = () => {
    if (this.props.reference === false) {
      return (
        <div>
          <h4 className="cv_second_header">
            <i className="far fa-dot-circle" />
            References
          </h4>
          <h4>I have no referance.</h4>
        </div>
      );
    } else {
      return (
        <div>
          <h4 className="cv_second_header">
            <i className="far fa-dot-circle" />
            References
          </h4>
          {this.props.reference.map(item => {
            return (
              <ul>
                <li key={item.id}>
                  <i class="fas fa-angle-double-down" />
                  <h5>
                    {item.recommend_person_name} |{" "}
                    <span>{item.recommend_person_position}</span>
                  </h5>
                  <h6>{item.recommend_person_company_name}</h6>
                </li>
                <p>{item.recommend_person_anounce}</p>
              </ul>
            );
          })}
        </div>
      );
    }
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

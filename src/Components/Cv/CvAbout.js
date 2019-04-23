import React, { Component } from "react";
import { connect } from "react-redux";
import { aboutActions } from "../../Actions";

class CvAbout extends Component {
  componentDidMount() {
    this.props.aboutActions();
  }

  aboutRender = () => {
    return this.props.about.map(item => {
      return (
        <div className="cv_about">
          <img
            className="rounded-circle"
            src={item.thumbnail}
            alt={item.name}
          />
          <div className="cv-header">
            <h4>
              <i class="fab fa-creative-commons-nd" /> About Me
            </h4>
            <p>{item.description}</p>
          </div>
        </div>
      );
    });
  };

  render() {
    return this.aboutRender();
  }
}

const mapStateToProps = state => {
  return { about: Object.values(state.about) };
};

export default connect(
  mapStateToProps,
  { aboutActions }
)(CvAbout);

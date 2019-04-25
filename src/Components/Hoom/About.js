import React, { Component } from "react";
import { connect } from "react-redux";
import { aboutActions } from "../../Actions";

class About extends Component {
  componentDidMount() {
    this.props.aboutActions();
  }

  aboutRender = () => {
    return this.props.about.map(item => {
      return (
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12" key={item.id}>
              <h4 className="text-center p-3">WELCOME TO</h4>
              <h2 className="text-center">{item.name}</h2>
              <p>{item.description}</p>
            </div>
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
)(About);

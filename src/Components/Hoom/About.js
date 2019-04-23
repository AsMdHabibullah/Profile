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
        <div className="About">
          <div className="container">
            <div className="transparenr p-3 mb-5 text-center align-items-center">
              <div className="row" key={item.id}>
                <div className="col-xl-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="about-text">
                    <h3>WELCOME TO</h3>
                    <h2>{item.name}</h2>
                    <br />
                    <p>{item.description}</p>
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

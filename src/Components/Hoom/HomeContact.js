import React, { Component } from "react";
import { aboutActions } from "../../Actions";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class HomeContact extends Component {
  componentDidMount() {
    this.props.aboutActions();
  }

  renderContact = () => {
    return this.props.about.map(info => {
      return (
        <div className="homeContact">
          <div className="container">
            <div className="p-3 text-center align-items-center" key={info.id}>
              <img
                className="contact-author"
                src={info.thumbnail}
                alt={info.thumbnail? info.name : ''}
              />
              <h2>{info.question}</h2>
              <p>{info.ex_description}</p>

              <NavLink className="btn btn-dark" to="/contact">
                Let's Talk
              </NavLink>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return this.renderContact();
  }
}
const mapStateToProps = state => {
  return { about: Object.values(state.about) };
};

export default connect(
  mapStateToProps,
  { aboutActions }
)(HomeContact);

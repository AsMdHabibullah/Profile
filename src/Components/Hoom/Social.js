import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { socialActions } from "../../Actions";

class Social extends Component {
  componentDidMount() {
    this.props.socialActions();
  }

  renderSocial = () => {
    return this.props.social.map(item => {
      return (
        <div className="social">
          <NavLink className="social_item" to={item.url}>
            <img src={item.social_image} alt={item.social_name} />
          </NavLink>
        </div>
      );
    });
  };

  render() {
    return this.renderSocial();
  }
}

const mapStateToProps = state => {
  return { social: Object.values(state.social) };
};

export default connect(
  mapStateToProps,
  { socialActions }
)(Social);

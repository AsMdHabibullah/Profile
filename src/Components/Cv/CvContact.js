import React, { Component } from "react";
import { connect } from "react-redux";
import { footerActions } from "../../Actions";

class CvContact extends Component {
  componentDidMount() {
    this.props.footerActions();
  }

  renderCvContact = () => {
    return this.props.footer.map(item => {
      return (
        <div className="cv-header">
          <h4>
            <i class="fab fa-creative-commons-nd" /> Contact With Me
          </h4>
          <p>
            <i className="fas fa-home mr-3" />
            {item.home_address}
          </p>
          <p>
            <i className="fas fa-envelope mr-3" />
            {item.email_address}
          </p>
          <p>
            <i className="fas fa-phone mr-3" />
            {item.contact_number}
          </p>
        </div>
      );
    });
  };
  render() {
    return this.renderCvContact();
  }
}

const mapStateToProps = state => {
  return { footer: Object.values(state.footer) };
};

export default connect(
  mapStateToProps,
  { footerActions }
)(CvContact);

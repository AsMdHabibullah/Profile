import React, { Component } from "react";
import { connect } from "react-redux";
import { footerActions } from "../../Actions";

class index extends Component {
  componentDidMount() {
    this.props.footerActions();
  }

  renderFooter = () => {
    return this.props.footer.map(item => {
      return (
        <footer>
          <div
            className="page-footer font-small blue-grey lighten-5"
            key={item.id}
          >
            <div className="p-3 mb-5 text-center align-items-center">
              <div className="container text-center text-md-left mt-5">
                <div className="row mt-3 dark-grey-text">
                  <div className="col-xl-4 col-lg-4 col-md-4 mx-auto mb-4">
                    <h6 className="text-uppercase font-weight-bold">
                      My Dream
                    </h6>
                    <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" />
                    <p>{item.dreame}</p>
                  </div>

                  <div className="col-xl-4 col-lg-4 col-md-4 mx-auto mb-4">
                    <h6 className="text-uppercase font-weight-bold">
                      Focusing
                    </h6>
                    <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" />
                    <p>{item.focusing}</p>
                  </div>

                  <div className="col-xl-4 col-lg-4 col-md-4 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase font-weight-bold">Contact</h6>
                    <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" />
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
                </div>
              </div>
            </div>
            <div className="footer-copyright text-center text-black-50 py-3">
              <h6 className="dark-grey-text">
                &copy;{new Date().getFullYear()} {item.copy_right}
              </h6>
            </div>
          </div>
        </footer>
      );
    });
  };
  render() {
    return this.renderFooter();
  }
}

const mapStateToProps = state => {
  return { footer: Object.values(state.footer) };
};

export default connect(
  mapStateToProps,
  { footerActions }
)(index);

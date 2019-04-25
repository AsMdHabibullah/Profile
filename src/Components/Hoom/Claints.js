import React, { Component } from "react";
import { connect } from "react-redux";
import { clientsActions } from "../../Actions";

class Claints extends Component {
  componentDidMount() {
    this.props.clientsActions();
  }

  renderClients = () => {
    if (this.props.claients === true) {
      return (
        <div className="p-3 text-center align-items-center">
          <div className="project-header">
            <h4>Greate Client's</h4>
          </div>
          <div className="row">
            {this.props.claients.map(client => {
              return (
                <div
                  className="col-xl-4 col-md-4 col-sm-6"
                  key={client.id}
                >
                  <div className="card">
                    <h5 className="card-title">{client.client_name}</h5>
                    <img
                      className="client_img"
                      src={client.client_logo}
                      alt={client.client_logo ? client.client_name : ""}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div className="p-3 text-center align-items-center">
          <div className="project-header">
            <h4>Greate Client's</h4>
          </div>
          <h4>
            I have a project, that is under development. I'll tell you when
            complete this project.
          </h4>
        </div>
      );
    }
  };

  render() {
    return this.renderClients();
  }
}

const mapStateToProps = state => {
  return { claients: Object.values(state.claients) };
};

export default connect(
  mapStateToProps,
  { clientsActions }
)(Claints);

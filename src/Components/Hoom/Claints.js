import React, { Component } from "react";
import { connect } from "react-redux";
import { clientsActions } from "../../Actions";

class Claints extends Component {
  componentDidMount() {
    this.props.clientsActions();
  }

  renderClients = () => {
    return this.props.claients.map(client => {
      return (
        <div className="col-xl-6 col-md-6 col-sm-12 col-xs-12" key={client.id}>
          <div className="card">
            <h5 className="card-title">{client.client_name}</h5>
            <img
              className="client_img"
              src={client.client_logo}
              alt={client.client_name}
            />
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="p-3 text-center align-items-center">
        <div className="project-header">
          <h4>Greate Client's</h4>
        </div>
        <div className="row">{this.renderClients()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { claients: Object.values(state.claients) };
};

export default connect(
  mapStateToProps,
  { clientsActions }
)(Claints);

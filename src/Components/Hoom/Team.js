import React, { Component } from "react";
import { teamMemberActions } from "../../Actions";
import { connect } from "react-redux";

class Team extends Component {
  componentDidMount() {
    this.props.teamMemberActions();
  }

  renderTeamMember = () => {
    return this.props.teamMember.map(teamMember => {
      return (
        <div className="p-3 text-center align-items-center team">
        <div className="container">
          <div className="project-header">
            <h4>Team Members.</h4>
          </div>
          <div className="row">

          <div className="col-md-8 col-center m-auto" key={teamMember.id}>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#myCarousel" data-slide-to="1" />
              <li data-target="#myCarousel" data-slide-to="2" />
            </ol>
            <div className="carousel-inner">
              <div className="item carousel-item active">
                <div className="img-box">
                  <img src={teamMember.dev_img} alt="" />
                </div>
                <p className="testimonial">{teamMember.member_description}</p>
                <p className="overview">
                  <b>{teamMember.dev_name}</b>, {teamMember.dev_title}
                </p>
              </div>
            </div>
            <a
              className="carousel-control left carousel-control-prev"
              href="#myCarousel"
              data-slide="prev"
            >
              <i className="fa fa-angle-left" />
            </a>
            <a
              className="carousel-control right carousel-control-next"
              href="#myCarousel"
              data-slide="next"
            >
              <i className="fa fa-angle-right" />
            </a>
          </div>
        </div>
          </div>
        </div>
      </div>
      );
    });
  };
  render() {
    return this.renderTeamMember();
  }
}
const mapStateToProps = state => {
  return { teamMember: Object.values(state.teamMember) };
};

export default connect(
  mapStateToProps,
  { teamMemberActions }
)(Team);

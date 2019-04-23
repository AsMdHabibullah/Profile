import React, { Component } from "react";
import { connect } from "react-redux";
import { blogPostActions } from "../../Actions";

class PostDetails extends Component {
  componentDidMount() {
    this.props.blogPostActions();
  }

  renderPostDetails = () => {
    return this.props.blogPost.map(post => {
      return (
        <div className="container">
          <div className="card transparenr blog p-3 mb-5">
            <div className="project-header">
              <h1>Post Details</h1>
            </div>
            <div className="card text-center" key={post.id}>
              <div className="card-title">
                <h5 className="card-header">{post.title}</h5>
              </div>
              <div className="card-body">
                <img
                  className="blog_post_detail_img"
                  src={post.thumbnail}
                  alt="Project"
                />
                <hr />
                <p className="card-text">{post.description}</p>
              </div>
              <h5>{post.ex_title}</h5>
              <hr />
              <div className="card-body">
                <p className="card-text">{post.ex_description}</p>
              </div>
              <div className="card-footer text-muted">Author:{post.author}</div>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return this.renderPostDetails();
  }
}

const mapStateToProps = state => {
  return { blogPost: Object.values(state.blogPost) };
};

export default connect(
  mapStateToProps,
  { blogPostActions }
)(PostDetails);

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { blogPostActions } from "../../Actions";

class BlogPost extends Component {
  componentDidMount() {
    this.props.blogPostActions();
  }

  renderBlogPost = () => {
    return this.props.blogPost.map(post => {
      return (
        <div className="container">
          <div className="blog p-3 mb-5 text-center align-items-center">
            <div className="project-header">
              <h1>Blog Post</h1>
            </div>
            <div className="row">
              <div
                className="col-xl-4 col-md-6 col-sm-12 col-xs-12"
                key={post.id}
              >
                <div className="card text-center">
                  <NavLink to="/post-details">
                    <div className="card-title">
                      <h5 className="card-header">
                        {post.title.slice(0, 20)}...
                      </h5>
                    </div>
                    <div className="card-body">
                      <img
                        className="blog_post_img"
                        src={post.thumbnail}
                        alt="Project"
                      />
                    </div>
                  </NavLink>
                  <div className="card-footer text-muted">
                    Author:{post.author}
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
    return this.renderBlogPost();
  }
}

const mapStateToProps = state => {
  return { blogPost: Object.values(state.blogPost) };
};

export default connect(
  mapStateToProps,
  { blogPostActions }
)(BlogPost);

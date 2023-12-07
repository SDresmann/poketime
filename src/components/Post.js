import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deletePost } from '../actions/postActions';

const Post = ({ posts, deletePost }) => {
  const { postId } = useParams();

  // Find the post with the matching postId
  const post = posts.find(post => post.id === postId);

  // Check if the post is found
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container">
      <h2>{post.title}</h2>
      <p>{post.body}</p>


      <button className='btn' style={{backgroundColor: 'red'}} onClick={() => deletePost(post.id)}>Delete Post</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => dispatch(deletePost(id)),
  };
};

const ConnectedPost = connect(mapStateToProps, mapDispatchToProps)(Post);

export default ConnectedPost;
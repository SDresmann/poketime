import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Pokeball from '../pokeball.png';

const Home = ({ posts, navigate }) => {
  const postList = posts.length ? (
    posts.map(post => {
      return (
        <div className="post card" key={post.id}>
          <img src={Pokeball} alt="Pokeball" />
          <div className="card-content">
            <Link to={`/${post.id}`} onClick={() => navigate(`/${post.id}`)}>
              <span className="card-title red-text">{post.title}</span>
            </Link>
            <p>{post.body}</p>
          </div>
        </div>
      );
    })
  ) : (
    <div className="center">No posts to show</div>
  );

  return (
    <div className="container home">
      <h4 className="center">Home</h4>
      {postList}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const connector = connect(mapStateToProps);

export default connector(Home);
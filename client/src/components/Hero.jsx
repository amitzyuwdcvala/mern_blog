import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  return (
    <div
      className="hero-section d-flex align-items-center"
      style={{
        backgroundImage: "url('https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/6010843e4702bd1918217200_6002086f72b727e1b701d3df_blog-image.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh",
        color: "#fff",

      }}
    >
      <div className="container text-center">
        <h1 className="display-4 fw-bold">Welcome to My Blog</h1>
        <p className="lead">
          Discover amazing articles, stories, and insights from around the world.
        </p>
        <a href="/blog" className="btn btn-primary btn-lg">
          Explore Blogs
        </a>
      </div>
    </div>
  );
};

export default Hero;

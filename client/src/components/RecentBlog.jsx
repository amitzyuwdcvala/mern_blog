import React from "react";
import { useNavigate } from "react-router";

const RecentBlog = () => {
    const navigate = useNavigate();

    const handleNavigate = (e) => {
        navigate('/blog/')
    }
  return (
    <>
      <div className="container-fluid p-3 bg-dark" style={{ height: "auto" }}>
        <h2 className="text-center text-white mb-4">Recent Blogs</h2>
        <div className="container">
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src="https://via.placeholder.com/300x200"
                  className="card-img-top"
                  alt="Blog 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Blog Title 1</h5>
                  <p className="card-text">
                    A brief description of the blog post. Discover more by clicking below.
                  </p>
                  <a href="/blog/1" className="btn btn-primary" onClick={handleNavigate}>
                    Read More
                  </a>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentBlog;

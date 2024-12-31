import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { BaseUrl, get } from "../services/endpoint";


const RecentBlog = () => {
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/blog/${id}`);
  };

  const [blogs, setBlogs] = useState([]);

  console.log(blogs);
  const getBlogs = async () => {
    try {
      const response = await get("/api/blog");
      const data = response.data;
      setBlogs(data);
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <div className="container-fluid p-3 bg-dark" style={{ height: "auto" }}>
        <h2 className="text-center text-white mb-5 mt-4">Recent Blogs</h2>
        <div className="container gap-3">
          <div className="row">
            {/* Card 1 */}
            {blogs?.map((blog) => (
              <div key={blog._id} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm hover:shadow-lg transition">
                  <img
                    src={`${BaseUrl}/images/${blog.blog_img}`}
                    className="card-img-top h-48 object-cover"
                    alt={blog.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-truncate">{blog.title}</h5>
                    <p className="card-text flex-grow-1">
                      {blog.content.slice(0, 100)}...
                    </p>
                    <div className="d-flex gap-2 mt-auto">
                      <a
                        className="btn btn-outline-dark btn-sm"
                        onClick={() => handleNavigate(`${blog._id}`)}
                      >
                        Read More
                      </a>
                      {/* <button className="btn btn-outline-danger btn-sm">
                        <i className="far fa-heart"></i>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentBlog;

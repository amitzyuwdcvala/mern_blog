import React, { useEffect, useState } from "react";
import { BaseUrl, get } from "../services/endpoint";
import { useParams } from "react-router";

const Blog = () => {
  const [blog, setBlog] = useState(null); // Initialize as null to differentiate loading state
  const { id } = useParams();

  const SignlePost = async () => {
    try {
      const response = await get(`/api/public/singleblog/${id}`);
      const data = response.data;
      console.log(data);
      setBlog(data.Post);
    } catch (err) {
      console.error("Error fetching blog:", err);
    }
  };

  useEffect(() => {
    SignlePost();
  }, []);

  if (!blog) {
    // Loading state
    return (
      <div className="container text-center mt-5">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <>
      <div className="container bg-dark text-white pt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <h1 className="p-0 m-0">{blog.title}</h1>
            <span>{blog.author}</span>
            <img
              src={`${BaseUrl}/images/${blog.blog_img}`}
              alt=""
              style={{
                backgroundPosition: "center",
                borderRadius: "15px",
                maxHeight: "400px",
                marginTop: "20px",
                objectFit: "cover",
                width: "100%",
                backgroundSize: "cover",
              }}
            />

            <p className="mt-4 fs-5 text-white">
              {blog.content || "No content available for this blog."}
            </p>

            <h3 className="mt-5 mb-3">Leave a Comment</h3>

            <form action="">
              <div className="mb-4">
                <label htmlFor="comment" className="form-label">
                  Comment
                </label>
                <textarea
                  className="form-control"
                  id="comment"
                  rows="4"
                  placeholder="Write your comment here..."
                ></textarea>
                <button className="btn btn-primary mt-3">Submit Comment</button>
              </div>

              <hr />

              <h3>Comments</h3>

              {blog.comments && blog.comments.length > 0 ? (
                blog.comments.map((comment) => (
                  <div
                    key={comment._id}
                    className="bg-secondary p-3 rounded mb-3 d-flex"
                  >
                    <img
                      src={`${BaseUrl}/images/${comment.userId?.profile_img}`}
                      alt="profile_img"
                      style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        marginRight: "15px",
                      }}
                    />
                    <div>
                      <h5 className="mb-1">{comment.userId?.username || "Anonymous"}</h5>
                      <p>{comment.comment}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No comments yet. Be the first to comment!</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

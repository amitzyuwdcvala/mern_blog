import React from "react";

const ProfilePage = () => {
  const user = {
    username: "Amit Vala",
    email: "amitvala@example.com",
    profileImage: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/6010843e4702bd1918217200_6002086f72b727e1b701d3df_blog-image.jpeg",
  };

  const blogs = [
    {
      id: 1,
      title: "Blog Post 1",
      description: "A brief description of Blog Post 1.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      title: "Blog Post 2",
      description: "A brief description of Blog Post 2.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      title: "Blog Post 3",
      description: "A brief description of Blog Post 3.",
      image: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/6010843e4702bd1918217200_6002086f72b727e1b701d3df_blog-image.jpeg",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Profile Details Section */}
        <div className="col-md-4 text-center">
          <img
            src={user.profileImage}
            alt="Profile"
            className="rounded-circle mb-3"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <h3>{user.username}</h3>
          <p>{user.email}</p>
        </div>

        {/* Profile Actions */}
        <div className="col-md-8">
          <div className="mt-3">
            <a href="/edit-profile" className="btn btn-primary me-2">
              Edit Profile
            </a>
            <a href="/logout" className="btn btn-danger">
              Logout
            </a>
          </div>
        </div>
      </div>

      {/* User Blogs Section */}
      <div className="mt-5">
        <h4 className="mb-4">Your Blogs</h4>
        {blogs.map((blog) => (
          <div key={blog.id} className="mb-4">
            <div className="card border-none">
              <img
                src={blog.image}
                className="card-img-top"
                alt={blog.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body bg-secondary rounded">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.description}</p>
                <a href={`/blog/${blog.id}`} className="btn btn-primary">
                  View Post
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;

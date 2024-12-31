import React from 'react'

const Blog = () => {
  return (
    <>
        <div className='container bg-dark text-white pt-5 mb-5'>
            <div className="row">
                <div className="col-md-12">
                    <h1 className='p-0 m-0'>Blog Title</h1>
                    <span>amit@gmail.com</span>
                    <img src="https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/6010843e4702bd1918217200_6002086f72b727e1b701d3df_blog-image.jpeg" alt="" style={{borderRadius: "15px", maxHeight: "400px",marginTop: "20px",  objectFit: "cover", width: "100%", backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"}} />

                    <p className='mt-4 fs-5 text-white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo culpa sequi nesciunt dicta mollitia labore architecto maxime iste explicabo deserunt reprehenderit error quod cum ab autem, similique accusantium veritatis enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo culpa sequi nesciunt dicta mollitia labore architecto maxime iste explicabo deserunt reprehenderit error quod cum ab autem, similique accusantium veritatis enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, placeat sapiente reiciendis quo ab quia eos et vitae voluptates aliquid exercitationem impedit repellendus, officiis, voluptatum commodi quisquam repellat laboriosam laborum? </p>

                    <h3 className='mt-5 mb-3'>Leave a Comment</h3>

                    <form action="">

                        <div className="mb-4">
                            <label htmlFor="comment" className='form-label'>Comment</label>
                            <textarea className="form-control" id="comment" rows="4" placeholder='Write your comment here...'></textarea>
                            <button className='btn btn-primary mt-3'>Submit Comment</button>
                        </div>

                        <hr />

                        <h3>Comments</h3>

                        <div className='bg-secondary p-3 rounded mb-3 d-flex'>
                            <img src="https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/6010843e4702bd1918217200_6002086f72b727e1b701d3df_blog-image.jpeg" alt="profile_img" style={{width: "45px", height: "45px", borderRadius: "50%", objectFit: "cover", marginRight: "15px"}} />

                            <div>
                                <h5 className='mb-1'>Amit vala</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo culpa sequi nesciunt dicta mollitia labore architecto </p>
                            </div>
                        </div>

                        
                        <div className='bg-secondary p-3 rounded mb-3 d-flex'>
                            <img src="https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/6010843e4702bd1918217200_6002086f72b727e1b701d3df_blog-image.jpeg" alt="profile_img" style={{width: "45px", height: "45px", borderRadius: "50%", objectFit: "cover", marginRight: "15px"}} />

                            <div>
                                <h5 className='mb-1'>Amit vala</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo culpa sequi nesciunt dicta mollitia labore architecto </p>
                            </div>
                        </div>

                        
                        <div className='bg-secondary p-3 rounded mb-3 d-flex'>
                            <img src="https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/6010843e4702bd1918217200_6002086f72b727e1b701d3df_blog-image.jpeg" alt="profile_img" style={{width: "45px", height: "45px", borderRadius: "50%", objectFit: "cover", marginRight: "15px"}} />

                            <div>
                                <h5 className='mb-1'>Amit vala</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo culpa sequi nesciunt dicta mollitia labore architecto </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Blog
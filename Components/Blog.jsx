import Link from "next/link";


const Blog = () => {
    
  const blogs =[
    {
      "id": 1,
      "image": "https://themecrazy.net/html/tourest/img/blog/1.png",
      "avater": "https://i.ibb.co/68v3PHm/avater.png",
      "name": "Tom Kaku",
      "title": "A good traveler has no fixed plans and is not intent on arriving."
    },
    {
      "id": 2,
      "image": "https://themecrazy.net/html/tourest/img/blog/2.png",
      "avater": "https://i.ibb.co/68v3PHm/avater.png",
      "name": "Tom Kaku",
      "title": "A good traveler has no fixed plans and is not intent on arriving."
    },
    {
      "id": 3,
      "image": "https://themecrazy.net/html/tourest/img/blog/3.png",
      "avater": "https://i.ibb.co/68v3PHm/avater.png",
      "name": "Tom Kaku",
      "title": "A good traveler has no fixed plans and is not intent on arriving."
    }
  ]

    return (
      <div className="text-black">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <h2 className="text-4xl text-center text-secondary font-bold ">
            Latest News & Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 px-10">
           
            {/* blog-1 */}
            {
                blogs?.map(blog =><div key={blog?.id} className="drop-shadow-lg pb-6  bg-white rounded mx-auto ">
                <div className="">
                  <img
                    className=""
                    src={blog?.image}
                    alt=""
                  />
                </div>
                <div className="px-6 my-6 ">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <div>
                        <img style={{ width: "70px" }} src={blog.avater} alt="" />
                      </div>
                      <small>
                        <span className="font-bold">{blog.name}</span> <br />
                        
                      </small>
                    </div>
                  </div>
                  <h1 className="text-sm text-black font-bold mt-5">
                    {blog.title}
                  </h1>
                </div>
                <div className="flex justify-end items-end ">
                  <p className="text-info font-bold cursor-pointer mr-5">
                    <Link href={`/blog/${blog.id}`}> Read More</Link>
                  </p>
                </div>
              </div>)
            }
            
         
            {/* blog-3 */}
          </div>
        </div>
      </div>
    );
};

export default Blog;
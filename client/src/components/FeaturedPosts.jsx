import { Link } from "react-router-dom";
import Image from "./Image";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";

const fetchPost = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/posts?featured=true&limit=4&sort=newest`
  );
  return res.data;
};

const FeaturedPosts = () => {

  const { isPending, error, data } = useQuery({
    queryKey: ["featuredPosts"],
    queryFn: () => fetchPost(),
  });

  if (isPending) return "loading...";
  if (error) return "Something went wrong!" + error.message;

  const posts = data.posts;
  if (!posts || posts.length === 0) {
    return;
  }

  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {posts[0].img && <Image
          src={posts[0].img}
          className="rounded-3xl object-cover"
          w="895"
        />}

        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <span className="text-blue-800 lg:text-lg">
          {posts[0].category}
          </span>
          <span className="text-gray-500">{format(posts[0].createdAt)}</span>
        </div>

        <Link
          to={posts[0].slug}
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          {posts[0].title}
        </Link>
      </div>

      
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        
        {posts[1] &&<div className="lg:h-1/3 flex justify-between gap-4">
          {posts[1].img &&<div className="w-1/3 aspect-video">
            <Image
              src={posts[1].img}
              className="rounded-3xl object-cover w-full h-full"
              w="298"
            />
          </div>}
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <span className="text-blue-800">
              {posts[1].category}
              </span>
              <span className="text-gray-500">{format(posts[1].createdAt)}</span>
            </div>

            <Link
              to={posts[1].slug}
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              {posts[1].title}              
              </Link>
          </div>
        </div>}

        {/* Post 3 */}
        {posts[2] && <div className="lg:h-1/3 flex justify-between gap-4">
          {posts[2].img && <div className="w-1/3 aspect-video">
            <Image
              src={posts[2].img}
              className="rounded-3xl object-cover w-full h-full"
              w="298"
            />
          </div>}
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">03.</h1>
              <span className="text-blue-800">
                {posts[2].category}
              </span>
              <span className="text-gray-500">{format(posts[2].createdAt)}</span>
            </div>
            <Link
              to={posts[1].slug}
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
            {posts[2].title} 
            </Link>
          </div>
        </div>}

        {/* Post 4 */}
        {posts[3] && <div className="lg:h-1/3 flex justify-between gap-4">
          {posts[3].img &&<div className="w-1/3 aspect-video">
            <Image
              src={posts[3].img}
              className="rounded-3xl object-cover w-full h-full"
              w="298"
            />
          </div>}
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">04.</h1>
              <span className="text-blue-800">
              {posts[3].category}
              </span>
              <span className="text-gray-500">{format(posts[3].createdAt)}</span>
            </div>
            <Link
              to={posts[3].slug}
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
                {posts[3].title}            </Link>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default FeaturedPosts;

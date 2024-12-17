import { Link } from "react-router-dom";
import Image from "./Image";

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <Image
          src="featured1.jpeg"
          className="rounded-3xl object-cover"
          w="895"
        />

        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link to="/category1" className="text-blue-800 lg:text-lg">
            Web Design
          </Link>
          <span className="text-gray-500">2 days ago</span>
        </div>

        <Link
          to="/post1"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          laboriosam.
        </Link>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Post 2 */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="featured3.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              w="298"
            />
          </div>
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link to="/category2" className="text-blue-800">
                Marketing
              </Link>
              <span className="text-gray-500">3 days ago</span>
            </div>
            <Link
              to="/post2"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur.
            </Link>
          </div>
        </div>

        {/* Post 3 */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="featured3.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              w="298"
            />
          </div>
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">03.</h1>
              <Link to="/category3" className="text-blue-800">
                Web Design
              </Link>
              <span className="text-gray-500">5 days ago</span>
            </div>
            <Link
              to="/post3"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur.
            </Link>
          </div>
        </div>

        {/* Post 4 */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="featured1.jpeg"
              className="rounded-3xl object-cover w-full h-full"
              w="298"
            />
          </div>
          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">04.</h1>
              <Link to="/category4" className="text-blue-800">
                Web Design
              </Link>
              <span className="text-gray-500">6 days ago</span>
            </div>
            <Link
              to="/post4"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Placeholder title for the fourth post.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;

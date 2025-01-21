import Image from "../components/Image";
import PostMenuAction from "../components/PostMenuAction";
import Comments from "../components/Comments";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import Search from "../components/Search";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "timeago.js";
import 'react-quill/dist/quill.snow.css';


const fetchPost = async (slug) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
  return res.data;
};

const SinglePostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  });

  if (isPending) return "loading...";
  if (error) return "Something went wrong!" + error.message;
  if (!data) return "Post not found!";

  const handleCategoryChange = (category) => {
    if (searchParams.get("cat") !== category) {
      const newParams = category ? `?cat=${category}` : ""; // Prepare new URL query params
      navigate(`/posts${newParams}`); // Navigate to the PostListPage with updated query params
    }
  };
  

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold bg-[#2C2C54] p-5 rounded-lg text-white hover:bg-[#3B3B78] transition-all duration-500 ease-in-out shadow-md">
            {data.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">{data.user.username}</Link>
            <span>on</span>

            <Link className="text-blue-800">{data.category}</Link>
            <span>{format(data.createdAt)}</span>
          </div>
          <p className="text-white font-medium bg-[#2C2C54] p-6 rounded-lg hover:bg-[#3B3B78] shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out">{data.desc}</p>
        </div>

        {data.img && (
          <div className="hidden lg:block w-2/5">
            <Image src={data.img} w="600" className="rounded-2xl" />
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="prose prose-lg text-gray-800 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 ease-in-out">
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>

        <div className="px-6 py-8 h-max sticky top-8 bg-gradient-to-b from-[#3A3A52] to-[#2C2C54] text-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out">
          <h1 className="mb-4 text-base font-semibold border-b border-gray-600 pb-2">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              {data.user.image && (
                <Image
                  src={data.user.img}
                  className="w-12 h-12 rounded-full object-cover"
                  w="48"
                  h="48"
                />
              )}

              <Link className="text-blue-400 hover:underline">{data.user.username}</Link>
            </div>
          </div>
          {/* <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur</p> */}
          
          <PostMenuAction post={data}/>
          <h1 className="mt-8 mb-4 text-sm font-semibold border-b border-gray-600 pb-2">Categories</h1>
          <div className="flex flex-col gap-3 text-sm">
          <span className="underline cursor-pointer hover:text-blue-400" onClick={()=>handleCategoryChange("")}>All</span>

<span className="underline cursor-pointer hover:text-blue-400" onClick={()=>handleCategoryChange("web-design")}>Web Design</span>

  <span className="underline cursor-pointer hover:text-blue-400" onClick={()=>handleCategoryChange("development")}>Development</span>
  <span className="underline cursor-pointer hover:text-blue-400" onClick={()=>handleCategoryChange("databases")}>Databases</span>
  <span className="underline cursor-pointer hover:text-blue-400" onClick={()=>handleCategoryChange("seo")}>Search Engines</span>
  <span className="underline cursor-pointer hover:text-blue-400" onClick={()=>handleCategoryChange("marketing")}>Marketing</span>
          </div>
          <h1 className="mt-8 mb-4 text-base font-semibold border-b border-gray-600 pb-2">Search</h1>
          <Search />
        </div>
      </div>

      <Comments postId={data._id}/>
    </div>
  );
};

export default SinglePostPage;

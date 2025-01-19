import Comment from "./Comment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";
import axios from "axios";


const fetchComments = async (postId) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/comments/${postId}`);
  return res.data;
};


const Comments = ({postId}) => {

  const {user} = useUser()
  const {getToken}=useAuth()

  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });


  const QueryClient=useQueryClient()

  const mutation = useMutation({
    mutationFn: async (newComment) => {
      const token = await getToken();

      return axios.post(`${import.meta.env.VITE_API_URL}/comments/${postId}`,
        newComment, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      QueryClient.invalidateQueries({queryKey:["comments", postId]})
    },
    onError:()=>{
      toast.error(error.response.data)
    }
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      desc: formData.get("desc"),
    };

    mutation.mutate(data);
  };

  return (
    <div className="flex flex-col gap-8 lg:w-3/5 mb-12">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <form onSubmit={handleSubmit} className="flex items-center justify-between gap-8 w-full">
        <textarea
          name="desc"
          className="w-full rounded-xl"
          placeholder="Write a comment...."
        />
        <button className="bg-blue-800 px-4 py-3 text-white font-medium rounded-xl">
          Send
        </button>
      </form>
      {
      isPending 
      ? "Loading" : 
      error ?
      "Error in loading comments" :
      <>
       {mutation.isPending && (
            <Comment
              comment={{
                desc: `${mutation.variables.desc} (Sending...)`,
                createdAt: new Date(),
                user: {
                  img: user.imageUrl,
                  username: user.username,
                },
              }}
            />
          )}

      {data.map((comment) => (
            <Comment key={comment._id} comment={comment}/>
          ))}
          </>
      }
    </div>
  );
};

export default Comments;

import React from "react";
import Image from "./Image";
import { format } from "timeago.js";
const Comment = ({comment}) => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        {comment.user.img &&< Image
          src={comment.user.img}
          className="w-10 h-10 rounded-full object-cover"
          w="40"
        />}
        <span className="font-semibold">{comment.user.username}</span>
        <span className="text-sm text-gray-500">{format(comment.createdAt)}</span>
        </div>
      <div className="mt-4">
        <p>{comment.desc}</p>
        <span
          className="text-xs text-red-300 hover:text-red-500 cursor-pointer "
          
        >
          delete
        </span>
      </div>
    </div>
  );
};

export default Comment;

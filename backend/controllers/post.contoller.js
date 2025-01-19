import ImageKit from "imagekit";

import Post from "../models/post.model.js"
import User from "../models/user.model.js"

export const getPosts=async (req,res)=>{

  const page=parseInt(req.query.page) || 1
  const limit=parseInt(req.query.limit) || 2


  const posts=await Post.find()
  .populate("user","username")
  .limit(limit).
  skip((page-1)*limit)


  const totalPosts=await Post.countDocuments();

  const hasMore=page*limit<totalPosts;

  res.status(200).json({posts,hasMore})
}

export const getPost=async (req,res)=>{

  

  const post=await Post.findOne({slug:req.params.slug}).populate("user","username img")
  res.status(200).json(post)
}



export const createPost = async (req, res) => {
  const clerkUserId = req.auth?.userId;

  // Log headers for debugging
  console.log("Headers:", req.headers);
  console.log("Clerk User ID:", clerkUserId);

  // Check for authentication
  if (!clerkUserId) {
    console.error("Authentication failed: Missing userId");
    return res.status(401).json({ message: "Not Authenticated: Missing userId" });
  }

  try {
    // Find the user in the database
    const user = await User.findOne({ clerkUserId });
    if (!user) {
      console.error("User not found for clerkUserId:", clerkUserId);
      return res.status(404).json({ message: "User not found" });
    }

    // Validate request body
    if (!req.body.title) {
      return res.status(400).json({ message: "Title is required" });
    }

    // Generate a unique slug
    let slug = req.body.title.replace(/ /g, "-").toLowerCase();
    const similarSlugs = await Post.find({ slug: { $regex: `^${slug}` } });

    if (similarSlugs.length) {
      slug = `${slug}-${similarSlugs.length + 1}`;
    }

    // Create and save the new post
    const newPost = new Post({
      user: user._id,
      slug,
      ...req.body,
    });

    const post = await newPost.save();
    console.log("Post created successfully:", post);

    res.status(200).json(post);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deletePost=async (req,res)=>{
  const clerkUserId = req.auth.userId;

  if (!clerkUserId) {
    return res.status(401).json("Not authenticated!");
  }

  const user =await User.findOne({clerkUserId});
  
  const deletedPost=await Post.findByIdAndDelete({
    _id: req.params.id,
    user:user._id
  });

  if (!deletedPost) {
    return res.status(403).json("You can delete only your posts!");
  }
  
  res.status(200).json("Post has been deleted")
}

const imagekit = new ImageKit({
  urlEndpoint: process.env.IK_URL_ENDPOINT,
  publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_PRIVATE_KEY,
});

export const uploadAuth = async (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
};

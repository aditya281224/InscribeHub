import express from "express"
import connectDB from "./lib/connectDB.js"
import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"
import commentRouter from "./routes/comment.route.js"
import webHookRouter from "./routes/webhook.route.js"

import {clerkMiddleware} from '@clerk/express'

const app = express();
app.use(clerkMiddleware);
app.use("/webhooks",webHookRouter);

app.use(express.json())
app.use("/users",userRouter);
app.use("/posts",postRouter);
app.use("/comments",commentRouter);

app.listen(3000,()=>{
  connectDB();
  console.log("Server is running")
})
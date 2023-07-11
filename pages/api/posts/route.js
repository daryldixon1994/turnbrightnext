// import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Posts from "@/models/Post";
export default async function handler(req, res) {
  //fetch
  try {
    console.log("ok");
    await connect();
    const posts = await Posts.find();
    return res.status(200).json({ status: true, data: posts });
  } catch (error) {
    return new NextResponse(error);
  }
}

import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("Blogs");

  const blogs = await db
    .collection("blogs")
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  return NextResponse.json(blogs);
}

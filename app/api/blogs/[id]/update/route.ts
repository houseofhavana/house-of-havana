import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import cloudinary from "@/lib/cloudinary";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid blog ID" }, { status: 400 });
    }

    const formData = await req.formData();

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const author = formData.get("author") as string;

    const newImage = formData.get("featuredImage") as File | null;
    const newVideo = formData.get("video") as File | null;

    if (!title || !content || !author) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("Blogs");

    /* ---------- Auth Check ---------- */
    const userExists = await db
      .collection("admin_auth")
      .findOne({ _id: new ObjectId(author) });

    if (!userExists) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    /* ---------- Fetch Existing Blog ---------- */
    const existingBlog: any = await db
      .collection("blogs")
      .findOne({ _id: new ObjectId(id) });

    if (!existingBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    let updatedFeaturedMedia = existingBlog.featuredMedia;
    let updatedVideo = existingBlog.video ?? null;

    /* ---------- Replace Featured Image ---------- */
    if (newImage) {
      const imageBuffer = Buffer.from(await newImage.arrayBuffer());

      const imageUpload: any = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              folder: "blogs/images",
              resource_type: "image",
            },
            (err, result) => (err ? reject(err) : resolve(result))
          )
          .end(imageBuffer);
      });

      // delete old image
      if (existingBlog.featuredMedia?.publicId) {
        await cloudinary.uploader.destroy(existingBlog.featuredMedia.publicId, {
          resource_type: "image",
        });
      }

      updatedFeaturedMedia = {
        url: imageUpload.secure_url,
        publicId: imageUpload.public_id,
        type: "image",
      };
    }

    /* ---------- Replace Video ---------- */
    if (newVideo) {
      const videoBuffer = Buffer.from(await newVideo.arrayBuffer());

      const videoUpload: any = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              folder: "blogs/videos",
              resource_type: "video",
            },
            (err, result) => (err ? reject(err) : resolve(result))
          )
          .end(videoBuffer);
      });

      // delete old video
      if (existingBlog.video?.publicId) {
        await cloudinary.uploader.destroy(existingBlog.video.publicId, {
          resource_type: "video",
        });
      }

      updatedVideo = {
        url: videoUpload.secure_url,
        publicId: videoUpload.public_id,
        type: "video",
      };
    }

    /* ---------- Update MongoDB ---------- */
    await db.collection("blogs").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          title,
          content,
          featuredMedia: updatedFeaturedMedia,
          video: updatedVideo,
          updatedAt: new Date(),
        },
      }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update blog" },
      { status: 500 }
    );
  }
}

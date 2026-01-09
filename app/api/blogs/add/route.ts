// import { NextResponse } from "next/server";
// import clientPromise from "@/lib/mongodb";
// import { ObjectId } from "mongodb";
// import cloudinary from "@/lib/cloudinary";

// export async function POST(req: Request) {
//   const formData = await req.formData();

//   const title = formData.get("title") as string;
//   const content = formData.get("content") as string;
//   const author = formData.get("author") as string;
//   const mediaFile = formData.get("featuredImage") as File;

//   if (!mediaFile) {
//     return NextResponse.json(
//       { error: "Featured image or video required" },
//       { status: 400 }
//     );
//   }

//   const client = await clientPromise;
//   const db = client.db("Blogs");

//   const userExists = await db
//     .collection("admin_auth")
//     .findOne({ _id: new ObjectId(author) });

//   if (!userExists) {
//     return NextResponse.json(
//       { error: "Unauthorized: User not found" },
//       { status: 401 }
//     );
//   }

//   const isVideo = mediaFile.type.startsWith("video");
//   const resourceType = isVideo ? "video" : "image";

//   const buffer = Buffer.from(await mediaFile.arrayBuffer());

//   let uploadResult: any;

//   try {
//     uploadResult = await new Promise((resolve, reject) => {
//       cloudinary.uploader
//         .upload_stream(
//           {
//             folder: "blogs",
//             resource_type: resourceType,
//           },
//           (error, result) => {
//             if (error) reject(error);
//             resolve(result);
//           }
//         )
//         .end(buffer);
//     });

//     const newBlog = {
//       title,
//       content,
//       author: new ObjectId(author),
//       featuredMedia: {
//         url: uploadResult.secure_url,
//         publicId: uploadResult.public_id,
//         type: resourceType,
//       },
//       createdAt: new Date(),
//     };

//     await db.collection("blogs").insertOne(newBlog);

//     return NextResponse.json(newBlog, { status: 201 });
//   } catch (err) {
//     if (uploadResult?.public_id) {
//       await cloudinary.uploader.destroy(uploadResult.public_id, {
//         resource_type: resourceType,
//       });
//     }

//     return NextResponse.json(
//       { error: "Failed to create blog" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import cloudinary from "@/lib/cloudinary";

export async function POST(req: Request) {
  const formData = await req.formData();

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const author = formData.get("author") as string;

  const imageFile = formData.get("featuredImage") as File | null;
  const videoFile = formData.get("video") as File | null;

  if (!title || !content || !author) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  if (!imageFile) {
    return NextResponse.json(
      { error: "Featured image is required" },
      { status: 400 }
    );
  }

  const client = await clientPromise;
  const db = client.db("Blogs");

  const userExists = await db
    .collection("admin_auth")
    .findOne({ _id: new ObjectId(author) });

  if (!userExists) {
    return NextResponse.json(
      { error: "Unauthorized: User not found" },
      { status: 401 }
    );
  }

  let imageUpload: any = null;
  let videoUpload: any = null;

  try {
    /* ---------- Upload Featured Image ---------- */
    const imageBuffer = Buffer.from(await imageFile.arrayBuffer());

    imageUpload = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "blogs/images",
            resource_type: "image",
          },
          (error, result) => (error ? reject(error) : resolve(result))
        )
        .end(imageBuffer);
    });

    /* ---------- Upload Optional Video ---------- */
    if (videoFile) {
      const videoBuffer = Buffer.from(await videoFile.arrayBuffer());

      videoUpload = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              folder: "blogs/videos",
              resource_type: "video",
            },
            (error, result) => (error ? reject(error) : resolve(result))
          )
          .end(videoBuffer);
      });
    }

    /* ---------- Create Blog Document ---------- */
    const newBlog = {
      title,
      content,
      author: new ObjectId(author),
      createdAt: new Date(),
      featuredMedia: {
        url: imageUpload.secure_url,
        publicId: imageUpload.public_id,
        type: "image",
      },
      video: videoUpload
        ? {
            url: videoUpload.secure_url,
            publicId: videoUpload.public_id,
            type: "video",
          }
        : null,
    };

    await db.collection("blogs").insertOne(newBlog);

    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    /* ---------- Cleanup on Failure ---------- */
    if (imageUpload?.public_id) {
      await cloudinary.uploader.destroy(imageUpload.public_id, {
        resource_type: "image",
      });
    }

    if (videoUpload?.public_id) {
      await cloudinary.uploader.destroy(videoUpload.public_id, {
        resource_type: "video",
      });
    }

    console.error(error);
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 }
    );
  }
}

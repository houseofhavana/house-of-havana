// import { NextResponse } from "next/server";
// import { ObjectId, WithId, Document } from "mongodb";
// import clientPromise from "@/lib/mongodb";

// interface Blog {
//   title: string;
//   content: string;
//   author: string;
//   createdAt: Date;
//   featuredMedia?: {
//     url: string;
//     publicId: string;
//     type: "image" | "video";
//   };
// }

// export async function GET(
//   req: Request,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   try {
//     const { id } = await params;
//     const client = await clientPromise;
//     const db = client.db("Blogs");

//     const doc: WithId<Document> | null = await db
//       .collection("blogs")
//       .findOne({ _id: new ObjectId(id) });

//     if (!doc) {
//       return NextResponse.json({ error: "Blog not found" }, { status: 404 });
//     }

//     if (!doc.title || !doc.content || !doc.author || !doc.createdAt) {
//       return NextResponse.json(
//         { error: "Invalid blog format" },
//         { status: 500 }
//       );
//     }

//     const blog: WithId<Blog> = {
//       _id: doc._id,
//       title: String(doc.title),
//       content: String(doc.content),
//       author: String(doc.author),
//       featuredMedia: doc.featuredMedia
//         ? {
//             url: String(doc.featuredMedia.url),
//             publicId: String(doc.featuredMedia.publicId),
//             type: doc.featuredMedia.type === "video" ? "video" : "image",
//           }
//         : undefined,
//       createdAt: new Date(doc.createdAt),
//     };

//     return NextResponse.json(blog);
//   } catch (err) {
//     return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
//   }
// }

import { NextResponse } from "next/server";
import { ObjectId, WithId, Document } from "mongodb";
import clientPromise from "@/lib/mongodb";

interface Blog {
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  featuredMedia: {
    url: string;
    publicId: string;
    type: "image";
  };
  video?: {
    url: string;
    publicId: string;
    type: "video";
  } | null;
}

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid blog ID" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("Blogs");

    const doc: WithId<Document> | null = await db
      .collection("blogs")
      .findOne({ _id: new ObjectId(id) });

    if (!doc) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    const blog: WithId<Blog> = {
      _id: doc._id,
      title: String(doc.title),
      content: String(doc.content),
      author: String(doc.author),
      createdAt: new Date(doc.createdAt),

      featuredMedia: {
        url: String(doc.featuredMedia?.url),
        publicId: String(doc.featuredMedia?.publicId),
        type: "image",
      },

      video: doc.video
        ? {
            url: String(doc.video.url),
            publicId: String(doc.video.publicId),
            type: "video",
          }
        : null,
    };

    return NextResponse.json(blog);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}

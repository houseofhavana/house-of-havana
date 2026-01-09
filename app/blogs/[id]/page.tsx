import { Suspense } from "react";
import Blog from "./Blog";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://www.houseofhavana.ca"
      : "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/blogs/${id}`, { cache: "no-store" });

  if (!res.ok) {
    console.error(await res.text());
    throw new Error(`Failed to fetch blog: ${res.status}`);
  }

  const data = await res.json();

  return (
    <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
      <Blog blogData={data} />
    </Suspense>
  );
};

export default Page;

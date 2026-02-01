"use client";

import Button from "@/components/ui/button";
import { $generateHtmlFromNodes, $generateNodesFromDOM } from "@lexical/html";
import { LinkNode, TOGGLE_LINK_COMMAND } from "@lexical/link";
import { ListItemNode, ListNode } from "@lexical/list";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { $createHeadingNode, $createQuoteNode, HeadingNode, QuoteNode } from "@lexical/rich-text";
import { $setBlocksType } from "@lexical/selection";
import {
  $createParagraphNode,
  $getRoot,
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
} from "lexical";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
  featuredMedia?: {
    url: string;
    publicId: string;
    type: "image" | "video";
  };
  createdAt: string;
}

type HeadingTagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const theme = {
  paragraph: "editor-paragraph",
  quote: "editor-quote",
  heading: {
    h1: "editor-h1",
    h2: "editor-h2",
    h3: "editor-h3",
    h4: "editor-h4",
    h5: "editor-h5",
    h6: "editor-h6",
  },
  list: {
    nested: {
      listitem: "editor-nested-listitem",
    },
    ul: "editor-ul",
    ol: "editor-ol",
    listitem: "editor-li",
    listitemChecked: "editor-listItemChecked",
    listitemUnchecked: "editor-listItemUnchecked",
  },
  hashtag: "editor-hashtag",
  image: "editor-image",
  link: "editor-link",
  text: {
    bold: "editor-bold",
    italic: "editor-italic",
    underline: "editor-underline",
    code: "editor-code",
    strikethrough: "editor-textStrikethrough",
    subscript: "editor-textSubscript",
    superscript: "editor-textSuperscript",
    underlineStrikethrough: "editor-textUnderlineStrikethrough",
  },
};

function onError(error: Error) {
  console.error(error);
}

function Toolbar({ editor }: { editor: any }) {
  const [editorMedia, setEditorMedia] = useState<
    {
      id: string;
      file: File;
      type: "image" | "video";
      blobUrl: string;
    }[]
  >([]);

  return (
    <div className="editor-toolbar">
      <select
        defaultValue="paragraph"
        onChange={(e) =>
          editor.update(() => {
            const value = e.target.value;
            const headings: HeadingTagType[] = [
              "h1",
              "h2",
              "h3",
              "h4",
              "h5",
              "h6",
            ];
            const selection = $getSelection();
            if (!$isRangeSelection(selection)) return;

            if (headings.includes(value as HeadingTagType)) {
              $setBlocksType(selection, () =>
                $createHeadingNode(value as HeadingTagType)
              );
            } else if (value === "paragraph") {
              $setBlocksType(selection, () => $createParagraphNode());
            } else if (value === "quote") {
              $setBlocksType(selection, () => $createQuoteNode());
            }
          })
        }
      >
        <option value="paragraph">Paragraph</option>
        <option value="h1">Heading 1</option>
        <option value="h2">Heading 2</option>
        <option value="h3">Heading 3</option>
        <option value="h4">Heading 4</option>
        <option value="h5">Heading 5</option>
        <option value="h6">Heading 6</option>
        <option value="quote">Quote</option>
      </select>

      <button
        type="button"
        title="Bold (Ctrl+B)"
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")}
        onMouseDown={(e) => e.preventDefault()}
      >
        B
      </button>
      <button
        type="button"
        title="Italic (Ctrl+I)"
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")}
        onMouseDown={(e) => e.preventDefault()}
      >
        I
      </button>
      <button
        type="button"
        title="Underline (Ctrl+U)"
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline")}
        onMouseDown={(e) => e.preventDefault()}
      >
        U
      </button>

      <button
        type="button"
        onClick={() => {
          const url = prompt("Enter URL with https://");
          if (url !== null) {
            editor.update(() => {
              editor.dispatchCommand(TOGGLE_LINK_COMMAND, url.trim() || null);
            });
            editor.focus();
          }
        }}
      >
        🔗
      </button>

      {/* <button
        type="button"
        onClick={() => {
          const fileInput = document.createElement("input");
          fileInput.type = "file";
          fileInput.accept = "image/*,video/*";

          fileInput.onchange = () => {
            const file = fileInput.files?.[0];
            if (!file) return;

            if (file.size > 100 * 1024 * 1024) {
              alert("File must be under 100MB");
              return;
            }

            const id =
              typeof crypto !== "undefined" && crypto.randomUUID
                ? crypto.randomUUID()
                : Date.now().toString();

            const blobUrl = URL.createObjectURL(file);

            setEditorMedia((prev) => [
              ...prev,
              {
                id,
                file,
                type: file.type.startsWith("video") ? "video" : "image",
                blobUrl,
              },
            ]);

            editor.update(() => {
              const root = $getRoot();

              const html = file.type.startsWith("video")
                ? `<video src="${blobUrl}" controls data-media-id="${id}"></video>`
                : `<img src="${blobUrl}" data-media-id="${id}" />`;

              const parser = new DOMParser();
              const dom = parser.parseFromString(html, "text/html");

              const nodes = $generateNodesFromDOM(editor, dom);
              nodes.forEach((node) => root.append(node));
            });
          };

          fileInput.click();
        }}
      >
        📎
      </button> */}
    </div>
  );
}

function EditorWrapper({ setEditorInstance }: { setEditorInstance: any }) {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    setEditorInstance(editor);
  }, [editor]);
  return null;
}

export default function BlogsPage() {
  const { data: session } = useSession();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [title, setTitle] = useState("");
  const [editorInstance, setEditorInstance] = useState<any>(null);
  const [featuredImage, setFeaturedImage] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const featuredImageInputRef = useRef<HTMLInputElement | null>(null);
  const featuredVideInputRef = useRef<HTMLInputElement | null>(null);

  const router = useRouter();

  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
    nodes: [HeadingNode, QuoteNode, ListNode, ListItemNode, LinkNode],
  };

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleFeaturedImage = (file: File) => {
    if (file.size > 10 * 1024 * 1024) return alert("Image must be under 10MB");
    setFeaturedImage(file);
  };

  const handleVideoUpload = (file: File) => {
    if (!file.type.startsWith("video/"))
      return alert("Only video files allowed");
    if (file.size > 100 * 1024 * 1024)
      return alert("Video must be under 100MB");
    setVideoFile(file);
  };

  const resetEditor = () => {
    setTitle("");
    setFeaturedImage(null);
    if (featuredImageInputRef.current) {
      featuredImageInputRef.current.value = "";
    }
    if (featuredVideInputRef.current) {
      featuredVideInputRef.current.value = "";
    }
    setVideoFile(null);
    if (editorInstance) {
      editorInstance.update(() => {
        $getRoot().clear();
      });
    }
  };

  const handleAddOrUpdateBlog = async (blogId?: string) => {
    if (!session || session.user?.role !== "superadmin")
      return alert("Unauthorized");
    if (!editorInstance) return alert("Editor not ready");

    let htmlContent = "";
    editorInstance.update(() => {
      htmlContent = $generateHtmlFromNodes(editorInstance);
    });

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", htmlContent);
    formData.append("author", session.user.id);
    if (featuredImage) formData.append("featuredImage", featuredImage);
    if (videoFile) formData.append("video", videoFile);

    const url = blogId ? `/api/blogs/update/${blogId}` : "/api/blogs/add";
    const method = blogId ? "PUT" : "POST";

    const res = await fetch(url, { method, body: formData });

    if (res.ok) {
      const newBlog = await res.json();
      if (blogId) {
        setBlogs((prev) => prev.map((b) => (b._id === blogId ? newBlog : b)));
      } else {
        setBlogs([newBlog, ...blogs]);
      }
      resetEditor();
    } else {
      alert("Error saving blog");
    }
  };

  const handleDelete = async (blogId: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    const res = await fetch(`/api/blogs/${blogId}/delete/`, {
      method: "DELETE",
    });
    if (res.ok) {
      setBlogs((prev) => prev.filter((b) => b._id !== blogId));
    } else {
      alert("Error deleting blog");
    }
  };

  return (
    <section className="pt-40">
      <div className="container mb-20">
        {session?.user?.role === "superadmin" && (
          <form
            className="flex flex-col gap-4 mb-8 p-8 bg-surface border border-foreground/5 "
            onSubmit={(e) => {
              e.preventDefault();
              handleAddOrUpdateBlog();
            }}
          >
            <div className="flex justify-between items-center">
              <h2>Add / Edit Blog</h2>
              {session && (
                <button
                  type="button"
                  onClick={() => signOut()}
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "#ff4d4f",
                    color: "#fff",
                    border: "none",
                    borderRadius: 5,
                    cursor: "pointer",
                  }}
                >
                  Logout
                </button>
              )}
            </div>
            <input
              className="bg-background h-12 p-2 border border-foreground/10"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <label className="relative flex justify-center items-center w-80 h-80 border-2 border-dashed rounded-xl cursor-pointer transition overflow-hidden group bg-background hover:border-secondary mb-6">
              <input
                ref={featuredImageInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFeaturedImage(file);
                }}
              />

              {!featuredImage && (
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>

                  <span className="text-sm font-medium">
                    Add featured image
                  </span>

                  <span className="text-xs opacity-70">
                    JPG, PNG (max 10MB)
                  </span>
                </div>
              )}

              {featuredImage && (
                <>
                  <img
                    src={URL.createObjectURL(featuredImage)}
                    alt="Featured Preview"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      Change image
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setFeaturedImage(null);
                      if (featuredImageInputRef.current) {
                        featuredImageInputRef.current.value = "";
                      }
                    }}
                    className="cursor-pointer absolute top-2 right-2 bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm hover:bg-black/80"
                  >
                    ✕
                  </button>
                </>
              )}
            </label>

            <LexicalComposer initialConfig={initialConfig}>
              <Toolbar editor={editorInstance} />
              <RichTextPlugin
                contentEditable={<ContentEditable className="editor-input" />}
                placeholder={
                  <div className="editor-placeholder">Write something…</div>
                }
                ErrorBoundary={LexicalErrorBoundary}
              />
              <HistoryPlugin />
              <AutoFocusPlugin />
              <LinkPlugin />
              <EditorWrapper setEditorInstance={setEditorInstance} />
            </LexicalComposer>

            <div className="mt-6">
              <label className="block mb-2 font-medium text-sm">
                Optional Video
              </label>

              <label className="relative flex justify-center items-center w-full max-w-md h-56 border-2 border-dashed rounded-xl cursor-pointer transition overflow-hidden group bg-background hover:border-secondary">
                <input
                  ref={featuredVideInputRef}
                  type="file"
                  accept="video/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleVideoUpload(file);
                  }}
                />

                {!videoFile && (
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="4" />
                      <polygon points="10,8 16,12 10,16" />
                    </svg>

                    <span className="text-sm font-medium">Add video</span>

                    <span className="text-xs opacity-70">
                      MP4, WebM (max 100MB)
                    </span>
                  </div>
                )}

                {videoFile && (
                  <>
                    <video
                      src={URL.createObjectURL(videoFile)}
                      controls
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        Change video
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setVideoFile(null);
                        if (featuredVideInputRef.current) {
                          featuredVideInputRef.current.value = "";
                        }
                      }}
                      className="cursor-pointer absolute top-2 right-2 bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm hover:bg-black/80"
                    >
                      ✕
                    </button>
                  </>
                )}
              </label>
            </div>

            <Button type="submit">Add / Update Blog</Button>
            <Button type="button" onClick={() => resetEditor()}>
              Reset
            </Button>
          </form>
        )}

        <h3 className="heading-5-italic">Our</h3>
        <h2 className="heading-2">Blogs</h2>
      </div>

      <div className="bg-surface py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.length > 0 &&
              blogs.map((blog) => (
                <div
                  key={blog._id}
                  className="  bg-dark rounded-2xl shadow-md hover:shadow-xl transition p-6 cursor-pointer flex flex-col md:flex-row gap-6 group"
                >
                  <div className="shrink-0 w-full md:w-48 h-48 rounded-xl overflow-hidden ">
                    {blog.featuredMedia?.type === "image" && (
                      <img
                        src={blog.featuredMedia.url}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                    {blog.featuredMedia?.type === "video" && (
                      <video
                        src={blog.featuredMedia.url}
                        className="w-full h-full object-cover rounded-xl"
                        muted
                        loop
                        autoPlay
                        controls
                      />
                    )}
                  </div>
                  <div className="flex flex-col justify-between flex-1 gap-4">
                    <div>
                      <h3
                        className="text-2xl font-semibold text-white transition-colors group-hover:text-secondary cursor-pointer"
                        onClick={() => router.push(`blogs/${blog._id}`)}
                      >
                        {blog.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">
                        Created on:{" "}
                        {new Date(blog.createdAt).toLocaleDateString(
                          undefined,
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <span
                        className="text-secondary font-medium hover:underline"
                        onClick={() => router.push(`blogs/${blog._id}`)}
                      >
                        Read More...
                      </span>

                      {session?.user?.role === "superadmin" && (
                        <div className="flex gap-3">
                          <button
                            className="text-blue-500 font-medium hover:underline"
                            onClick={() => {
                              setTitle(blog.title);
                              // if (blog?.featuredMedia?.url) {
                              //   setFeaturedImage(blog?.featuredMedia?.url);
                              // }
                              // if (blog?.video?.url) {
                              //   setVideoFile(blog?.video?.url);
                              // }
                              editorInstance?.update(() => {
                                const root = $getRoot();
                                root.clear();
                                const parser = new DOMParser();
                                const doc = parser.parseFromString(
                                  blog.content,
                                  "text/html"
                                );
                                const nodes = $generateNodesFromDOM(
                                  editorInstance,
                                  doc
                                );
                                nodes.forEach((n) => root.append(n));
                              });
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="text-red-500 font-medium hover:underline"
                            onClick={() => handleDelete(blog._id)}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

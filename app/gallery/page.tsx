import PhotoGalleryMasonry, {
  GalleryImage,
} from "@/components/sections/PhotoGalleryMasonry";

const images: GalleryImage[] = [
  {
    src: "/gallery/webp/IMG_1209.webp",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 1",
  },
  {
    src: "/gallery/webp/IMG_1169.webp",
    width: 1200,
    height: 800,
    alt: "Photo Gallery 2",
  },
  {
    src: "/gallery/webp/IMG_1176.webp",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 3",
  },
  {
    src: "/gallery/webp/IMG_1173.webp",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 4",
  },
  {
    src: "/gallery/webp/IMG_1177.webp",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 5",
  },
  {
    src: "/gallery/webp/IMG_1179.webp",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 6",
  },
  {
    src: "/gallery/webp/IMG_1222.webp",
    width: 1320,
    height: 692,
    alt: "Photo Gallery 7",
  },
  {
    src: "/gallery/webp/IMG_1181.webp",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 8",
  },
  {
    src: "/gallery/webp/IMG_1182.webp",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 9",
  },
  {
    src: "/gallery/webp/untitled_design.webp",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 10",
  },
  {
    src: "/gallery/webp/IMG_1187.webp",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 11",
  },
  {
    src: "/gallery/webp/IMG_1191.webp",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 12",
  },
  {
    src: "/gallery/webp/IMG_1185.webp",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 13",
  },
  {
    src: "/gallery/webp/IMG_1183.webp",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 14",
  },
  {
    src: "/gallery/webp/IMG_1198.webp",
    width: 1320,
    height: 860,
    alt: "Photo Gallery 15",
  },
  {
    src: "/gallery/webp/IMG_1192.webp",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 16",
  },
  {
    src: "/gallery/webp/IMG_1221.webp",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 17",
  },
  {
    src: "/gallery/webp/IMG_1215.webp",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 18",
  },
  {
    src: "/gallery/webp/IMG_1223.webp",
    width: 1320,
    height: 863,
    alt: "Photo Gallery 19",
  },
  {
    src: "/gallery/webp/IMG_1225.webp",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 20",
  },
];

export default function GalleryPage() {
  return (
    <section className="md:py-40 py-20">
      <div className="container pb-20">
        <h3 className="heading-5-italic">Our</h3>
        <h1 className="heading-1">Gallery</h1>
      </div>
      <PhotoGalleryMasonry images={images} />
    </section>
  );
}

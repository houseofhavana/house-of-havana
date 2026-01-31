import PhotoGalleryMasonry, {
  GalleryImage,
} from "@/components/sections/PhotoGalleryMasonry";
import { mergeSEO } from "@/lib/seo";

export const metadata = mergeSEO({
  title: "Gallery",
  description:
    "Browse our gallery of haircuts, fades, and beard grooming at House Of Havana barbershop in Saskatoon.",
  keywords: [
    "barber gallery saskatoon",
    "haircut photos",
    "fade haircut gallery",
  ],
  canonical: "/gallery",
});

const images: GalleryImage[] = [
  {
    src: "/gallery/IMG_1209.jpeg",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 1",
  },
  {
    src: "/gallery/IMG_1169.jpeg",
    width: 1200,
    height: 800,
    alt: "Photo Gallery 2",
  },
  {
    src: "/gallery/IMG_1176.jpeg",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 3",
  },
  {
    src: "/gallery/IMG_1173.jpeg",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 4",
  },
  {
    src: "/gallery/IMG_1177.jpeg",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 5",
  },
  {
    src: "/gallery/IMG_1179.jpeg",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 6",
  },
  {
    src: "/gallery/IMG_1222.jpeg",
    width: 1320,
    height: 692,
    alt: "Photo Gallery 7",
  },
  {
    src: "/gallery/IMG_1181.jpeg",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 8",
  },
  {
    src: "/gallery/IMG_1182.jpeg",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 9",
  },
  {
    src: "/gallery/untitled_design.png",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 10",
  },
  {
    src: "/gallery/IMG_1187.jpeg",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 11",
  },
  {
    src: "/gallery/IMG_1191.jpeg",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 12",
  },
  {
    src: "/gallery/IMG_1185.jpeg",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 13",
  },
  {
    src: "/gallery/IMG_1183.jpeg",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 14",
  },
  {
    src: "/gallery/IMG_1198.jpeg",
    width: 1320,
    height: 860,
    alt: "Photo Gallery 15",
  },
  {
    src: "/gallery/IMG_1192.jpeg",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 16",
  },
  {
    src: "/gallery/IMG_1221.jpeg",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 17",
  },
  {
    src: "/gallery/IMG_1215.jpeg",
    width: 800,
    height: 1200,
    alt: "Photo Gallery 18",
  },
  {
    src: "/gallery/IMG_1223.jpeg",
    width: 1320,
    height: 863,
    alt: "Photo Gallery 19",
  },
  {
    src: "/gallery/IMG_1225.jpeg",
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
        <h2 className="heading-1">Gallery</h2>
      </div>
      <PhotoGalleryMasonry images={images} />
    </section>
  );
}

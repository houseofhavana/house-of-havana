import React from "react";
import Image from "next/image";

interface NewsCardProps {
  image: string;
  title: string;
  excerpt: string;
  date: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ image, title, excerpt, date }) => (
  <div className="bg-background flex flex-col h-full">
    <div className="relative w-full h-60 rounded overflow-hidden">
      <Image src={image} alt={title} fill className="object-cover" />
    </div>
    <div className="p-6">
      <span className="heading-6-italic !text-md text-foreground/50 tracking-wider">{date}</span>
      <div className="heading-5 mb-2 pt-2">{title}</div>
      <hr className="border-foreground/10 mb-4" />
      <div className="text-base text-foreground/50 mb-4 flex-1">{excerpt}</div>
    </div>
  </div>
);

export default NewsCard; 
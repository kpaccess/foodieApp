"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";

const images = [
  { image: burgerImg, alt: "A deliciouse juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Dumplings" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicous schnitzel" },
  { image: tomatoSaladImg, alt: "A deliciouse tomato salad" },
  { image: macncheeseImg, alt: "A macncheese pizza" },
];

const ImageSlideShow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);
  }, []);

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-sm">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          alt={image.alt}
          className={`w-full h-full object-cover absolute top-0 left-0 opacity-0 translate-x-[-1] scale-[1.1] rotate-[-5deg] transition-all duration-1500 ease-in-out ${
            index === currentImageIndex
              ? "opacity-100 translate-x-0 scale-100 rotate-0"
              : ""
          }`}
        />
      ))}
    </div>
  );
};

export default ImageSlideShow;

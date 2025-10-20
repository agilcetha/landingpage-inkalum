"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import Link from "next/link";

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      image: "/images/model-7.png",
      title: "Aluminium Kuat & Modern",
      desc: "Solusi terbaik untuk kebutuhan konstruksi dan desain masa kini.",
      cta: "Hubungi Kami",
      link: "",
    },
    {
      id: 2,
      image: "/images/banner2.png",
      title: "Desain Elegan & Presisi",
      desc: "Produk aluminium berkualitas tinggi dengan finishing sempurna.",
      cta: "Lihat Produk",
      link: "",
    },
    {
      id: 3,
      image: "/images/model-8.png",
      title: "Tahan Lama & Terpercaya",
      desc: "Dipercaya oleh banyak proyek besar di Indonesia.",
      cta: "Tentang Kami",
      link: "",
    },
  ];

  return (
    <section className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Background image */}
            <div className="relative w-full h-screen">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mb-6 drop-shadow-lg">
                  {slide.desc}
                </p>
                
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

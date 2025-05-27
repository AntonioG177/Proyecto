// components/PromoCarousel.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import Gamer from "/img/Gamer.jpg";
import Perfume from "/img/perfume_chanel.jpg";
import Verano from "/img/Ropa_verano.jpg";

const banners = [
  {
    id: 1,
    image: Perfume,
    alt: "Descuento en perfumes",
    text: "50% de descuento en perfumes 🔥",
  },
  {
    id: 2,
    image: Verano,
    alt: "Novedades de verano",
    text: "¡Nueva colección de verano 2025!",
  },
  {
    id: 3,
    image: Gamer,
    alt: "Entrega gratis",
    text: "Entrega gratuita por tiempo limitado en componentes para PC 🚚",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-6 rounded-lg overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
          width: `${banners.length * 100}%`,
        }}
      >
      {banners.map((banner) => (
        <div
          key={banner.id}
          className="flex-shrink-0 relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] w-full"
        >
          <img
            src={banner.image}
            alt={banner.alt}
            className="h-100 w-250 object-cover"
          />
          <div className="absolute bottom-20 left-4 bg-black/60 text-white p-3 rounded-xl shadow-lg">
            <p className="text-lg font-semibold">{banner.text}</p>
          </div>
        </div>
      ))}

      </div>

      {/* Botones izquierda / derecha */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-md"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-md"
      >
        ›
      </button>

      {/* Puntos indicadores */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              current === i ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

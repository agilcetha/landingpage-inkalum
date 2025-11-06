"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// Dynamic import Leaflet supaya tidak jalan di server
const loadLeaflet = async () => {
  const L = await import("leaflet");
  return L;
};

export default function LocalNetwork() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let map: any;

    loadLeaflet().then((L) => {
      map = L.map("map", {
        center: [-2.5489, 118.0149],
        zoom: 5,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      const icon = L.icon({
        iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
      });

      const cities = [
        { name: "Jakarta", coords: [-6.2088, 106.8456] },
        { name: "Surabaya", coords: [-7.2575, 112.7521] },
        { name: "Medan", coords: [3.5952, 98.6722] },
        { name: "Makassar", coords: [-5.1477, 119.4327] },
        { name: "Denpasar", coords: [-8.65, 115.2167] },
        { name: "Bandung", coords: [-6.9175, 107.6191] },
        { name: "Semarang", coords: [-6.9667, 110.4167] },
        { name: "Palembang", coords: [-2.9761, 104.7754] },
      ];

      cities.forEach((city) =>
        L.marker(city.coords, { icon })
          .bindPopup(`<b>${city.name}</b>`)
          .addTo(map)
      );
    });

    return () => {
      if (map) map.remove();
    };
  }, []);

  return (
    <section className="py-16 bg-white">
      <h2 className="text-center text-4xl font-bold mb-4 text-gray-900">
        LOCAL <span className="text-[#240FA6]">NETWORK</span>
      </h2>
      <p className="text-center text-gray-500 mb-12">
        Kota-kota besar di Indonesia dengan jaringan layanan kami.
      </p>

      <div className="max-w-6xl mx-auto">
        <div
          id="map"
          style={{
            height: "600px",
            width: "100%",
            zIndex: 0, 
          }}
          className="mt-12 rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}

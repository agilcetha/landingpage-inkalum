"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const loadLeaflet = async () => {
  const L = await import("leaflet");
  return L;
};

export default function LocalNetwork() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let map: any;
    let markers: any[] = [];

    loadLeaflet().then((L) => {
      map = L.map("map", {
        center: [-2.5489, 118.0149],
        zoom: 5,
      });


      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      const icon = L.icon({
        iconUrl: "/images/logo-tab-light.png",
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
      });

      // Data lokasi showroom
      const cities = [
        {
          name: "Bluru Kidul, Kabupaten Sidoarjo, Jawa Timur",
          coords: [-7.453934, 112.735849],
        },
        {
          name: "Jl. Daan Mogot No.Km 18, Kb. Besar, Kec. Batuceper, Kota Tangerang, Banten 11840",
          coords: [-6.159297799778532, 106.68729737668667],
        },
      ];

      
      cities.forEach((city) => {
        const marker = L.marker(city.coords, { icon })
          .bindPopup(`<b>${city.name}</b>`, { autoPan: false })
          .addTo(map);

        markers.push(marker);
      });

      
      const updatePopups = () => {
        const zoom = map.getZoom();
        const bounds = map.getBounds();

        markers.forEach((marker) => {
          const pos = marker.getLatLng();
          const visible = bounds.contains(pos);

          if (zoom > 10 && visible) {
            marker.openPopup();
          } else {
            marker.closePopup();
          }
        });
      };

      map.on("zoomend", updatePopups);
      map.on("moveend", updatePopups);

      updatePopups(); 
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

"use client";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// URL icon mirip Google Maps
const googlePin = L.icon({
  iconUrl: "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png",
  iconSize: [25, 41], // ukuran icon
  iconAnchor: [12, 41], // posisi dasar pin
  popupAnchor: [1, -34], // posisi popup relatif terhadap pin
});

export default function LocalNetwork() {
  useEffect(() => {
    // Hapus instance lama kalau sudah ada
    const existingMap = L.DomUtil.get("indo-map");
    if (existingMap && existingMap._leaflet_id) {
      existingMap._leaflet_id = null;
    }

    // Inisialisasi map
    const map = L.map("indo-map", {
      center: [-2.5, 118],
      zoom: 5.1,
      zoomControl: true,
    });

    // Tambahkan tile dari OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Daftar kota besar di Indonesia
    const cities = [
      { name: "Jakarta", coords: [-6.2088, 106.8456] },
      { name: "Bandung", coords: [-6.9175, 107.6191] },
      { name: "Surabaya", coords: [-7.2575, 112.7521] },
      { name: "Medan", coords: [3.5952, 98.6722] },
      { name: "Makassar", coords: [-5.1477, 119.4327] },
      { name: "Yogyakarta", coords: [-7.7956, 110.3695] },
      { name: "Denpasar", coords: [-8.65, 115.2167] },
      { name: "Palembang", coords: [-2.9909, 104.7566] },
      { name: "Manado", coords: [1.4748, 124.8421] },
      { name: "Balikpapan", coords: [-1.2675, 116.8289] },
      { name: "Pontianak", coords: [0.022, 109.3333] },
      { name: "Jayapura", coords: [-2.5916, 140.6689] },
    ];

    // Tambahkan marker gaya Google Maps untuk setiap kota
    cities.forEach((city) => {
      const marker = L.marker(city.coords, { icon: googlePin }).addTo(map);
      marker.bindPopup(`<b>${city.name}</b>`);
    });

    // Cleanup saat komponen unmount
    return () => {
      map.remove();
    };
  }, []);

  return (
    <section className="relative bg-white py-16">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900">
          LOCAL <span className="text-[#240FA6]">NETWORK</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Jangkauan kami mencakup kota-kota besar di seluruh Indonesia.
        </p>
      </div>

      <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-gray-200">
        <div
          id="indo-map"
          className="w-full h-[500px] rounded-2xl"
          style={{ zIndex: 1 }}
        ></div>
      </div>
    </section>
  );
}

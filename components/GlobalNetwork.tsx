"use client"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"


const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const locations = [
  { id: 1, country: "Australia", coordinates: [133.7751, -25.2744], flag: "au", offset: [-40, 20] },
  { id: 2, country: "Timor Leste", coordinates: [125.7275, -8.8742], flag: "tl", offset: [-50, 23] },
  { id: 3, country: "Taiwan", coordinates: [120.9605, 23.6978], flag: "tw", offset: [45, -25] },
  { id: 4, country: "Japan", coordinates: [138.2529, 36.2048], flag: "jp", offset: [-10, -30] },
  { id: 5, country: "China", coordinates: [104.1954, 35.8617], flag: "cn", offset: [30, -80] },
  { id: 6, country: "Canada", coordinates: [-106.3468, 56.1304], flag: "ca", offset: [30, -5] },
  { id: 7, country: "USA", coordinates: [-95.7129, 37.0902], flag: "us", offset: [30, 5] },
  { id: 8, country: "UK", coordinates: [-3.436, 55.3781], flag: "gb", offset: [-85, -30] },
  { id: 9, country: "Germany", coordinates: [10.4515, 51.1657], flag: "de", offset: [45, -30] },
  { id: 10, country: "Poland", coordinates: [19.1451, 51.9194], flag: "pl", offset: [80, 5] },
  { id: 11, country: "Romania", coordinates: [24.9668, 45.9432], flag: "ro", offset: [85, 20] },
  { id: 12, country: "Spain", coordinates: [-3.7492, 40.4637], flag: "es", offset: [-65, 30] },
  { id: 13, country: "Hungary", coordinates: [19.5033, 47.1625], flag: "hu", offset: [65, 60] },

  { id: 14, country: "Vietnam", coordinates: [108.2772, 14.0583], flag: "vn", offset: [40, 10] },
]

export default function GlobalNetwork() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-center text-4xl font-bold mb-4">
        GLOBAL <span className="text-[#240FA6]">NETWORK</span>
      </h2>
      <p className="text-center text-gray-500 mb-12">
        Kami melayani pelanggan di berbagai negara dengan kualitas terbaik.
      </p>

      <div className="max-w-6xl mx-auto">
        <ComposableMap projection="geoMercator" width={900} height={450}>
          <Geographies geography={geoUrl}>
            {({ geographies }: { geographies: any[] }) =>
              geographies.map((geo: any) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#E5E7EB"
                  stroke="#D1D5DB"
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#DDE3FF", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {locations.map((loc) => (
            <Marker key={loc.id} coordinates={loc.coordinates}>
              <circle r={8} className="fill-[#240FA6] opacity-30 animate-ping" />
              <circle r={5} className="fill-[#240FA6] stroke-white stroke-[1.5]" />
              <line
                x1={0}
                y1={0}
                x2={loc.offset[0]}
                y2={loc.offset[1]}
                stroke="#240FA6"
                strokeWidth={0.8}
                className="opacity-60"
              />

              <foreignObject
                x={loc.offset[0]}
                y={loc.offset[1] - 10}
                width={120}
                height={40}
              >
                <div className="flex items-center gap-2 bg-white shadow-md px-2 py-1 rounded-full border hover:bg-[#240FA6]/10 transition-all">
                  <span className={`fi fi-${loc.flag}`} />
                  <span className="text-xs font-medium whitespace-nowrap">{loc.country}</span>
                </div>
              </foreignObject>
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </section>
  )
}

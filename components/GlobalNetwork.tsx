"use client"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"




const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const locations = [
  { id: 1, country: "Australia", coordinates: [133.7751, -25.2744], flag: "au" },
  { id: 2, country: "Timor Leste", coordinates: [125.7275, -8.8742], flag: "tl" },
  { id: 3, country: "Taiwan", coordinates: [120.9605, 23.6978], flag: "tw" },
  { id: 4, country: "Japan", coordinates: [138.2529, 36.2048], flag: "jp" },
  { id: 5, country: "China", coordinates: [104.1954, 35.8617], flag: "cn" },
  { id: 6, country: "Canada", coordinates: [-106.3468, 56.1304], flag: "ca" },
  { id: 7, country: "USA", coordinates: [-95.7129, 37.0902], flag: "us" },
  { id: 8, country: "Germany", coordinates: [10.4515, 51.1657], flag: "de" },
  { id: 9, country: "UK", coordinates: [-3.4360, 55.3781], flag: "gb" },
  { id: 10, country: "Spain", coordinates: [-3.7492, 40.4637], flag: "es" },
  { id: 11, country: "Hungary", coordinates: [19.5033, 47.1625], flag: "hu" },
  { id: 12, country: "Poland", coordinates: [19.1451, 51.9194], flag: "pl" },
  { id: 13, country: "Romania", coordinates: [24.9668, 45.9432], flag: "ro" },
  { id: 14, country: "Vietnam", coordinates: [108.2772, 14.0583], flag: "vn" },
]

export default function GlobalNetwork() {
  return (
    <section className="py-10 bg-white">
      <h2 className="text-center text-4xl font-bold mb-6">
        GLOBAL <span className="text-[#240FA6]">NETWORK</span>
      </h2>
      <p className="text-center text-gray-500 mb-12">
        Kami melayani pelanggan di berbagai negara dengan kualitas terbaik.
      </p>

      <div className="max-w-5xl mx-auto">
        <ComposableMap projection="geoMercator" width={800} height={400}>
          <Geographies geography={geoUrl}>
            {({ geographies }: { geographies: any[] }) =>
              geographies.map((geo: any) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#E5E7EB"
                  stroke="#D1D5DB"
                />
              ))
            }
          </Geographies>


          {locations.map((loc) => (
            <Marker key={loc.id} coordinates={loc.coordinates}>
              <circle r={10} className="fill-[#240FA6] opacity-30 animate-ping" />
              <circle r={6} className="fill-[#240FA6] stroke-white stroke-[1.5]" />

              <foreignObject x={12} y={-10} width={120} height={40}>
                    <div className="flex items-center gap-2 bg-white shadow-md px-2 py-1 rounded-full border">
                        <span className={`fi fi-${loc.flag}`} />
                        <span className="text-xs font-medium whitespace-nowrap">
                        {loc.country}
                        </span>
                    </div>
                </foreignObject>

            </Marker>
          ))}
        </ComposableMap>
      </div>
    </section>
  )
}

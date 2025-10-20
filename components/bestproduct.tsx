"use client"
import Image from "next/image"

const products = [
  { id: 1, title: "SLIDING DOOR", image: "/produk/sliding-window-01.png"},
  { id: 2, title: "FOLDING DOOR", image: "/produk/folding-door-3.png" },
  { id: 3, title: "CASEMENT WINDOWS", image: "/produk/casement-windows-2.png" },
]

export default function BestProduct() {
  return (
    <section className="py-30 bg-[url('/images/bg-abstrak.jpg')]  bg-center">
      <h2 className="text-center text-4xl font-bold mb-10">
        BEST <span className="text-[#240FA6]">PRODUCT</span>
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition"
          >
           <div className="w-50 h-50 flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.title}
                width={160}
                height={160}
                className="object-contain"
              />
            </div>
            <h3 className="mt-10 text-lg font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

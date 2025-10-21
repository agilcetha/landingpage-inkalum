"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import { useState } from "react"
import { products } from "../../../data/data_produk"
import { MessageCircle } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"


export default function ProductDetailPage() {
  const params = useParams()
  const id = Number(params.id)
  const product = products.find((p) => p.id === id)

  if (!product) {
    return <div className="p-10 text-center">Produk tidak ditemukan.</div>
  }

  const [selectedImage, setSelectedImage] = useState(product.images[0])

  return (
    <section className="py-20">
      <div className="py-10 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src={selectedImage}
              alt={product.name}
              width={600}
              height={600}
              className="h-full w-full object-cover group-hover:opacity-75"
            />
          </div>
          <div className="flex gap-3 mt-4 flex-wrap">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`border rounded-md overflow-hidden w-20 h-20 ${
                  selectedImage === img ? "ring-2 ring-indigo-500" : ""
                }`}
              >
                <Image
                  src={img}
                  alt={`${product.name} thumbnail ${idx + 1}`}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-xl text-gray-700 mt-2">Rp.00-,</p>

          

          <p className="text-gray-600 mt-4">
            {
              `The ${product.name} is the perfect product for your needs. Add a longer description here.`}
          </p>

             <a
              href={`https://wa.me/6285854493405?text=Halo, saya tertarik dengan produk ${encodeURIComponent(
                product.name
              )}. Bisa dibantu informasinya?`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-gray-500 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition"    
            >
              <Image
                src="/images/whatsapp-bulat.png"
                alt="WhatsApp Logo"
                width={24}
                height={24}
              />
              Hubungi via WhatsApp
            </a>

          {/* Accordion Detail */}
          <div className="mt-10 border-t divide-y text-sm">
            <details className="py-4">
              <summary className="cursor-pointer font-medium text-gray-800">Details</summary>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>Product Origin: Indonesia</li>
                <li>Color: Customized Color</li>
                <li>Lead Time: 15–25 days</li>
                <li>Trade Terms: EXW, FOB, CIF, CFR, DDU</li>
                <li>Shipping Port: Surabaya</li>
              </ul>
            </details>

            <details className="py-4">
              <summary className="cursor-pointer font-medium text-gray-800">Features</summary>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates numquam ducimus eos ab non ex dicta
                laborum, nam obcaecati officia pariatur.
              </p>
            </details>

            <details className="py-4">
              <summary className="cursor-pointer font-medium text-gray-800">Specifications</summary>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam harum temporibus nulla suscipit veniam
                ratione maiores.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}

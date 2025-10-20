"use client"

import Image from "next/image"
import Link from "next/link"
import { products } from "../../data/data_produk"
import { Images } from "lucide-react"
import Breadcrumb from "@/components/Breadcrumb"

export default function ProductsPage() {
  return (
    <div className="bg-[url('/images/bg-abstrak.jpg')]  bg-center">
     
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

        <h2 className="text-4xl font-bold text-[#1D0A8A] mb-8">Produk</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group"
            >
              <div className="aspect-square w-full rounded-lg bg-gray-200 overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover group-hover:opacity-75"
                />

              </div>
              <h3 className="mt-4 text-lg text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
            
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

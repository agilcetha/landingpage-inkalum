"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Breadcrumb() {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)

  // Ubah segment menjadi label dan href kumulatif
  const crumbs = segments.map((segment, idx) => {
    const href = "/" + segments.slice(0, idx + 1).join("/")
    // Kapital huruf pertama
    const label = decodeURIComponent(segment)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase())

    return { label, href }
  })

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <li className="flex items-center">
          <Link href="/" className="mr-2 text-sm font-medium text-gray-900 hover:text-indigo-600">
            Home
          </Link>
          {crumbs.length > 0 && (
            <svg
              viewBox="0 0 16 20"
              width="16"
              height="20"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-4 text-gray-300"
            >
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          )}
        </li>

        {crumbs.map((crumb, idx) => (
          <li key={idx} className="flex items-center">
            {idx < crumbs.length - 1 ? (
              <>
                <Link href={crumb.href} className="mr-2 text-sm font-medium text-gray-900 hover:text-indigo-600">
                  {crumb.label}
                </Link>
                <svg
                  viewBox="0 0 16 20"
                  width="16"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </>
            ) : (
              <span className="text-sm font-medium text-gray-500 hover:text-gray-600">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-gray-300 " style={{ backgroundColor: "#10074A" }}
>

      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        <div>
           <Image
                src="/images/logo2-02.png" 
                alt="Inkalum Logo"
                width={160}     
                height={50}     
                className="object-contain"
            />
          <p className="mt-2 text-gray-300">
            Established in November 2013, we have been thriving in the aluminium extrusion industry in Indonesia for over a decade. Over this period, we have continuously improved, which has positioned us where we are today.
          </p>

           <div className="mt-6 flex gap-3">
            <Link href="https://www.facebook.com" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition">
              <Image src="/images/facebook.png" alt="fb" width={18} height={18} />
            </Link>
            <Link href="https://www.instagram.com" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition">
              <Image src="/images/instagram.png" alt="ig" width={18} height={18} />
            </Link>
            <Link href="https://www.linkedin.com" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition">
              <Image src="/images/linkedin.png" alt="linkedin" width={18} height={18} />
            </Link>
          </div>

        </div>

        <div className="px-20">
          <h3 className="text-lg font-semibold text-white mb-3">Navigasi</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/produk" className="hover:text-white">Produk</Link></li>
            <li><Link href="/about" className="hover:text-white">Tentang Kami</Link></li>
            
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Kontak</h3>
          <p>📍 Jl. Raya Winong Km. 1,5 Talun, Silo Kambang, Gn. Gangsir Kec. Gempol, Pasuruan, Jawa Timur, Indonesia, 67155</p>
          <p>📞 0343-657606</p>
          <p>✉️ marketing@inkalum.com</p>
        </div>
      </div>

      <div className="text-center border-t border-gray-700 py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} Inkalum. All rights reserved.
      </div>
    </footer>
  );
}

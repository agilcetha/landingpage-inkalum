export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-purple-50 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-6">
          <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            PT. INKASA JAYA ALUMINIUM
          </h1>
          <p className="text-justify text-gray-700 text-lg leading-relaxed">
            Established in November 2013, we have been thriving in the aluminium extrusion industry in Indonesia for over a decade. Over this period, we have continuously improved, which has positioned us where we are today. With only two extrusion machines in the beginning, we were able to expand up to 22 extrusion machines ready to produce anytime.
            <br /><br />
            Our main factory is located in Pasuruan, East Java. We produce high-quality aluminium profiles that can meet your business requirements, ranging from simple to complex designs. Our products include shopfront casements, windows, door casements, and profiles for both commodity and industrial applications. Additionally, we supply several types of ingots, such as A380, ADC12, and Hd2. We will now guide you through the step-by-step process of how we produce our goods from scratch.
          </p>
        </div>

        <div className="md:col-span-6 relative grid grid-cols-2 gap-4 md:gap-6">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=60"
            alt="Office interior"
            className="rounded-2xl shadow-xl object-cover w-full h-56 md:h-64 col-span-2 transform hover:scale-105 transition duration-500"
          />

          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=60"
            alt="Team member"
            className="rounded-2xl shadow-lg object-cover h-48 md:h-56 w-full translate-x-6 -translate-y-4 hover:scale-105 transition duration-500"
          />
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=60"
            alt="Discussion"
            className="rounded-2xl shadow-lg object-cover h-48 md:h-56 w-full -translate-x-4 translate-y-4 hover:scale-105 transition duration-500"
          />
        </div>
      </div>

     
      <div className="max-w-7xl mx-auto mt-28 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">
            Visi
          </h2>
          <p className="text-justify text-gray-700 text-lg leading-relaxed mb-8">
           Grow as one of the industry leaders in the aluminum smelting and extrusion sector in Indonesia
          </p>
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">
            Misi
          </h2>
          <p className="text-justify text-gray-700 text-lg leading-relaxed mb-8">
            We are committed to maintaining high integrity, consistency and innovation.
            We offer competitive prices with high quality products, and provide the highest level of service to all our customers.
          </p>

          <div className="flex items-center gap-3">
            <div className="w-16 h-1 bg-purple-600 rounded-full" />
            <p className="text-purple-700 font-medium">Driven by Quality & Trust</p>
          </div>
        </div>

        {/* Data Kinerja */}
        <div className="flex flex-col gap-10 text-gray-900">
          <div className="hover:translate-x-2 transition duration-300">
            <p className="text-4xl font-semibold">44 million</p>
            <p className="text-gray-500">Transactions every 24 hours</p>
          </div>
          <div className="hover:translate-x-2 transition duration-300">
            <p className="text-4xl font-semibold">$119 trillion</p>
            <p className="text-gray-500">Assets under holding</p>
          </div>
          <div className="hover:translate-x-2 transition duration-300">
            <p className="text-4xl font-semibold">46,000</p>
            <p className="text-gray-500">New users annually</p>
          </div>
        </div>
      </div>
    </section>
  );
}

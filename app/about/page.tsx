export default function About() {
  return (
    <section className="min-h-screen bg-gray-100 px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 animate-fadeIn">
            About Nexspire Technologies
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fadeIn delay-200">
            We are a results-driven IT company providing high-quality software solutions, websites, mobile apps, and digital services. Our mission is to transform businesses with innovation, technology, and automation.
          </p>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-transform transform hover:-translate-y-2 animate-fadeIn">
            <h3 className="text-2xl font-semibold mb-3 text-yellow-500">Our Vision</h3>
            <p className="text-gray-700">Be the most trusted software development partner around the world.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-transform transform hover:-translate-y-2 animate-fadeIn delay-200">
            <h3 className="text-2xl font-semibold mb-3 text-blue-500">Our Mission</h3>
            <p className="text-gray-700">Enable businesses to grow through user-friendly software and digital solutions.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-transform transform hover:-translate-y-2 animate-fadeIn delay-400">
            <h3 className="text-2xl font-semibold mb-3 text-green-500">Our Values</h3>
            <p className="text-gray-700">Quality · Innovation · Trust · Customer Success</p>
          </div>
        </div>

        {/* Extra Info Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <img 
              src="/teams.jpeg" 
              alt="Team" 
              className="rounded-xl shadow-lg hover:scale-105 transform transition duration-500"
            />
          </div>
          <div className="animate-fadeIn delay-200">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Expert team with 5+ years experience</li>
              <li>On-time delivery & high-quality standards</li>
              <li>Custom solutions for each business</li>
              <li>Affordable and scalable technology</li>
              <li>24/7 Support and maintenance</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

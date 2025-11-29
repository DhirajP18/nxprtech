export default function About() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Our Company</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          We are a results-driven IT company focused on delivering high-quality software solutions.
          Our mission is to transform businesses using modern technology, automation, and innovation.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-600">Be the most trusted software development partner around the world.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600">Enable businesses to grow through user-friendly software.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Values</h3>
            <p className="text-gray-600">Quality · Innovation · Trust · Customer Success</p>
          </div>
        </div>
      </div>
    </section>
  );
}

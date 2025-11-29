export default function Contact() {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl grid md:grid-cols-2 gap-10 p-10 relative overflow-hidden">

        {/* Animated Background Circles */}
        <div className="absolute top-[-50px] left-[-50px] w-36 h-36 bg-yellow-200 rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-[-60px] right-[-60px] w-48 h-48 bg-blue-300 rounded-full opacity-20 animate-pulse-slow"></div>

        {/* Left Side - Contact Info */}
        <div className="flex flex-col justify-center space-y-6 animate-fadeIn">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h1>
          <p className="text-gray-600">
            We'd love to hear from you! Reach out for any questions or project inquiries.
          </p>

          <div className="space-y-3 text-gray-700">
            <p>📞 Phone: +91 7338065815</p>
            <p>📧 Email: info@nexspire.com</p>
            <p>🌐 Website: www.nexspire.com</p>
            <p>📍 Address: Kolhapur, Maharashtra, India</p>
          </div>

          {/* Optional Social Links */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-yellow-400 transition">🌐 LinkedIn</a>
            <a href="#" className="hover:text-yellow-400 transition">📘 Facebook</a>
            <a href="#" className="hover:text-yellow-400 transition">📸 Instagram</a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="animate-fadeIn delay-200">
          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
            ></textarea>

            <button className="bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transform hover:scale-105 transition">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

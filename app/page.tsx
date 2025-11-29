// NOTE: If this file is page.tsx, it should be in the app directory.
import React from "react"; 

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="text-center pt-0 pb-12 px-6 relative overflow-hidden bg-white text-gray-800 shadow-md"> 
        
        {/* === ATTRACTIVE WATERMARK BACKGROUND - ADJUSTED SIZE AND OPACITY === */}
        {/* REDUCED FONT SIZE: text-[10rem] md:text-[20rem] -> text-8xl md:text-9xl */}
        {/* REDUCED OPACITY: opacity-30 -> opacity-20 for more subtlety */}
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl md:text-9xl font-extrabold text-gray-200 opacity-20 z-0 select-none pointer-events-none whitespace-nowrap">
            NEXSPIRE
        </h2>
        {/* Animated background circles (z-10 to be behind content) */}
        <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-blue-100 rounded-full opacity-50 mix-blend-multiply z-10"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-96 h-96 bg-yellow-100 rounded-full opacity-50 mix-blend-multiply z-10"></div>

        {/* Logo and Company Name - REDUCED BOTTOM MARGIN (z-20 to be above watermark) */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-2 space-y-4 md:space-y-0 md:space-x-8 relative z-20"> 
            {/* LOGO: Massive size retained */}
            <img 
                src="/logo.png" 
                alt="Nexspire Technologies Logo" 
                className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl" 
            />
            
            {/* COMPANY NAME: Compact size retained */}
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mt-4 md:mt-0 max-w-full text-center md:text-left">
  <span className="
    text-transparent bg-clip-text 
    bg-gradient-to-r from-cyan-600 via-purple-700 to-pink-600 
    drop-shadow-xl 
    block leading-tight
    whitespace-normal md:whitespace-nowrap
  ">
    Nexspire Technologies
  </span>
</h1>
        </div>
        
        {/* Descriptive Text - Space between this and CTA reduced */}
        <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-600 mb-4 relative z-20">
          We build modern websites, powerful mobile apps, and custom software solutions that **propel your business** and define your brand in the digital age.
        </p>

        <a
          href="/contact"
          className="mt-6 inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-12 py-4 rounded-full text-lg shadow-2xl hover:shadow-yellow-500/50 relative z-20"
        >
          Start Your Project →
        </a>
      </section>

      {/* Services Section (No functional changes) */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          <span className="border-b-4 border-yellow-500 pb-1">Our Core Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Website Development",
              desc: "Modern, fast and responsive websites & web apps built with cutting-edge technology."
            },
            {
              title: "Mobile App Development",
              desc: "Native Android & iOS applications using latest frameworks for maximum performance."
            },
            {
              title: "Business Software",
              desc: "Customized, scalable enterprise software to streamline and automate your core business processes."
            },
            {
              title: "Digital Marketing",
              desc: "Strategic SEO, impactful Branding, and professional Social Media Management."
            },
            {
              title: "UI/UX Designing",
              desc: "Creating intuitive, engaging, and beautiful user-friendly interfaces that convert."
            },
            {
              title: "Cloud & DevOps",
              desc: "Robust cloud deployment, CI/CD pipelines, and server optimization for stability and speed."
            }
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-yellow-500 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
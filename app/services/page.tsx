export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Modern, fast, SEO-friendly websites & web applications.",
      icon: "💻",
    },
    {
      title: "Mobile App Development",
      desc: "High-performance Android & iOS applications.",
      icon: "📱",
    },
    {
      title: "Software Solutions",
      desc: "Custom software to automate and grow your business.",
      icon: "🧩",
    },
    {
      title: "Digital Marketing",
      desc: "SEO, Branding, Google Ads & Social Media Management.",
      icon: "📢",
    },
    {
      title: "Cloud & DevOps",
      desc: "CI/CD, Cloud deployment, server optimization & security.",
      icon: "☁️",
    },
    {
      title: "UI / UX Designing",
      desc: "Modern, user-friendly and attractive interface designs.",
      icon: "🎨",
    }
  ];

  return (
    <section className="min-h-screen bg-gray-100 px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">

        {/* Header */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4 animate-fadeIn">
          Our Services
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 animate-fadeIn delay-200">
          We provide complete digital solutions to grow your business — from websites to mobile apps, software, marketing, and cloud deployment.
        </p>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 animate-fadeIn"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

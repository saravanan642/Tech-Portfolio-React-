import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">

      

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h2 className="text-5xl font-extrabold leading-tight">
          Learn React Easily 🚀
        </h2>

        <p className="mt-6 max-w-2xl text-gray-300 text-lg">
          Build modern, responsive, and interactive web applications
          using React and Tailwind CSS.
        </p>

        <div className="mt-8 flex gap-6">
          <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-full font-semibold transition duration-300 transform hover:scale-105">
            Get Started
          </button>

          <button className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition duration-300">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-10 pb-20 grid md:grid-cols-3 gap-8">

        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
          <h3 className="text-xl font-bold mb-3">⚡ Fast Performance</h3>
          <p className="text-gray-300">
            React applications are fast and efficient with reusable components.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
          <h3 className="text-xl font-bold mb-3">📱 Responsive Design</h3>
          <p className="text-gray-300">
            Fully mobile-friendly and responsive using Tailwind CSS.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
          <h3 className="text-xl font-bold mb-3">🎨 Modern UI</h3>
          <p className="text-gray-300">
            Beautiful gradient background and smooth hover animations.
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-black/40">
        © 2026 MyWebsite | All Rights Reserved
      </footer>

    </div>
  );
}

export default Home;

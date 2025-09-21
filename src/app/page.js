export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 shadow bg-white">
        <h1 className="text-2xl font-bold text-indigo-600">VividFlo</h1>
        <nav className="space-x-6">
          <a href="#services" className="hover:text-indigo-600">Services</a>
          <a href="#about" className="hover:text-indigo-600">About</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <h2 className="text-4xl md:text-6xl font-extrabold">Envision. Create. Elevate.</h2>
        <p className="mt-6 text-lg max-w-2xl">
          VividFlo is your digital partner for websites, apps, and AI-powered business tools.
        </p>
        <a href="#contact" className="mt-8 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-200">
          Get Started
        </a>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-8 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow rounded-lg">
            <h4 className="text-xl font-semibold mb-2">Websites & Apps</h4>
            <p>Beautiful, responsive, and scalable digital experiences powered by Next.js.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h4 className="text-xl font-semibold mb-2">AI Integrations</h4>
            <p>Custom AI tools and automation to make your business smarter and faster.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h4 className="text-xl font-semibold mb-2">Marketing & Growth</h4>
            <p>Data-driven campaigns and digital strategies that boost visibility and sales.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-8">
        <h3 className="text-3xl font-bold text-center mb-12">About VividFlo</h3>
        <p className="max-w-3xl mx-auto text-center text-lg text-gray-600">
          We are a digital transformation agency focused on creating soulful, scalable, and smart solutions. 
          From SaaS platforms like TalentWorth to rental platforms like TerraMar, we build with precision and creativity.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-8 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-12">Get in Touch</h3>
        <form className="max-w-xl mx-auto flex flex-col space-y-4">
          <input type="text" placeholder="Your Name" className="p-3 rounded border border-gray-300" />
          <input type="email" placeholder="Your Email" className="p-3 rounded border border-gray-300" />
          <textarea placeholder="Your Message" className="p-3 rounded border border-gray-300 h-32"></textarea>
          <button type="submit" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 bg-white shadow-inner">
        © {new Date().getFullYear()} VividFlo. All rights reserved.
      </footer>
    </main>
  )
}

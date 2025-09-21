export default function Contact() {
  return (
    <main className="min-h-screen p-12 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <form className="max-w-lg space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border rounded h-32"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 bg-indigo-600 text-white rounded"
        >
          Send
        </button>
      </form>
    </main>
  )
}

import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
    {/* Header Section */}
    <div className="relative h-60 bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/featured/?air-conditioner')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">CONTACT</h1>
      </div>
    </div>

    {/* Contact Form & Map Section */}
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Contact Form */}
        <div className="lg:w-1/2 lg:mr-8">
          <h2 className="text-2xl font-semibold mb-4">Send Message</h2>
          <form className="space-y-4  ">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
              <input type="text" id="name" className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-lg focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg" placeholder="Your Name" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
              <input type="email" id="email" className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-lg focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg" placeholder="Your Email" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="website">Website</label>
              <input type="text" id="website" className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-lg focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg" placeholder="Your Website (Optional)" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="comment">Comment</label>
              <textarea id="comment" className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-lg focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg" rows="4" placeholder="Your Comment"></textarea>
            </div>

            <button type="submit" className="px-6 py-3 bg-black text-white font-semibold rounded-md shadow-lg hover:bg-gray-800">
              Send Message
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="lg:w-1/2 lg:ml-8 mt-12 lg:mt-0">
          <h2 className="text-2xl font-semibold mb-4">Location</h2>
          <div className="w-full h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5799195259495!2d85.31362121498413!3d27.709031782791736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1901f6bc6c4f%3A0xb29604e5303c760d!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1632468399195!5m2!1sen!2snp"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Contact

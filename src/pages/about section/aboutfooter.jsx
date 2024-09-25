import React from 'react'


const Aboutfooter = () => {
  return (
    // <div className='text-2xl'>
    // <div className='h-96 flex justify-center items-center bg-black' >
    //   hello
    // </div>
    // </div>
    <div className=''>
    {/* Header Section */}
    <section className="relative h-[400px] lg:h-[600px] justify-center flex items-center">
      <img
        src="https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="Background"
        className="absolute w-full h-[600px] object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 flex justify-center items-center h-full">
        <h1 className="text-4xl lg:text-6xl font-bold text-white">
          About <span className="text-lime-500">us</span>.
        </h1>
      </div>
    </section>

    {/* Main Content Section */}
    <section className="py-12 lg:py-24 bg-white px-4 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        {/* Text Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            We are <br />
            <span className="text-lime-500 bg-lime-100 px-1">Always on your Service</span>
          </h2>
          <p className="text-gray-700 mb-4">
          Welcome to <span className='text-2xl font-bold'>TECHNEPAL</span> , your go-to store for the latest and greatest in electronic gadgets. We specialize in offering top-quality products, from smartphones to smart home devices, ensuring you always have access to the best tech at competitive prices.
          </p>
          <p className="text-gray-700">
          Our mission is simple: provide a seamless shopping experience with reliable products and excellent customer support. Shop with us and discover a world of cutting-edge technology designed to make your life easier.

          </p>
          <p className='text-gray-700 mt-4'>Thank you for choosing <span className='text-2xl font-medium'>TECHNEPAL</span> your trusted tech partner!</p>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2 lg:pl-8">
          <img
            src="https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with the actual image URL
            alt="Team member"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  </div>
  )
}

export default Aboutfooter

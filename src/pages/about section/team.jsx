import React from 'react'
import Image from "../../../public/image/abeen.png"

const Team = () => {
  const team = [
    {
      name: 'Abin Khanal',
      role: 'Fullstack Developer',
      img: Image, 
    },
    {
      name: 'Ishwar Bohara',
      role: 'Frontend Developer',
      img: 'https://mercy.edu.np/wp-content/uploads/2024/03/ishwar-768x768.jpeg', 
    },
   
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-sm text-red-500 uppercase tracking-wider mb-2">
          Our Professional Members
        </h2>
        <h1 className="text-4xl font-bold text-gray-900 mb-10">
          Our Developer Team 
        </h1>

        <div className="flex flex-wrap justify-center">
          {team.map((member, index) => (
            <div key={index} className="max-w-sm mx-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-red-500 text-sm mt-2 mb-4">{member.role}</p>
                  <div className="h-1 bg-red-500 w-16 mx-auto rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Team

import React from 'react';
import { FaBolt, FaTint, FaFire, FaLock, FaWrench, FaSnowflake, FaShieldAlt, FaPlug } from 'react-icons/fa';

export default function Specialities() {
  const specialities = [
    { id: 1, name: 'Electricité', Icon: FaBolt },
    { id: 2, name: 'Plomberie', Icon: FaTint },
    { id: 3, name: 'Chauffage', Icon: FaFire },
    { id: 4, name: 'Porte et serrure', Icon: FaLock },
    { id: 5, name: 'Menuiserie alu', Icon: FaWrench },
    { id: 6, name: 'Climatisation', Icon: FaSnowflake },
    { id: 7, name: 'Alarme', Icon: FaShieldAlt },
    { id: 8, name: 'Electroménager', Icon: FaPlug },
  ];

  return (
    <div className="container mx-auto max-w-4xl py-10 px-4 rounded-lg shadow-lg mt-10 mb-10">
      <h2 className="text-3xl font-bold text-center text-black uppercase mb-10 underline">
        Pour vos travaux de dépannage
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {specialities.map((speciality) => (
          <div key={speciality.id} className="group">
            <div className="flex flex-col items-center p-6 bg-white border border-green-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="w-20 h-20 mb-3 text-5xl text-green-500 group-hover:text-green-700 transition duration-300">
                <speciality.Icon />
              </div>
              <p className="font-semibold text-xl text-green-700 group-hover:text-green-900 transition duration-300">
                {speciality.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-start max-w-4xl mx-auto my-16">
      {/* Left Section: Contact Form */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contactos</h2>
        <p className="text-gray-600 mb-6">
            Sinta-se à vontade para entrar em contato conosco a qualquer momento. Entraremos em contato com você assim que possível!
        </p>

        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Nome"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9DD4F0]"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9DD4F0]"
            />
          </div>
          <div>
            <textarea
              placeholder="Mensagem"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9DD4F0] h-32"
            ></textarea>
          </div>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
            Enviar
          </button>
        </form>
      </div>

      {/* Right Section: Contact Info */}
      <div className="w-full md:w-1/2 md:ml-12 md:mt-20 bg-[#9DD4F0] text-white p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Info</h3>
        <ul className="space-y-4">
          <li className="flex items-center">
            <span className="material-icons mr-3">email</span>
            uanza@gmail.com
          </li>
          <li className="flex items-center">
            <span className="material-icons mr-3">phone</span>
            +244 942164068
          </li>
          <li className="flex items-center">
            <span className="material-icons mr-3">location_on</span>
            viana rua da gamek
          </li>
          <li className="flex items-center">
            <span className="material-icons mr-3">schedule</span>
            09:00 - 18:00
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex mt-6 space-x-4">
          <a href="#" className="text-white hover:text-gray-200 flex items-center">
            <FaFacebook />-Facebook
          </a>
          <a href="#" className="text-white hover:text-gray-200 flex items-center">
            <FaTwitter />-Twitter
          </a>
          <a href="#" className="text-white hover:text-gray-200 flex items-center">
            <FaInstagram />-Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

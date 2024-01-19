import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <div className="mt-10">
      <div className="flex justify-around bg-gray-200 p-4">
        <div className="w-1/2">
          <h2 className="text-xl font-bold">Pehchan</h2>
          <p className="mt-4">
          Welcome to [Pehchan], a virtual haven for art enthusiasts and creators alike. Immerse yourself in a world where creativity knows no bounds. Our curated collection features a diverse array of artists, each telling a unique story through their masterpieces. 
          </p>
          <div className="flex mt-4">
            <p className="mr-4">Like me</p>
            <img
              src="https://cdn-icons-png.flaticon.com/128/20/20837.png"
              alt="Facebook Icon"
              className="w-5"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/733/733635.png"
              alt="Twitter Icon"
              className="w-5"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png"
              alt="Instagram Icon"
              className="w-5"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png"
              alt="LinkedIn Icon"
              className="w-5"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/1384/1384012.png"
              alt="Pinterest Icon"
              className="w-5"
            />
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="text-xl font-bold">Contact Us for any Support</h2>
          <input
            type="search"
            placeholder="Choose website"
            className="border p-2 mt-2"
          />
          <label className="flex items-center mt-2">
            <input type="checkbox" className="mr-2" />
            I read and accept all terms and conditions
          </label>
          <div className="flex justify-around mt-2">
            <p>Cookie policy</p>
            <p>Privacy policy</p>
            <p>Terms and conditions</p>
            <p>Contact us: +91 9410kanishka</p>
            <p>About</p>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Footer;

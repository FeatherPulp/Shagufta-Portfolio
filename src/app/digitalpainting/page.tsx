"use client";

import { useCallback, useState } from "react";
import { ChevronLeft, ChevronRight, Instagram, Linkedin } from "lucide-react"; // You can swap this with your preferred icon library
import Link from "next/link";
import Image from "next/image"

export default function DigitalPainting() {
  const images = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
    "/9.png",
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const goToImage = useCallback((index:number) => {
    setCurrentIndex(index);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className="flex justify-center pt-4 md:pt-8 px-4 md:px-12 relative">
    <div className="bg-[#F9DBC1] rounded-full px-4 md:px-8 py-2 border border-[#C5A588] w-full max-w-screen-lg">
    <div className="flex items-center justify-between w-full">
      
      {/* Left - Name */}
      <Link href="/">
      <div className="text-lg font-medium text-gray-800">
        <Image src="/logo.png" alt="Shagufta Zabin" width={80} height={80}/>
      </div>
      </Link>

      {/* Center - Links */}
      <div className="flex space-x-4 xl:space-x-8 hidden lg:flex">
        <Link href="/" className="text-gray-600 cursor-pointer hover:bg-white px-2 xl:px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 inline-block text-sm xl:text-base">Home</Link>
        <Link href="/work" className="text-gray-600 cursor-pointer hover:bg-white px-2 xl:px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 inline-block text-sm xl:text-base">Work</Link>
        <Link href="/digitalpainting" className="text-gray-600 cursor-pointer hover:bg-white px-2 xl:px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 inline-block text-sm xl:text-base">Digital Paintings</Link>
      </div>

      {/* Right - Links */}
      <div className="flex space-x-4 xl:space-x-8 hidden lg:flex">
        <Link href="/about" className="text-gray-600 cursor-pointer hover:bg-white px-2 xl:px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 inline-block text-sm xl:text-base">About</Link>
        <Link href="/contact" className="text-gray-600 cursor-pointer hover:bg-white px-2 xl:px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 inline-block text-sm xl:text-base">Contact</Link>
      </div>

      {/* Mobile menu button */}
      <div className="lg:hidden">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-600 hover:bg-white px-3 py-2 rounded-full transition-colors"
        >
          {isMobileMenuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
    </div>
    </div>

  {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
    <div className="absolute top-full left-4 right-4 mt-2 bg-[#F9DBC1] rounded-2xl border border-[#C5A588] shadow-lg z-50 lg:hidden">
      <div className="py-4 px-6 space-y-2">
        <Link 
          href="/" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="block text-gray-600 hover:bg-white px-4 py-3 rounded-full transition-all duration-300 text-center"
        >
          Home
        </Link>
        <Link 
          href="/work" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="block text-gray-600 hover:bg-white px-4 py-3 rounded-full transition-all duration-300 text-center"
        >
          Work
        </Link>
        <Link 
          href="/digitalpainting" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="block text-gray-600 hover:bg-white px-4 py-3 rounded-full transition-all duration-300 text-center"
        >
          Digital Paintings
        </Link>
        <Link 
          href="/about" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="block text-gray-600 hover:bg-white px-4 py-3 rounded-full transition-all duration-300 text-center"
        >
          About
        </Link>
        <Link 
          href="/contact" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="block text-gray-600 hover:bg-white px-4 py-3 rounded-full transition-all duration-300 text-center"
        >
          Contact
        </Link>
      </div>
    </div>
    )}
  </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-6 md:mt-8">
        
          <div className="text-center mb-4">
            <h1 className="text-xl md:text-2xl font-bold text-black">Digital Paintings from the Heart</h1>
          </div>

      </div>

      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-sm md:text-lg text-gray-800 mb-4 px-4 md:px-0">Each painting is a reflection of my emotions and thoughts, created to capture moments, tell silent stories, and express what words often cannot.</h2>
       
      </div>

      {/* ✅ Image Slider */}
       <div className="relative max-w-4xl mx-auto pb-10 px-4 md:px-0">
      <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-100">
        <div
          className="flex transition-transform duration-500 ease-in-out will-change-transform"
          style={{ 
            transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
            backfaceVisibility: 'hidden'
          }}
        >
          {images.map((src, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Image
              width={600}
              height={600}
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-64 md:h-96 object-cover block"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1.5 md:p-2 shadow-lg transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-800" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1.5 md:p-2 shadow-lg transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-800" />
            </button>
          </>
        )}
      </div>

      {/* Dot Navigation */}
      {images.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#F9DBC1] border-2 border-gray-800"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">
            {currentIndex + 1} of {images.length}
          </span>
        </div>
      )}

<div className="max-w-7xl mx-auto px-4 md:px-8 mt-6 md:mt-8">
        
          <div className="text-center mb-4">
           <a
  href="https://www.instagram.com/hasrat_hues?igsh=MWk2M2tuN2U0bDR0OA%3D%3D&utm_source=qr" 
  target="_blank" 
  rel="noopener noreferrer"
  className="px-4 cursor-pointer items-center flex justify-center py-2 rounded-full transition-all duration-300 transform hover:scale-105 inline-block bg-[#F9DBC0] text-gray-800 shadow-sm"
>
  View on Instagram
</a>

          </div>

      </div>

      
    </div>



         <footer className="bg-[#6B6158] px-4 md:px-8 py-8 md:py-12">
  <div className="max-w-6xl mx-auto">
    {/* Copyright */}
    <div className="mb-6 md:mb-8">
      <p className="text-white text-sm">© 2025 Shagufta Zabin</p>
    </div>

    {/* Navigation Links */}
    <nav className="flex flex-wrap gap-3 md:gap-6 mb-6 justify-center md:justify-start">
      <Link href="#" className="text-white hover:text-[#363444] transition-colors duration-200 hover:bg-white bg-opacity-20 px-3 md:px-4 py-2 rounded-full text-sm md:text-base">
        Home
      </Link>
      <Link href="/work" className="text-white hover:text-[#363444] transition-colors duration-200 hover:bg-white bg-opacity-20 px-3 md:px-4 py-2 rounded-full text-sm md:text-base">
        Work
      </Link>
      <Link href="/digitalpainting" className="text-white hover:text-[#363444] transition-colors duration-200 hover:bg-white bg-opacity-20 px-3 md:px-4 py-2 rounded-full text-sm md:text-base">
        Digital Paintings
      </Link>
      <Link href="/about" className="text-white hover:text-[#363444] transition-colors duration-200 hover:bg-white bg-opacity-20 px-3 md:px-4 py-2 rounded-full text-sm md:text-base">
        About
      </Link>
      <Link href="/contact" className="text-white hover:text-[#363444] transition-colors duration-200 hover:bg-white bg-opacity-20 px-3 md:px-4 py-2 rounded-full text-sm md:text-base">
        Contact
      </Link>
    </nav>

    {/* Social Media Icons */}
    <div className="flex gap-3 justify-center md:justify-start">
      <a
        href="https://www.instagram.com/hasrat_hues?igsh=MWk2M2tuN2U0bDR0OA%3D%3D&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#E1306C] p-2 rounded-sm hover:bg-opacity-80 transition-colors duration-200"
      >
        <Instagram size={20} color="white" />
      </a>
      <a
      
        href="https://www.linkedin.com/in/shagufta-zabin"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#0077B5] p-2 rounded-sm hover:bg-opacity-80 transition-colors duration-200"
      >
        <Linkedin size={20} color="white" />
      </a>
    </div>
  </div>
</footer>

    </>
  );
}

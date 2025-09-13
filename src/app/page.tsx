"use client";


import {  useState } from "react";
import { Instagram } from 'lucide-react';
import { Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  
  const slides = [
    {
      id: 1,
      image: "/path5.png",
      alt: "Print Design",
      bgColor: "bg-blue-100",
      numberBg: "bg-blue-100"
    },
    {
      id: 2,
      image: "/path4.png", 
      alt: "Marketing Design",
      bgColor: "bg-orange-100",
      numberBg: "bg-orange-100"
    },
    {
      id: 3,
      image: "/path1.png",
      alt: "Product Design", 
      bgColor: "bg-pink-100",
      numberBg: "bg-pink-100"
    },
    {
      id: 4,
      image: "/path3.png",
      alt: "Web Design",
      bgColor: "bg-green-100",
      numberBg: "bg-green-100"
    },
    {
      id: 5,
      image: "/path2.png",
      alt: "Digital Painting",
      bgColor: "bg-purple-200",
      numberBg: "bg-purple-200"
    }
  ];

  const visibleSlides = slides.slice(currentSlide, currentSlide + 3);


 

   const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      Math.min(prev + 1, slides.length - 3)
    );
  };

  return (
    <>
    <div className="min-h-screen bg-[url('/page1bg.png')] ">
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
     <div className="flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh] px-4 md:px-8 mt-8 md:mt-[4rem] text-center">
  <div className="mb-6 md:mb-8">
    <Image
      src="/photo.png"
      height={180}
      width={180}
      alt="Shagufta Zabin"
      className="rounded-full mx-auto md:w-[250px] md:h-[250px]"
    />
  </div>
  <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 px-4">
    Hi, I&apos;m Shagufta Zabin
  </h1>
  
  <p className="text-lg sm:text-xl text-gray-700 mb-6 md:mb-8 max-w-md px-4">
    Creative Head. Product Designer. Artist.
  </p>
  
  <p className="text-sm sm:text-base text-gray-600 max-w-2xl mb-8 md:mb-12 leading-relaxed px-4">
    I craft digital experiences that blend logic with emotion — from scalable design systems to artistic expressions rooted in culture and calm.
  </p>
  
  {/* CTA Buttons */}
  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 px-4">
    <Link href="/work">
      <button className="w-full sm:w-auto bg-orange-200 cursor-pointer hover:bg-orange-300 text-gray-800 px-6 py-3 rounded-full font-medium transition-colors">
        View My Work
      </button>
    </Link>
    <Link href="/about">
      <button className="w-full sm:w-auto bg-white hover:bg-gray-50 cursor-pointer text-gray-800 px-6 py-3 rounded-full font-medium border border-gray-200 transition-colors">
        About Me
      </button>
    </Link>
  </div>
</div>

      {/* The Path That Shaped Me Section */}
     <div className="py-12 md:py-20 px-4 md:px-8 bg-[#FCFCFC]">
  <div className="max-w-6xl mx-auto">
    {/* Section Title */}
    <div className="text-center mb-8 md:mb-16">
      <div className="inline-block bg-[url('/vector.png')] bg-cover bg-center rounded-full px-4 md:px-8 py-3 mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">The Path That Shaped Me</h2>
      </div>
    </div>

    {/* Timeline */}
    <div className="relative">
      {/* Prev Button */}
      <button
        onClick={handlePrev}
        disabled={currentSlide === 0}
        className="absolute left-0 md:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:bg-gray-100 transition-colors z-10 disabled:opacity-30 bg-white rounded-full shadow-md"
      >
        <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentSlide >= slides.length - 3}
        className="absolute right-0 md:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:bg-gray-100 transition-colors z-10 disabled:opacity-30 bg-white rounded-full shadow-md"
      >
        <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Items */}
      <div className="flex justify-center items-center space-x-4 md:space-x-8 lg:space-x-16 px-8 md:px-16 overflow-hidden">
        {visibleSlides.map((slide) => (
          <div key={slide.id} className={`text-center relative ${slide.bgColor} p-2 md:p-4 rounded-xl shadow-md flex-shrink-0`}>
            <Image 
              src={slide.image} 
              alt={slide.alt} 
              width={200}
              height={200}
              className="w-32 h-40 sm:w-48 sm:h-64 md:w-60 md:h-80 lg:w-72 lg:h-96 object-contain mx-auto" />
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

    {/* Featured Projects Section */}
      <div className="px-4 md:px-8 lg:px-[10rem] rounded bg-[#FCFCFC]">
  <div className="py-12 md:py-20 px-4 md:px-8 bg-[#F5F1E8] rounded-2xl md:rounded-4xl">
    <div className="max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center justify-center mb-8 md:mb-12">
        <div className="flex items-center bg-[url('/featuredbg.png')] bg-cover bg-center">
          <div className="rounded-full px-4 md:px-6 py-2 mr-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Featured Projects</h2>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="relative">
        <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
          {/* Left Side - Project Info */}
          <div className="w-full lg:flex-1 lg:max-w-lg">
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
                RevUp – Streamlining API Access for Developers
              </h3>
              
              <div className="mb-4">
                <span className="text-sm text-gray-600">Role: </span>
                <span className="text-sm text-gray-800">Sole Product Designer</span>
              </div>
              
              <div className="mb-4">
                <span className="text-sm text-gray-600">Challenge: </span>
                <span className="text-sm text-gray-800">Developers had to go through sales just to use the API.</span>
              </div>
              
              <div className="mb-6">
                <span className="text-sm text-gray-600">Solution: </span>
                <span className="text-sm text-gray-800">Designed a self-serve platform for instant API access.</span>
              </div>
              
              <button className="w-full sm:w-auto bg-[#F9DBC0] hover:bg-[#D8A373] text-[#363444] px-4 py-2 rounded-xl text-sm font-medium transition-colors">
                View Case Study
              </button>
            </div>
          </div>

          {/* Right Side - Project Image */}
          <div className="w-full lg:flex-1 relative">
            <div className="overflow-hidden rounded-lg">
              <Image
                width={600}
                height={600}
                src="/featured.png"
                alt="Dashboard Preview"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Beyond Design Section */}
     <div className="py-20 px-8 bg-[#FCFCFC]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title with Pink Background */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="bg-[url('/beyondbg.png')] bg-cover bg-center rounded-full px-8 py-3 transform">
              <h2 className="text-2xl font-bold text-gray-800">Beyond Design</h2>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <p className="text-gray-700 text-lg">
            When I&apos;m not designing, I paint.
          </p>
          
          <p className="text-gray-700 text-lg">
            It&apos;s my way of listening to what the heart feels when words fall short.
          </p>
          
          <p className="text-gray-700 text-lg mb-8">
            Art lets me stay curious, soft, and expressive — which shows up in how I approach human-centered design.
          </p>
          
          <Link href={"/digitalpainting"}>
          <button className="bg-[#F9DBC0] cursor-pointer hover:bg-[#D8A373] text-gray-800 px-6 py-3 rounded-full font-medium transition-colors">
            View My Gallery
          </button>
          </Link>
        </div>
      </div>
    </div>


 

     

{/* Call to Collaborate Section */}

     <div className="bg-[#FCFCFC] py-5 px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title with Blue Background */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="bg-[url('/callbg.png')] bg-cover bg-center px-8 py-3 rounded-full">
              <h2 className="text-2xl font-bold text-gray-800">Call to Collaborate</h2>
            </div>
          </div>
        </div>

        {/* Main Message */}
        <div className="mb-12">
          <p className="text-xl text-gray-800 font-medium">
            Let&apos;s build something meaningful together.
          </p>
        </div>

        {/* Contact Button */}
        <div className="mb-6">
          <Link href="/contact">
          <button className="bg-orange-200 cursor-pointer hover:bg-orange-300 transition-colors duration-200 px-8 py-3 rounded-full font-medium text-gray-800">
            Contact Me
          </button>
          </Link>
        </div>

        {/* Or Text */}
        <div className="mb-4">
          <p className="text-gray-600">Or</p>
        </div>

        {/* Email Link */}
        <div>
          <p className="text-gray-600">
            write to: <span className="text-gray-800 font-medium">shagufta@featherpulp.com</span>
          </p>
        </div>
      </div>
    </div>


      {/* Footer Section */}
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

    </div>

    </>
  );
}
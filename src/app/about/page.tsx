"use client";

import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function About() {
   
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  return (
    <>
  
    <div className="min-h-screen bg-[url('/page1bg.png')]">
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
    <div className="flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh] px-4 md:px-8 mt-8 md:mt-[3rem] text-center">
  <div className="mb-6 md:mb-8">
    <Image
      src="/photo.png"
      height={180}
      width={180}
      alt="Shagufta Zabin"
      className="rounded-full mx-auto md:w-[250px] md:h-[250px]"
    />
  </div>
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-4">
    Hi, I&apos;m Shagufta Zabin
  </h1>
  
  <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 md:mb-8 max-w-2xl px-4">
    A designer with 10 years of experience in shaping thoughtful visuals and user-friendly journeys. From crafting brand stories to building intuitive products, my work blends structure with soul
  </p>
  
  <p className="text-sm sm:text-base text-gray-600 max-w-2xl mb-8 md:mb-12 leading-relaxed px-4">
    I lead with curiosity, create with clarity, and always design with intent — whether it&apos;s a user flow, a poster, or a painting straight from the heart.
  </p>
  
  {/* CTA Buttons */}
  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 px-4">
    <button className="w-full sm:w-auto bg-orange-200 hover:bg-orange-300 text-gray-800 px-6 py-3 rounded-full font-medium transition-colors">
      View My Work
    </button>
    <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-full font-medium border border-gray-200 transition-colors">
      About Me
    </button>
  </div>
</div>

   
    </div>

    <div className="w-full bg-[#FCFCFC]">
           {/* More Than UX Section */}
      <div className="px-4 md:px-8 py-12 md:py-16 max-w-6xl mx-auto bg-[#FCFCFC]">
  {/* Section Title */}
  <div className="text-center mb-12 md:mb-16">
    <div className="bg-[url('/morethanuxvector.png')] bg-cover bg-center bg-no-repeat inline-block px-4">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800">More Than UX</h2>
    </div>
  </div>

  {/* Section Content */}
  <div className="text-center mb-8 md:mb-12 px-4">
    <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
      Over the last 10 years, I&apos;ve explored many dimensions of design—each one adding a new 
      layer to my creative toolkit. These additional skills support and enrich my UX/UI work, 
      helping me tell better stories and craft more holistic experiences.
    </p>
  </div>

  {/* Skills and Illustration Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
    
    {/* Skills Section */}
    <div className="order-2 lg:order-1 p-4 md:p-8 rounded-lg bg-white/50 backdrop-blur-sm">
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 md:mb-6">My expanded skillset includes:</h3>
      
      <div className="space-y-4 md:space-y-6">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Corporate Identity</h4>
          <p className="text-gray-600 text-sm md:text-base">– Crafting visual languages that reflect brand values</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Brand Design</h4>
          <p className="text-gray-600 text-sm md:text-base">– Building memorable brands from scratch</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Illustration</h4>
          <p className="text-gray-600 text-sm md:text-base">– Adding personality and expression to interfaces and campaigns</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Motion Graphic Design</h4>
          <p className="text-gray-600 text-sm md:text-base">– Creating subtle movements that guide, delight, and inform</p>
        </div>
      </div>
    </div>

    {/* Illustration Section */}
    <div className="order-1 lg:order-2 p-4 md:p-8 rounded-lg bg-white/70 backdrop-blur-sm">
      <div className="relative">
        {/* Designer Illustration */}
        <Image
          width={600}
          height={600}
          src="/aboutimage.png"
          alt="Designer Illustration"
          className="w-full h-auto"
        />
        
        {/* Decorative elements */}
        <div className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 w-8 h-8 md:w-12 md:h-12 bg-green-200 rounded-full opacity-60"></div>
        <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-6 h-6 md:w-8 md:h-8 bg-purple-200 rounded-full opacity-60"></div>
      </div>
    </div>
  </div>
</div>

      {/* Let's Connect Section */}
     <div className="px-4 md:px-8 py-12 md:py-16">
  <div className="text-center">
    {/* Section Title */}
    <div className="mb-8 md:mb-12">
      <div className="inline-block bg-[url('/letsconnectvector.png')] bg-cover bg-center px-4 md:px-8 py-3">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Let&apos;s Connect</h2>
      </div>
    </div>

    {/* Content */}
    <div className="max-w-2xl mx-auto mb-6 md:mb-8 px-4">
      <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
        If you are building something meaningful — a product, a platform, 
        or a story worth telling — I&apos;d love to be part of it.
      </p>
      
      <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 font-medium">
        Let&apos;s create something together.
      </p>
    </div>

    {/* CTA Button */}
    <button className="w-full sm:w-auto bg-orange-200 hover:bg-orange-300 text-gray-800 px-8 py-3 rounded-full font-medium transition-colors transform hover:scale-105 max-w-xs mx-auto">
      Say Hello
    </button>
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

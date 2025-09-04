import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
   


  return (
    <>
  
    <div className="min-h-screen bg-[url('/page1bg.png')]">
      {/* Navigation */}
      <nav className="flex justify-center pt-8 px-12">
        <div className="bg-[#F9DBC1] rounded-full px-8 py-2 border border-[#C5A588] w-full max-w-screen-lg">
          <div className="flex items-center justify-between w-full">
            
            {/* Left - Name */}
            <Link href="/">
            <div className="text-lg font-medium text-gray-800">
              {/* Shagufta Zabin */}
              <Image src="/logo.png" alt="Shagufta Zabin" width={100} height={100} />
            </div>
            </Link>

            {/* Center - Links */}
            <div className="flex space-x-8">
              <Link href="/" className="text-gray-600 cursor-pointer hover:bg-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 inline-block">Home</Link>
              <Link href="/work" className="text-gray-600 cursor-pointer hover:bg-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 inline-block">Work</Link>
              <Link href="/digitalpainting" className="text-gray-600 cursor-pointer hover:bg-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 inline-block">Digital Paintings</Link>
            </div>

            {/* Right - Links */}
            <div className="flex space-x-8">
              <Link href="/about" className="bg-white text-gray-800 shadow-md cursor-pointer px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 inline-block">About</Link>
              <Link href="/contact" className="text-gray-600 hover:bg-white px-4 py-2 cursor-pointer rounded-full transition-all duration-300 transform hover:scale-105 inline-block ">Contact</Link>
            </div>

          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-8 mt-[3rem] text-center">
             <div className="mb-8">
            <Image
              src="/photo.png"
              height={250}
              width={250}
              alt="Shagufta Zabin"
              className="rounded-full mx-auto" // Added rounded-full for circular image and mx-auto for centering
            />
          </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Hi, I&apos;m Shagufta Zabin
        </h1>
        
        <p className="text-md text-gray-700 mb-8 max-w-2xl">
          A designer with 10 years of experience in shaping thoughtful visuals and user-friendly journeys. From crafting brand stories to building intuitive products, my work blends structure with soul
        </p>
        
        <p className="text-gray-600 max-w-2xl mb-12 leading-relaxed">
          I lead with curiosity, create with clarity, and always design with intent — whether it&apos;s a user flow, a poster, or a painting straight from the heart.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex space-x-4">
          <button className="bg-orange-200 hover:bg-orange-300 text-gray-800 px-6 py-3 rounded-full font-medium transition-colors">
            View My Work
          </button>
          <button className="bg-white hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-full font-medium border border-gray-200 transition-colors">
            About Me
          </button>
        </div>
      </div>

   
    </div>

    <div className="w-full bg-[#FCFCFC]">
           {/* More Than UX Section */}
      <div className=" px-8 py-16 max-w-6xl mx-auto bg-[#FCFCFC] ">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className=" bg-[url('/morethanuxvector.png')] bg-cover bg-center bg-no-repeat inline-block">
            <h2 className="text-2xl font-semibold text-gray-800">More Than UX</h2>
          </div>
        </div>

        {/* Section Content */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Over the last 10 years, I&apos;ve explored many dimensions of design—each one adding a new 
            layer to my creative toolkit. These additional skills support and enrich my UX/UI work, 
            helping me tell better stories and craft more holistic experiences.
          </p>
        </div>

        {/* Skills and Illustration Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Skills Section */}
          <div className="p-8 rounded-lg bg-white/50 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">My expanded skillset includes:</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Corporate Identity</h4>
                <p className="text-gray-600">– Crafting visual languages that reflect brand values</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Brand Design</h4>
                <p className="text-gray-600">– Building memorable brands from scratch</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Illustration</h4>
                <p className="text-gray-600">– Adding personality and expression to interfaces and campaigns</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Motion Graphic Design</h4>
                <p className="text-gray-600">– Creating subtle movements that guide, delight, and inform</p>
              </div>
            </div>
          </div>

          {/* Illustration Section */}
          <div className=" p-8 rounded-lg bg-white/70 backdrop-blur-sm">
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
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-200 rounded-full opacity-60"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-200 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Let's Connect Section */}
      <div className="px-8 py-16">
        <div className="text-center">
          {/* Section Title */}
          <div className="mb-12">
            <div className="inline-block bg-[url('/letsconnectvector.png')] bg-cover bg-center px-8 py-3">
              <h2 className="text-2xl font-semibold text-gray-800">Let&apos;s Connect</h2>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg text-gray-700 mb-6">
              If you are building something meaningful — a product, a platform, 
              or a story worth telling — I&apos;d love to be part of it.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 font-medium">
              Let&apos;s create something together.
            </p>
          </div>

          {/* CTA Button */}
          <button className="bg-orange-200 hover:bg-orange-300 text-gray-800 px-8 py-3 rounded-full font-medium transition-colors transform hover:scale-105">
            Say Hello
          </button>
        </div>
      </div>
    </div>

      <footer className="bg-[#6B6158] px-8 py-12">
                      <div className="max-w-6xl mx-auto">
                        {/* Copyright */}
                        <div className="mb-8">
                          <p className="text-white text-sm">© 2025 Shagufta Zabin</p>
                        </div>
              
                        {/* Navigation Links */}
                        <nav className="flex flex-wrap gap-6 mb-6">
                          <Link href="#" className="text-white hover:text-[#363444] transition-colors duration-200 hover:bg-white bg-opacity-20 px-4 py-2 rounded-full">
                            Home
                          </Link>
                          <Link href="/work" className="text-white hover:text-[#363444] transition-colors duration-200 hover:bg-white bg-opacity-20 px-4 py-2 rounded-full">
                            Work
                          </Link>
                          <Link href="/digitalpainting" className="text-white hover:text-[#363444] transition-colors duration-200 hover:bg-white bg-opacity-20 px-4 py-2 rounded-full">
                            Digital Paintings
                          </Link>
                          <Link href="/about" className="text-white hover:text-[#363444] transition-colors duration-200 hover:bg-white bg-opacity-20 px-4 py-2 rounded-full">
                            About
                          </Link>
                          <Link href="/contact" className="text-white hover:text-[#363444] transition-colors duration-200 hover:bg-white bg-opacity-20 px-4 py-2 rounded-full">
                            Contact
                          </Link>
                        </nav>
              
                        {/* Social Media Icons */}
                        <div className="flex gap-3">
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

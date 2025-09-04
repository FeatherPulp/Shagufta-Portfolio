import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {

  return (
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
              <Link href="/about" className="text-gray-600 cursor-pointer hover:bg-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 inline-block">About</Link>
              <Link href="/contact" className="bg-white text-gray-800 cursor-pointer shadow-md  px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 inline-block">Contact</Link>
            </div>

          </div>
        </div>
      </nav>


      {/* Main Content */}
      <div className="flex items-start justify-between max-w-screen-lg mx-auto px-12 pt-16 pb-20">
        
        {/* Left Side - Text Content */}
        <div className="w-1/2 pr-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-8 leading-tight">
            Let&apos;s Connect
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Have a project idea, a design question, or just want to talk creativity?
          </p>
          
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            I&apos;d love to hear from you — whether it&apos;s to collaborate, share ideas, or build something meaningful together.
          </p>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Drop me a mail</h3>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#F9DBC1] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <span className="text-gray-700">shagufta.zabin@gmail.com</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Or just connect with me on social platforms</h3>
              <div className="flex space-x-3">
                {/* LinkedIn */}
                <div className="w-10 h-10  bg-[#0077B5] rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <a
                           href="https://www.linkedin.com/in/shagufta-zabin"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="bg-[#0077B5] p-2 rounded-sm hover:bg-opacity-80 transition-colors duration-200"
                         
                         >
                           <Linkedin size={20} color="white" />
                         </a>
                </div>
                
                {/* Instagram */}
                <div className="w-10 h-10 bg-[#E1306C] rounded-lg flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all cursor-pointer">
                    <a
                           href="https://www.instagram.com/hasrat_hues?igsh=MWk2M2tuN2U0bDR0OA%3D%3D&utm_source=qr"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="bg-[#E1306C] p-2 rounded-sm hover:bg-opacity-80 transition-colors duration-200"
                         >
                           <Instagram size={20} color="white" />
                         </a>
                         
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Empty Space for Form */}
        <div className="w-1/2 pl-16">
          {/* Empty space where the form would go */}
          <div className="h-96  rounded-lg flex items-center justify-center mt-15">
             <Image
                  src="/contact.png"
                  height={350}
                  width={350}
                  alt="Shagufta Zabin"
                  className="rounded-full mx-auto" 
                />
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
    </div>

    
  );
};



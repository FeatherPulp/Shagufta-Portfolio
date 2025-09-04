"use client";


import {  useState } from "react";
import { Instagram } from 'lucide-react';
import { Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  
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
              <Link href="/" className="text-gray-600 cursor-pointer  hover:bg-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 inline-block">Home</Link>
              <Link href="/work" className="text-gray-600 cursor-pointer   hover:bg-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 inline-block">Work</Link>
              <Link href="/digitalpainting" className="text-gray-600 cursor-pointer  hover:bg-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 inline-block">Digital Paintings</Link>
            </div>

            {/* Right - Links */}
            <div className="flex space-x-8">
              <Link href="/about" className="text-gray-600 cursor-pointer  hover:bg-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 inline-block">About</Link>
              <Link href="/contact" className="text-gray-600 cursor-pointer  hover:bg-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 inline-block">Contact</Link>
            </div>

          </div>
        </div>
      </nav>

      
     

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-8 mt-[4rem] text-center">
         <div className="mb-8">
    <Image
      src="/photo.png"
      height={250}
      width={250}
      alt="Shagufta Zabin"
      className="rounded-full mx-auto" // Added rounded-full for circular image and mx-auto for centering
    />
  </div>
        <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-4">
          Hi, I&apos;m Shagufta Zabin
        </h1>
        
        <p className="text-xl text-gray-700 mb-8 max-w-md">
          Creative Head. Product Designer. Artist.
        </p>
        
        <p className="text-gray-600 max-w-2xl mb-12 leading-relaxed">
          I craft digital experiences that blend logic with emotion — from scalable design systems to artistic expressions rooted in culture and calm.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex space-x-4">
          <Link href="/work">
          <button className="bg-orange-200 cursor-pointer hover:bg-orange-300 text-gray-800 px-6 py-3 rounded-full font-medium transition-colors">
            View My Work
          </button>
          </Link>
          <Link href="/about">
          <button className="bg-white hover:bg-gray-50 cursor-pointer text-gray-800 px-6 py-3 rounded-full font-medium border border-gray-200 transition-colors">
            About Me
          </button>
          </Link>
        </div>
      </div>

      {/* The Path That Shaped Me Section */}
      <div className="py-20 px-8 bg-[#FCFCFC]">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[url('/vector.png')] bg-cover bg-center rounded-full px-8 py-3 mb-8">
            <h2 className="text-2xl font-bold text-gray-800">The Path That Shaped Me</h2>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            disabled={currentSlide === 0}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors z-10 disabled:opacity-30"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentSlide >= slides.length - 3}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors z-10 disabled:opacity-30"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Items */}
          <div className="flex justify-center items-center space-x-16 px-16">
            {visibleSlides.map((slide) => (
              <div key={slide.id} className={`text-center relative ${slide.bgColor} p-4 rounded-xl shadow-md`}>
                <Image 
                src={slide.image} 
                alt={slide.alt} 
                width={300}
                height={300}
                className="w-72 h-96 object-contain mx-auto" />
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Featured Projects Section */}
      <div className="px-[10rem] rounded bg-[#FCFCFC]">
      <div className="py-20 px-8 bg-[#F5F1E8] rounded-4xl ">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-center mb-12 ">
          <div className="flex items-center  bg-[url('/featuredbg.png')] bg-cover bg-center ">
            <div className=" rounded-full px-6 py-2 mr-4">
              <h2 className="text-2xl font-bold text-gray-800">Featured Projects</h2>
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="relative">
          <div className="flex items-start space-x-8">
            {/* Left Side - Project Info */}
            <div className="flex-1 max-w-lg">
              <div className="  p-6 ">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
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
                
                <button className="bg-[#F9DBC0] hover:bg-[#D8A373] text-[#363444] px-4 py-2 rounded-xl w-58 text-sm font-medium transition-colors">
                  View Case Study
                </button>
              </div>
            </div>

            {/* Right Side - Project Image */}
          <div className="flex-1 relative">
  <div className=" overflow-hidden ">
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

     {/* What People Say Section
     <div className="px-[10rem] rounded bg-[#FCFCFC]">
      <div className="py-20 px-8 bg-[#DBFFF1] rounded-4xl">
      <div className="max-w-6xl mx-auto">
        Section Title with Green Background
        <div className="flex justify-center mb-16">
          <div className="relative">
            <div className="bg-[url('/whatbg.png')] bg-cover  px-8 py-4 ">
              <h2 className="text-2xl font-bold text-gray-800">What People Say</h2>
            </div>
          </div>
        </div>

        Main Quote
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="89" height="84" viewBox="0 0 89 84" fill="none">
<path d="M68.5932 83.9962C68.2976 83.9956 68.0088 83.9073 67.7634 83.7426C67.5179 83.5779 67.3268 83.3441 67.2141 83.0708C67.1014 82.7975 67.0723 82.4969 67.1304 82.207C67.1886 81.9172 67.3313 81.6511 67.5406 81.4423L68.2105 80.7754L65.9496 82.0763C65.6336 82.2637 65.2597 82.3282 64.8992 82.2575C64.5387 82.1868 64.2169 81.9859 63.9951 81.6931C63.7732 81.4003 63.667 81.036 63.6965 80.6699C63.7261 80.3037 63.8894 79.9612 64.1553 79.7078L71.2369 72.8714L61.7269 78.359C61.3973 78.5479 61.0083 78.6042 60.6386 78.5166C60.269 78.4289 59.9466 78.2039 59.7369 77.8872C59.5272 77.5705 59.4458 77.1859 59.5094 76.8114C59.5729 76.4369 59.7766 76.1007 60.0791 75.8709L63.5033 73.299C63.1991 73.2891 62.9051 73.1866 62.6607 73.0051C62.4163 72.8237 62.233 72.572 62.1355 72.2836C62.038 71.9952 62.0308 71.684 62.1149 71.3914C62.199 71.0989 62.3704 70.8389 62.6062 70.6464L69.0329 65.389L67.4658 66.2862C67.1478 66.4568 66.7788 66.5067 66.4269 66.4266C66.0749 66.3464 65.7639 66.1417 65.5511 65.8502C65.3383 65.5587 65.2381 65.2001 65.269 64.8405C65.2999 64.4809 65.4599 64.1446 65.7193 63.8937L73.7938 56.6596L69.8044 58.9593C69.4863 59.1321 69.1163 59.1837 68.763 59.1044C68.4098 59.025 68.0973 58.8203 67.8836 58.528C67.6699 58.2358 67.5695 57.8759 67.601 57.5153C67.6325 57.1546 67.7938 56.8176 68.0549 56.5669L74.4488 50.8011L71.0634 52.7539C70.7406 52.9404 70.3597 52.9995 69.9955 52.9197C69.6313 52.8399 69.3101 52.6269 69.0948 52.3225C68.8795 52.0181 68.7857 51.6442 68.8318 51.2743C68.8779 50.9043 69.0605 50.5649 69.3439 50.3226L72.7741 47.3948L71.6705 48.0318C71.349 48.2186 70.9694 48.2789 70.6058 48.201C70.2422 48.123 69.9207 47.9124 69.7041 47.6102C69.4874 47.308 69.3911 46.9359 69.434 46.5665C69.4769 46.1971 69.6559 45.857 69.936 45.6124L73.7161 42.2989L72.0025 43.2858C71.682 43.4708 71.3043 43.5305 70.9424 43.4532C70.5805 43.3759 70.2601 43.1671 70.0432 42.8673C69.8263 42.5674 69.7283 42.1978 69.7682 41.8298C69.808 41.4619 69.9829 41.1218 70.259 40.8754L74.2095 37.3585L70.5042 39.4938C70.1801 39.6771 69.7992 39.7328 69.4362 39.6501C69.0731 39.5675 68.754 39.3523 68.5412 39.0467C68.3284 38.7412 68.2372 38.3672 68.2856 37.998C68.3339 37.6288 68.5183 37.2909 68.8026 37.0505L71.4941 34.8165L63.3717 39.4669C63.0424 39.6584 62.6524 39.7171 62.2813 39.6308C61.9102 39.5446 61.5861 39.3199 61.375 39.0027C61.1639 38.6856 61.0819 38.2998 61.1456 37.9242C61.2094 37.5486 61.4141 37.2115 61.718 36.9817L66.3114 33.4947L56.0897 39.3951C55.7579 39.5855 55.3656 39.6415 54.9938 39.5515C54.6219 39.4615 54.2987 39.2324 54.0906 38.9113C53.8825 38.5902 53.8055 38.2016 53.8753 37.8254C53.9451 37.4492 54.1564 37.1141 54.4659 36.889L61.5983 31.7303L52.3007 37.1133C51.9691 37.3067 51.5759 37.3652 51.2023 37.2767C50.8288 37.1881 50.5036 36.9593 50.2942 36.6376C50.0847 36.3159 50.007 35.926 50.0771 35.5486C50.1472 35.1712 50.3598 34.8352 50.6708 34.6102L62.5015 25.9884L51.1374 32.5676C50.8048 32.7573 50.4121 32.8122 50.0403 32.721C49.6684 32.6298 49.3457 32.3995 49.1387 32.0774C48.9316 31.7553 48.856 31.3661 48.9274 30.9899C48.9988 30.6138 49.2118 30.2794 49.5225 30.0556L59.0923 23.2371L51.1284 27.8037C50.8029 27.9871 50.4205 28.042 50.0566 27.9576C49.6926 27.8732 49.3734 27.6556 49.1619 27.3476C48.9503 27.0397 48.8617 26.6637 48.9135 26.2937C48.9653 25.9237 49.1537 25.5865 49.4417 25.3484L64.3467 13.2935L51.1284 20.9254C50.7981 21.1132 50.4088 21.1682 50.0394 21.0792C49.67 20.9903 49.3484 20.7641 49.1397 20.4466C48.9311 20.1291 48.8512 19.7441 48.9161 19.3698C48.9811 18.9954 49.1861 18.6599 49.4896 18.4313L51.583 16.8881L51.1374 17.1453C50.8103 17.3327 50.4246 17.3896 50.0574 17.3048C49.6902 17.2199 49.3685 16.9995 49.1568 16.6877C48.9452 16.3758 48.8591 15.9956 48.9158 15.6229C48.9725 15.2503 49.1678 14.9129 49.4627 14.6781L50.7217 13.6793C50.4738 13.7363 50.2154 13.7292 49.971 13.6586C49.7266 13.5879 49.5043 13.4561 49.3251 13.2755C49.0923 13.0395 48.9445 12.7329 48.905 12.4037C48.8655 12.0746 48.9365 11.7417 49.1068 11.4573L51.9747 6.64548C51.6301 6.84377 51.2208 6.89703 50.8369 6.79356C50.453 6.69008 50.126 6.43835 49.9277 6.09373C49.7294 5.74911 49.6761 5.33983 49.7796 4.95593C49.8831 4.57204 50.1348 4.24497 50.4794 4.04669L55.4348 1.18772C55.7211 1.02388 56.0535 0.959306 56.3804 1.00406C56.7072 1.04882 57.01 1.2004 57.2417 1.43518C57.4734 1.66996 57.621 1.97478 57.6615 2.30215C57.7019 2.62953 57.633 2.96109 57.4654 3.24521L54.6034 8.066L66.5208 1.18772C66.8473 1.0048 67.2306 0.950981 67.5948 1.0369C67.9591 1.12281 68.2779 1.34221 68.4883 1.65176C68.6987 1.96131 68.7853 2.3385 68.7311 2.70882C68.6769 3.07914 68.4858 3.41567 68.1955 3.65193L67.2983 4.3607L72.801 1.18772C73.1312 0.999952 73.5206 0.944947 73.89 1.03387C74.2593 1.1228 74.581 1.34899 74.7896 1.6665C74.9982 1.98401 75.0782 2.36903 75.0132 2.74335C74.9482 3.11767 74.7432 3.45321 74.4398 3.68183L72.3464 5.22198L79.3533 1.18772C79.6788 1.0043 80.0611 0.949393 80.4251 1.03379C80.7891 1.11819 81.1082 1.33579 81.3198 1.64374C81.5314 1.9517 81.6199 2.3277 81.5682 2.69771C81.5164 3.06772 81.3279 3.40494 81.04 3.64297L66.141 15.6979L84.9008 4.86611C85.2333 4.6764 85.626 4.62148 85.9979 4.71269C86.3697 4.8039 86.6924 5.03427 86.8994 5.35633C87.1065 5.6784 87.1821 6.06762 87.1107 6.44377C87.0393 6.81993 86.8263 7.15437 86.5157 7.37816L76.9459 14.1937L85.3553 9.33998C85.6869 9.14654 86.0802 9.08804 86.4537 9.17659C86.8272 9.26513 87.1524 9.49394 87.3618 9.81563C87.5713 10.1373 87.649 10.5273 87.5789 10.9047C87.5088 11.2821 87.2962 11.6181 86.9852 11.8431L75.1605 20.4618L85.3553 14.5764C85.6872 14.386 86.0794 14.33 86.4513 14.42C86.8232 14.51 87.1464 14.7391 87.3545 15.0602C87.5625 15.3813 87.6396 15.7699 87.5698 16.1461C87.5 16.5223 87.2886 16.8575 86.9792 17.0825L79.8377 22.2472L85.3553 19.0623C85.6845 18.8749 86.0725 18.8194 86.441 18.9071C86.8095 18.9947 87.131 19.2189 87.3405 19.5344C87.5501 19.8499 87.6321 20.2332 87.5701 20.6068C87.508 20.9805 87.3064 21.3166 87.0061 21.5474L82.4036 25.0434L85.3553 23.3418C85.6794 23.1585 86.0603 23.1027 86.4234 23.1854C86.7864 23.2681 87.1056 23.4832 87.3184 23.7888C87.5312 24.0943 87.6223 24.4683 87.574 24.8375C87.5256 25.2067 87.3413 25.5446 87.0569 25.785L84.3654 28.01L85.3493 27.4448C85.6698 27.2597 86.0475 27.2001 86.4095 27.2774C86.7714 27.3547 87.0917 27.5635 87.3086 27.8633C87.5255 28.1632 87.6235 28.5328 87.5837 28.9008C87.5438 29.2687 87.3689 29.6088 87.0928 29.8552L83.1393 33.3721L85.3493 32.1011C85.6704 31.9178 86.0481 31.8599 86.4093 31.9387C86.7706 32.0175 87.0898 32.2273 87.3055 32.5277C87.5211 32.8281 87.6178 33.1977 87.5768 33.5651C87.5359 33.9326 87.3603 34.2719 87.0839 34.5175L83.2948 37.837L85.3493 36.6557C85.6718 36.4729 86.0506 36.4163 86.4123 36.497C86.7741 36.5777 87.093 36.7898 87.3072 37.0923C87.5214 37.3948 87.6156 37.766 87.5716 38.1341C87.5276 38.5021 87.3484 38.8406 87.0689 39.0841L83.6417 42.0118L85.2237 41.1146C85.5419 40.9418 85.9119 40.8903 86.2651 40.9696C86.6184 41.0489 86.9308 41.2537 87.1445 41.5459C87.3582 41.8382 87.4587 42.198 87.4272 42.5587C87.3956 42.9193 87.2343 43.2563 86.9732 43.5071L80.5794 49.2729L84.6765 46.9074C84.9945 46.7367 85.3635 46.6868 85.7154 46.767C86.0673 46.8471 86.3784 47.0518 86.5912 47.3433C86.804 47.6348 86.9042 47.9934 86.8733 48.353C86.8423 48.7126 86.6824 49.0489 86.423 49.2998L78.3484 56.5429L83.4772 53.5853C83.802 53.4035 84.1829 53.3493 84.5454 53.4334C84.908 53.5175 85.2262 53.7337 85.4377 54.0399C85.6493 54.3461 85.7392 54.7202 85.6896 55.089C85.6401 55.4579 85.4548 55.795 85.1699 56.0345L78.7522 61.2979L81.9192 59.4707C82.2488 59.2819 82.6379 59.2255 83.0075 59.3132C83.3771 59.4008 83.6995 59.6258 83.9092 59.9425C84.1189 60.2592 84.2003 60.6438 84.1367 61.0183C84.0732 61.3928 83.8694 61.7291 83.567 61.9588L80.8456 64.0044C81.1581 63.961 81.4765 64.0176 81.7549 64.1661C82.0334 64.3146 82.2577 64.5475 82.3957 64.8312C82.5338 65.115 82.5786 65.4352 82.5236 65.746C82.4686 66.0567 82.3167 66.3421 82.0896 66.5613L75.008 73.3977L76.6767 72.4347C76.9908 72.2602 77.3573 72.2046 77.7091 72.2781C78.0608 72.3516 78.3743 72.5494 78.5922 72.8352C78.8101 73.121 78.9178 73.4757 78.8955 73.8343C78.8733 74.193 78.7226 74.5316 78.4711 74.7883L75.2712 77.9613C75.4339 78.0824 75.5694 78.2362 75.6689 78.4129C75.8665 78.7557 75.9201 79.1628 75.8181 79.5451C75.7161 79.9274 75.4667 80.2536 75.1246 80.4524L69.3409 83.7959C69.1142 83.9286 68.8559 83.9978 68.5932 83.9962Z" fill="#C7C0FA"/>
<path d="M19.5123 83.3715C19.2157 83.3714 18.9258 83.2832 18.6795 83.1179C18.4332 82.9527 18.2416 82.7179 18.1291 82.4435C18.0166 82.1691 17.9882 81.8674 18.0476 81.5768C18.107 81.2862 18.2514 81.0198 18.4626 80.8115L21.6894 77.6445L15.9236 80.973C15.6002 81.1549 15.2208 81.2101 14.859 81.1278C14.4972 81.0455 14.1789 80.8316 13.966 80.5277C13.7531 80.2238 13.6608 79.8517 13.707 79.4835C13.7532 79.1154 13.9346 78.7776 14.216 78.5357L19.5572 74.0499L14.0067 77.2528C13.6828 77.4384 13.3013 77.4962 12.937 77.4147C12.5727 77.3333 12.2521 77.1186 12.0381 76.8128C11.824 76.5069 11.7322 76.1321 11.7805 75.762C11.8288 75.3918 12.0138 75.0532 12.2991 74.8125L21.7164 66.9264L18.6062 68.7207C18.2769 68.9123 17.8868 68.9709 17.5158 68.8847C17.1447 68.7984 16.8205 68.5738 16.6094 68.2566C16.3984 67.9395 16.3163 67.5537 16.3801 67.1781C16.4438 66.8025 16.6485 66.4654 16.9524 66.2356L19.4316 64.3425C19.1406 64.3025 18.8679 64.1776 18.6474 63.9834C18.427 63.7893 18.2686 63.5346 18.1921 63.251C18.1155 62.9674 18.1242 62.6676 18.217 62.3889C18.3098 62.1102 18.4826 61.865 18.7138 61.6839L21.0076 59.8896H20.9837C20.6782 59.889 20.3803 59.7949 20.13 59.62C19.8796 59.445 19.6889 59.1976 19.5833 58.911C19.4778 58.6244 19.4626 58.3123 19.5397 58.0168C19.6168 57.7212 19.7826 57.4564 20.0147 57.2579L24.6112 53.3343L22.9335 54.3032C22.6183 54.4851 22.2475 54.5457 21.8908 54.4737C21.5341 54.4017 21.2158 54.2021 20.9957 53.9123C20.7756 53.6225 20.6687 53.2624 20.6952 52.8994C20.7216 52.5365 20.8794 52.1956 21.1392 51.9407L28.6814 44.572L23.8516 47.3592C23.5302 47.5431 23.1519 47.6011 22.7901 47.5221C22.4283 47.4431 22.1087 47.2327 21.8932 46.9315C21.6776 46.6304 21.5815 46.26 21.6234 45.892C21.6654 45.5241 21.8423 45.1848 22.1201 44.9398L25.7267 41.7848L24.1507 42.6819C23.8376 42.8625 23.4698 42.9236 23.1152 42.8539C22.7606 42.7842 22.4433 42.5884 22.2218 42.3028C22.0004 42.0172 21.8899 41.6611 21.9108 41.3003C21.9317 40.9395 22.0825 40.5985 22.3354 40.3403L29.4978 33.0434L18.3909 39.4671C18.0726 39.6422 17.7016 39.6954 17.347 39.617C16.9923 39.5385 16.6784 39.3336 16.4638 39.0406C16.2492 38.7476 16.1485 38.3865 16.1806 38.0247C16.2128 37.663 16.3755 37.3252 16.6384 37.0746L26.9468 27.6993L7.17029 39.1142C6.84056 39.3076 6.44932 39.3673 6.07693 39.2811C5.70454 39.195 5.37927 38.9695 5.16796 38.651C4.95665 38.3325 4.87533 37.9452 4.94071 37.5686C5.00608 37.192 5.21319 36.8547 5.51949 36.6261L17.9752 27.2238L3.62049 35.5166C3.29159 35.7066 2.90272 35.7643 2.53282 35.678C2.16293 35.5917 1.83974 35.3678 1.62887 35.0519C1.418 34.736 1.33526 34.3517 1.39746 33.977C1.45965 33.6023 1.6621 33.2653 1.96372 33.0344L18.7108 20.2647L3.27957 29.1616C2.9479 29.3475 2.55787 29.4001 2.18881 29.3087C1.81975 29.2172 1.4994 28.9886 1.29291 28.6694C1.08642 28.3501 1.0093 27.9642 1.07725 27.5901C1.1452 27.216 1.35311 26.8818 1.65869 26.6556L11.0879 19.861L3.27957 24.3678C2.94799 24.5612 2.55472 24.6197 2.1812 24.5312C1.80767 24.4426 1.48251 24.2138 1.27305 23.8921C1.06359 23.5704 0.985866 23.1805 1.05598 22.8031C1.1261 22.4257 1.33869 22.0897 1.64972 21.8647L7.20019 17.8214L3.27957 20.0823C2.95482 20.2641 2.57394 20.3183 2.21138 20.2342C1.84883 20.1501 1.53066 19.9338 1.31907 19.6277C1.10748 19.3215 1.01767 18.9474 1.0672 18.5785C1.11674 18.2097 1.30205 17.8725 1.58692 17.633L7.30187 12.9528L3.27957 15.2735C2.96155 15.4441 2.59252 15.494 2.24061 15.4139C1.88869 15.3338 1.57764 15.1291 1.36483 14.8376C1.15203 14.546 1.05185 14.1874 1.08277 13.8278C1.11369 13.4682 1.27363 13.1319 1.53308 12.881L3.70124 10.9342L3.27957 11.1764C2.97868 11.35 2.62676 11.4134 2.28423 11.3557C1.9417 11.298 1.62993 11.1229 1.40245 10.8604C1.17498 10.5979 1.04599 10.2644 1.03763 9.91716C1.02927 9.56991 1.14206 9.23058 1.35664 8.95744L3.04332 6.8132C2.75129 6.74494 2.48654 6.59045 2.28345 6.36979C2.08036 6.14913 1.94831 5.87251 1.90446 5.57584C1.8606 5.27917 1.90697 4.97617 2.03753 4.70619C2.16809 4.43621 2.37682 4.21173 2.6366 4.06189L7.59195 1.20292C7.89253 1.03086 8.24351 0.968476 8.58497 1.02642C8.92642 1.08436 9.23718 1.25904 9.46416 1.52062C9.69115 1.78221 9.8203 2.11448 9.82955 2.46069C9.8388 2.80691 9.72758 3.14559 9.51488 3.41892L8.4981 4.70785L14.5899 1.18797C14.9079 1.01731 15.2769 0.967447 15.6288 1.04757C15.9807 1.12769 16.2918 1.33239 16.5046 1.6239C16.7174 1.91541 16.8176 2.27406 16.7866 2.63365C16.7557 2.99324 16.5958 3.32952 16.3363 3.58042L14.1682 5.53025L21.7104 1.18797C22.0352 1.00309 22.4175 0.946581 22.782 1.02958C23.1465 1.11259 23.4666 1.32908 23.6794 1.6364C23.8921 1.94372 23.9821 2.31959 23.9315 2.68994C23.8809 3.06028 23.6934 3.39824 23.406 3.63723L17.694 8.30848L30.0451 1.18198C30.3766 0.988552 30.7699 0.930052 31.1434 1.0186C31.5169 1.10714 31.8421 1.33595 32.0516 1.65764C32.261 1.97933 32.3388 2.36926 32.2686 2.74668C32.1985 3.1241 31.9859 3.46009 31.6749 3.68509L26.1304 7.72233L35.2516 2.45896C35.5833 2.27305 35.9733 2.22047 36.3424 2.31192C36.7114 2.40337 37.0318 2.63198 37.2383 2.95124C37.4448 3.2705 37.5219 3.65644 37.4539 4.03053C37.386 4.40463 37.1781 4.73879 36.8725 4.96504L27.4492 11.7596L37.3958 6.01772C37.7246 5.83169 38.1116 5.77699 38.479 5.86461C38.8465 5.95222 39.1671 6.17566 39.3766 6.49002C39.586 6.80438 39.6688 7.18637 39.6081 7.55921C39.5474 7.93205 39.3479 8.26811 39.0496 8.49987L22.3025 21.2666L37.4826 12.5042C37.812 12.3135 38.2017 12.2556 38.5724 12.3423C38.943 12.4289 39.2666 12.6537 39.4773 12.9708C39.6881 13.2884 39.7696 13.6747 39.7051 14.0504C39.6406 14.4262 39.435 14.7631 39.1304 14.9924L26.6657 24.4037L37.4856 18.1594C37.8038 17.9843 38.1748 17.931 38.5295 18.0095C38.8841 18.088 39.198 18.2929 39.4126 18.5859C39.6273 18.8789 39.7279 19.24 39.6958 19.6017C39.6636 19.9635 39.5009 20.3012 39.238 20.5518L28.9236 29.9272L37.4856 24.9898C37.7985 24.8115 38.1654 24.7521 38.5187 24.8227C38.8719 24.8932 39.1878 25.0889 39.4083 25.3738C39.6288 25.6587 39.739 26.0136 39.7187 26.3733C39.6984 26.7329 39.549 27.0732 39.2978 27.3314L32.1414 34.6254L37.4856 31.5421C37.807 31.3582 38.1852 31.3002 38.5471 31.3792C38.9089 31.4582 39.2285 31.6686 39.444 31.9698C39.6595 32.2709 39.7556 32.6413 39.7137 33.0093C39.6718 33.3772 39.4948 33.7165 39.2171 33.9615L35.6075 37.1315L37.4915 36.0459C37.8068 35.8641 38.1775 35.8035 38.5343 35.8755C38.891 35.9474 39.2092 36.147 39.4293 36.4368C39.6494 36.7266 39.7563 37.0868 39.7299 37.4497C39.7035 37.8127 39.5456 38.1535 39.2859 38.4084L31.7497 45.7742L37.2673 42.5892C37.5905 42.402 37.972 42.3425 38.3369 42.4225C38.7018 42.5025 39.0235 42.7161 39.2387 43.0214C39.454 43.3267 39.5472 43.7014 39.5 44.072C39.4529 44.4425 39.2687 44.782 38.9838 45.0235L34.3903 48.9412L36.7379 47.5865C37.0652 47.4015 37.4502 47.3467 37.8161 47.4328C38.182 47.519 38.5021 47.7398 38.7125 48.0513C38.923 48.3628 39.0083 48.7421 38.9516 49.1138C38.895 49.4854 38.7004 49.8221 38.4067 50.0567L36.5734 51.4981C36.8518 51.4566 37.1362 51.496 37.3929 51.6116C37.6495 51.7272 37.8675 51.9141 38.0209 52.15C38.2308 52.4662 38.3128 52.8503 38.25 53.2246C38.1873 53.5989 37.9845 53.9353 37.6829 54.1657L35.8886 55.5503C36.1945 55.5535 36.4921 55.6504 36.7412 55.828C36.9903 56.0057 37.1789 56.2554 37.2816 56.5436C37.3843 56.8318 37.3961 57.1445 37.3155 57.4397C37.2348 57.7348 37.0656 57.998 36.8306 58.194L27.3894 66.0831L32.9459 62.8832C33.2698 62.6943 33.6529 62.634 34.0192 62.7143C34.3855 62.7946 34.7082 63.0096 34.9235 63.3166C35.1387 63.6237 35.2307 64.0004 35.1813 64.3721C35.1318 64.7438 34.9445 65.0834 34.6565 65.3235L29.3064 69.7913L30.4039 69.1603C30.7188 68.9811 31.088 68.9222 31.443 68.9948C31.798 69.0673 32.1146 69.2663 32.334 69.5547C32.5533 69.8431 32.6604 70.2013 32.6355 70.5628C32.6105 70.9243 32.4551 71.2644 32.1983 71.5199L27.9905 75.6528C28.2945 75.7031 28.5755 75.846 28.7951 76.062C29.0148 76.278 29.1623 76.5566 29.2176 76.8596C29.273 77.1627 29.2333 77.4754 29.1041 77.7551C28.9749 78.0348 28.7625 78.2677 28.4959 78.4221L20.26 83.1741C20.033 83.3058 19.7747 83.3739 19.5123 83.3715Z" fill="#C7C0FA"/>
<path d="M88.3788 8.43676C91.3125 -2.6283 50.7546 -1.88365 48.8765 5.32958C48.4459 26.2635 40.1142 43.5609 68.982 39.9273C70.2381 53.9381 62.4746 66.2711 58.9637 78.5384C87.6341 105.582 90.0655 24.0714 88.3788 8.43676ZM83.9767 21.5952C85.8009 31.2786 80.2923 94.4482 63.5063 77.5186C68.0071 65.4398 74.5714 52.078 73.423 38.1121C68.9611 32.7021 54.1608 41.937 52.4891 31.8618C54.1997 24.1342 48.1977 8.1078 56.1077 4.02569C73.5755 5.17107 87.7089 -3.35201 83.9767 21.5952Z" fill="#363444"/>
<path d="M33.6725 1.48664C23.4418 2.98191 0.809283 -4.56924 0.273973 10.9368C0.836198 28.3359 -5.21071 43.3365 19.3537 39.1706C19.9821 39.0747 20.6214 39.0747 21.2497 39.1706C20.7982 48.0765 19.6558 59.8832 15.1879 68.7921C9.73909 76.1279 9.23368 80.7543 19.0128 83.4997C38.4305 91.4815 50.1146 1.29225 33.6725 1.48664ZM36.1637 38.1419C36.1818 53.7283 31.5936 68.9725 22.9753 81.9595C13.7973 78.5653 13.9737 76.2206 19.3119 68.3704C41.4988 7.34513 -1.08673 63.2147 4.61028 17.531C2.23578 -0.214997 8.79706 3.35573 22.6703 3.29891C43.9152 -1.12113 34.5996 25.5965 36.1637 38.1419Z" fill="#363444"/>
</svg>
          </div>
          
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-xl text-gray-800 mb-4 font-medium">
              Shagufta brings calm clarity to chaos.
            </p>
            <p className="text-xl text-gray-800 mb-4 font-medium">
              She listens deeply, designs intentionally, and delivers with grace.
            </p>
            <p className="text-xl text-gray-800 font-medium">
              Her work doesn&apos;t just solve — it resonates.
            </p>
          </div>

          Main Quote Attribution
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
            <div className="text-left">
              <p className="font-semibold text-gray-800">Soham Bhattacharya</p>
              <p className="text-sm text-gray-600">Sr Product Manager, Reverie Language Technologies</p>
            </div>
          </div>
        </div>

        Additional Testimonials
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          Testimonial 1
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <div className="text-center">
              
              <h4 className="font-semibold text-gray-800 mb-1">Soham Bhattacharya</h4>
              <p className="text-sm text-gray-600 mb-4">Sr Product Manager,<br />Reverie Language Technologies</p>
            </div>
          </div>

          Testimonial 2
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <div className="text-center">
              <h4 className="font-semibold text-gray-800 mb-1">Faisal Ahmed</h4>
              <p className="text-sm text-gray-600 mb-4">Sr Full Stack Developer,<br />Featherpulp Creative</p>
            </div>
          </div>

          Testimonial 3
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
            <div className="text-center">
              <h4 className="font-semibold text-gray-800 mb-1">Siddharth Khadanda</h4>
              <p className="text-sm text-gray-600 mb-4">CEO,<br />Featherpulp Creative</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div> */}

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
      {/* Footer Section */}
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

    </>
  );
}
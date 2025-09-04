"use client";

import React, { useState } from 'react';
import { ArrowLeft, Instagram } from 'lucide-react';
import { Linkedin } from "lucide-react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Work() {
  const [activeTab, setActiveTab] = useState('product');
  const [currentView, setCurrentView] = useState('main'); // 'main' or 'detail'
  const [selectedProject, setSelectedProject] = useState<typeof productDesignProjects[0] | null>(null);
  type GraphicTabType = 'social' | 'ebook' | 'poster' ;

 const [graphicActiveTab, setGraphicActiveTab] = useState<GraphicTabType>('social');
const [currentImageIndex, setCurrentImageIndex] = useState(0);

  gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

 
     const handleScroll = () => {
    gsap.to(window, {
      duration: 1, // speed of scroll
      scrollTo: "#videosection", // target section
      ease: "power2.inOut",
    });
  };

   const handleScrollToDesignProcess = () => {
    gsap.to(window, {
      duration: 1, // speed of scroll
      scrollTo: "#designprocess", // target section
      ease: "power2.inOut",
    });
  };
  




 // Navigation function to handle view changes consistently

const handleNavigation = (view: string) => {
  if (view === 'main' || view === 'work') {
    // Both 'main' and 'work' should show the work section
    setCurrentView('main');
    setSelectedProject(null);
    return; // Don't redirect, just change the view
  } 
  
  if (view === 'detail') {
    setCurrentView('detail');
    return;
  }
  
  // For other pages, use actual navigation
  switch (view) {
    case 'home':
      window.location.href = '/';
      break;
    case 'about':
      window.location.href = '/about';
      break;
    case 'contact':
      window.location.href = '/contact';
      break;
    case 'digitalpainting':
      window.location.href = '/digitalpainting';
      break;
    default:
      break;
  }
};

  const productDesignProjects = [
    {
      id: 1,
      title: "RevUp – Streamlining API Access",
      title1: "for Developers",
      role: "Sole Product Designer",
      challenge: "Developers had to go through sales just to test APIs.",
      solution: "Designed a self-serve platform for instant API access.",
      image: "/revup.png",
      imageHero:"/revupheroimage.png",
      details: {
        title:"RevUp – Streamlining API Access for Developers",
        topImage:"",
        caption: "RevUp — Redesigning API Onboarding from 5 Days to 15 Minutes",
        belowCaption:"A product design case study on transforming a gated API gateway into a developer-first, self-serve experience.",
        overviewImage:"",
        overviewTools:" Figma, Notion, Adobe Illustrator",
        overviewRole:"Sole UI/UX Designer",
        overviewTeams:"1 PM, 3 Developers, QA, Me",
        overviewFocus:"Developer Experience · Dashboard UX · Design Systems",
        overviewBackground:"RevUp, a product by Reverie Language Technologies, was built to provide APIs for language localization. However, access was restricted — developers had to request demos, wait for internal approvals, and communicate through sales channels just to begin testing.I was tasked with transforming RevUp into a fully self-serve platform — enabling developers to register, try out APIs, access documentation, and generate API keys with minimal friction.",
        overviewRoledetail:"As the sole product designer for RevUp, I owned the entire design process — from research and wireframing to UI design and developer handoff. I collaborated closely with the product and engineering teams to simplify a complex, sales-driven API platform into a seamless self-serve experience. I created modular, scalable components, built a light pastel UI system using DM Sans, and ensured a consistent, developer-friendly experience across all touchpoints.",
        problemTitle:"The original system created friction and delays for users and internal teams alike.",
        problemPt1:"Onboarding was manual and time-consuming",
        problemPt2:"Developers couldn’t test APIs independently",
        problemPt3:"Documentation wasn’t centralized or easily navigable",
        problemPt4:"UI patterns were inconsistent and unscalable",
        designGoalTitle:"To improve usability and adoption, I set clear design goals:",
        designGoalPt1:"Onboarding was manual and time-consuming",
        designGoalPt2:"Developers couldn’t test APIs independently",
        designGoalPt3:"Documentation wasn’t centralized or easily navigable",
        designGoalPt4:"UI patterns were inconsistent and unscalable",
      },
      overview:{
          title: "Overview",
          webAppIcon: "/webapp.png",
          webAppIconAlt: "Web App Icon",
          role: "Sole UI/UX Designer",
          tools: "Figma, Notion, Adobe Illustrator",
          team: "1 PM, 3 Developers, QA, Me",
          focus: "Developer Experience · Dashboard UX · Design Systems",
          backgroundTitle: "Background",
          backgroundText1: "RevUp, a product by Reverie Language Technologies, was built to provide APIs for language localization. However, access was restricted — developers had to request demos, wait for internal approvals, and communicate through sales channels just to begin testing.",
          backgroundText2: "I was tasked with transforming RevUp into a fully self-serve platform — enabling developers to register, try our APIs, access documentation, and generate API keys with minimal friction.",
          myRoleTitle: "My Role",
          myRoleText1: "As the sole product designer for RevUp, I owned the entire design process — from research and wireframing to UI design and developer handoff. I collaborated closely with the product and engineering teams to simplify a complex, sales-driven API platform into a seamless self-serve experience.",
          myRoleText2: "I created modular, scalable components, built a light pastel UI system using DM Sans, and ensured a consistent, developer-friendly experience across all touchpoints."
      },
     problem: {
  sectionTitle: "The Problem",
  title: "The original system created friction and delays for users and internal teams alike.",
  
   problempt1: "Onboarding was manual and time-consuming",
   problempt2: "Developers couldn't test APIs independently", 
   problempt3: "Documentation wasn't centralized or easily navigable",
   problempt4: "UI patterns were inconsistent and unscalable"
  
},
goals: {
  sectionTitle: "My Design Goals",
  title: "To improve usability and adoption, I set clear design goals:",
  
   goalpt1: "Enable instant developer registration and API access",
    goalpt2:"Create intuitive documentation and testing interface", 
    goalpt3:"Build a consistent, scalable design system",
    goalpt4:"Reduce onboarding time from days to minutes"
  
},
outcomes:{
  image:"/outcomes.png"
},
designprocess:{
  image:"/section4img.png"
},
learnings:{
  learningpt1:"Micro-interactions (copy, CTA states) matter deeply to devs",
  learningpt2:"Clear documentation access boosts trust and adoption",
  learningpt3:"Designing for self-service means anticipating user uncertainty",
  learningpt4:"Solo design work thrives with close PM–Dev collaboration"
},
whatsnext:{
  whatsnextpt1:"Add dark mode for better night UX",
  whatsnextpt2:"Build out analytics panel for usage tracking",
  whatsnextpt3:"Introduce real-time feedback tool within the dashboard"
},
tldr:{
  tldrpt1:"I redesigned RevUp into a developer-first platform with one clear goal — to make API testing feel instant and effortless.",
  tldrpt2:"  What started as a cluttered and manual tool evolved into a smooth, intuitive experience. Every interaction was rethought to give developers more control and less friction. The product now <br />speaks through simplicity, speed, and flow."
},
video:{
  video:"/revupvideo.mp4",
  videoText:"A walkthrough of the interactive prototype—showcasing how structure, flow, and micro-interactions come together to create a seamless developer experience."

}

    },
    {
      id: 2,
      title: "Swalekh Pad – Writing Without Language Barriers",
      title1: "for Developers",
      role: "Sole Product Designer",
      challenge: "Developers had to go through sales just to test APIs.",
      solution: "Designed a self-serve platform for instant API access.",
      image: "/swalekhtopimage.png",
      imageHero:"/swalkehpadheroimage.png",
      details: {
        title:"Swalekh Pad – Writing Without Language Barriers",
        topImage:"",
        caption: "Multilingual typing made seamless with real-time",
        belowCaption:" Unicode ↔ TTF font conversion.",
      },
      overview:{
          title: "Overview",
          webAppIcon: "/webapp.png",
          webAppIconAlt: "Web App Icon",
          role: "Sole UI/UX Designer",
          tools: "Figma, Notion, Adobe Illustrator",
          team: "1 PM, 3 Developers, QA, Me",
          focus: "Multilingual typing with seamless Unicode–TTF font conversion",
          backgroundTitle: "Background",
          backgroundText1: "Swalekh Pad is a multilingual text editor that empowers Indian language users to write, convert, and share content effortlessly across platforms. With built-in support for Unicode and TrueType fonts, it solves a long-standing problem in digital publishing: font incompatibility across Indian scripts.",
          backgroundText2: "",
          myRoleTitle: "My Role",
          myRoleText1: "As the sole product designer, I led the end-to-end design process, beginning with UX research and problem definition to deeply understand user needs and pain points. I was responsible for designing a seamless cross-language UI/UX that ensured accessibility and clarity across diverse scripts. A key part of my role involved defining intuitive interaction flows for the complex process of Unicode to TrueType font conversion, balancing technical constraints with user experience. Additionally, I created interactive prototypes to validate design decisions and worked closely with developers to ensure accurate and efficient implementation of the product vision.",
          myRoleText2: ""
      },
     problem: {
  sectionTitle: "The Problem",
  title: "Indian language writers struggle with:",
  
   problempt1: "Font incompatibility: Unicode vs TTF",
   problempt2: "Typing limitations in regional scripts", 
   problempt3: "No easy translation tools",
   problempt4: "Manual workflows for voice-to-text"
  
},
goals: {
  sectionTitle: "My Design Goals",
  title: "Swalekh Pad is a multilingual text editor that enables users to:",
  
   goalpt1: "Write in 11 Indian scripts",
    goalpt2:"Auto-detect Unicode/TTF and adjust export automatically", 
    goalpt3:"Type or speak in their language",
    goalpt4:"Upload audio files for instant speech-to-text conversion"
  
},
outcomes:{
  image:"/impactswalekh.png"
},
designprocess:{
  image:"/swalekhpaddp.png"
},
learnings:{
  learningpt1:"Micro-interactions (copy, CTA states) matter deeply to devs",
  learningpt2:"Clear documentation access boosts trust and adoption",
  learningpt3:"Designing for self-service means anticipating user uncertainty",
  learningpt4:"Solo design work thrives with close PM–Dev collaboration"
},
whatsnext:{
  whatsnextpt1:"Add dark mode for better night UX",
  whatsnextpt2:"Build out analytics panel for usage tracking",
  whatsnextpt3:"Introduce real-time feedback tool within the dashboard"
},
tldr:{
  tldrpt1:"I created Swalekh Pad to make multilingual typing intuitive, fast, and font-flexible.",
  tldrpt2:"  I created Swalekh Pad to make multilingual typing intuitive, fast, and font-flexible.Designed from the ground up, it empowers users to type in 11 Indian languages, switch between Unicode and TTF with a click, and export their content effortlessly — all within a clean, user-friendly interface."
},
video:{
  video:"/swalekhvideo.mp4",
  videoText:"Watch how Swalekh Pad handles voice-to-text, font format switching, and multilingual translation in real time"

}

    },
    {
      id: 3,
      title: "Shrota – Multilingual Subtitling & Voice Translation Tool",
      title1: "",
      role: "Sole Product Designer",
      challenge: "Developers had to go through sales just to test APIs.",
      solution: "Designed a self-serve platform for instant API access.",
      image: "/shrotaimg.png",
      imageHero:"/shrotaheroimage.png",
      details: {
        title:"Shrota – Multilingual Subtitling & Voice Translation Tool",
        topImage:"",
        caption: "Subtitling, Simplified for 11 Indian Languages",
        belowCaption:"Translate, edit, and export subtitles effortlessly—across 11 Indian languages, all from a single intuitive interface.",
      },
      overview:{
          title: "Overview",
          webAppIcon: "/webapp.png",
          webAppIconAlt: "Web App Icon",
          role: "Sole UI/UX Designer",
          tools: "Figma, After Effects, Illustrator, Notion, Procreate",
          team: "1 PM, 3 Developers, QA, Me",
          focus: " Designing a clean, interface for subtitle editing, translation into 11 Indian languages, voice selection (per-line and global), and smooth export across formats.",
          backgroundTitle: "Background",
          backgroundText1: "With the explosion of video content across platforms, there was a rising need for tools that could make content accessible in India’s many languages.",
          backgroundText2: "Shrota was envisioned as a multilingual subtitling and translation tool — allowing users to upload videos, create subtitles, and translate them into 11+ Indian languages, all through a single, easy-to-use interface.",
          myRoleTitle: "My Role",
          myRoleText1: "As the sole Product Designer, I led the UX research and workflow mapping to identify user needs and define a streamlined experience. I designed the subtitle editing interface along with a timeline-based UI to enable precise control over text and timing.",
          myRoleText2: " My work included crafting intuitive interactions for translation and real-time preview, as well as developing a voice selection interface that supported both single and per-line voice options. Throughout the project, I built detailed prototypes to validate functionality and maintained close collaboration with developers to ensure a smooth and accurate design-to-development handoff."
      },
     problem: {
  sectionTitle: "The Problem",
  title: "The original system created friction and delays for users and internal teams alike.",
  
   problempt1: "Existing subtitle tools lack Indian language support",
   problempt2: "No unified tool for both subtitling & translation", 
   problempt3: "Manual workflows were error-prone and time-consuming",
   problempt4: " Interfaces were cluttered or too technical for average creators"
  
},
goals: {
  sectionTitle: "My Design Goals",
  title: "Shrota simplifies multilingual subtitling through a clean, unified interface that allows users to:",
  
   goalpt1: "Auto-generate subtitles",
    goalpt2:"Manually edit subtitle text for accuracy or cultural relevance", 
    goalpt3:"Translate subtitles into 11 Indian languages",
    goalpt4:"Select voice for the entire video or customize voice per line"
  
},
outcomes:{
  image:"/shrotaoutput.png"
},
designprocess:{
  image:"/shrotadp.png"
},
learnings:{
  learningpt1:"Designing for multilingual interfaces requires attention to both form and nuance",
  learningpt2:"A well-structured editor simplifies even complex translation workflows",
  learningpt3:"Inclusive UX is about empowering every voice — creators and audiences alike",
  learningpt4:"Simplicity doesn't mean fewer features; it means smarter visibility and timing"
},
whatsnext:{
  whatsnextpt1:" Add voice-to-text subtitle generation",
  whatsnextpt2:"Dark mode for long-form editors and late-night sessions",
  whatsnextpt3:"Add subtitle performance insights (views, languages watched)"
},
tldr:{
  tldrpt1:"I transformed Shrota from a concept into a full-featured, intuitive subtitling and translation platform. ",
  tldrpt2:" Designed to be both powerful and approachable, it now enables video creators to make content accessible across India’s diverse linguistic landscape — without technical barriers."
},
video:{
  video:"/shrotavideo.mp4",
  videoText:"A guided video demo showcasing the full workflow — from uploading a video to editing subtitles, translating content, assigning voices, and exporting the final output."

}

    },
     {
      id: 4,
      title: "Vachak – Multilingual Content Listening Platform",
      title1: "",
      role: "Sole Product Designer",
      challenge: "Developers had to go through sales just to test APIs.",
      solution: "Designed a self-serve platform for instant API access.",
      image: "/vachakimg.png",
      imageHero:"/vachakheroimage.png",
      details: {
        title:"Vachak – Multilingual Content Listening Platform",
        topImage:"",
        caption: "Listen the Way You Like It",
        belowCaption:"Customize how you hear content across 11 Indian languages with voice, speed, and pitch settings."
      },
      overview:{
          title: "Overview",
          webAppIcon: "/webapp.png",
          webAppIconAlt: "Web App Icon",
          role: "Sole UI/UX Designer",
          tools: "Figma, Notion, Adobe Illustrator",
          team: "1 PM, 3 Developers, QA, Me",
          focus: "Designing an accessible interface for listening to content in Indian languages, with intuitive controls for voice, pitch, speed, and seamless playback.",
          backgroundTitle: "Background",
          backgroundText1: "As digital content expanded, so did the demand for tools that could read aloud content in native languages. Existing TTS tools often lacked regional voice support, customization, and user-friendly playback controls.Vachak was envisioned as a solution for Indian users—making web content listenable with voice flexibility and language inclusivity at its core.",
          backgroundText2: "",
          myRoleTitle: "My Role",
          myRoleText1: "As the sole Product Designer, I led UX research and user behavior analysis to uncover insights that shaped the product direction. I designed the audio player and voice control UI with a focus on usability and accessibility, enabling users to easily manage playback. I also crafted the interaction flow for voice selection along with pitch and speed customization, ensuring a flexible and intuitive experience. Additionally, I defined the interactions for both a floating player and seamless in-page audio integration. To bring these designs to life, I developed interactive prototypes and worked closely with developers to ensure a smooth and accurate handoff.",
          myRoleText2: ""
      },
     problem: {
  sectionTitle: "The Problem",
  title: "Millions of Indian internet users face barriers to content consumption due to:",
  
   problempt1: "Low literacy or reading fatigue",
   problempt2: "Lack of regional language accessibility", 
   problempt3: "No unified voice customization experience",
   problempt4: "Minimal control over playback experience (voice, pitch, speed)"
  
},
goals: {
  sectionTitle: "My Design Goals",
  title: "Vachak makes it easy for users to:",
  
   goalpt1: "Listen to articles, blog posts, or documents in 11 Indian languages",
    goalpt2:"Choose from male/female voices per language", 
    goalpt3:"Control playback speed, pitch, and pause",
    goalpt4:"Access a simple floating player UI while browsing content"
  
},
outcomes:{
  image:"/vachakoutput.png"
},
designprocess:{
  image:"/vachakdp.png"
},
learnings:{
  learningpt1:"Micro-interactions (copy, CTA states) matter deeply to devs",
  learningpt2:"Clear documentation access boosts trust and adoption",
  learningpt3:"Designing for self-service means anticipating user uncertainty",
  learningpt4:"Solo design work thrives with close PM–Dev collaboration"
},
whatsnext:{
  whatsnextpt1:"Add dark mode for better night UX",
  whatsnextpt2:"Build out analytics panel for usage tracking",
  whatsnextpt3:"Introduce real-time feedback tool within the dashboard"
},
tldr:{
  tldrpt1:"This project taught me how critical small details—like the size of a speed slider or icon placement—are to making a tool feel personal, especially in a multilingual country. Designing for ears instead of eyes was a refreshing challenge!",
  tldrpt2:"  "
},
video:{
  video:"/vachakvideo.mp4",
  videoText:"A guided video demo showcasing the full workflow — from uploading a video to editing subtitles, translating content, assigning voices, and exporting the final output."

}

    },
   
   
  ];


const graphicDesignData: Record<GraphicTabType, {
  title: string;
  subtitle: string;
  images: string[];
}> = {
  social: {
    title: "Strategic & Visual Storytelling for Social Media",
    subtitle: "A collection of high-impact LinkedIn and campaign posts designed to communicate product value, drive engagement, and enhance brand recall through bold visuals and concise messaging.",
    images: [
      "/sm1.png",
      "/sm2.png", 
      "/sm3.png",
      "/sm4.png"
    ]
  },
  ebook: {
    title: "Ebook Design for Informative & Impactful Reading",
    subtitle: "Professionally designed ebooks combining structured content layouts, visual hierarchy, and illustrations to simplify complex topics—optimized for digital consumption across devices.",
    images: [
      "/ebook.png",
      "/ebook2.png"
      
    ]
  },
  poster: {
    title: "Poster Designs for Communication & Awareness",
    subtitle: "Posters created for internal campaigns, product launches, and HR communications—designed to inform, engage, and inspire through strong visuals and messaging alignment.",
    images: [
      "/poster1.png",
      "/poster2.png",
      "/poster3.png",
      "/poster4.png",
    ]
  },
  // animated: {
  //   title: "Animated Videos", 
  //   subtitle: "cdcdwckjdcnknlkjlk",
  //   images: [
  //     "/revup.png",
  //     "/shrota.png",
  //     "/revup.png"
  //   ]
  // }
};

 const openProjectDetail = (project: typeof productDesignProjects[0]) => {
   console.log('Opening project:', project.title, project.details); // Debug log
    setSelectedProject(project);
    setCurrentView('detail');
};

  

  const nextImage = () => {
  const currentProject = graphicDesignData[graphicActiveTab];
  setCurrentImageIndex((prev) => 
    prev === currentProject.images.length - 1 ? 0 : prev + 1
  );
};

const prevImage = () => {
  const currentProject = graphicDesignData[graphicActiveTab];
  setCurrentImageIndex((prev) => 
    prev === 0 ? currentProject.images.length - 1 : prev - 1
  );
};

const goToImage = (index: number) => {
  setCurrentImageIndex(index);
};

  // Main portfolio view
  const MainView = () => (
    <div className="min-h-screen  bg-[url('/page1bg.png')]">
      {/* Navbar */}
      <nav className="flex justify-center pt-8 px-12">
  <div className="bg-[#F9DBC1] rounded-full px-8 py-2 border border-[#C5A588] w-full max-w-screen-lg">
    <div className="flex items-center justify-between w-full">
      <Link href="/">
            <div className="text-lg font-medium text-gray-800">
              {/* Shagufta Zabin */}
              <Image src="/logo.png" alt="Shagufta Zabin" width={100} height={100} />
            </div>
            </Link>
      <div className="flex space-x-8">
        <button 
          onClick={() => handleNavigation('home')}
          className={`px-4 py-2 rounded-full transition-all duration-300 cursor-pointer transform hover:scale-105 inline-block ${
            currentView === 'home' 
              ? 'bg-white text-gray-800 shadow-sm' 
              : 'text-gray-600 hover:bg-white'
          }`}
        >
          Home
        </button>
        <button 
          onClick={() => handleNavigation('main')}
          className={`px-4 py-2 rounded-full transition-all duration-300 cursor-pointer transform hover:scale-105 inline-block ${
            currentView === 'main' || currentView === 'detail' 
              ? 'bg-white text-gray-800 shadow-sm' 
              : 'text-gray-600 hover:bg-white'
          }`}
        >
          Work
        </button>
        <button 
          onClick={() => handleNavigation('digitalpainting')}
          className={`px-4 py-2 rounded-full transition-all cursor-pointer duration-300 transform hover:scale-105 inline-block ${
            currentView === 'digitalpainting' 
              ? 'bg-white text-gray-800 shadow-sm' 
              : 'text-gray-600 hover:bg-white'
          }`}
        >
          Digital Paintings
        </button>
      </div>
      <div className="flex space-x-8">
        <button 
          onClick={() => handleNavigation('about')}
          className={`px-4 py-2 rounded-full transition-all duration-300 cursor-pointer transform hover:scale-105 inline-block ${
            currentView === 'about' 
              ? 'bg-white text-gray-800 shadow-sm' 
              : 'text-gray-600 hover:bg-white'
          }`}
        >
          About
        </button>
        <button 
          onClick={() => handleNavigation('contact')}
          className={`px-4 py-2 rounded-full transition-all duration-300 transform cursor-pointer hover:scale-105 inline-block ${
            currentView === 'contact' 
              ? 'bg-white text-gray-800 shadow-sm' 
              : 'text-gray-600 hover:bg-white'
          }`}
        >
          Contact
        </button>
      </div>
    </div>
  </div>
</nav>

      {/* Work Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Tabs */}
        <div className="flex justify-start mb-12">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('product')}
              className={`text-lg font-medium transition-all duration-300 cursor-pointer ${
                activeTab === 'product'
                  ? 'text-gray-800 border-b-2 border-gray-800 pb-1'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Product Design
            </button>
            <button
              onClick={() => setActiveTab('graphic')}
              className={`text-lg font-medium transition-all duration-300 cursor-pointer ${
                activeTab === 'graphic'
                  ? 'text-gray-800 border-b-2 border-gray-800 pb-1'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Graphic Design
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {activeTab === 'product' && (
            <>
              {/* First Project */}
              <div className="relative">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {productDesignProjects[0].title}
                  </h3>
                  <h3 className='text-xl font-semibold text-gray-800 mb-4'>{productDesignProjects[0].title1}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-sm font-medium text-gray-600">Role: </span>
                      <span className="text-sm text-gray-800">{productDesignProjects[0].role}</span>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-gray-600">Challenge: </span>
                      <span className="text-sm text-gray-800">{productDesignProjects[0].challenge}</span>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-gray-600">Solution: </span>
                      <span className="text-sm text-gray-800">{productDesignProjects[0].solution}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => openProjectDetail(productDesignProjects[0])}
                    className="bg-[#F9DBC1] w-[200px] text-gray-800 px-6 py-2 rounded-full text-sm font-medium hover:bg-[#F0C89B] transition-colors duration-300"
                  >
                    View Case Study
                  </button>
                </div>
              </div>

              {/* First Project Image */}
              <div className="relative">
                <div className="relative">
                  <Image
                  width={600}
                  height={600}
                    src={productDesignProjects[0].image}
                    alt={productDesignProjects[0].title}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Second Project - Reversed */}
              <div className="relative mt-12">
                <div className="relative">
                  <Image
                  width={600}
                  height={600}
                    src={productDesignProjects[1].image}
                    alt={productDesignProjects[1].title}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <div className="relative mt-12 flex justify-center">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {productDesignProjects[1].title}
                  </h3>
                  <h3 className='text-xl font-semibold text-gray-800 mb-4'>{productDesignProjects[1].title1}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-sm font-medium text-gray-600">Role: </span>
                      <span className="text-sm text-gray-800">{productDesignProjects[1].role}</span>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-gray-600">Challenge: </span>
                      <span className="text-sm text-gray-800">{productDesignProjects[1].challenge}</span>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-gray-600">Solution: </span>
                      <span className="text-sm text-gray-800">{productDesignProjects[1].solution}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => openProjectDetail(productDesignProjects[1])}
                    className="bg-[#F9DBC1] w-[200px] text-gray-800 px-6 py-2 rounded-full text-sm font-medium hover:bg-[#F0C89B] transition-colors duration-300"
                  >
                    View Case Study
                  </button>
                </div>
              </div>

                {/* third Project */}
              <div className="relative mt-12">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {productDesignProjects[2].title}
                  </h3>
                  <h3 className='text-xl font-semibold text-gray-800 mb-4'>{productDesignProjects[2].title1}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-sm font-medium text-gray-600">Role: </span>
                      <span className="text-sm text-gray-800">{productDesignProjects[2].role}</span>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-gray-600">Challenge: </span>
                      <span className="text-sm text-gray-800">{productDesignProjects[2].challenge}</span>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-gray-600">Solution: </span>
                      <span className="text-sm text-gray-800">{productDesignProjects[2].solution}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => openProjectDetail(productDesignProjects[2])}
                    className="bg-[#F9DBC1] w-[200px] text-gray-800 px-6 py-2 rounded-full text-sm font-medium hover:bg-[#F0C89B] transition-colors duration-300"
                  >
                    View Case Study
                  </button>
                </div>
              </div>

              {/* third Project Image */}
              <div className="relative mt-12">
                <div className="relative">
                  <Image
                  width={600}
                  height={600}
                    src={productDesignProjects[2].image}
                    alt={productDesignProjects[2].title}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

               {/* fourth Project - Reversed */}
              <div className="relative mt-12">
                <div className="relative">
                  <Image
                  width={600}
                  height={600}
                    src={productDesignProjects[3].image}
                    alt={productDesignProjects[3].title}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <div className="relative mt-12 flex justify-center">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {productDesignProjects[3].title}
                  </h3>
                  <h3 className='text-xl font-semibold text-gray-800 mb-4'>{productDesignProjects[3].title1}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-sm font-medium text-gray-600">Role: </span>
                      <span className="text-sm text-gray-800">{productDesignProjects[3].role}</span>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-gray-600">Challenge: </span>
                      <span className="text-sm text-gray-800">{productDesignProjects[3].challenge}</span>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-gray-600">Solution: </span>
                      <span className="text-sm text-gray-800">{productDesignProjects[3].solution}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => openProjectDetail(productDesignProjects[3])}
                    className="bg-[#F9DBC1] w-[200px] text-gray-800 px-6 py-2 rounded-full text-sm font-medium hover:bg-[#F0C89B] transition-colors duration-300"
                  >
                    View Case Study
                  </button>
                </div>
              </div>

                {/* fifth Project */}
              {/* <div className="relative mt-12">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {productDesignProjects[4].title}
                  </h3>
                  <h3 className='text-xl font-semibold text-gray-800 mb-4'>{productDesignProjects[4].title1}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-sm font-medium text-gray-600">Role: </span>
                      <span className="text-sm text-gray-800">{productDesignProjects[4].role}</span>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-gray-600">Challenge: </span>
                      <span className="text-sm text-gray-800">{productDesignProjects[4].challenge}</span>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-gray-600">Solution: </span>
                      <span className="text-sm text-gray-800">{productDesignProjects[4].solution}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => openProjectDetail(productDesignProjects[4])}
                    className="bg-[#F9DBC1] w-[200px] text-gray-800 px-6 py-2 rounded-full text-sm font-medium hover:bg-[#F0C89B] transition-colors duration-300"
                  >
                    View Case Study
                  </button>
                </div>
              </div> */}

              {/* fifth Project Image */}
              {/* <div className="relative mt-12">
                <div className="relative">
                  <img
                    src={productDesignProjects[4].image}
                    alt={productDesignProjects[4].title}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div> */}

              
    


            </>
          )}

          {activeTab === 'graphic' && (
  <div className="col-span-2">
    {/* Tabs */}
    <div className="flex justify-center mb-12">
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => setGraphicActiveTab('social')}
          className={`px-6 py-3 cursor-pointer rounded-full border border-[#C5A588] text-sm font-medium transition-all duration-300 ${
            graphicActiveTab === 'social'
              ? 'bg-[#F9DBC1] text-gray-800'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Social Media Posts
        </button>
        <button
          onClick={() => setGraphicActiveTab('ebook')}
          className={`px-6 py-3 cursor-pointer rounded-full border border-[#C5A588] text-sm font-medium transition-all duration-300 ${
            graphicActiveTab === 'ebook'
              ? 'bg-[#F9DBC1] text-gray-800'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Ebook Design
        </button>
        <button
          onClick={() => setGraphicActiveTab('poster')}
          className={`px-6 py-3 cursor-pointer  rounded-full border border-[#C5A588] text-sm font-medium transition-all duration-300 ${
            graphicActiveTab === 'poster'
              ? 'bg-[#F9DBC1] text-gray-800'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Poster Designs
        </button>
        {/* <button
          onClick={() => setGraphicActiveTab('animated')}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
            graphicActiveTab === 'animated'
              ? 'bg-[#F9DBC1] text-gray-800'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Animated Videos
        </button> */}
      </div>
    </div>

    {/* Content Section */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        {graphicDesignData[graphicActiveTab].title}
      </h2>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
        {graphicDesignData[graphicActiveTab].subtitle}
      </p>
    </div>

    {/* Image Slider */}
    <div className="relative max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-100">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {graphicDesignData[graphicActiveTab].images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Image
              width={600}
                  height={600}
                src={image}
                alt={`${graphicDesignData[graphicActiveTab].title} ${index + 1}`}
                className="w-full h-96 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {graphicDesignData[graphicActiveTab].images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-gray-800" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 text-gray-800" />
            </button>
          </>
        )}
      </div>

      {/* Dot Navigation */}
      {graphicDesignData[graphicActiveTab].images.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {graphicDesignData[graphicActiveTab].images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-[#F9DBC1] border-2 border-gray-800'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}

      {/* Image Counter */}
      {graphicDesignData[graphicActiveTab].images.length > 1 && (
        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">
            {currentImageIndex + 1} of {graphicDesignData[graphicActiveTab].images.length}
          </span>
        </div>
      )}
    </div>
  </div>
)}
        </div>
      </div>
    </div>
    
  );

 

  // Project detail view
  const ProjectDetailView = ({ project }: { project: typeof productDesignProjects[0] }) => (

    

   <div className="min-h-screen bg-[#FCFCFC] ">
      
      {/* Hero Section with Red Background */}
      <div className="bg-[url('/page1bg.png')]">
        {/* Navbar */}
        <nav className="flex justify-center pt-8 px-12">
          <div className="bg-[#F9DBC1] rounded-full px-8 py-2 border border-[#C5A588] w-full max-w-screen-lg">
            <div className="flex items-center justify-between w-full">
             <Link href="/">
              <div className="text-lg font-medium text-gray-800 cursor-pointer">
                Shagufta Zabin
              </div>
             </Link>
              <div className="flex space-x-8">
              <Link href="/" className="text-gray-600 cursor-pointer hover:bg-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 inline-block">Home</Link>
              <button 
                onClick={() => setCurrentView('main')}
                className="text-gray-600 hover:bg-white cursor-pointer bg-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Work
              </button>
              <Link href="/digitalpainting" className="text-gray-600 cursor-pointer hover:bg-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 inline-block">Digital Paintings</Link>
            </div>
              <div className="flex space-x-8">
                <Link href="/about" className="text-gray-600 cursor-pointer hover:bg-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 inline-block">About</Link>
                <Link href="/contact" className="text-gray-600 cursor-pointer hover:bg-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 inline-block">Contact</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Project Detail Content */}
        <div className="max-w-7xl mx-auto px-8 pb-16 mt-4 ">
          {/* Breadcrumb */}
          <div className="mb-8 cursor-pointer" onClick={() => handleNavigation('main')}>
  <ArrowLeft className="w-4 h-4 inline-block mr-2" />
  <span className="text-sm text-black">Back to Product Design</span>
</div>

          {/* Hero Section */}
          <div className="mb-16">
            {/* Centered Title */}
            <div className="text-center mb-8 ">
              <h1 className="text-2xl font-bold text-black ">
                {project.details.title}
              </h1>
            </div>
            
            {/* Project Image */}
            <div className="mb-12 flex items-center justify-center">
              <Image
              width={800}
                  height={800}
                src={project.imageHero}
                alt={project.title}
                className=" h-[400px] object-contain rounded-lg r"
              />
            </div>

            {/* Project Subtitle */}
            <div className="text-center mb-12">
              <div className="inline-block">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span className="text-xl font-semibold text-black">
                    {project.details.caption}
                  </span>
                </div>
                <div className="px-6 py-4">
                  <p className="text-black text-center">
                    {project.details.belowCaption}
                  </p>
                </div>
              </div>
            </div>

            {/* buttons*/}
            <div className='flex items-center justify-center space-x-4'>
                <button 
                onClick={handleScroll}
                className="bg-orange-200 hover:bg-orange-300 cursor-pointer text-gray-800 px-6 py-3 rounded-full font-medium transition-colors">
                    Watch Prototype Demo
                  </button>

                   <button 
                   onClick={handleScrollToDesignProcess}
                   className="border border-[#C5A588] cursor-pointer hover:bg-orange-300 text-gray-800 px-6 py-3 rounded-full font-medium transition-colors">
                    Jump to Design Process
                  </button>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the content with original background */}
      <div className="max-w-7xl mx-auto px-8 pb-16">
        {/* SECTION TWO - Overview */}
        <div className="rounded-3xl p-12 relative overflow-hidden bg-[#DBFFF1] mt-12">
          {/* Overview Title */}
          <div className="text-center mb-16">
            <div className="inline-block px-8 py-3 bg-contain bg-no-repeat bg-center bg-[url('/overviewvector.png')]">
              <h2 className="text-2xl font-bold text-gray-800">{project.overview.title}</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-stretch relative">
            {/* Left Column - Project Details */}
            <div className="border-r border-black pr-10">
            <div className="flex flex-col space-y-8  p-8 rounded-2xl h-full ">
              {/* Web App Icon and Title */}
              <div className="text-center mb-8">
                <Image 
                width={600}
                  height={600}
                src="/webapp.png" alt="Web App Icon" className="mx-auto mb-4 h-40" />
              </div>

              {/* Project Info */}
              <div className="space-y-6 flex-1">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Role:</h4>
                  <p className="text-gray-700">{project.overview.role}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Tools:</h4>
                  <p className="text-gray-700">{project.overview.tools}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Team:</h4>
                  <p className="text-gray-700">{project.overview.team}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Focus:</h4>
                  <p className="text-gray-700">{project.overview.focus}</p>
                </div>
              </div>
            </div>
            </div>

            {/* Right Column - Background and Role */}
            <div className="flex flex-col space-y-8  p-8 rounded-2xl h-full">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Background</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {project.overview.backgroundText1}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {project.overview.backgroundText2}
                </p>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">My Role</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {project.overview.myRoleText1}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {project.overview.myRoleText2}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION THREE - Problem & Goals */}
        <div id='designprocess' className="rounded-3xl py-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch relative">
            {/* Left Column - The Problem */}
            <div className="flex flex-col space-y-8 bg-[#F9F4FF] p-8 rounded-2xl h-full">
              {/* Problem Title with background */}
              <div className="text-center mb-8">
                <div className="inline-block px-8 py-3 bg-contain bg-no-repeat bg-center bg-[url('/problemvector.png')]">
                  <h2 className="text-2xl font-bold text-gray-800">The Problem</h2>
                </div>
              </div>

              {/* Problem Description */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed text-center">
                  {project.problem.title}
                </p>
              </div>

              {/* Problem Points */}
              <div className="space-y-4 flex-1">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{project.problem.problempt1}</p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{project.problem.problempt2}</p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{project.problem.problempt3}</p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{project.problem.problempt4}</p>
                </div>
              </div>
            </div>

            {/* Right Column - My Design Goals */}
            <div className="flex flex-col space-y-8 bg-[#F0FBFF] p-8 rounded-2xl h-full">
              {/* Goals Title with border */}
              <div className="text-center mb-8">
                <div className="inline-block px-8 py-3 bg-contain bg-no-repeat bg-center bg-[url('/designgoalvector.png')] rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-800">My Design Goals</h2>
                </div>
              </div>

              {/* Goals Description */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed text-center">
                  {project.goals.title}
                </p>
              </div>

              {/* Goals Points */}
              <div className="space-y-4 flex-1">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{project.goals.goalpt1}</p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{project.goals.goalpt2}</p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{project.goals.goalpt3}</p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{project.goals.goalpt4}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION FOUR - Design Process */}
        <div  className="rounded-t-3xl py-12 relative overflow-hidden bg-[#FFF2E7]">
          <div className="flex justify-center">
            <Image 
            width={600}
                  height={600}
            src={project.designprocess.image} alt="Design Process" className="w-3/4 h-auto" />
          </div>
        </div>

        {/* SECTION FIVE- VIDEO */}
        <div id='videosection' className="rounded-b-3xl pb-12 relative overflow-hidden bg-[#FFF2E7] ">
          <h1 className='text-2xl font-bold text-[#363444] text-center pb-1'>Prototype Interaction </h1>
          <h2 className='text-lg  text-[#858394] text-center p-4 ml-10 mr-10'>{project.video.videoText}</h2>
          <div className="flex justify-center">
            <video 
              className="w-3/4 h-auto rounded-lg"
              controls
              autoPlay
              muted
              loop
            >
              <source src={project.video.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* SECTION FIVE - OUTCOMES = */}
        <div className="rounded-3xl py-12 mt-12 relative overflow-hidden bg-[#265AA7]">
          <div className="flex justify-center">
            <Image
            width={600}
                  height={600}
            src={project.outcomes.image} alt="Design Process" className="w-3/4 h-auto" />
          </div>
        </div>

        {/* SECTION SIX - learnings & whats next */}
        <div className="rounded-3xl py-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch relative">
            {/* Left Column - The Problem */}
            <div className="flex flex-col space-y-8 bg-[#F9F4FF] p-8 rounded-2xl h-full">
              {/* Problem Title with background */}
              <div className="text-center mb-8">
                <div className="inline-block px-8 py-3 bg-contain bg-no-repeat bg-center bg-[url('/problemvector.png')]">
                  <h2 className="text-2xl font-bold text-gray-800">Learnings</h2>
                </div>
              </div>

              {/* Problem Points */}
              <div className="space-y-4 flex-1">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6  rounded-full flex items-center justify-center mt-1">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{project.learnings.learningpt1}</p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6  rounded-full flex items-center justify-center mt-1">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{project.learnings.learningpt2}</p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6  rounded-full flex items-center justify-center mt-1">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{project.learnings.learningpt3}</p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6  rounded-full flex items-center justify-center mt-1">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{project.learnings.learningpt4}</p>
                </div>
              </div>
            </div>

            {/* Right Column - My Design Goals */}
            <div className="flex flex-col space-y-8 bg-[#F0FBFF] p-8 rounded-2xl h-full">
              {/* Goals Title with border */}
              <div className="text-center mb-8">
                <div className="inline-block px-8 py-3 bg-contain bg-no-repeat bg-center bg-[url('/designgoalvector.png')] rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-800">What&apos;s Next</h2>
                </div>
              </div>

              {/* Goals Points */}
              <div className="space-y-4 flex-1">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{project.whatsnext.whatsnextpt1}</p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{project.whatsnext.whatsnextpt2}</p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6  rounded-full flex items-center justify-center mt-1">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{project.whatsnext.whatsnextpt3}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION SEVEN - TLDR */}
        <div className="rounded-3xl py-12 relative overflow-hidden bg-[#DBFFF1]">
          
          <div className="text-center mb-16">
            <div className="inline-block px-8 py-3 bg-contain bg-no-repeat bg-center bg-[url('/overviewvector.png')]">
              <h2 className="text-2xl font-bold text-gray-800">TLDR</h2>
            </div>
          </div>

          {/* TLDR content */}
          <div className="max-w-3xl mx-auto px-6 text-center space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">
            {project.tldr.tldrpt1}
            </h2>
            <p className="text-base text-gray-700">
              {project.tldr.tldrpt2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  React.useEffect(() => {
  setCurrentImageIndex(0);
}, [graphicActiveTab]);




  return (
    <div>
      {currentView === 'main' && <MainView />}
      {currentView === 'detail' && selectedProject && <ProjectDetailView project={selectedProject} />}
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
}
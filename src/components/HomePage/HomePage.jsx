// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import "../../Styles/HomePage.css";
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import { div } from 'framer-motion/client';


// const HomePage = () => {
// const bubblesRef = useRef([]);
// const navigate = useNavigate(); // Initialize navigate function 

// useEffect(() => {
//   bubblesRef.current.forEach((bubble, index) => {
//     gsap.to(bubble, {
//       y: -window.innerHeight,
//       x: `+=${Math.random() * 300 - 150}`,
//       duration: 5 + Math.random() * 5,
//       repeat: -1,
//       ease: 'sine.inOut'
//     });
//   });
// }, []);


// const handleRedirect = () => {
//   navigate("/chatbot"); // Redirect to chatbot page
// };

//   return (


// {/* <div className="homepage">
//       <div className="glass-container">
//         <h1 className="title">Welcome to the AI voice Assistant</h1>
//        <p className="subtitle">Experience AI like never before
//        </p>
//        <button onClick={handleRedirect} className="arrow-button"></button>
//       </div>

//       {/* <div>
//         <video src="https://d1t11jpd823i7r.cloudfront.net/experience/variant-b-ep-mob.mp4"></video>
//        </div>
//     */}
//       {[...Array(50)].map((_, i) => (
//   <div
//     key={i}
//     className="bubble"
//     style={{
//       '--x': Math.random(),
//       '--y': Math.random(),
//       '--x2': Math.random(),
//       '--y2': Math.random()
//     }}
//   />
// ))}


//     </div> */}

//   );
// };

// export default HomePage;


// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import "../../Styles/HomePage.css";
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import { div } from 'framer-motion/client';


// const HomePage = () => {
//   const bubblesRef = useRef([]);
//   const navigate = useNavigate(); // Initialize navigate function 

//   useEffect(() => {
//     bubblesRef.current.forEach((bubble, index) => {
//       gsap.to(bubble, {
//         y: -window.innerHeight,
//         x: `+=${Math.random() * 300 - 150}`,
//         duration: 5 + Math.random() * 5,
//         repeat: -1,
//         ease: 'sine.inOut'
//       });
//     });
//   }, []);


//   const handleRedirect = () => {
//     navigate("/chatbot"); // Redirect to chatbot page
//   };

//   return (
//     <div className='flex flex-col gap-2'>

// <div className="homepage h-[100vh] w-[100vw]">
//       <div className="glass-container">
//         <h1 className="title">Welcome to the AI voice Assistant</h1>
//        <p className="subtitle">Experience AI like never before
//        </p>
//        <button onClick={handleRedirect} className="arrow-button"></button>
//       </div>

//       {/* <div>
//         <video src="https://d1t11jpd823i7r.cloudfront.net/experience/variant-b-ep-mob.mp4"></video>
//        </div>
//     */}
//       {[...Array(50)].map((_, i) => (
//   <div
//     key={i}
//     className="bubble"
//     style={{
//       '--x': Math.random(),
//       '--y': Math.random(),
//       '--x2': Math.random(),
//       '--y2': Math.random()
//     }}
//   />
// ))}


//     </div>

//       <div className='bg-fuchsia-500 h-[20rem]'>
//       <h1 className='text-2xl text-center pt-5 font-extrabold'>Hello</h1>
//       <p className='text-center text-2xl font-black'>This is 1st page</p>
//       </div>
//     </div>
//   )
// }

// import React, { useState} from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes, FaRobot } from "react-icons/fa";



// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);



//   return (
//     <div className="flex flex-col gap-2">
//       <nav className="top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md shadow-md p-4 z-50">
//         <div className="container mx-auto flex justify-between items-center">
//           {/* Logo */}
//           <Link to="/" className="text-2xl font-bold flex items-center text-cyan-400">
//             <FaRobot className="mr-2" /> Voice Assistant
//           </Link>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex space-x-6 text-white text-lg font-bold">
//             <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>
//             <li><Link to="/features" className="hover:text-cyan-400">Features</Link></li>
//             <li><Link to="/about" className="hover:text-cyan-400">About</Link></li>
//             <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
//           </ul>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         {isOpen && (
//           <div className="md:hidden bg-black bg-opacity-90 absolute top-full left-0 w-full text-center py-4">
//             <ul className="space-y-4 text-white">
//               <li><Link to="/" className="block hover:text-cyan-400 " onClick={() => setIsOpen(false)}>Home</Link></li>
//               <li><Link to="/features" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>Features</Link></li>
//               <li><Link to="/about" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>About</Link></li>
//               <li><Link to="/contact" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>Contact</Link></li>
//             </ul>
//           </div>
//         )}
//       </nav>
//       <div className="bg-fuchsia-100 h-[100vh]">

//         <h1 className="text-black">Hello</h1>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaBars, FaTimes, FaRobot } from "react-icons/fa";
// import gsap from "gsap";
// import "../../Styles/HomePage.css";

// const HomePage = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const bubblesRef = useRef([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     bubblesRef.current.forEach((bubble, index) => {
//       gsap.to(bubble, {
//         y: -window.innerHeight,
//         x: `+=${Math.random() * 300 - 150}`,
//         duration: 5 + Math.random() * 5,
//         repeat: -1,
//         ease: "sine.inOut",
//       });
//     });
//   }, []);

//   const handleRedirect = () => {
//     navigate("/chatbot");
//   };

//   return (
//     <div className="flex flex-col min-h-screen gap-4">
//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md shadow-md p-4 z-50">
//         <div className="container mx-auto flex justify-between items-center">
//           <Link to="/" className="text-2xl font-bold flex items-center text-cyan-400">
//             <FaRobot className="mr-2" /> Voice Assistant
//           </Link>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex space-x-6 text-white text-lg font-bold">
//             <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>
//             <li><Link to="/features" className="hover:text-cyan-400">Features</Link></li>
//             <li><Link to="/about" className="hover:text-cyan-400">About</Link></li>
//             <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
//           </ul>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         {isOpen && (
//           <div className="md:hidden bg-black bg-opacity-90 absolute top-full left-0 w-full text-center py-4">
//             <ul className="space-y-4 text-white">
//               <li><Link to="/" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>Home</Link></li>
//               <li><Link to="/features" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>Features</Link></li>
//               <li><Link to="/about" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>About</Link></li>
//               <li><Link to="/contact" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>Contact</Link></li>
//             </ul>
//           </div>
//         )}
//       </nav>

//       {/* HomePage Content */}

//    <div className="mb-5">
//    <img src="https://www.q3tech.com/wp-content/uploads/2024/06/Evolution-of-chatbots.jpg" alt="" 
//    className="rounded-2xl "
//    />
//    </div>



//     </div>
//   );
// };

// export default HomePage;

// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaBars, FaTimes, FaRobot } from "react-icons/fa";
// import gsap from "gsap";
// import Lottie from "lottie-react";
// import chatbotAnimation from "../../assets/chatbot-animation.json"; // First animation
// import "../../Styles/HomePage.css";


// const HomePage = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const bubblesRef = useRef([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     bubblesRef.current.forEach((bubble, index) => {
//       gsap.to(bubble, {
//         y: -window.innerHeight,
//         x: `+=${Math.random() * 300 - 150}`,
//         duration: 5 + Math.random() * 5,
//         repeat: -1,
//         ease: "sine.inOut",
//       });
//     });
//   }, []);

//   const handleRedirect = () => {
//     navigate("/chatbot");
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md shadow-md p-4 z-50">
//         <div className="container mx-auto flex justify-between items-center">
//           <Link to="/" className="text-2xl font-bold flex items-center text-cyan-400">
//             <FaRobot className="mr-2" /> Voice Assistant
//           </Link>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex space-x-6 text-white text-lg font-bold">
//             <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>
//             <li><Link to="/features" className="hover:text-cyan-400">Features</Link></li>
//             <li><Link to="/about" className="hover:text-cyan-400">About</Link></li>
//             <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
//           </ul>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         {isOpen && (
//           <div className="md:hidden bg-black bg-opacity-90 absolute top-full left-0 w-full text-center py-4">
//             <ul className="space-y-4 text-white">
//               <li><Link to="/" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>Home</Link></li>
//               <li><Link to="/features" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>Features</Link></li>
//               <li><Link to="/about" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>About</Link></li>
//               <li><Link to="/contact" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>Contact</Link></li>
//             </ul>
//           </div>
//         )}
//       </nav>



//       <div className="w-80 mt-25 bg-amber-200">
//         <Lottie animationData={chatbotAnimation} loop={true}
//         />
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaBars, FaTimes, FaRobot } from "react-icons/fa";
// import Lottie from "lottie-react";
// import chatbotAnimation from "../../assets/chatbot-animation.json"; // Import Lottie animation
// import messageAnimation from "../../assets/message-animation.json"
// import "../../Styles/HomePage.css";


// const HomePage = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleRedirect = () => {
//     navigate("/chatbot");
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md shadow-md p-4 z-50">
//         <div className="container mx-auto flex justify-between items-center">
//           <Link to="/" className="text-2xl font-bold flex items-center text-cyan-400">
//             <FaRobot className="mr-2"
//               size={25}
//             /> Voice Assistant
//           </Link>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex space-x-6 text-white text-lg font-bold">
//             <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>
//             <li><Link to="/features" className="hover:text-cyan-400">Features</Link></li>
//             <li><Link to="/about" className="hover:text-cyan-400">About</Link></li>
//             <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
//           </ul>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         {isOpen && (
//           <div className="md:hidden bg-black bg-opacity-90 absolute top-full left-0 w-full text-center py-4">
//             <ul className="space-y-4 text-white">
//               <li><Link to="/" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>Home</Link></li>
//               <li><Link to="/features" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>Features</Link></li>
//               <li><Link to="/about" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>About</Link></li>
//               <li><Link to="/contact" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>Contact</Link></li>
//             </ul>
//           </div>
//         )}
//       </nav>

//       {/* HomePage Content - ADD `pt-16` to push it below navbar */}
//       <div className="flex flex-col md:flex-row items-center justify-center gap-5 px-6 bg-white w-full pt-16 h-[40rem]"
//       style={{backgroundImage: "url('https://media.mobidev.biz/2020/01/future-voice-assistants-technology-enterprise-iot-meets-data-science.jpg?strip=all&lossy=1&ssl=1')",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         opacity: 0.8
//       }}
//       >
//         {/* Left Side - Lottie Animation */}
//         <div className="w-80 md:w-96">
//           <Lottie animationData={chatbotAnimation} loop={true} />
//         </div>

//         {/* Right Side - Text Content */}
//         <div className="text-center md:text-left mt-10">
//           <h1 className="text-3xl md:text-5xl font-bold text-white">
//             Welcome to the AI Voice Assistant
//           </h1>
//           <p className="text-lg md:text-xl text-white font-bold mt-3">
//             Experience AI like never before!
//           </p>
//           <button
//             onClick={handleRedirect}
//             className="mt-4 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg text-lg"
//           >
//             Get Started
//           </button>
//           <div className="w-80 md:w-96">
//             <Lottie animationData={messageAnimation} loop={true} />
//           </div>
//         </div>
//       </div>

//       {/* Additional Content */}
//       {/* <div className="bg-red-400 h-[20rem] pt-16">
//     <h1 className="text-white text-center">hello</h1>
//   </div> */}
//     </div>

//   );
// };

// export default HomePage;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaRobot } from "react-icons/fa";
import Lottie from "lottie-react";
import chatbotAnimation from "../../assets/chatbot-animation.json";
import messageAnimation from "../../assets/message-animation.json";
import "../../Styles/HomePage.css";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/chatbot");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md shadow-md p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold flex items-center text-cyan-400">
            <FaRobot className="mr-2" size={25} /> Voice Assistant
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-white text-lg font-bold">
            <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>
            <li><Link to="/features" className="hover:text-cyan-400">Features</Link></li>
            <li><Link to="/about" className="hover:text-cyan-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute left-0 top-0 w-full h-screen bg-black bg-opacity-90 flex items-center justify-center">
            <ul className="space-y-6 text-white text-xl">
              <li><Link to="/" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link to="/features" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>Features</Link></li>
              <li><Link to="/about" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>About</Link></li>
              <li><Link to="/contact" className="block hover:text-cyan-400" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        )}
      </nav>

      {/* HomePage Content */}
      <div
        className="flex flex-col md:flex-row items-center justify-center gap-5 px-6 w-full min-h-screen pt-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://media.mobidev.biz/2020/01/future-voice-assistants-technology-enterprise-iot-meets-data-science.jpg?strip=all&lossy=1&ssl=1')",
        
        }}
      >
        {/* Left Side - Lottie Animation */}
        <div className="w-48 sm:w-56 md:w-96 flex justify-center">
          <Lottie animationData={chatbotAnimation} loop={true} />
        </div>

        {/* Right Side - Text Content */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Welcome to the AI Voice Assistant
          </h1>
          <p className="text-lg md:text-xl text-white font-bold mt-3">
            Experience AI like never before!
          </p>
          <button
            onClick={handleRedirect}
            className="mt-4 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg text-lg"
          >
            Get Started
          </button>
          <div className="w-72 md:w-96 mt-6">
            <Lottie animationData={messageAnimation} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

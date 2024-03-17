// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import myImage from './assets/photo.jpg'

const App = () => {
  const [isScrolling, setIsScrollingDown] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const lastScrollTopRef = useRef(0);
  const headerRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.scrollY || document.documentElement.scrollTop;
      const headerHeight = headerRef.current.clientHeight;

      setIsScrollingDown(
        currentScroll > lastScrollTopRef.current && currentScroll > headerHeight
      );
      lastScrollTopRef.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Add or remove 'dark' class from <html> based on isDarkMode state
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]); // Run effect when isDarkMode changes

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <div ref={headerRef} className={`header ${isScrolling ? "hidden" : ""}`}>
        <header
          className="shadow-lg fixed top-0 w-full transition-all duration-300 bg-white dark:bg-black dark:text-white"
          id="header"
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <h1 className="text-xl font-semibold">PIUS MUIGA NDERITU</h1>
              <button
                onClick={toggleDarkMode}
                className="mode-toggle ml-auto text-2xl"
              >
                {isDarkMode ? "\u2600" : "\u263E"}
              </button>
            </div>
          </div>
        </header>
      </div>
      <main className="container mx-auto flex-grow px-4 py-8 mt-8 max-w-5xl dark:bg-gray-700 ">
        <div className="border-1 shadow-lg shadow-gray-700 rounded-lg">
          {/* top content */}
          <div className="flex rounded-t-lg bg-top-color sm:px-2 w-full">
            <div className="h-40 w-40 overflow-hidden sm:rounded-full sm:p-0 top-10 left-5 p-3 rounded-lg">
              <img src={myImage} alt="My image description" />
            </div>
            <div className="w-2/3 sm:text-center pl-5 mt-10 text-start">
              <p className="font-poppins font-bold text-heading sm:text-4xl text-2xl">
                PIUS MUIGA NDERITU
              </p>
              <p className="text-heading">Software Engineer</p>
            </div>
          </div>
          {/* main content */}
          <div className="p-5">
            <div className="flex flex-col sm:flex-row sm:mt-10">
              <div className="flex flex-col sm:w-1/3">
                {/* My contact */}
                <div className="py-3 sm:order-none order-3" id="contact">
                  <h2 className="text-lg font-poppins font-bold text-top-color">
                    My Contact
                  </h2>
                  <div className="border-2 w-20 border-top-color my-3" />
                  <div>
                    <a
                      href="https://www.linkedin.com/in/pius-nderitu-9b7065231"
                      className="flex items-center my-1 hover:text-orange-600"
                    >
                      <div className="w-6 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="h-4"
                        >
                          <path
                            fill="currentColor"
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                          ></path>
                        </svg>
                      </div>
                      <div className="ml-2 truncate">pius-nderitu</div>
                    </a>

                    <a
                      href="tel:+254711192399"
                      className="flex items-center my-1 hover:text-orange-600"
                    >
                      <div className="w-6">
                        <svg
                          fill="currentColor"
                          className="h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 473.806 473.806"
                          xmlSpace="preserve"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <g id="SVGRepo_iconCarrier">

                            <g>

                              <g>

                                <path d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4 c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8 c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6 c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5 c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26 c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9 c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806 C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20 c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6 c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1 c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3 c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5 c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8 c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9 l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1 C420.456,377.706,420.456,388.206,410.256,398.806z" />
                                <path d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2 c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11 S248.656,111.506,256.056,112.706z" />
                                <path d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11 c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2 c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z" />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="ml-2 truncate">+254711192399</div>
                    </a>
                    <a
                      href="mailto:pnderitu07@gmail.com"
                      className="flex items-center my-1 hover:text-orange-600"
                      aria-label="Visit pius-nderitu Gmail"
                    >
                      <div className="w-6 h-4">
                        <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z" fill="white" /> <path d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z" fill="#EA4335" /> <path d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z" fill="#FBBC05" /> <path d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z" fill="#34A853" /> <path d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z" fill="#C5221F" /> <path d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z" fill="#C5221F" /> <path d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z" fill="#C5221F" /> <path d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z" fill="#4285F4" /> </g></svg>


                      </div>
                      <div className="ml-2 truncate">pnderitu07@gmail.com</div>
                    </a>
                    <a className="flex items-center my-1 hover:text-orange-600" href="https://www.facebook.com/pius.nderitu.92">
                      <div
                        className="w-6  hover:text-orange-600"
                        aria-label="Visit pius-nderitu Facebook"

                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          className="h-4"
                        >
                          <path
                            fill="currentColor"
                            d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                          ></path>
                        </svg>
                      </div>
                      <div>pius-nderitu</div>
                    </a>
                    <a className="flex items-center my-1 hover:text-orange-600" href="https://twitter.com/piusnderitu5">
                      <div
                        className="w-6 "
                        aria-label="Visit pius-nderitu Twitter"

                      >
                        <svg
                          className="h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                          ></path>
                        </svg>
                      </div>
                      <div>@piusnderitu5</div>
                    </a>
                  </div>
                </div>
                {/* Skills */}
                <div className="py-3 sm:order-none order-2" id="skills">
                  <h2 className="text-lg font-poppins font-bold text-top-color">
                    Skills
                  </h2>
                  <div className="border-2 w-20 border-top-color my-3" />
                  <div>

                    <ul className="text-sm list-disc pl-4 space-y-1">
                      <li>Programming Languages: Python, PHP, Java, and JavaScript</li>
                      <li>Web Development: Responsive Web Design, Front-End Development</li>
                      <li>Database Management: Oracle, MongoDB</li>
                      <li>System Administration: Linux</li>
                      <li>Version Control Systems: Git, GitHub</li>
                      <li>SEO Optimization, Web Analytics</li>
                      <li>Object-Oriented Programming (OOP)</li>
                      <li>Data Structures and Algorithms</li>
                      <li>Application Design and Development</li>
                      <li>Networking</li>
                      <li>Cloud computing(AWS, Azure)</li>
                    </ul>
                  </div>
                </div>
                {/* Education Background */}
                <div className="py-3 sm:order-none order-1">
                  <h2 className="text-lg font-poppins font-bold text-top-color">
                    Education Background
                  </h2>
                  <div className="border-2 w-20 border-top-color my-3" />
                  <div className="flex flex-col space-y-1">
                    <div className="flex flex-col">
                      <p className="font-semibold text-xs">
                        2023
                      </p>
                      <p className="text-sm font-medium">
                        <span className="text-green-700 dark:text-yellow-400">
                          B.S.C. (MATHEMATICS AMD COMPUTER SCIENCE)
                        </span>
                        , MERU UNIVERSITY OF SCIENCE AND TECHNOLOGY,KENYA.
                      </p>
                      <p className="font-bold text-xs  mb-2">
                        Second Upper Division.
                      </p>
                    </div>

                    <div className="flex flex-col">
                      <p className="font-semibold text-xs ">
                        2017
                      </p>
                      <p className="text-sm font-medium">
                        <span className="text-green-700 dark:text-yellow-400">SSC</span>, MUNYU
                        HIGH SCHOOL, KENYA.
                      </p>
                      <p className="font-bold text-xs  mb-2">
                        Grade:B (PLAIN)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">
                {/* About me */}
                <div className="py-3" id="about">
                  <h2 className="text-lg font-poppins font-bold text-top-color">
                    About Me
                  </h2>
                  <div className="border-2 w-20 border-top-color my-3" />
                  <p>
                    Dedicated professional with strong communication, time management, and proficient computer
                    skills. Seeking to apply expertise in a role that aligns with company objectives, aiming to
                    contribute significantly towards achieving organizational goals
                  </p>
                </div>
                {/* Professional Experience */}
                <div className="py-3" id="experience">
                  <h2 className="text-lg font-poppins font-bold text-top-color">
                    Professional Experience
                  </h2>
                  <div className="border-2 w-20 border-top-color my-3" />
                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      <p className="text-lg font-bold">
                        Infinity Security Developers, Nyeri | Linux System Administrator,
                      </p>
                      <p className="font-semibold text-sm ">
                        July 2022 - January 2023
                      </p>
                      <p className="font-semibold text-sm  mt-2 mb-1">
                        Key Responsibilities
                      </p>
                      <ul className="text-sm list-disc pl-4 space-y-1">
                        <li>Maintained robust security posture through comprehensive network log analysis.</li>
                        <li>Championed user experience by proactively resolving system issues and fostering clear communication with network users.</li>
                        <li>Adept at troubleshooting hardware, software, and network problems for efficient system uptime.</li>
                      </ul>
                    </div>
                    <div className="flex flex-col mt-8">
                      <p className="text-lg font-bold ">
                        Kwezi Safaris, Nairobi | SEO Specialist Intern
                      </p>
                      <p className="font-semibold text-sm ">
                        March 2022 – July 2022
                      </p>
                      <p className="font-semibold text-sm  mt-2 mb-1">
                        Key Responsibilities
                      </p>
                      <ul className="text-sm list-disc pl-4 space-y-1">
                        <li>Leveraged industry best practices to identify and implement new media and technologies for impactful digital marketing campaigns.</li>
                        <li>Provided data-driven insights to marketing executives through effective tracking, reporting, and analysis.</li>
                        <li>Optimized website user experience to drive conversions and bookings, positively impacting key performance indicators (KPIs).</li>

                      </ul>
                    </div>
                    <div className="flex flex-col mt-8">
                      <p className="text-lg font-bold ">
                        Kenya-Tanzania Safaris | Software Engineer Intern
                      </p>
                      <p className="font-semibold text-sm ">
                        January 2019 - June 2019
                      </p>
                      <p className="font-semibold text-sm  mt-2 mb-1">
                        Key Responsibilities
                      </p>
                      <ul className="text-sm list-disc pl-4 space-y-1">
                        <li>Leveraged industry best practices to identify and implement new media and technologies for impactful digital marketing campaigns.</li>
                        <li>Provided data-driven insights to marketing executives through effective tracking, reporting, and analysis.</li>
                        <li>Optimized website user experience to drive conversions and bookings, positively impacting key performance indicators (KPIs).</li>

                      </ul>
                    </div>
                  </div>
                </div>
                {/* Projects */}
                <div className="py-3" id="projects">
                  <h2 className="text-lg font-poppins font-bold text-top-color">
                    Projects
                  </h2>
                  <div className="border-2 w-20 border-top-color my-3" />
                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      <a className="text-lg font-semibold " href="https://kenyasafarisexperiences.com/">
                        Kenya Safaris Experiences
                      </a>
                      <p className="font-normal text-sm  mb-1 pl-2">
                        Tour operator that curates personalized East African adventures (Kenya, Uganda, Tanzania) with expert guides. From wildlife safaris to mountain climbs, they offer bespoke bush & beach itineraries for unforgettable memories. Their decade of experience ensures peerless service & 24/7 support
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-lg font-semibold ">
                        Nekos Security Firm
                      </p>
                      <p className="font-normal text-sm  mb-1 pl-2">
                        it&apos;s a web application for a security guard service provider.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div ref={footerRef} className={`footer ${isScrolling ? "hidden" : ""}`}>
        <footer
          className={`shadow-lg  fixed bottom-1 w-full transition-transform duration-300 transform text-black bg-white dark:bg-gray-800 dark:text-white`}
          id="footer"
        >
          <nav className="container mx-auto flex justify-between items-center px-4 py-2 max-w-4xl">
            <a href="#about" className=" hover:text-blue-500 transition-colors h-6 w-6 ">
           <svg fill="currentColor" viewBox="0 0 128 128" id="Layer_1" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g> <path d="M64,1C29.3,1,1,29.3,1,64s28.3,63,63,63s63-28.3,63-63S98.7,1,64,1z M64,119C33.7,119,9,94.3,9,64S33.7,9,64,9 s55,24.7,55,55S94.3,119,64,119z" /> <rect height={40} width={8} x={60} y="54.5" /> <rect height={8} width={8} x={60} y="35.5" /> </g> </g></svg>



            </a>
            <a href="#experience" className=" hover:text-blue-500 transition-colors h-6 w-6 ">
<svg fill="currentColor" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path d="m 2.9322778,4.864557 c 1.0654586,0 1.9322786,-0.8668286 1.9322786,-1.9322743 0,-1.0654628 -0.86682,-1.93228278 -1.9322786,-1.93228278 -1.0654362,0 -1.9322777,0.86681998 -1.9322777,1.93228278 0,1.0654457 0.8668312,1.9322743 1.9322777,1.9322743 z m 0,-2.6499771 c 0.3957643,0 0.7177037,0.3219514 0.7177037,0.7177028 0,0.3957429 -0.3219394,0.7177029 -0.7177037,0.7177029 -0.3957411,0 -0.7177028,-0.32196 -0.7177028,-0.7177029 0,-0.3957514 0.3219617,-0.7177028 0.7177028,-0.7177028 z m 6.9427363,10.3104071 0.3747519,0.37476 c 0.133669,0.133671 0.350394,0.133671 0.484074,0 l 0.653541,-0.653529 0.653541,0.653529 c 0.13368,0.133671 0.350393,0.133671 0.484074,0 l 0.374741,-0.37476 c 0.133669,-0.133672 0.133669,-0.350391 0,-0.484071 l -0.65353,-0.653538 0.653541,-0.653546 c 0.133669,-0.133672 0.133669,-0.3504 0,-0.48408 L 12.525007,9.8749998 c -0.13368,-0.133662 -0.350394,-0.133662 -0.484074,0 L 11.387381,10.528547 10.73384,9.8749998 c -0.133669,-0.133662 -0.350394,-0.133662 -0.484074,0 L 9.8750141,10.249752 c -0.1336689,0.133671 -0.1336689,0.350401 0,0.484081 l 0.6535419,0.653537 -0.6535419,0.653528 c -0.13368,0.133698 -0.13368,0.350418 0,0.484089 z m -6.1753137,-0.38213 0.5520798,0 c 0.2439197,0 0.4416634,-0.197743 0.4416634,-0.44166 l 0,-1.9496142 c 0,-1.0147544 0.8302508,-1.8336772 1.8450283,-1.8360944 C 6.9771104,7.9146313 7.4029956,7.827837 7.8044342,7.6580456 8.1941916,7.4931913 8.5440773,7.2573399 8.844409,6.9570399 9.144685,6.6567399 9.3805664,6.306837 9.5453839,5.9170856 9.7162524,5.5131913 9.802841,5.0845599 9.802841,4.643097 l 0,-0.6265886 0.654722,0 c 0.242915,0 0.373603,-0.2852571 0.21498,-0.4692171 L 9.3001176,1.9556284 c -0.113232,-0.1313142 -0.3167169,-0.1313142 -0.4299377,0 L 7.497721,3.5472742 C 7.3391196,3.7312427 7.4698039,4.0164999 7.7127233,4.0164999 l 0.6547106,0 0,0.6274971 c 0,1.0147714 -0.83025,1.8336857 -1.8450386,1.8360943 C 6.0837679,6.4809484 5.6578827,6.5677342 5.2564433,6.7375427 4.8666867,6.902397 4.516801,7.1382484 4.2164804,7.4385313 3.9161822,7.7388227 3.680323,8.0887342 3.5154722,8.4784942 3.3446367,8.882397 3.2580259,9.3110118 3.2580259,9.7524828 l 0,1.9487142 c 1.11e-5,0.243917 0.1977548,0.44166 0.4416745,0.44166 z" /></g></svg>


            </a>
            <a href="#projects" className=" hover:text-blue-500 transition-colors h-6 w-6 ">
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#0000ff"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fill="none" stroke="currentColor" strokeWidth={2} d="M9,15 L9,23 L1,23 L1,15 L9,15 Z M23,15 L23,23 L15,23 L15,15 L23,15 Z M9,1 L9,9 L1,9 L1,1 L9,1 Z M23,1 L23,9 L15,9 L15,1 L23,1 Z" /> </g></svg>

            </a>
            <a href="#contact" className=" hover:text-blue-500 transition-colors h-6 w-6 ">
            <svg fill="currentColor" version="1.1" id="XMLID_276_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g id="contact-us"> <g> <path d="M4,24v-5H0V0h23v19h-9.3L4,24z M2,17h4v3.7l7.3-3.7H21V2H2V17z" /> </g> <g> <rect x={5} y={8} width={3} height={3} /> </g> <g> <rect x={10} y={8} width={3} height={3} /> </g> <g> <rect x={15} y={8} width={3} height={3} /> </g> </g> </g></svg>


            </a>
            <a href="#skills" className=" hover:text-blue-500 transition-colors h-6 w-6 ">
            <svg fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M268.18,162.303l-2.993,21.876c-0.55,4.023,1.157,8.023,4.441,10.41c1.918,1.393,4.191,2.105,6.479,2.105 c1.631,0,3.272-0.363,4.794-1.098l19.88-9.605l19.88,9.605c3.656,1.767,7.985,1.38,11.272-1.007 c3.284-2.387,4.991-6.386,4.441-10.408l-2.992-21.876l15.278-15.94c2.81-2.931,3.781-7.17,2.526-11.031 c-1.255-3.861-4.531-6.72-8.527-7.44l-21.729-3.914l-10.439-19.457c-1.919-3.578-5.65-5.81-9.711-5.81 c-4.061,0-7.791,2.233-9.711,5.81l-10.439,19.457l-21.729,3.914c-3.995,0.72-7.272,3.579-8.526,7.44 c-1.255,3.861-0.284,8.101,2.526,11.031L268.18,162.303z M289.779,144.725c3.31-0.597,6.168-2.672,7.757-5.636l3.244-6.047 l3.244,6.047c1.589,2.963,4.447,5.039,7.757,5.636l6.753,1.217l-4.749,4.954c-2.327,2.429-3.419,5.787-2.963,9.119l0.93,6.798 l-6.178-2.985c-1.514-0.732-3.154-1.098-4.795-1.098s-3.281,0.366-4.795,1.098l-6.178,2.984l0.931-6.797 c0.455-3.333-0.636-6.691-2.963-9.119l-4.749-4.955L289.779,144.725z" /> <path d="M171.294,136.681h51.244c6.085,0,11.02-4.934,11.02-11.02s-4.935-11.02-11.02-11.02h-51.244 c-6.085,0-11.02,4.934-11.02,11.02S165.209,136.681,171.294,136.681z" /> <path d="M171.294,180.762h51.244c6.085,0,11.02-4.934,11.02-11.02c0-6.086-4.935-11.02-11.02-11.02h-51.244 c-6.085,0-11.02,4.934-11.02,11.02C160.274,175.828,165.209,180.762,171.294,180.762z" /> <path d="M268.18,276.814l-2.993,21.876c-0.55,4.022,1.157,8.023,4.441,10.409c3.285,2.388,7.615,2.774,11.273,1.007l19.88-9.605 l19.88,9.605c1.523,0.735,3.161,1.098,4.794,1.098c2.288,0,4.562-0.712,6.479-2.105c3.284-2.387,4.991-6.386,4.441-10.409 l-2.992-21.876l15.278-15.94c2.81-2.931,3.781-7.17,2.526-11.031c-1.255-3.861-4.531-6.72-8.527-7.44l-21.729-3.914 l-10.439-19.457c-1.919-3.578-5.65-5.81-9.711-5.81c-4.061,0-7.791,2.233-9.711,5.81l-10.439,19.457l-21.729,3.914 c-3.995,0.72-7.272,3.579-8.526,7.44c-1.255,3.861-0.284,8.101,2.526,11.031L268.18,276.814z M289.779,259.237 c3.31-0.597,6.168-2.672,7.757-5.636l3.244-6.047l3.244,6.047c1.589,2.963,4.447,5.04,7.757,5.636l6.753,1.217l-4.749,4.954 c-2.327,2.429-3.419,5.787-2.963,9.119l0.93,6.799l-6.178-2.985c-1.514-0.732-3.154-1.098-4.795-1.098s-3.281,0.366-4.795,1.098 l-6.178,2.984l0.931-6.798c0.455-3.332-0.636-6.691-2.963-9.119l-4.749-4.955L289.779,259.237z" /> <path d="M171.294,251.194h51.244c6.085,0,11.02-4.934,11.02-11.02s-4.935-11.02-11.02-11.02h-51.244 c-6.085,0-11.02,4.934-11.02,11.02S165.209,251.194,171.294,251.194z" /> <path d="M171.294,295.274h51.244c6.085,0,11.02-4.934,11.02-11.02s-4.935-11.02-11.02-11.02h-51.244 c-6.085,0-11.02,4.934-11.02,11.02C160.274,290.34,165.209,295.274,171.294,295.274z" /> <path d="M268.18,391.328l-2.993,21.875c-0.55,4.022,1.157,8.023,4.441,10.409c1.918,1.394,4.191,2.105,6.479,2.105 c1.631,0,3.272-0.363,4.794-1.098l19.88-9.605l19.88,9.605c3.656,1.767,7.987,1.379,11.272-1.007s4.991-6.386,4.441-10.409 l-2.992-21.876l15.278-15.939c2.81-2.931,3.781-7.17,2.526-11.031c-1.255-3.861-4.53-6.721-8.526-7.44l-21.731-3.915 l-10.439-19.457c-1.919-3.578-5.65-5.81-9.711-5.81c-4.061,0-7.791,2.233-9.711,5.81l-10.439,19.457l-21.729,3.915 c-3.996,0.72-7.272,3.578-8.526,7.44c-1.255,3.861-0.284,8.1,2.526,11.031L268.18,391.328z M289.781,373.748 c3.31-0.596,6.167-2.671,7.756-5.636l3.244-6.047l3.244,6.047c1.589,2.963,4.445,5.039,7.756,5.636l6.754,1.217l-4.749,4.953 c-2.327,2.428-3.419,5.786-2.963,9.119l0.93,6.799l-6.178-2.985c-1.514-0.732-3.154-1.098-4.795-1.098s-3.281,0.366-4.795,1.098 l-6.178,2.985l0.931-6.798c0.455-3.332-0.636-6.691-2.963-9.119l-4.749-4.954L289.781,373.748z" /> <path d="M171.294,365.706h51.244c6.085,0,11.02-4.934,11.02-11.02s-4.935-11.02-11.02-11.02h-51.244 c-6.085,0-11.02,4.934-11.02,11.02S165.209,365.706,171.294,365.706z" /> <path d="M171.294,409.786h51.244c6.085,0,11.02-4.934,11.02-11.02s-4.935-11.02-11.02-11.02h-51.244 c-6.085,0-11.02,4.934-11.02,11.02S165.209,409.786,171.294,409.786z" /> <path d="M424.509,16.53h-77.593v-5.51c0-6.086-4.935-11.02-11.02-11.02H176.105c-6.085,0-11.02,4.934-11.02,11.02v5.51H87.491 c-6.085,0-11.02,4.934-11.02,11.02v473.43c0,6.086,4.935,11.02,11.02,11.02h337.018c6.085,0,11.02-4.934,11.02-11.02V27.55 C435.529,21.464,430.596,16.53,424.509,16.53z M187.125,22.04h137.751v38.57H187.125V22.04z M369.409,82.651v363.228H142.591 V82.651H369.409z M413.489,489.96H98.511V38.57h66.574v22.04h-33.513c-6.085,0-11.02,4.934-11.02,11.02v385.269 c0,6.086,4.935,11.02,11.02,11.02h248.857c6.085,0,11.02-4.934,11.02-11.02V71.631c0-6.086-4.935-11.02-11.02-11.02h-33.512 V38.57h66.573V489.96z" /> </g> </g> </g> </g></svg>

            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default App;

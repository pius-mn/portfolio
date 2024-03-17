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
          className={`shadow-lg  fixed bottom-0 w-full transition-transform duration-300 transform text-black bg-white dark:bg-gray-800 dark:text-white`}
          id="footer"
        >
          <nav className="container mx-auto flex justify-between items-center px-4 py-2 max-w-4xl">
            <a href="#about" className=" hover:text-blue-500 transition-colors">
              About
            </a>
            <a href="#experience" className=" hover:text-blue-500 transition-colors">
              Experience
            </a>
            <a href="#projects" className=" hover:text-blue-500 transition-colors">
              Projects
            </a>
            <a href="#contact" className=" hover:text-blue-500 transition-colors">
              Contact
            </a>
            <a href="#skills" className=" hover:text-blue-500 transition-colors">
              Skills
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default App;

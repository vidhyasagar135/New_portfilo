
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiDownload } from "react-icons/fi";

import ProfilePhoto from "../assets/Profile.jpeg";

const LandingPage1 = () => {
  const resumeUrl =
    "https://drive.google.com/file/d/1nZzjnGEpBP0jPrBTjDXaFymgVTyxTc_N/view?usp=sharing";

  return (
    <section className="bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-7xl w-full mx-auto px-6 md:px-8 py-16 md:py-24">

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT SECTION */}
          <div className="max-w-xl">

            {/* Developer Badge */}
            <span className="inline-flex items-center gap-2 text-sm bg-gray-100 text-gray-700 py-1.5 px-3 rounded-full ring-1 ring-black/5">
              <span className="text-base">{"</>"}</span>
              Full Stack Developer
            </span>

            {/* Main Heading */}
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
              Building Digital
              <br className="hidden md:block" />
              Experiences
            </h1>

            {/* Introduction */}
            <p className="mt-6 text-gray-600 leading-relaxed">
              <span className="text-2xl font-bold text-gray-900">
                I'm Vidhya Sagar Valapadasu
              </span>
              , a passionate full-stack developer and DSA enthusiast
              with 200+ problems solved across online platforms.
              Proficient in Python and Java, I enjoy building innovative
              web applications and digital solutions.
            </p>

            {/* RESUME BUTTON */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-gray-300 text-gray-800 font-medium hover:bg-gray-100 hover:shadow-md transition-all duration-300"
              >
                Download Resume
                <FiDownload className="text-lg" />
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-7 flex items-center gap-6 text-2xl text-gray-600">

              {/* GitHub */}
              <a
                href="https://github.com/vidhyasagar135"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 hover:-translate-y-1 transition-all duration-300"
              >
                <FaGithub />
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/VIDHYASAGAR_999/"
                aria-label="LeetCode"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 hover:-translate-y-1 transition-all duration-300"
              >
                <SiLeetcode />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/vidhya-sagar-valapadasu-60aa56301/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 hover:-translate-y-1 transition-all duration-300"
              >
                <FaLinkedin />
              </a>

              {/* Email */}
              <a
                href="mailto:vvidhyasagar135@gmail.com"
                aria-label="Email"
                className="hover:text-red-500 hover:-translate-y-1 transition-all duration-300"
              >
                <FaEnvelope />
              </a>

            </div>
          </div>

          {/* RIGHT SECTION - PROFILE IMAGE */}
          <div className="relative w-full flex justify-center items-center">

            <div className="relative w-full max-w-[420px] h-[480px] md:h-[560px] rounded-3xl overflow-hidden bg-gray-200 shadow-xl ring-1 ring-black/5">

              <img
                src={ProfilePhoto}
                alt="Vidhya Sagar Profile"
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="eager"
              />

              {/* SUBTLE IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>

            </div>

            {/* OPEN TO WORK BADGE */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-[calc(50%-190px)] md:translate-x-0 bg-white/95 backdrop-blur rounded-xl shadow-lg ring-1 ring-black/5 px-4 py-3 flex items-center gap-2 z-10">

              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>

              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                Open to Work
              </span>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LandingPage1;


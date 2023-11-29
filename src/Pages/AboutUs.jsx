import { useState } from "react";

import MyImage from "../assets/Photo/vraj.jpg";

import HomeLayout from "../Layout/HomeLayout";
import { EducationData } from "../Constants/EducationData";
import { ExperienceData } from "../Constants/ExperienceData";

function AboutUs() {
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <HomeLayout>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-5xl text-blue-500font-bold">About Me</h1>
            <p className="py-6">
              As a web developer at CodeChef BVM Chapter and a{" "}
              <span className="text-blue-50"> webmaster at IEEE BVM SB </span>,
              I use my skills in SQL, PHP, and educational technology to create
              and maintain websites and applications that promote coding and
              learning among students. I have been working in these roles for
              two months, and I have contributed to several projects and events
              that have enhanced the online presence and engagement of both
              organizations. I am also a student member and a branch
              representative of IEEE BVM SB, a core team member of Google
              Developer Student Clubs, and an event manager at Computer Society
              of India, BVM SB. These experiences have enabled me to develop my
              competencies in web development, data science, graphic design, and
              event management. I am currently pursuing a Bachelor of Technology
              degree in Information Technology at Birla Vishvakarma
              Mahavidyalaya, where I have acquired multiple certifications in
              SQL and Node.js. I am passionate about using technology to solve
              real-world problems and to empower others to learn and grow. My
              goal is to become a proficient and innovative web developer who
              can create impactful and user-friendly solutions for various
              domains and industries.
            </p>
          </div>
          <img src={MyImage} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
      </div>

      {/* Education Section */}
      {/* Title */}
      <h1 className="text-5xl text-blue-500 font-bold mb-10 mt-10 text-center">Education</h1>
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3">
        {/* Left Column: Education Numbers */}
        <div className="flex flex-col items-center mr-4 space-y-8">
          {EducationData.map((education, index) => (
            <div
              key={index}
              className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer"
              // on={() => setSelectedEducation(index)}
              onMouseEnter={() => setSelectedEducation(index)}
              onMouseLeave={() => setSelectedEducation(null)}
            >
              <span className="text-gray-800 font-bold text-lg">
                {index + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Center Connector Line */}
        <div className="border-l-4 border-white h-full mx-2"></div>

        {/* Right Column: Education Details */}
        <div className="flex flex-col">
          {EducationData.map((education, index) => (
            <div
              key={index}
              className={`${
                selectedEducation === index
                  ? "border-4 bg-base-200 border-base-200"
                  : ""
              } p-4 mb-4 rounded-md transition duration-300 hover:bg-base-200 ${
                selectedEducation !== null && selectedEducation !== index
                  ? "opacity-50"
                  : ""
              }`}
            >
              <h2 className="text-3xl font-bold mb-2">{education.title}</h2>
              <p className="text-lg">{education.school}</p>
              <p className="text-gray-300">{education.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      {/* Title */}
      <h1 className="text-5xl text-blue-500 font-bold mb-10 mt-10 text-center">Experience</h1>
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3">
        {/* Left Column: Experience Numbers */}
        <div className="flex flex-col items-center mr-4 space-y-8">
          {ExperienceData.map((experience, index) => (
            <div
              key={index}
              className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer"
              // onHover={() => setSelectedExperience(index)}
              onMouseEnter={() => setSelectedExperience(index)}
              onMouseLeave={() => setSelectedExperience(null)}
            >
              <span className="text-gray-800 font-bold text-lg">
                {index + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Center Connector Line */}
        <div className="border-l-4 border-white h-full mx-2"></div>

        {/* Right Column: Experience Details */}
        <div className="flex flex-col">
          {ExperienceData.map((experience, index) => (
            <div
              key={index}
              className={`${
                selectedExperience === index
                  ? "border-4 bg-base-200 border-base-200"
                  : ""
              } p-4 mb-4 rounded-md transition duration-300 hover:bg-base-200 ${
                selectedExperience !== null && selectedExperience !== index
                  ? "opacity-50"
                  : ""
              }`}
            >
              <h2 className="text-3xl font-bold mb-2">{experience.title}</h2>
              <p className="text-lg">{experience.company}</p>
              <p className="text-gray-300">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;

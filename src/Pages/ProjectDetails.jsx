import { useLocation } from "react-router-dom";

import HomeLayout from "../Layout/HomeLayout";

function ProjectDetails() {
  const state = useLocation().state;

  //for comma separated frameworks
  const frameworks = state?.frameworks?.split(",");
  

  return (
    <HomeLayout>
      <div className="bg-base-200">
        {/* back icon left side and center title in one row */}
        <div className="flex py-6 px-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => window.history.back()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </div>

        {/* title center*/}
        <div className="flex justify-center">
          <h1 className="text-5xl font-bold text-blue-500">{state?.title}</h1>
        </div>

        {/* frameworks and live button */}
        <div className="flex flex-col lg:flex-row items-center justify-between py-6 px-4 lg:px-32">
          <div className="flex flex-wrap items-center">
            {/* <p className="mr-2 font-bold text-blue-200"></p> */}
            {frameworks?.map((framework, index) => (
              <div
                key={index}
                className="badge badge-outline badge-accent mx-1"
              >
                {framework}
              </div>
            ))}
          </div>
          {state?.link && (
            <div className="mt-4 lg:mt-0">
              <a href={state?.link} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primary">Live</button>
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="bg-base-200">
        <div className="flex items-center justify-center text-center">
          <div className="max-w-xl md:max-w-2xl lg:max-w-4xl">
            <img
              src={state?.image}
              className="w-full h-auto rounded-lg shadow-2xl transition-transform transform hover:border-blue-500 hover:scale-105 animate-fadeIn"
              alt="Project Image"
            />
            {state?.description1 && (
              <p className="text-xl text-left text-gray-400 mt-4">
                {state?.description1}
              </p>
            )}
            {state?.description2 && (
              <p className="text-xl text-left text-gray-400 mt-4">
                {state?.description2}
              </p>
            )}
            {state?.description3 && (
              <p className="text-xl text-left text-gray-400 mt-4">
                {state?.description3}
              </p>
            )}
            {state?.description4 && (
              <p className="text-xl text-left text-gray-400 mt-4">
                {state?.description4}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* youtube link for the video */}
      {state?.youtube && (
        <div className="flex justify-center py-6">
          <iframe
            width="70%"
            height="315"
            src={`https://www.youtube.com/embed/${state?.youtubeVideoId}`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </HomeLayout>
  );
}

export default ProjectDetails;

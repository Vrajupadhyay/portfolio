import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../Redux/Slices/ProjectSlice";

import ProjectCard from "../Components/ProjectCard";
import HomeLayout from "../Layout/HomeLayout";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";

function Project() {
  // for checking if user is logged in
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

  // for displaying the options acc to role
  const role = useSelector((state) => state?.auth?.role);

  const dispatch = useDispatch();

  const project = useSelector((state) => state?.project?.projects);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      await dispatch(getProjects());
      setTimeout(() => {
        setShowLoader(false);
      }, 2000);
    };

    fetchProject();
  }, [dispatch]);

  // useEffect(() => {
  //   const fetchProject = async () => {
  //     // const res = await fetch("https://api.github.com/users/vrajupadhyay/repos");
  //     // const data = await res.json();
  //     // setProject(data);

  //     //simulate loading
  //     setTimeout(() => {
  //       const project = [
  //         {
  //           title: "My Portfolio",
  //           frameworks: ["React", "TailwindCSS"],
  //           link: "https:vrajupadhyay.ieeebvm.in",
  //           image:
  //             "https://krishjotaniya.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flinkforest.66fd685d.png&w=640&q=75",
  //           description1:
  //             "Link Forest is a modern web application that simplifies the process of managing multiple social media profiles and important links. The web app is built using ReactJs, Tailwind, and Firebase, providing a fast and reliable user experience with a clean and better design.      With Link Forest, users can create a personalized bio link page in just minutes. This bio link page acts as a central hub for all their social media profiles and important links, making it easier to promote their personal brand or share information with followers. The web app also allows users to customize their bio link page with a variety of themes, providing a unique look. The web app's tech stack includes ReactJs, Tailwind for improved UI experience, and Firebase as a backend-as-a-service for real-time database storage and authentication.",
  //           description2:
  //             "Link Forest is a modern web application that simplifies the process of managing multiple social media profiles and important links. The web app is built using ReactJs, Tailwind, and Firebase, providing a fast and reliable user experience with a clean and better design.      With Link Forest, users can create a personalized bio link page in just minutes. This bio link page acts as a central hub for all their social media profiles and important links, making it easier to promote their personal brand or share information with followers. The web app also allows users to customize their bio link page with a variety of themes, providing a unique look. The web app's tech stack includes ReactJs, Tailwind for improved UI experience, and Firebase as a backend-as-a-service for real-time database storage and authentication.",
  //           description3:
  //             "Link Forest is a modern web application that simplifies the process of managing multiple social media profiles and important links. The web app is built using ReactJs, Tailwind, and Firebase, providing a fast and reliable user experience with a clean and better design.      With Link Forest, users can create a personalized bio link page in just minutes. This bio link page acts as a central hub for all their social media profiles and important links, making it easier to promote their personal brand or share information with followers. The web app also allows users to customize their bio link page with a variety of themes, providing a unique look. The web app's tech stack includes ReactJs, Tailwind for improved UI experience, and Firebase as a backend-as-a-service for real-time database storage and authentication.",
  //           description4:
  //             "Link Forest is a modern web application that simplifies the process of managing multiple social media profiles and important links. The web app is built using ReactJs, Tailwind, and Firebase, providing a fast and reliable user experience with a clean and better design.      With Link Forest, users can create a personalized bio link page in just minutes. This bio link page acts as a central hub for all their social media profiles and important links, making it easier to promote their personal brand or share information with followers. The web app also allows users to customize their bio link page with a variety of themes, providing a unique look. The web app's tech stack includes ReactJs, Tailwind for improved UI experience, and Firebase as a backend-as-a-service for real-time database storage and authentication.",
  //           youtube:
  //             "https://www.youtube.com/watch?si=rDB4I_SOxtluN2Sb&v=JYLEyMvj6sE&feature=youtu.be",
  //         },
  //         {
  //           title: "IEEE BVM SB",
  //           frameworks: [
  //             "HTML",
  //             "CSS",
  //             "JS",
  //             "Bootstrap",
  //             "PHP",
  //             "MySQL",
  //             "TailwindCSS",
  //           ],
  //           link: "https://ieeebvm.in",
  //           image: "https://i.ibb.co/7G2JfQ5/portfolio.png",
  //           description: "IEEE BVM SB website",
  //         },
  //         {
  //           title: "CS IEEE BVM",
  //           frameworks: ["React", "TailwindCSS"],
  //           link: "https://cs.ieeebvm.in",
  //           image: "https://i.ibb.co/7G2JfQ5/portfolio.png",
  //         },
  //         {
  //           title: "WIE IEEE BVM",
  //           frameworks: ["React", "TailwindCSS"],
  //           link: "https://wie.ieeebvm.in",
  //           image: "https://i.ibb.co/7G2JfQ5/portfolio.png",
  //         },
  //         {
  //           title: "RAS IEEE BVM",
  //           frameworks: ["React", "TailwindCSS"],
  //           image: "https://i.ibb.co/7G2JfQ5/portfolio.png",
  //         },
  //         {
  //           title: "PES IEEE BVM",
  //           frameworks: ["React", "TailwindCSS"],
  //           image: "https://i.ibb.co/7G2JfQ5/portfolio.png",
  //         },
  //       ];
  //       setProject(project);
  //       setLoading(false);
  //     }, 1000);
  //   };
  //   fetchProject();
  // }, []);

  return (
    <HomeLayout>
      <main className="grid min-h-full place-items-center bg-base-200 px-6 py-12 sm:py-10 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            <span className="text-blue-50">My</span>
            <span className="text-blue-500"> Projects</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Here are some of my projects that I have worked on.
          </p>

          <div className="flex justify-center mt-6">
            <div className="w-16 h-1 bg-blue-500 rounded-full"></div>

            <div className="w-3 h-1 bg-blue-500 rounded-full mx-2"></div>
            <div className="w-16 h-1 bg-blue-500 rounded-full"></div>

            <div className="w-3 h-1 bg-blue-500 rounded-full mx-2"></div>
            <div className="w-16 h-1 bg-blue-500 rounded-full"></div>

            <div className="w-3 h-1 bg-blue-500 rounded-full mx-2"></div>
          </div>

          {isLoggedIn && role === "ADMIN" && (
            <div className="flex justify-center mt-6">
              <Link
                to="/project/create"
                className="btn btn-primary btn-wide"
              >
                Add Project
              </Link>
            </div>
          )}
        </div>

        {showLoader ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 my-11 lg:grid-cols-3 gap-8 lg:pl-24 lg:pr-24">
            {project?.map((item) => (
              <ProjectCard key={item.id} data={item} />
            ))}
          </div>
        )}
      </main>
    </HomeLayout>
  );
}

export default Project;

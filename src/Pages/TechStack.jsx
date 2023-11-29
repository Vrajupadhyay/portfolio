import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

import HomeLayout from "../Layout/HomeLayout";
import TachStackCard from "../Components/TechStackCard";
import { techstack } from "../Constants/TechStackData";
// import { getAllTechStack } from "../Redux/Slices/TechSlice";

function TechStack() {
  // const dispatch = useDispatch();

  // const {TechStackData} = useSelector((state) => state.techstack);

  // async function loadTacStackData() {
  //   await dispatch(getAllTechStack());
  // }

  // useEffect(() => {
  //   loadTacStackData();
  // }, []);

  const [animationDelays, setAnimationDelays] = useState([]);

  useEffect(() => {
    // Generate animation delays based on the index
    const delays = techstack.map((_, index) => `${index * 0.1}s`);
    setAnimationDelays(delays);
  }, [techstack]);

  return (
    <HomeLayout>
      <main className="grid min-h-full place-items-center bg-base-200 px-6 py-12 sm:py-10 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            <span className="text-blue-50">Tech</span>
            <span className="text-blue-500">Stack</span>
          </h1>

          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 my-11 lg:grid-cols-7 gap-4">
            {techstack.map((item, index) => (
              <TachStackCard
                key={index}
                data={item}
                animationDelay={animationDelays[index]}
              />
            ))}
          </div>
        </div>
      </main>
    </HomeLayout>
  );
}

export default TechStack;

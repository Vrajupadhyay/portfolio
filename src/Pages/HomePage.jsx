import { Link } from "react-router-dom";

import MyImage from "../assets/Photo/Vraj.jpg";

import HomeLayout from "../Layout/HomeLayout";

function HomePage() {
  return (
    <HomeLayout>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={MyImage}
            className="max-w-sm rounded-lg shadow-2xl transition-transform transform hover:border-blue-500 hover:scale-105 animate-fadeIn"
          />
          <div>
            <h1 className="text-3xl font-bold">HELLO I'M,</h1>
            <h1 className="text-5xl text-blue-500 font-bold transition-transform transform hover:scale-105 animate-fadeIn">Vraj Upadhyay!</h1>
            <p className="py-6 text-blue-50">
              Full-Stack Developer | React | Flutter | PHP Developer
            </p>
            <button className="btn btn-primary">
              <Link to="/about">Contact Me</Link>
            </button>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default HomePage;

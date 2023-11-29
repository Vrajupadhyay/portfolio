import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";

import { createProject } from "../../Redux/Slices/ProjectSlice";

import Loader from "../../Components/Loader";
import HomeLayout from "../../Layout/HomeLayout";

function AddProject() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, message } = useSelector((state) => state.auth);

  const [projectData, setProjectData] = useState({
    title: "",
    image: "",
    link: "",
    frameworks: ["React"], // Initial framework
    description1: "",
    description2: "",
    description3: "",
    description4: "",
  });

  function handleUserInput(e) {
    const { name, value } = e.target;
    setProjectData({
      ...projectData,
      [name]: value,
    });
  }

  function handleFrameworkInput(index, value) {
    const frameworksCopy = [...projectData.frameworks];
    frameworksCopy[index] = value;
    setProjectData({
      ...projectData,
      frameworks: frameworksCopy,
    });
  }

  function addFramework() {
    setProjectData({
      ...projectData,
      frameworks: [...projectData.frameworks, ""],
    });
  }

  async function createNewProject(event) {
    event.preventDefault();
    if (!projectData.title) {
      toast.error("Please fill title field");
      return;
    }

    const formData = new FormData();
    formData.append("title", projectData.title);
    formData.append("image", projectData.image);
    formData.append("link", projectData.link);
    // formData.append("framworks", projectData.framworks);
    formData.append("description1", projectData.description1);
    formData.append("description2", projectData.description2);
    formData.append("description3", projectData.description3);
    formData.append("description4", projectData.description4);

    // Append frameworks to FormData
    projectData.frameworks.forEach((framework, index) => {
      formData.append(`frameworks[${index}]`, framework);
    });

    // dispatch create account action
    const response = dispatch(createProject(formData));
    if (response?.payload?.success) {
      setProjectData({
        title: "",
        image: "",
        link: "",
        framworks: "",
        description1: "",
        description2: "",
        description3: "",
        description4: "",
      });
      navigate("/myprojects");
    }
  }
  return (
    <HomeLayout>
      <div className="hero pt-5 bg-base-200">
        <div className="content">
          <div className="text-center bg-base-200">
            <h1 className="text-4xl text-blue-500 font-bold">
              Add Project Page
            </h1>
          </div>
          {loading && (
            <p>
              <Loader />
            </p>
          )}
          <div className="card w-full mt-5 shadow-2xl bg-base-100">
            <form
              className="card-body w-full"
              noValidate
              onSubmit={createNewProject}
            >
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name.."
                  className="input input-bordered mt-1"
                  name="title"
                  id="title"
                  value={projectData.title}
                  onChange={handleUserInput}
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your image Url.."
                  className="input input-bordered mt-1"
                  name="image"
                  id="image"
                  value={projectData.image}
                  onChange={handleUserInput}
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Frameworks</span>
                </label>
                {projectData.frameworks.map((framework, index) => (
                  <input
                    key={index}
                    type="text"
                    placeholder="Enter your framework.."
                    className="input input-bordered mt-1"
                    name="framework"
                    id="framework"
                    value={framework}
                    onChange={(e) =>
                      handleFrameworkInput(index, e.target.value)
                    }
                  />
                ))}
                <button
                  type="button"
                  className="btn btn-primary mt-4"
                  onClick={addFramework}
                >
                  Add Framework
                </button>
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Link</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your host or resourse Link.."
                  className="input input-bordered mt-1"
                  name="link"
                  id="link"
                  value={projectData.link}
                  onChange={handleUserInput}
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Description:1</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your description.."
                  className="input input-bordered mt-1"
                  name="description1"
                  id="description1"
                  value={projectData.description1}
                  onChange={handleUserInput}
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Description:2</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your description.."
                  className="input input-bordered mt-1"
                  name="description2"
                  id="description2"
                  value={projectData.description2}
                  onChange={handleUserInput}
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Description:3</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your description.."
                  className="input input-bordered mt-1"
                  name="description3"
                  id="description3"
                  value={projectData.description3}
                  onChange={handleUserInput}
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Description:4</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your description.."
                  className="input input-bordered mt-1"
                  name="description4"
                  id="description4"
                  value={projectData.description4}
                  onChange={handleUserInput}
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default AddProject;

import { useState } from "react";
import { toast } from "react-hot-toast";

import axiosInstance from "../Helper/axiosInstance";
// import { isEmail } from "../Helpers/regexMatcher";
import HomeLayout from "../Layout/HomeLayout";

function Contact() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    if (
      !userInput.email ||
      !userInput.name ||
      !userInput.subject ||
      !userInput.message
    ) {
      toast.error("All fields are mandatory");
      return;
    }

    // if (!isEmail(userInput.email)) {
    //   toast.error("Invalid email");
    //   return;
    // }

    try {
      const response = axiosInstance.post("/send-email.php", userInput);
      toast.promise(response, {
        loading: "Submitting your message...",
        success: "Form submitted successfully",
        error: "Failed to submit the form",
      });
      const contactResponse = await response;
        // console.log(contactResponse);
      if (contactResponse?.data?.success) {
        setUserInput({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("operation failed....");
      }
    } catch (err) {
      toast.error("operation failed....");
    }
  }

  return (
    <HomeLayout>
      <div className="hero pt-5 bg-base-200">
        <div className="content">
          <div className="text-center bg-base-200">
            <h1 className="text-4xl text-blue-500 font-bold">Contact Me!</h1>
            <p className="text-lg mt-2">
              Fill out the form and I will get back to you as soon as possible!
            </p>
          </div>
          <div className="card w-full mt-5 shadow-2xl bg-base-100">
            <form
              className="card-body w-full"
              noValidate
              onSubmit={onFormSubmit}
            >
              <div className="form-control mb-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered mt-1"
                  name="name"
                  value={userInput.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-control mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered mt-1"
                  name="email"
                  value={userInput.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-control mb-4">
                <input
                  type="text"
                  placeholder="Enter the subject"
                  className="input input-bordered mt-1"
                  name="subject"
                  value={userInput.subject}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-control mb-4">
                <textarea
                  placeholder="Type your message here"
                  className="textarea textarea-bordered mt-1"
                  rows="4"
                  name="message"
                  value={userInput.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default Contact;

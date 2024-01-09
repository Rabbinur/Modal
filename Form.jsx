import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
const Form = () => {
  const navigate = useNavigate();
  const initialFormData = {
    fullName: "",
    WhatsAppNumber: "",
    email: "",
    deviceName: "",
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  console.log(formData);
  const [formErrors, setFormErrors] = useState({
    fullName: "",
    WhatsAppNumber: "",
    email: "",
    deviceName: "",
  });
  const validateForm = () => {
    let isValid = true;
    const errors = {};

    // Validate each form field
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) {
        errors[key] = "This field is required";
        isValid = false;
      } else {
        errors[key] = "";
      }
    });
    setFormErrors(errors);
    return isValid;
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    // Validate the form
    if (!validateForm()) {
      console.error("Form validation failed");
      return;
    }

    toast.success("information placed successfully!");
    // Open the modal
    setIsModalOpen(true);
    // Reset the form data
    setFormData(initialFormData);
    setFormErrors(initialFormData);
    // navigate("/thankyou");
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="pt-36 bg-gray-100">
      {" "}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="rounded-lg shadow bg-gray-50 dark:bg-gray-900 dark:border-gray-900">
            <div className="p-6 ">
              <div className="pb-6 border-b border-gray-100 dark:border-gray-800 ">
                <h2 className="text-xl font-bold text-gray-800 md:text-3xl capitalize dark:text-gray-300">
                  Fill Up This Form
                </h2>
                <h1>Get Demo Link</h1>
              </div>

              <form onSubmit={handleSubmit}>
                {Object.entries(formErrors).map(([key, error]) => (
                  <div key={key} className="text-red-500 my-2">
                    {error && <p>{error}</p>}
                  </div>
                ))}
                <div className="py-6 border-b border-gray-100 dark:border-gray-800">
                  <div className="w-full md:w-10/12">
                    <div className="flex flex-wrap -m-3">
                      <div className="w-full p-3 md:w-1/3">
                        <p className="text-base font-semibold text-gray-700 dark:text-gray-400">
                          Full Name
                        </p>
                      </div>
                      <div className="w-full p-3 md:flex-1">
                        <input
                          className="w-full dark:bg-gray-800 dark:border-gray-800 px-4 dark:placeholder-gray-500 dark:text-gray-400 py-2.5 text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                          type="text"
                          placeholder="Adam"
                          autoSave="off"
                          autoComplete="off"
                          name="fullName"
                          required
                          onChange={handleInputChange}
                        />
                      </div>
                      {/* <div className="w-full p-3 md:w-1/3">
                        <input
                          className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                          type="text"
                          placeholder="Smith"
                        />
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className="py-6 border-b border-gray-100 dark:border-gray-800 ">
                  <div className="w-full md:w-10/12">
                    <div className="flex flex-wrap -m-3">
                      <div className="w-full p-3 md:w-1/3">
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-400">
                          What's App Number
                        </p>
                      </div>
                      <div className="w-full p-3 md:flex-1">
                        <input
                          // pattern="/^(?:\+88|88)?(01[3-9]\d{8})$/"
                          // pattern="[0-9]{3}[0-9]{3}[0-9]{5}"
                          pattern="[0-9]{11}"
                          autoSave="off"
                          autoComplete="off"
                          className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                          type="tel"
                          placeholder="018XXXXXXX"
                          name="WhatsAppNumber"
                          required
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-6 border-b border-gray-100 dark:border-gray-800 ">
                  <div className="w-full md:w-10/12">
                    <div className="flex flex-wrap -m-3">
                      <div className="w-full p-3 md:w-1/3">
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-400">
                          Email address
                        </p>
                      </div>
                      <div className="w-full p-3 md:flex-1">
                        <input
                          className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                          type="email"
                          autoSave="off"
                          autoComplete="off"
                          placeholder="adam@gmail.com"
                          name="email"
                          required
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-6 dark:border-gray-800">
                  <div className="w-full md:w-10/12">
                    <div className="flex flex-wrap -m-3">
                      <div className="w-full p-3 md:w-1/3">
                        <p className="text-sm font-semibold text-gray-800 dark:text-gray-400">
                          Device Information
                        </p>
                      </div>
                      <div className="w-full p-3 md:flex-1">
                        <div className="flex flex-wrap -m-3">
                          <div className="w-full p-3 md:w-1/2">
                            <p className="mb-1.5 font-medium text-base text-gray-800 dark:text-gray-400">
                              Device Information
                            </p>
                            <select
                              className="appearence-none dark:text-gray-400 dark:bg-gray-800  dark:border-gray-800  w-full py-2.5 px-4 text-gray-700 text-base font-normal border border-gray-200 rounded-lg "
                              name="deviceName"
                              autoSave="off"
                              autoComplete="off"
                              required
                              onChange={handleInputChange}
                            >
                              <option>Android</option>
                              <option>IOS</option>
                              <option>PC</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-10/12">
                  <div className="flex flex-wrap justify-center -m-1.5">
                    <div className="w-full md:w-auto p-1.5">
                      <button className="flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-blue-500 rounded-md hover:bg-blue-600 ">
                        <p>Send</p>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        message="Please check your email to verify."
      />
    </div>
  );
};

export default Form;

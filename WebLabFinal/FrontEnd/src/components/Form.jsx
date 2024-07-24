import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', address: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formSubmissions, setFormSubmissions] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make the POST request
      await axios.post("http://localhost:3000/gameApplications", formData);
      
      // Make the GET request to update the formSubmissions
      const data  = await axios.get("http://localhost:3000/gameApplications");
      setFormSubmissions(data.data);

      // Reset the form data
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: '',
      });

      setIsFormSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  useEffect(() => {
    if (isFormSubmitted) {
      alert('Form submitted successfully!');
      setIsFormSubmitted(false);
    }
  }, [isFormSubmitted]);

  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-md shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-xl font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-xl font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-xl font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-xl font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-xl font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Submit
          </button>
        </form>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Form Submissions</h2>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Message</th>
              </tr>
            </thead>
            <tbody>
              {formSubmissions.map((submission, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{submission.name}</td>
                  <td className="border px-4 py-2">{submission.email}</td>
                  <td className="border px-4 py-2">{submission.phone}</td>
                  <td className="border px-4 py-2">{submission.address}</td>
                  <td className="border px-4 py-2">{submission.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Form;

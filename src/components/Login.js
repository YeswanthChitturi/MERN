// // import React, { useState } from "react";
// // import axios from "axios"; // Import Axios

// // export default function Login() {
// //   const [formData, setForm] = useState({
// //     name: "",
// //     password: ""
// //   });
// //   const [loginStatus, setLoginStatus] = useState(""); // State to track login status

// //   const handleChange = (e) => {
// //     const { id, value } = e.target;
// //     setForm((prevFormData) => ({ ...prevFormData, [id]: value }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault(); // Prevent default form submission

// //     try {
// //       const response = await axios.post("http://localhost:3001/users/login", formData);
// //       console.log("Logged in successfully!", response.data);
// //       setLoginStatus("User logged in successfully!"); // Set success message

// //       // Optionally, reset the form after submission
// //       setForm({
// //         name: "",
// //         password: ""
// //       });
// //     } catch (error) {
// //       console.error("Error logging in:", error);
// //       setLoginStatus("Error logging in. Please check your credentials."); // Set error message
// //     }
// //   };

// //   return (
// //     <form className="max-w-sm mx-auto py-5" onSubmit={handleSubmit}>
// //       <div className="mb-5">
// //         <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
// //         <input
// //           type="text"
// //           id="name"
// //           name="name"
// //           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
// //           value={formData.name}
// //           onChange={handleChange}
// //         />
// //       </div>
// //       <div className="mb-5">
// //         <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label>
// //         <input
// //           name="password"
// //           type="password"
// //           id="password"
// //           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
// //           value={formData.password}
// //           onChange={handleChange}
// //           required
// //         />
// //       </div>
// //       <button
// //         type="submit" 
// //         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
// //       >
// //         Login
// //       </button>
// //       {loginStatus && (
// //         <p className="mt-5 text-center text-sm font-medium text-gray-900 dark:text-white">
// //           {loginStatus}
// //         </p>
// //       )}
// //     </form>
// //   );
// // }

// const express = require("express");
// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const cors = require("cors");

// const app = express();
// const PORT = 3001;

// // Middleware
// app.use(express.json());
// app.use(cors());

// // MongoDB connection
// mongoose.connect("mongodb+srv://yeswanthias2030:YESIAS2030@cluster0.lnhhlgi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
// });

// const User = mongoose.model("User", userSchema);

// // Registration route
// app.post("/users/register", async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ name, email, password: hashedPassword });
//     await newUser.save();
//     res.status(201).json({ message: "User registered successfully!" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Login route
// app.post("/users/login", async (req, res) => {
//   const { name, password } = req.body;
//   try {
//     const user = await User.findOne({ name });
//     if (!user) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     res.status(200).json({ message: "User logged in successfully!" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


import React, { useState } from "react";
import axios from "axios"; // Import Axios

export default function Login() {
  const [formData, setForm] = useState({
    name: "",
    password: ""
  });
  const [loginStatus, setLoginStatus] = useState(""); // State to track login status

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prevFormData) => ({ ...prevFormData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post("http://localhost:3001/users/login", formData);
      console.log("Logged in successfully!", response.data);
      setLoginStatus("User logged in successfully!"); // Set success message

      // Optionally, reset the form after submission
      setForm({
        name: "",
        password: ""
      });
    } catch (error) {
      console.error("Error logging in:", error);
      setLoginStatus("Error logging in. Please check your credentials."); // Set error message
    }
  };

  return (
    <form className="max-w-sm mx-auto py-5" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label>
        <input
          name="password"
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit" 
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Login
      </button>
      {loginStatus && (        <p className="mt-5 text-center text-sm font-medium text-gray-900 dark:text-white">
          {loginStatus}
        </p>
      )}
    </form>
  );
}

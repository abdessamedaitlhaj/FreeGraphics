import { useRef, useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import image1 from "../assets/image1.webp"



const Signup = () => {

  // const navigate = useNavigate();

  // const redirectToLogin = () => navigate("/login")

    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    // const [formData, setFormData] = useState({
    //   username: "",
    //   email: "",
    //   password: "",
    //   confirmPassword: "",
    // });
  
    const formData = {
      username: usernameRef.current?.value ?? "",
      email: emailRef.current?.value ?? "",
      password: passwordRef.current?.value ?? "",
      confirm_password: confirmPasswordRef.current?.value ?? "",
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
  

      
      // try {
      //   const response = await axios.post('http://localhost:8000/api/apirest/users/', formData);

      // } catch (error) {
      //   console.error(error);  // Handle error
      // };
    }
    useEffect(() => {
    }, []);

  return (
    <div className="flex flex-col md:flex-row items-center">
      <div>
        <img
          src={image1}
          alt="login"
          className="object-cover h-[100vh] w-full"
        />
      </div>
      <div className="flex flex-col items-center p-8">
        <div className="flex flex-col items-center space-y-4">
          <Link to="/">
            <img src={logo} alt="logo" width="500" />
          </Link>
          <strong>Sign up</strong>
          <p>Welcome!</p>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col mt-10 space-y-4">
          <label htmlFor="email" className="text-sm">
            Username :
          </label>
          <input
            type="text"
            name="username"
            placeholder="username"
            ref={usernameRef}
            className="border-2 border-secondary p-2 rounded-lg"
            required
          />
          <span>{formData.username.length > 3 && "error message"}</span>
          <label htmlFor="email" className="text-sm">
            Email :
          </label>
          <input
            type="text"
            name="email"
            placeholder="email"
            ref={emailRef}
            required
            className="border-2 border-secondary p-2 rounded-lg"
          />
          <label htmlFor="email" className="text-sm">
            Password :
          </label>
          <input
            type="text"
            name="password"
            placeholder="password"
            ref={passwordRef}
            required
            className="border-2 border-secondary p-2 rounded-lg"
          />
          <label htmlFor="email" className="text-sm">
            Confirm Password :
          </label>
          <input
            type="text"
            name="confirm_password"
            placeholder="confirm password"
            ref={confirmPasswordRef}
            required
            className="border-2 border-secondary p-2 rounded-lg"
          />
          <button className="bg-tertiary text-white rounded-lg p-2">
            Sign up
          </button>
          <p>
            Already have an account?
            <a href="login.html" className="text-tertiary">
              Log in
            </a>
          </p>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

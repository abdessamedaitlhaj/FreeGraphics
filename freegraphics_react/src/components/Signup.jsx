import { useRef, useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";



const Signup = () => {

  const navigate = useNavigate();


  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassowrd, setConfirmPassword] = useState();


  const handleSubmit = async (e) => {

    e.preventDefault()
    
    const response = await fetch('http://localhost:8000/api/signup/', {
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return navigate("/login");
  }

  useEffect(() => {
  });


  return (
    <div className="flex flex-col md:flex-row items-center">
      <div>
        <img
          src="https://img.freepik.com/free-photo/island-middle-lake_23-2148215275.jpg?t=st=1707888914~exp=1707889514~hmac=c3f05af9a471cabe03cc42a3ce5394a8c17803237190196866a3269aca15f30a"
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
            className="border-2 border-secondary p-2 rounded-lg"
            required
            onChange = {(e) => setUserName(e.target.value)}
          />
          <label htmlFor="email" className="text-sm">
            Email :
          </label>
          <input
            type="text"
            name="email"
            placeholder="email"
            required
            className="border-2 border-secondary p-2 rounded-lg"
            onChange = {(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email" className="text-sm">
            Password :
          </label>
          <input
            type="text"
            name="password"
            placeholder="password"
            required
            className="border-2 border-secondary p-2 rounded-lg"
            onChange = {(e) => setPassword(e.target.value)}
          />
          <label htmlFor="email" className="text-sm">
            Confirm Password :
          </label>
          <input
            type="text"
            name="confirm_password"
            placeholder="confirm password"
            required
            className="border-2 border-secondary p-2 rounded-lg"
            onChange = {(e) => setConfirmPassword(e.target.value)}
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

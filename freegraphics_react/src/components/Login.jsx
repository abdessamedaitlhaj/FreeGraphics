import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();


  const handleSubmit = async (e) => {

    e.preventDefault()
    
    const response = await fetch('http://127.0.0.1:8000/api/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify({
        email,
        password
      })
    })
    return navigate("/")
  }

  return (
    <div className="flex flex-col md:flex-row items-center">
      <div>
        <img
          src="https://img.freepik.com/free-photo/beautiful-landscape-mother-nature_23-2148992406.jpg?w=2000&t=st=1707888914~exp=1707889514~hmac=417a698f9f60105c740a5afc1dfa196934987eff30c0bd97f7e5c96e9dfca92a"
          alt="login"
          className="object-cover h-[100vh] w-full"
        />
      </div>
      <div className="flex flex-col items-center p-8">
        <div className="flex flex-col items-center space-y-4">
          <Link to="/">
            <img src={logo} alt="logo" width="500" />
          </Link>
          <strong>Log in</strong>
          <p>Welcome!</p>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col mt-20 space-y-4">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="email"
            required
            className="border-2 border-secondary p-2 rounded-lg"
            onChange = {(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="password"
            required
            className="border-2 border-secondary p-2 rounded-lg"
            onChange = {(e) => setPassword(e.target.value)}
          />
          <button className="bg-tertiary text-white rounded-lg p-2">
            Log in
          </button>
          <p>
            Don’t you have an account?
            <a href="signup.html" className="text-tertiary">
              Sign up
            </a>
          </p>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

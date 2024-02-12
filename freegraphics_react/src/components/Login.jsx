const Login = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div>
        <img
          src="./assests/image1.webp"
          alt="login"
          className="object-cover h-[100vh] w-full"
        />
      </div>
      <div className="flex flex-col items-center p-8">
        <div className="flex flex-col items-center space-y-4">
          <a href="home.html">
            <img src="./assests/logo.png" alt="logo" width="500" />
          </a>
          <strong>Log in</strong>
          <p>Welcome!</p>
        </div>
        <div className="flex flex-col mt-20 space-y-4">
          <label htmlFor="email">Email or Username</label>
          <input
            type="text"
            name="email"
            placeholder="email or username"
            className="border-2 border-secondary p-2 rounded-lg"
          />
          <label htmlFor="email">Password</label>
          <input
            type="text"
            name="email"
            placeholder="password"
            className="border-2 border-secondary p-2 rounded-lg"
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
      </div>
    </div>
  );
};

export default Login;

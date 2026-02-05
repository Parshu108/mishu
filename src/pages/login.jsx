
import { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggle = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isLogin ? "Login Submitted" : "Register Submitted");
  };
  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row">

      {/* LEFT SIDE (Branding / Illustration) */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 text-white items-center justify-center p-10">
        <div className="max-w-md space-y-6 text-center">
          <h1 className="text-4xl font-bold">Welcome Back 👋</h1>
          <p className="opacity-90 text-2xl">
            Build modern apps faster with React + Tailwind. 
            Clean UI, secure authentication, and smooth user experience.
          </p>
          <div className="text-6xl">🚀</div>
        </div>
      </div>

      {/* RIGHT SIDE (FORM) */}
      <div className="flex flex-1 items-center justify-center bg-gray-50 px-6 py-10">
        

        <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">
          <p>
            Not a member? <h1>Create an account</h1>
          </p>

          {/* Title */}
          <h2 className="text-3xl font-bold text-center mb-6">
            {isLogin ? "Login" : "Register"}
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                required
                className="input"
              />
            )}

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              required
              className="input"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              required
              className="input"
            />

            {/* Confirm Password */}
            {!isLogin && (
              <input
                type="password"
                placeholder="Confirm Password"
                required
                className="input"
              />
            )}

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-semibold"
            >
              {isLogin ? "Login" : "Create Account"}
            </button>
          </form>

          {/* Toggle */}
          <p className="text-center text-sm mt-6">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={toggle}
              className="ml-2 text-indigo-600 font-semibold hover:underline"
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login;
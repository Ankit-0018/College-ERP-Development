import React, { useState } from "react";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login"

function LoginPage({setIsLoggedIn}) {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/assets/saitm-bg.png)", // Use relative path from public folder
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.4",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />

      <main className="z-10 flex flex-col items-center">
        {/* Glass Card */}
        <div
          className="relative bg-white rounded-2xl shadow-2xl border border-white/20 p-8 top-40 z-10"
        >
          <div className="flex transition-transform duration-500">
            {showForgotPassword ? (
              <ForgotPassword onBack={() => setShowForgotPassword(false)} />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} onForgotPassword={() => setShowForgotPassword(true)} />
            )}
          </div>

          <p className="my-6 mx-10 text-sm font-normal">
            © 2025 St. Andrews Institute of Technology and Management All Rights Reserved
          </p>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;

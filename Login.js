import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (email === "ummar38990@gmail.com" && password === "umar@09876") {
        navigate("/admin");
      } else {
        navigate("/user");
      }
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#0ff', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h2>🔐 Social Boost Login</h2>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" style={{ backgroundColor: '#0ff', color: '#000' }}>Login</button>
      </form>
    </div>
  );
}

export default Login;

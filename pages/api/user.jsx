import { useState } from "react";
import axios from "axios";
import styles from "../../styles/Login.module.css";
import { useRouter } from "next/router";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);
  const [isRegistration, setIsRegistration] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      if (response.status === 200) {
        router.push("/dashboard");
      }
    } catch (err) {
      setError("Invalid login credentials");
    }
  };

  const handleRegistration = async () => {
    try {
      const response = await axios.post("/api/register", {
        username,
        password,
        email,
      });
      if (response.status === 201) {
        setIsRegistration(false);
        setError("");
        router.push("/dashboard");
      }
    } catch (err) {
      setError("Error registering account");
    }
  };

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post("/api/forgotpassword", {
        email,
      });
      if (response.status === 200) {
        setError("Password reset email sent!");
      }
    } catch (err) {
      setError("Error resetting password");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistration) {
      handleRegistration();
    } else {
      handleLogin();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>{isRegistration ? "Register" : "Login"}</h1>
        <form onSubmit={handleSubmit}>
          {isRegistration && (
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />
          )}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            {isRegistration ? "Register" : "Login"}
          </button>
          {isRegistration ? (
            <p>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setIsRegistration(false)}
                className={styles.linkButton}
              >
                Login
              </button>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => setIsRegistration(true)}
                className={styles.linkButton}
              >
                Register
              </button>
            </p>
          )}
          {!isRegistration && (
            <p>
              <button
                type="button"
                onClick={handleForgotPassword}
                className={styles.linkButton}
              >
                Forgot password?
              </button>
            </p>
          )}
          {error && <span className={styles.error}> {error} </span>}
</form>
</div>
</div>
);
};
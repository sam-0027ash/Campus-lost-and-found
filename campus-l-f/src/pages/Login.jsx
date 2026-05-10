import { useState } from "react";

import {
  useNavigate,
  Link
} from "react-router-dom";

import API from "../services/api";

import theme from "../styles/theme";

function Login() {

  const navigate =
    useNavigate();

  const [formData, setFormData] =
    useState({
      email: "",
      password: ""
    });

  const [error, setError] =
    useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");

    try {

      const response =
        await API.post(

          "/users/login",

          formData

        );

      localStorage.setItem(

        "token",

        response.data.token

      );

      localStorage.setItem(

        "user",

        JSON.stringify(
          response.data.user
        )

      );

      navigate("/dashboard");

    } catch (error) {

      setError(

        error.response?.data
          ?.message

        ||

        "Login failed"

      );

    }

  };

  return (

    <div
      style={{
        ...theme.pageBackground,

        minHeight: "100vh",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        padding: "40px 20px",

        position: "relative",

        overflow: "hidden",

        fontFamily:
          "'Trebuchet MS', Arial, sans-serif"
      }}
    >

      {/* BACKGROUND GLOW */}

      <div
        style={{
          position: "absolute",

          width: "320px",

          height: "320px",

          background:
            "rgba(59,130,246,0.18)",

          borderRadius: "50%",

          filter: "blur(120px)",

          top: "-120px",

          left: "-120px"
        }}
      />

      <div
        style={{
          position: "absolute",

          width: "320px",

          height: "320px",

          background:
            "rgba(168,85,247,0.18)",

          borderRadius: "50%",

          filter: "blur(120px)",

          bottom: "-120px",

          right: "-120px"
        }}
      />

      {/* LOGIN CARD */}

      <div
        style={{
          ...theme.glassCard,

          width: "100%",

          maxWidth: "480px",

          padding: "45px",

          position: "relative",

          zIndex: 1
        }}
      >

        <div
          style={{
            textAlign: "center",

            marginBottom: "35px"
          }}
        >

          <h1
            style={{
              fontSize: "46px",

              marginBottom: "12px",

              fontWeight: "bold",

              background:
                "linear-gradient(to right, #60a5fa, #c084fc)",

              WebkitBackgroundClip:
                "text",

              WebkitTextFillColor:
                "transparent"
            }}
          >

            Welcome Back 👋

          </h1>

          <p
            style={{
              color: "#cbd5e1",

              fontSize: "16px",

              lineHeight: "28px"
            }}
          >

            Login to continue
            to Campus Lost & Found

          </p>

        </div>

        {
          error && (

            <div
              style={{
                background:
                  "rgba(220,38,38,0.18)",

                border:
                  "1px solid rgba(248,113,113,0.25)",

                color: "#fecaca",

                padding: "14px",

                borderRadius:
                  "14px",

                marginBottom:
                  "24px",

                textAlign:
                  "center",

                fontSize: "15px"
              }}
            >

              {error}

            </div>

          )
        }

        <form
          onSubmit={
            handleSubmit
          }
        >

          <div
            style={{
              marginBottom: "20px"
            }}
          >

            <label
              style={{
                display: "block",

                marginBottom: "10px",

                color: "#e2e8f0",

                fontWeight: "bold"
              }}
            >

              Email

            </label>

            <input
              type="email"

              name="email"

              placeholder="Enter email"

              value={
                formData.email
              }

              onChange={
                handleChange
              }

              required

              style={{
                ...theme.input,

                width: "100%"
              }}
            />

          </div>

          <div
            style={{
              marginBottom: "30px"
            }}
          >

            <label
              style={{
                display: "block",

                marginBottom: "10px",

                color: "#e2e8f0",

                fontWeight: "bold"
              }}
            >

              Password

            </label>

            <input
              type="password"

              name="password"

              placeholder="Enter password"

              value={
                formData.password
              }

              onChange={
                handleChange
              }

              required

              style={{
                ...theme.input,

                width: "100%"
              }}
            />

          </div>

          <button
            type="submit"

            style={{
              width: "100%",

              padding: "15px",

              border: "none",

              borderRadius: "16px",

              background:
                "linear-gradient(to right, #2563eb, #7c3aed)",

              color: "white",

              fontWeight: "bold",

              fontSize: "16px",

              cursor: "pointer",

              transition:
                "all 0.3s ease",

              boxShadow:
                "0 8px 25px rgba(37,99,235,0.35)"
            }}

            onMouseEnter={(e) => {

              e.currentTarget.style.transform =
                "translateY(-2px)";

              e.currentTarget.style.boxShadow =
                "0 12px 30px rgba(37,99,235,0.45)";

            }}

            onMouseLeave={(e) => {

              e.currentTarget.style.transform =
                "translateY(0px)";

              e.currentTarget.style.boxShadow =
                "0 8px 25px rgba(37,99,235,0.35)";

            }}
          >

            Login

          </button>

        </form>

        <p
          style={{
            marginTop: "28px",

            textAlign: "center",

            color: "#cbd5e1",

            fontSize: "15px"
          }}
        >

          Don't have an account?
          {" "}

          <Link
            to="/register"

            style={{
              color: "#60a5fa",

              fontWeight: "bold",

              textDecoration: "none"
            }}
          >

            Register

          </Link>

        </p>

      </div>

    </div>

  );

}

export default Login;
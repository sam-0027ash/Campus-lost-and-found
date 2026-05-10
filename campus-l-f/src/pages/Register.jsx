import { useState } from "react";

import {
  useNavigate,
  Link
} from "react-router-dom";

import API from "../services/api";

import theme from "../styles/theme";

function Register() {

  const navigate =
    useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      password: ""
    });

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
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

    setSuccess("");

    setLoading(true);

    try {

      await API.post(

        "/users/register",

        {
          name:
            formData.name.trim(),

          email:
            formData.email.trim(),

          phone:
            formData.phone.trim(),

          password:
            formData.password
        }

      );

      setSuccess(
        "Account created successfully"
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        password: ""
      });

      setTimeout(() => {

        navigate("/login");

      }, 1500);

    } catch (error) {

      setError(

        error.response?.data
          ?.message

        ||

        "Registration failed"

      );

    } finally {

      setLoading(false);

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

        overflow: "hidden"
      }}
    >

      {/* BACKGROUND GLOWS */}

      <div
        style={{
          position: "absolute",

          width: "320px",

          height: "320px",

          background:
            "rgba(59,130,246,0.18)",

          borderRadius: "50%",

          filter: "blur(120px)",

          top: "-100px",

          left: "-100px"
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

          bottom: "-100px",

          right: "-100px"
        }}
      />

      <div
        style={{
          ...theme.glassCard,

          width: "100%",

          maxWidth: "520px",

          padding: "45px",

          position: "relative",

          zIndex: 1
        }}
      >

        <h1
          style={{
            fontSize: "48px",

            marginBottom: "12px",

            textAlign: "center",

            fontWeight: "bold",

            background:
              "linear-gradient(to right, #60a5fa, #a78bfa)",

            WebkitBackgroundClip:
              "text",

            WebkitTextFillColor:
              "transparent"
          }}
        >

          Create Account ✨

        </h1>

        <p
          style={{
            color: "#cbd5e1",

            textAlign: "center",

            marginBottom: "35px",

            fontSize: "17px"
          }}
        >

          Join Campus Lost & Found

        </p>

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
                  "center"
              }}
            >

              {error}

            </div>

          )
        }

        {
          success && (

            <div
              style={{
                background:
                  "rgba(16,185,129,0.18)",

                border:
                  "1px solid rgba(74,222,128,0.25)",

                color: "#bbf7d0",

                padding: "14px",

                borderRadius:
                  "14px",

                marginBottom:
                  "24px",

                textAlign:
                  "center"
              }}
            >

              {success}

            </div>

          )
        }

        <form
          onSubmit={handleSubmit}

          style={{
            display: "flex",

            flexDirection: "column",

            gap: "22px"
          }}
        >

          {/* NAME */}

          <div>

            <label
              style={{
                display: "block",

                marginBottom: "10px",

                fontSize: "17px",

                fontWeight: "600"
              }}
            >

              Full Name

            </label>

            <input
              type="text"

              name="name"

              placeholder="Enter your full name"

              value={
                formData.name
              }

              onChange={
                handleChange
              }

              autoComplete="name"

              required

              style={{
                ...theme.input,

                width: "100%",

                boxSizing: "border-box"
              }}
            />

          </div>

          {/* EMAIL */}

          <div>

            <label
              style={{
                display: "block",

                marginBottom: "10px",

                fontSize: "17px",

                fontWeight: "600"
              }}
            >

              Email

            </label>

            <input
              type="email"

              name="email"

              placeholder="Enter your email"

              value={
                formData.email
              }

              onChange={
                handleChange
              }

              autoComplete="email"

              required

              style={{
                ...theme.input,

                width: "100%",

                boxSizing: "border-box"
              }}
            />

          </div>

          {/* PHONE */}

          <div>

            <label
              style={{
                display: "block",

                marginBottom: "10px",

                fontSize: "17px",

                fontWeight: "600"
              }}
            >

              Phone Number

            </label>

            <input
              type="tel"

              name="phone"

              placeholder="Enter your phone number"

              value={
                formData.phone
              }

              onChange={
                handleChange
              }

              autoComplete="tel"

              pattern="[0-9]{10}"

              title="Enter a valid 10 digit phone number"

              required

              style={{
                ...theme.input,

                width: "100%",

                boxSizing: "border-box"
              }}
            />

          </div>

          {/* PASSWORD */}

          <div>

            <label
              style={{
                display: "block",

                marginBottom: "10px",

                fontSize: "17px",

                fontWeight: "600"
              }}
            >

              Password

            </label>

            <input
              type="password"

              name="password"

              placeholder="Enter your password"

              value={
                formData.password
              }

              onChange={
                handleChange
              }

              autoComplete="new-password"

              required

              style={{
                ...theme.input,

                width: "100%",

                boxSizing: "border-box"
              }}
            />

          </div>

          {/* BUTTON */}

          <button
            type="submit"

            disabled={loading}

            style={{
              width: "100%",

              padding: "16px",

              marginTop: "10px",

              border: "none",

              borderRadius: "16px",

              background:
                "linear-gradient(to right, #2563eb, #8b5cf6)",

              color: "white",

              fontSize: "17px",

              fontWeight: "bold",

              cursor: "pointer",

              opacity:
                loading ? 0.7 : 1,

              boxShadow:
                "0 10px 30px rgba(139,92,246,0.35)",

              transition:
                "0.3s ease"
            }}
          >

            {
              loading
                ? "Creating Account..."
                : "Register"
            }

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

          Already have an account?
          {" "}

          <Link
            to="/login"

            style={{
              color: "#a78bfa",

              fontWeight: "bold",

              textDecoration: "none"
            }}
          >

            Login

          </Link>

        </p>

      </div>

    </div>

  );

}

export default Register;
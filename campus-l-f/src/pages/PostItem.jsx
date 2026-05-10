import { useState } from "react";

import { useNavigate } from "react-router-dom";

import API from "../services/api";

import theme from "../styles/theme";

function PostItem() {

  const navigate =
    useNavigate();

  const [image, setImage] =
    useState(null);

  const [preview, setPreview] =
    useState("");

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  const [formData, setFormData] =
    useState({

      title: "",

      description: "",

      category: "",

      location: "",

      status: "lost"

    });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value

    });

  };

  const handleImageChange = (e) => {

    const file =
      e.target.files[0];

    setImage(file);

    if (file) {

      setPreview(
        URL.createObjectURL(file)
      );

    }

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");

    setSuccess("");

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      const itemData =
        new FormData();

      itemData.append(
        "title",
        formData.title
      );

      itemData.append(
        "description",
        formData.description
      );

      itemData.append(
        "category",
        formData.category
      );

      itemData.append(
        "location",
        formData.location
      );

      itemData.append(
        "status",
        formData.status
      );

      if (image) {

        itemData.append(
          "image",
          image
        );

      }

      await API.post(

        "/items",

        itemData,

        {
          headers: {

            Authorization:
              `Bearer ${token}`,

            "Content-Type":
              "multipart/form-data"

          }
        }

      );

      setSuccess(
        "Item posted successfully"
      );

      setFormData({

        title: "",

        description: "",

        category: "",

        location: "",

        status: "lost"

      });

      setImage(null);

      setPreview("");

      setTimeout(() => {

        navigate("/home");

      }, 1500);

    } catch (error) {

      setError(

        error.response?.data
          ?.message

        ||

        "Failed to post item"

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

        padding: "50px 20px",

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

          maxWidth: "760px",

          padding: "45px",

          position: "relative",

          zIndex: 1
        }}
      >

        <h1
          style={{
            fontSize: "54px",

            marginBottom: "14px",

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

          Post an Item 📦

        </h1>

        <p
          style={{
            color: "#cbd5e1",

            textAlign: "center",

            marginBottom: "40px",

            fontSize: "18px",

            lineHeight: "30px"
          }}
        >

          Report a lost or found item and
          help reconnect people with their belongings.

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

                borderRadius: "14px",

                marginBottom: "24px",

                textAlign: "center"
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

                borderRadius: "14px",

                marginBottom: "24px",

                textAlign: "center"
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

            gap: "22px",

            width: "100%"
          }}
        >

          {/* TITLE */}

          <div
            style={{
              width: "100%"
            }}
          >

            <label
              style={{
                display: "block",

                marginBottom: "10px",

                fontSize: "18px",

                fontWeight: "600"
              }}
            >

              Item Title

            </label>

            <input
              type="text"

              name="title"

              placeholder="Enter item title"

              value={
                formData.title
              }

              onChange={
                handleChange
              }

              required

              style={{
                ...theme.input,

                width: "100%",

                boxSizing: "border-box"
              }}
            />

          </div>

          {/* DESCRIPTION */}

          <div
            style={{
              width: "100%"
            }}
          >

            <label
              style={{
                display: "block",

                marginBottom: "10px",

                fontSize: "18px",

                fontWeight: "600"
              }}
            >

              Description

            </label>

            <textarea
              name="description"

              placeholder="Describe the item"

              value={
                formData.description
              }

              onChange={
                handleChange
              }

              rows="5"

              required

              style={{
                ...theme.input,

                width: "100%",

                minHeight: "160px",

                resize: "vertical",

                boxSizing: "border-box"
              }}
            />

          </div>

          {/* CATEGORY */}

          <div
            style={{
              width: "100%"
            }}
          >

            <label
              style={{
                display: "block",

                marginBottom: "10px",

                fontSize: "18px",

                fontWeight: "600"
              }}
            >

              Category

            </label>

            <input
              type="text"

              name="category"

              placeholder="Example: Wallet, ID Card"

              value={
                formData.category
              }

              onChange={
                handleChange
              }

              required

              style={{
                ...theme.input,

                width: "100%",

                boxSizing: "border-box"
              }}
            />

          </div>

          {/* LOCATION */}

          <div
            style={{
              width: "100%"
            }}
          >

            <label
              style={{
                display: "block",

                marginBottom: "10px",

                fontSize: "18px",

                fontWeight: "600"
              }}
            >

              Location

            </label>

            <input
              type="text"

              name="location"

              placeholder="Where was it lost/found?"

              value={
                formData.location
              }

              onChange={
                handleChange
              }

              required

              style={{
                ...theme.input,

                width: "100%",

                boxSizing: "border-box"
              }}
            />

          </div>

          {/* STATUS */}

          <div
            style={{
              width: "100%"
            }}
          >

            <label
              style={{
                display: "block",

                marginBottom: "10px",

                fontSize: "18px",

                fontWeight: "600"
              }}
            >

              Status

            </label>

            <select
              name="status"

              value={
                formData.status
              }

              onChange={
                handleChange
              }

              style={{
                ...theme.input,

                width: "100%",

                cursor: "pointer",

                boxSizing: "border-box"
              }}
            >

              <option value="lost">
                Lost
              </option>

              <option value="found">
                Found
              </option>

            </select>

          </div>

          {/* IMAGE */}

          <div
            style={{
              width: "100%"
            }}
          >

            <label
              style={{
                display: "block",

                marginBottom: "10px",

                fontSize: "18px",

                fontWeight: "600"
              }}
            >

              Upload Image

            </label>

            <input
              type="file"

              accept="image/*"

              onChange={
                handleImageChange
              }

              style={{
                color: "#cbd5e1",

                width: "100%"
              }}
            />

          </div>

          {
            preview && (

              <img
                src={preview}

                alt="Preview"

                style={{
                  width: "100%",

                  maxHeight:
                    "320px",

                  objectFit:
                    "contain",

                  borderRadius:
                    "20px",

                  background:
                    "#0f172a",

                  padding: "14px",

                  border:
                    "1px solid rgba(255,255,255,0.08)"
                }}
              />

            )
          }

          <button
            type="submit"

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

              boxShadow:
                "0 10px 30px rgba(59,130,246,0.35)",

              transition:
                "0.3s ease"
            }}
          >

            Post Item

          </button>

        </form>

      </div>

    </div>

  );

}

export default PostItem;

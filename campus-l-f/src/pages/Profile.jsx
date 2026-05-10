import { useEffect, useState } from "react";

import API from "../services/api";

import theme from "../styles/theme";

function Profile() {

  const storedUser = JSON.parse(
    localStorage.getItem("user")
  );

  const [user, setUser] =
    useState(storedUser);

  const [myPosts, setMyPosts] =
    useState([]);

  const [claimedItems, setClaimedItems] =
    useState([]);

  const [editMode, setEditMode] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [error, setError] =
    useState("");

  const [formData, setFormData] =
    useState({
      name:
        storedUser?.name || "",

      email:
        storedUser?.email || "",

      phone:
        storedUser?.phone || ""
    });

  useEffect(() => {

    fetchData();

  }, []);

  const fetchData = async () => {

    try {

      const response =
        await API.get("/items");

      const items =
        response.data;

      const posts = items.filter(

        (item) =>
          item.createdBy?._id ===
          user?.id

      );

      const claims = items.filter(

        (item) =>
          item.claimedBy?._id ===
          user?.id

      );

      setMyPosts(posts);

      setClaimedItems(claims);

    } catch (error) {

      console.log(error);

    }

  };

  const handleChange = (e) => {

    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value
    });

  };

  const handleUpdate = async () => {

    try {

      setLoading(true);

      setError("");

      setMessage("");

      const token =
        localStorage.getItem("token");

      const response =
        await API.put(

          "/users/profile",

          {
            name:
              formData.name.trim(),

            email:
              formData.email.trim(),

            phone:
              formData.phone.trim()
          },

          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }

        );

      localStorage.setItem(

        "user",

        JSON.stringify(
          response.data.user
        )

      );

      setUser(response.data.user);

      setMessage(
        "Profile updated successfully"
      );

      setEditMode(false);

    } catch (error) {

      console.log(error);

      setError(

        error.response?.data
          ?.message ||

        "Failed to update profile"

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
            "rgba(59,130,246,0.16)",

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
            "rgba(168,85,247,0.16)",

          borderRadius: "50%",

          filter: "blur(120px)",

          bottom: "-120px",

          right: "-120px"
        }}
      />

      <div
        style={{
          maxWidth: "950px",

          margin: "0 auto",

          position: "relative",

          zIndex: 1
        }}
      >

        {/* SUCCESS MESSAGE */}

        {
          message && (

            <div
              style={{
                background:
                  "rgba(16,185,129,0.15)",

                border:
                  "1px solid rgba(16,185,129,0.3)",

                color: "#bbf7d0",

                padding: "14px",

                borderRadius: "14px",

                marginBottom: "20px",

                textAlign: "center"
              }}
            >

              {message}

            </div>

          )
        }

        {/* ERROR MESSAGE */}

        {
          error && (

            <div
              style={{
                background:
                  "rgba(239,68,68,0.15)",

                border:
                  "1px solid rgba(239,68,68,0.3)",

                color: "#fecaca",

                padding: "14px",

                borderRadius: "14px",

                marginBottom: "20px",

                textAlign: "center"
              }}
            >

              {error}

            </div>

          )
        }

        {/* PROFILE CARD */}

        <div
          style={{
            ...theme.glassCard,

            padding: "40px",

            marginBottom: "35px",

            display: "flex",

            alignItems: "center",

            justifyContent:
              "space-between",

            gap: "30px",

            flexWrap: "wrap"
          }}
        >

          <div
            style={{
              display: "flex",

              alignItems: "center",

              gap: "25px",

              flexWrap: "wrap"
            }}
          >

            {/* AVATAR */}

            <div
              style={{
                width: "100px",

                height: "100px",

                borderRadius: "50%",

                background:
                  "linear-gradient(to bottom right, #2563eb, #8b5cf6)",

                display: "flex",

                justifyContent:
                  "center",

                alignItems: "center",

                fontSize: "38px",

                fontWeight: "bold",

                color: "white",

                boxShadow:
                  "0 10px 30px rgba(59,130,246,0.35)"
              }}
            >

              {
                formData.name
                  ?.charAt(0)
                  ?.toUpperCase()
              }

            </div>

            {/* USER INFO */}

            <div
              style={{
                minWidth: "280px"
              }}
            >

              {
                editMode ? (

                  <>

                    {/* NAME */}

                    <input
                      type="text"

                      name="name"

                      value={
                        formData.name
                      }

                      onChange={
                        handleChange
                      }

                      placeholder="Name"

                      style={{
                        ...theme.input,

                        width: "100%",

                        marginBottom: "16px",

                        boxSizing:
                          "border-box"
                      }}
                    />

                    {/* EMAIL */}

                    <input
                      type="email"

                      name="email"

                      value={
                        formData.email
                      }

                      onChange={
                        handleChange
                      }

                      placeholder="Email"

                      style={{
                        ...theme.input,

                        width: "100%",

                        marginBottom: "16px",

                        boxSizing:
                          "border-box"
                      }}
                    />

                    {/* PHONE */}

                    <input
                      type="tel"

                      name="phone"

                      value={
                        formData.phone
                      }

                      onChange={
                        handleChange
                      }

                      placeholder="Phone Number"

                      style={{
                        ...theme.input,

                        width: "100%",

                        boxSizing:
                          "border-box"
                      }}
                    />

                  </>

                ) : (

                  <>

                    <h1
                      style={{
                        fontSize: "40px",

                        marginBottom:
                          "12px",

                        background:
                          "linear-gradient(to right, #60a5fa, #a78bfa)",

                        WebkitBackgroundClip:
                          "text",

                        WebkitTextFillColor:
                          "transparent"
                      }}
                    >

                      {user?.name}

                    </h1>

                    <p
                      style={{
                        color: "#cbd5e1",

                        fontSize: "17px",

                        marginBottom: "10px"
                      }}
                    >

                      📧 {user?.email}

                    </p>

                    <p
                      style={{
                        color: "#cbd5e1",

                        fontSize: "17px"
                      }}
                    >

                      📱
                      {" "}
                      {
                        user?.phone ||
                        "No phone number added"
                      }

                    </p>

                  </>

                )
              }

            </div>

          </div>

          {/* BUTTON */}

          <div>

            {
              editMode ? (

                <button

                  onClick={
                    handleUpdate
                  }

                  disabled={loading}

                  style={{
                    padding:
                      "14px 28px",

                    border: "none",

                    borderRadius:
                      "14px",

                    background:
                      "linear-gradient(to right, #2563eb, #8b5cf6)",

                    color: "white",

                    cursor: "pointer",

                    fontWeight:
                      "bold",

                    fontSize: "15px",

                    opacity:
                      loading
                        ? 0.7
                        : 1,

                    boxShadow:
                      "0 10px 25px rgba(59,130,246,0.35)"
                  }}
                >

                  {
                    loading
                      ? "Saving..."
                      : "Save Changes"
                  }

                </button>

              ) : (

                <button

                  onClick={() =>
                    setEditMode(true)
                  }

                  style={{
                    padding:
                      "14px 28px",

                    border: "none",

                    borderRadius:
                      "14px",

                    background:
                      "linear-gradient(to right, #2563eb, #8b5cf6)",

                    color: "white",

                    cursor: "pointer",

                    fontWeight:
                      "bold",

                    fontSize: "15px",

                    boxShadow:
                      "0 10px 25px rgba(59,130,246,0.35)"
                  }}
                >

                  Edit Profile

                </button>

              )
            }

          </div>

        </div>

        {/* STATS */}

        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              "repeat(auto-fit, minmax(260px, 1fr))",

            gap: "24px"
          }}
        >

          <div
            style={{
              ...theme.glassCard,

              padding: "35px"
            }}
          >

            <h2
              style={{
                marginBottom: "18px",

                fontSize: "24px"
              }}
            >

              Total Posts

            </h2>

            <p
              style={{
                fontSize: "52px",

                fontWeight: "bold",

                background:
                  "linear-gradient(to right, #60a5fa, #3b82f6)",

                WebkitBackgroundClip:
                  "text",

                WebkitTextFillColor:
                  "transparent"
              }}
            >

              {myPosts.length}

            </p>

          </div>

          <div
            style={{
              ...theme.glassCard,

              padding: "35px"
            }}
          >

            <h2
              style={{
                marginBottom: "18px",

                fontSize: "24px"
              }}
            >

              Claimed Items

            </h2>

            <p
              style={{
                fontSize: "52px",

                fontWeight: "bold",

                background:
                  "linear-gradient(to right, #a78bfa, #8b5cf6)",

                WebkitBackgroundClip:
                  "text",

                WebkitTextFillColor:
                  "transparent"
              }}
            >

              {claimedItems.length}

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Profile;
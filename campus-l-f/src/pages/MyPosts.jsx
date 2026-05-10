import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import API from "../services/api";

import theme from "../styles/theme";

function MyPosts() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [items, setItems] =
    useState([]);

  useEffect(() => {

    fetchMyPosts();

  }, []);

  const fetchMyPosts = async () => {

    try {

      const response =
        await API.get("/items");

      const myItems =
        response.data.filter(

          (item) =>
            item.createdBy?._id === user.id

        );

      setItems(myItems);

    } catch (error) {

      console.log(error);

    }

  };

  const deleteItem = async (id) => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this item?"
      );

    if (!confirmDelete) return;

    try {

      const token =
        localStorage.getItem("token");

      await API.delete(

        `/items/${id}`,

        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }

      );

      setItems(

        items.filter(
          (item) =>
            item._id !== id
        )

      );

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div
      style={{
        ...theme.pageBackground,

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
            "rgba(59,130,246,0.14)",

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
            "rgba(168,85,247,0.14)",

          borderRadius: "50%",

          filter: "blur(120px)",

          bottom: "-120px",

          right: "-120px"
        }}
      />

      <div
        style={{
          maxWidth: "1200px",

          margin: "0 auto",

          position: "relative",

          zIndex: 1
        }}
      >

        {/* HEADER */}

        <div
          style={{
            marginBottom: "45px"
          }}
        >

          <h1
            style={{
              fontSize: "52px",

              marginBottom: "14px",

              fontWeight: "bold",

              background:
                "linear-gradient(to right, #60a5fa, #c084fc)",

              WebkitBackgroundClip:
                "text",

              WebkitTextFillColor:
                "transparent"
            }}
          >

            My Posts

          </h1>

          <p
            style={{
              color: "#cbd5e1",

              fontSize: "17px",

              maxWidth: "700px",

              lineHeight: "30px"
            }}
          >

            Manage all the items you’ve
            posted on the platform. Edit,
            track, or remove your lost and
            found listings anytime.

          </p>

        </div>

        {/* EMPTY STATE */}

        {
          items.length === 0 && (

            <div
              style={{
                ...theme.glassCard,

                padding: "40px",

                textAlign: "center"
              }}
            >

              <h2
                style={{
                  marginBottom: "12px"
                }}
              >

                No Posts Yet

              </h2>

              <p
                style={{
                  color: "#cbd5e1",

                  marginBottom: "25px"
                }}
              >

                You haven’t posted any
                lost or found items yet.

              </p>

              <Link
                to="/post-item"

                style={{
                  display: "inline-block",

                  padding:
                    "14px 24px",

                  borderRadius:
                    "14px",

                  textDecoration:
                    "none",

                  color: "white",

                  fontWeight: "bold",

                  background:
                    "linear-gradient(to right, #2563eb, #7c3aed)"
                }}
              >

                Post an Item

              </Link>

            </div>

          )
        }

        {/* POSTS GRID */}

        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",

            gap: "25px"
          }}
        >

          {
            items.map((item) => (

              <div
                key={item._id}

                onMouseEnter={(e) => {

                  e.currentTarget.style.transform =
                    "translateY(-6px)";

                  e.currentTarget.style.boxShadow =
                    "0 18px 40px rgba(0,0,0,0.45)";

                }}

                onMouseLeave={(e) => {

                  e.currentTarget.style.transform =
                    "translateY(0px)";

                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(0,0,0,0.35)";

                }}

                style={{
                  ...theme.glassCard,

                  padding: "28px",

                  minHeight: "300px",

                  display: "flex",

                  flexDirection: "column",

                  justifyContent:
                    "space-between",

                  transition:
                    "all 0.3s ease"
                }}
              >

                {/* TOP */}

                <div>

                  <div
                    style={{
                      display: "flex",

                      justifyContent:
                        "space-between",

                      alignItems: "center",

                      marginBottom: "18px",

                      gap: "12px"
                    }}
                  >

                    <h2
                      style={{
                        margin: 0,

                        fontSize: "28px",

                        lineHeight: "1.2"
                      }}
                    >

                      {item.title}

                    </h2>

                    <span
                      style={{
                        background:
                          item.status === "lost"

                            ? "linear-gradient(to right, #dc2626, #ef4444)"

                            : item.status === "found"

                              ? "linear-gradient(to right, #2563eb, #3b82f6)"

                              : "linear-gradient(to right, #059669, #10b981)",

                        padding: "7px 14px",

                        borderRadius: "999px",

                        fontSize: "12px",

                        fontWeight: "bold",

                        textTransform:
                          "uppercase",

                        whiteSpace: "nowrap"
                      }}
                    >

                      {item.status}

                    </span>

                  </div>

                  <p
                    style={{
                      color: "#cbd5e1",

                      lineHeight: "26px",

                      fontSize: "15px",

                      display: "-webkit-box",

                      WebkitLineClamp: 4,

                      WebkitBoxOrient:
                        "vertical",

                      overflow: "hidden",

                      minHeight: "104px"
                    }}
                  >

                    {item.description}

                  </p>

                </div>

                {/* BOTTOM */}

                <div>

                  <p
                    style={{
                      marginBottom: "12px",

                      color: "#e2e8f0"
                    }}
                  >

                    📍
                    {" "}
                    <strong>
                      Location:
                    </strong>
                    {" "}
                    {item.location}

                  </p>

                  <div
                    style={{
                      display: "flex",

                      gap: "12px",

                      flexWrap: "wrap",

                      marginTop: "25px"
                    }}
                  >

                    <Link
                      to={`/item/${item._id}`}

                      style={{
                        flex: 1,

                        textAlign: "center",

                        padding:
                          "12px 18px",

                        background:
                          "rgba(255,255,255,0.06)",

                        border:
                          "1px solid rgba(255,255,255,0.08)",

                        borderRadius:
                          "12px",

                        textDecoration:
                          "none",

                        color: "white",

                        fontWeight: "600"
                      }}
                    >

                      View

                    </Link>

                    <Link
                      to={`/edit-item/${item._id}`}

                      style={{
                        flex: 1,

                        textAlign: "center",

                        padding:
                          "12px 18px",

                        background:
                          "linear-gradient(to right, #2563eb, #3b82f6)",

                        borderRadius:
                          "12px",

                        textDecoration:
                          "none",

                        color: "white",

                        fontWeight: "600"
                      }}
                    >

                      Edit

                    </Link>

                    <button

                      onClick={() =>
                        deleteItem(
                          item._id
                        )
                      }

                      style={{
                        flex: 1,

                        padding:
                          "12px 18px",

                        background:
                          "linear-gradient(to right, #dc2626, #ef4444)",

                        border: "none",

                        borderRadius:
                          "12px",

                        color: "white",

                        cursor: "pointer",

                        fontWeight: "600"
                      }}
                    >

                      Delete

                    </button>

                  </div>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </div>

  );

}

export default MyPosts;
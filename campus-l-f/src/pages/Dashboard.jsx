import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import API from "../services/api";

function Dashboard() {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  const [items, setItems] =
    useState([]);

  useEffect(() => {

    fetchItems();

  }, []);

  const fetchItems = async () => {

    try {

      const response =
        await API.get("/items");

      setItems(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const myPosts = items.filter(

    (item) =>

      item.createdBy?._id ===
      user.id

  );

  const claimedItems = items.filter(

    (item) =>

      item.claimedBy?._id ===
      user.id

  );

  const lostItems = items.filter(

    (item) =>
      item.status === "lost"

  );

  const foundItems = items.filter(

    (item) =>
      item.status === "found"

  );

  const recentItems =
    items.slice(0, 4);

  return (

    <div
      style={{
        minHeight: "100vh",

        background:
          "radial-gradient(circle at top left, #1e1b4b 0%, #0f172a 45%, #020617 100%)",

        color: "white",

        padding: "50px 25px",

        fontFamily:
          "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
      }}
    >

      <div
        style={{
          maxWidth: "1250px",

          margin: "0 auto"
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

              marginBottom: "12px",

              fontWeight: "bold",

              background:
                "linear-gradient(to right, #60a5fa, #a78bfa, #22d3ee)",

              WebkitBackgroundClip: "text",

              WebkitTextFillColor: "transparent"
            }}
          >

            Welcome back,
            {" "}
            {user?.name}
            👋

          </h1>

          <p
            style={{
              color: "#cbd5e1",

              fontSize: "18px",

              lineHeight: "30px",

              maxWidth: "700px"
            }}
          >

            Track your lost and found activity, manage posts,
            and quickly reconnect items with their owners.

          </p>

        </div>

        {/* STATS */}

        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              "repeat(auto-fit, minmax(230px, 1fr))",

            gap: "22px",

            marginBottom: "45px"
          }}
        >

          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(37,99,235,0.9), rgba(59,130,246,0.8))",

              padding: "28px",

              borderRadius: "24px",

              border:
                "1px solid rgba(255,255,255,0.08)",

              backdropFilter: "blur(10px)",

              boxShadow:
                "0 10px 30px rgba(0,0,0,0.35)"
            }}
          >

            <h2
              style={{
                marginBottom: "10px"
              }}
            >
              Total Posts
            </h2>

            <p
              style={{
                fontSize: "46px",

                fontWeight: "bold"
              }}
            >

              {myPosts.length}

            </p>

          </div>

          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(5,150,105,0.9), rgba(16,185,129,0.8))",

              padding: "28px",

              borderRadius: "24px",

              border:
                "1px solid rgba(255,255,255,0.08)",

              backdropFilter: "blur(10px)",

              boxShadow:
                "0 10px 30px rgba(0,0,0,0.35)"
            }}
          >

            <h2
              style={{
                marginBottom: "10px"
              }}
            >
              Claimed Items
            </h2>

            <p
              style={{
                fontSize: "46px",

                fontWeight: "bold"
              }}
            >

              {claimedItems.length}

            </p>

          </div>

          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(220,38,38,0.9), rgba(239,68,68,0.8))",

              padding: "28px",

              borderRadius: "24px",

              border:
                "1px solid rgba(255,255,255,0.08)",

              backdropFilter: "blur(10px)",

              boxShadow:
                "0 10px 30px rgba(0,0,0,0.35)"
            }}
          >

            <h2
              style={{
                marginBottom: "10px"
              }}
            >
              Lost Items
            </h2>

            <p
              style={{
                fontSize: "46px",

                fontWeight: "bold"
              }}
            >

              {lostItems.length}

            </p>

          </div>

          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(217,119,6,0.9), rgba(245,158,11,0.8))",

              padding: "28px",

              borderRadius: "24px",

              border:
                "1px solid rgba(255,255,255,0.08)",

              backdropFilter: "blur(10px)",

              boxShadow:
                "0 10px 30px rgba(0,0,0,0.35)"
            }}
          >

            <h2
              style={{
                marginBottom: "10px"
              }}
            >
              Found Items
            </h2>

            <p
              style={{
                fontSize: "46px",

                fontWeight: "bold"
              }}
            >

              {foundItems.length}

            </p>

          </div>

        </div>

        {/* ACTION BUTTONS */}

        <div
          style={{
            display: "flex",

            gap: "18px",

            flexWrap: "wrap",

            marginBottom: "55px"
          }}
        >

          <Link
            to="/post-item"

            style={{
              padding:
                "15px 24px",

              borderRadius: "16px",

              background:
                "linear-gradient(to right, #2563eb, #60a5fa)",

              color: "white",

              textDecoration:
                "none",

              fontWeight: "bold",

              boxShadow:
                "0 8px 20px rgba(37,99,235,0.35)",

              transition: "0.3s"
            }}
          >

            ➕ Post New Item

          </Link>

          <Link
            to="/home"

            style={{
              padding:
                "15px 24px",

              borderRadius: "16px",

              background:
                "linear-gradient(to right, #7c3aed, #a78bfa)",

              color: "white",

              textDecoration:
                "none",

              fontWeight: "bold",

              boxShadow:
                "0 8px 20px rgba(124,58,237,0.35)"
            }}
          >

            🔎 Browse Items

          </Link>

          <Link
            to="/profile"

            style={{
              padding:
                "15px 24px",

              borderRadius: "16px",

              background:
                "linear-gradient(to right, #0f766e, #22d3ee)",

              color: "white",

              textDecoration:
                "none",

              fontWeight: "bold",

              boxShadow:
                "0 8px 20px rgba(34,211,238,0.25)"
            }}
          >

            👤 View Profile

          </Link>

        </div>

        {/* RECENT ITEMS */}

        <div>

          <h2
            style={{
              marginBottom: "30px",

              fontSize: "36px",

              fontWeight: "bold"
            }}
          >

            Recent Items

          </h2>

          <div
            style={{
              display: "grid",

              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",

              gap: "24px"
            }}
          >

            {
              recentItems.map(

                (item) => (

                  <Link
                    key={item._id}

                    to={`/item/${item._id}`}

                    style={{
                      textDecoration:
                        "none",

                      color: "white"
                    }}
                  >

                    <div
                      style={{
                        background:
                          "linear-gradient(145deg, rgba(30,41,59,0.96), rgba(15,23,42,0.96))",

                        padding:
                          "26px",

                        borderRadius:
                          "24px",

                        border:
                          "1px solid rgba(255,255,255,0.08)",

                        boxShadow:
                          "0 10px 25px rgba(0,0,0,0.35)",

                        height:
                          "260px",

                        display:
                          "flex",

                        flexDirection:
                          "column",

                        justifyContent:
                          "space-between",

                        overflow:
                          "hidden"
                      }}
                    >

                      <div>

                        <div
                          style={{
                            display: "flex",

                            justifyContent:
                              "space-between",

                            alignItems:
                              "center",

                            marginBottom:
                              "15px"
                          }}
                        >

                          <h3
                            style={{
                              fontSize:
                                "24px",

                              margin: 0
                            }}
                          >

                            {item.title}

                          </h3>

                          <span
                            style={{
                              backgroundColor:
                                item.status === "lost"
                                  ? "#dc2626"
                                  : item.status === "found"
                                    ? "#2563eb"
                                    : "#16a34a",

                              padding:
                                "6px 12px",

                              borderRadius:
                                "999px",

                              fontSize:
                                "12px",

                              fontWeight:
                                "bold",

                              textTransform:
                                "uppercase"
                            }}
                          >

                            {item.status}

                          </span>

                        </div>

                        <p
                          style={{
                            color:
                              "#cbd5e1",

                            lineHeight:
                              "26px",

                            fontSize:
                              "15px",

                            display:
                              "-webkit-box",

                            WebkitLineClamp:
                              3,

                            WebkitBoxOrient:
                              "vertical",

                            overflow:
                              "hidden",

                            height:
                              "78px"
                          }}
                        >

                          {
                            item.description
                          }

                        </p>

                      </div>

                      <div>

                        <p
                          style={{
                            color:
                              "#e2e8f0"
                          }}
                        >

                          📍
                          {" "}
                          {item.location}

                        </p>

                      </div>

                    </div>

                  </Link>

                )

              )
            }

          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;
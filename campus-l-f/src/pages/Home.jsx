import { useEffect, useState } from "react";

import API from "../services/api";

import { Link } from "react-router-dom";

import theme from "../styles/theme";

function Home() {

  const [items, setItems] =
    useState([]);

  const [statusFilter, setStatusFilter] =
    useState("all");

  const [sortOrder, setSortOrder] =
    useState("latest");

  const [searchTerm, setSearchTerm] =
    useState("");

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

  const filteredItems = items

    .filter((item) => {

      const matchesStatus =

        statusFilter === "all"

          ? true

          : item.status === statusFilter;

      const matchesSearch =

        item.title
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )

        ||

        item.category
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )

        ||

        item.location
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      return (
        matchesStatus &&
        matchesSearch
      );

    })

    .sort((a, b) => {

      if (sortOrder === "latest") {

        return (
          new Date(b.createdAt) -
          new Date(a.createdAt)
        );

      }

      return (
        new Date(a.createdAt) -
        new Date(b.createdAt)
      );

    });

  return (

    <div
      style={{
        ...theme.pageBackground,

        padding: "50px 40px",

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

          left: "-120px",

          zIndex: 0
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

          right: "-120px",

          zIndex: 0
        }}
      />

      {/* CONTENT */}

      <div
        style={{
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
              fontSize: "56px",

              marginBottom: "15px",

              fontWeight: "bold",

              lineHeight: "1.1",

              background:
                "linear-gradient(to right, #60a5fa, #c084fc)",

              WebkitBackgroundClip: "text",

              WebkitTextFillColor:
                "transparent"
            }}
          >

            Campus Lost & Found

          </h1>

          <p
            style={{
              color: "#cbd5e1",

              fontSize: "18px",

              maxWidth: "720px",

              lineHeight: "30px"
            }}
          >

            Browse all reported lost and found
            items across campus. Quickly search,
            filter, and reconnect people with
            their belongings.

          </p>

        </div>

        {/* FILTER BAR */}

        <div
          style={{
            ...theme.glassCard,

            display: "flex",

            gap: "18px",

            flexWrap: "wrap",

            alignItems: "center",

            padding: "24px",

            marginBottom: "45px"
          }}
        >

          <input

            type="text"

            placeholder="Search items..."

            value={searchTerm}

            onChange={(e) =>
              setSearchTerm(
                e.target.value
              )
            }

            style={{
              ...theme.input,

              width: "300px"
            }}
          />

          <select

            value={statusFilter}

            onChange={(e) =>
              setStatusFilter(
                e.target.value
              )
            }

            style={{
              ...theme.input,

              width: "170px",

              cursor: "pointer"
            }}
          >

            <option value="all">
              All Items
            </option>

            <option value="lost">
              Lost
            </option>

            <option value="found">
              Found
            </option>

            <option value="claimed">
              Claimed
            </option>

          </select>

          <select

            value={sortOrder}

            onChange={(e) =>
              setSortOrder(
                e.target.value
              )
            }

            style={{
              ...theme.input,

              width: "170px",

              cursor: "pointer"
            }}
          >

            <option value="latest">
              Latest
            </option>

            <option value="oldest">
              Oldest
            </option>

          </select>

        </div>

        {/* CARDS */}

        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",

            gap: "25px"
          }}
        >

          {
            filteredItems.map((item) => (

              <Link
                key={item._id}

                to={`/item/${item._id}`}

                style={{
                  textDecoration: "none",

                  color: "white"
                }}
              >

                <div

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

                    minHeight: "320px",

                    display: "flex",

                    flexDirection: "column",

                    justifyContent:
                      "space-between",

                    transition:
                      "all 0.3s ease",

                    overflow: "hidden"
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
                          fontSize: "28px",

                          margin: 0,

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

                        WebkitLineClamp: 3,

                        WebkitBoxOrient:
                          "vertical",

                        overflow: "hidden",

                        minHeight: "78px"
                      }}
                    >

                      {item.description}

                    </p>

                  </div>

                  {/* BOTTOM */}

                  <div
                    style={{
                      marginTop: "25px"
                    }}
                  >

                    <p
                      style={{
                        marginBottom: "12px",

                        color: "#e2e8f0",

                        fontSize: "15px"
                      }}
                    >

                      📂
                      {" "}
                      <strong>
                        Category:
                      </strong>
                      {" "}
                      {item.category}

                    </p>

                    <p
                      style={{
                        marginBottom: "12px",

                        color: "#e2e8f0",

                        fontSize: "15px"
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

                    {
                      item.status ===
                        "claimed"

                      &&

                      item.claimedBy && (

                        <p
                          style={{
                            marginTop: "14px",

                            color: "#a5f3fc",

                            fontSize: "15px"
                          }}
                        >

                          ✅ Claimed by
                          {" "}
                          {
                            item.claimedBy
                              ?.name
                          }

                        </p>

                      )
                    }

                  </div>

                </div>

              </Link>

            ))
          }

        </div>

      </div>

    </div>

  );

}

export default Home;
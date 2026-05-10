import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import API from "../services/api";

import theme from "../styles/theme";

function ClaimedItems() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [items, setItems] =
    useState([]);

  useEffect(() => {

    fetchClaimedItems();

  }, []);

  const fetchClaimedItems = async () => {

    try {

      const response =
        await API.get("/items");

      const claimed =
        response.data.filter(

          (item) =>
            item.claimedBy?._id ===
            user.id

        );

      setItems(claimed);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div
      style={{
        ...theme.pageBackground,

        padding: "60px 30px",

        position: "relative",

        overflow: "hidden"
      }}
    >

      {/* BACKGROUND GLOW */}

      <div
        style={{
          position: "absolute",

          width: "350px",

          height: "350px",

          background:
            "rgba(59,130,246,0.15)",

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

          width: "350px",

          height: "350px",

          background:
            "rgba(168,85,247,0.15)",

          borderRadius: "50%",

          filter: "blur(120px)",

          bottom: "-120px",

          right: "-120px",

          zIndex: 0
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

            Claimed Items

          </h1>

          <p
            style={{
              color: "#cbd5e1",

              fontSize: "18px",

              maxWidth: "700px",

              lineHeight: "30px"
            }}
          >

            View all the lost or found
            items you have successfully
            claimed.

          </p>

        </div>

        {/* EMPTY STATE */}

        {
          items.length === 0 && (

            <div
              style={{
                ...theme.glassCard,

                padding: "60px 30px",

                textAlign: "center"
              }}
            >

              <h2
                style={{
                  fontSize: "30px",

                  marginBottom: "15px"
                }}
              >

                No Claimed Items

              </h2>

              <p
                style={{
                  color: "#cbd5e1",

                  fontSize: "17px"
                }}
              >

                Items you claim will appear
                here.

              </p>

            </div>

          )
        }

        {/* ITEMS GRID */}

        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",

            gap: "28px"
          }}
        >

          {
            items.map((item) => (

              <div
                key={item._id}

                style={{
                  ...theme.glassCard,

                  padding: "28px",

                  minHeight: "320px",

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

                      marginBottom: "18px"
                    }}
                  >

                    <h2
                      style={{
                        fontSize: "28px",

                        margin: 0
                      }}
                    >

                      {item.title}

                    </h2>

                    <span
                      style={{
                        background:
                          "linear-gradient(to right, #059669, #10b981)",

                        padding: "7px 14px",

                        borderRadius: "999px",

                        fontSize: "12px",

                        fontWeight: "bold",

                        textTransform:
                          "uppercase"
                      }}
                    >

                      Claimed

                    </span>

                  </div>

                  <p
                    style={{
                      color: "#cbd5e1",

                      lineHeight: "26px",

                      marginBottom: "22px",

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

                <div>

                  <p
                    style={{
                      marginBottom: "12px",

                      color: "#e2e8f0"
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
                      marginBottom: "20px",

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

                  <Link
                    to={`/item/${item._id}`}

                    style={{
                      display: "inline-block",

                      background:
                        "linear-gradient(to right, #3b82f6, #8b5cf6)",

                      padding: "12px 20px",

                      borderRadius: "14px",

                      color: "white",

                      fontWeight: "bold",

                      transition: "0.3s"
                    }}
                  >

                    View Item

                  </Link>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </div>

  );

}

export default ClaimedItems;
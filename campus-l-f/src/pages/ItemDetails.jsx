import { useEffect, useState } from "react";

import {
  useParams,
  useNavigate
} from "react-router-dom";

import API from "../services/api";

import theme from "../styles/theme";

function ItemDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [item, setItem] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  useEffect(() => {

    fetchItem();

  }, []);

  const fetchItem = async () => {

    try {

      setLoading(true);

      const response =
        await API.get(`/items/${id}`);

      setItem(response.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  const claimItem = async () => {

    try {

      const token =
        localStorage.getItem("token");

      if (!token) {

        alert(
          "Please login to claim items"
        );

        navigate("/login");

        return;

      }

      await API.put(

        `/items/claim/${item._id}`,

        {},

        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }

      );

      alert(
        "Item claimed successfully. Contact details are now visible."
      );

      fetchItem();

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message
        ||
        "Failed to claim item"
      );

    }

  };

  if (loading) {

    return (

      <div
        style={{
          ...theme.pageBackground,

          minHeight: "100vh",

          display: "flex",

          justifyContent: "center",

          alignItems: "center",

          color: "white",

          fontSize: "28px"
        }}
      >

        Loading...

      </div>

    );

  }

  if (!item) {

    return (

      <div
        style={{
          ...theme.pageBackground,

          minHeight: "100vh",

          display: "flex",

          justifyContent: "center",

          alignItems: "center",

          color: "white",

          fontSize: "28px"
        }}
      >

        Item not found

      </div>

    );

  }

  const canViewContact =

    item.status === "claimed"

    &&

    (
      item.claimedBy?._id === user?.id
      ||
      item.createdBy?._id === user?.id
    );

  return (

    <div
      style={{
        ...theme.pageBackground,

        padding: "50px 20px",

        minHeight: "100vh",

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

          top: "-100px",

          left: "-100px",

          zIndex: 0
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

          bottom: "-100px",

          right: "-100px",

          zIndex: 0
        }}
      />

      <div
        style={{
          position: "relative",

          zIndex: 1,

          maxWidth: "1200px",

          margin: "0 auto"
        }}
      >

        {/* BACK BUTTON */}

        <button

          onClick={() => navigate(-1)}

          style={{
            background: "none",

            border: "none",

            color: "#cbd5e1",

            fontSize: "17px",

            cursor: "pointer",

            marginBottom: "25px"
          }}
        >

          ← Back

        </button>

        {/* MAIN CARD */}

        <div
          style={{
            ...theme.glassCard,

            overflow: "hidden",

            padding: "0"
          }}
        >

          <div
            style={{
              display: "flex",

              flexWrap: "wrap"
            }}
          >

            {/* IMAGE SECTION */}

            <div
              style={{
                flex: "1",

                minWidth: "340px",

                background:
                  "rgba(15,23,42,0.85)",

                display: "flex",

                justifyContent: "center",

                alignItems: "center",

                padding: "35px",

                borderRight:
                  "1px solid rgba(255,255,255,0.06)"
              }}
            >

              {
                item.image ? (

                  <img
                    src={item.image}
                    alt={item.title}

                    style={{
                      width: "100%",

                      maxHeight: "520px",

                      objectFit: "contain",

                      borderRadius: "20px",

                      boxShadow:
                        "0 10px 30px rgba(0,0,0,0.4)"
                    }}
                  />

                ) : (

                  <div
                    style={{
                      width: "100%",

                      height: "320px",

                      borderRadius: "20px",

                      background:
                        "rgba(255,255,255,0.04)",

                      display: "flex",

                      justifyContent: "center",

                      alignItems: "center",

                      color: "#94a3b8",

                      fontSize: "18px"
                    }}
                  >

                    No Image Available

                  </div>

                )
              }

            </div>

            {/* DETAILS SECTION */}

            <div
              style={{
                flex: "1",

                minWidth: "340px",

                padding: "45px"
              }}
            >

              {/* STATUS */}

              <div
                style={{
                  marginBottom: "25px"
                }}
              >

                <span
                  style={{
                    background:

                      item.status === "lost"

                        ? "linear-gradient(to right, #dc2626, #ef4444)"

                        : item.status === "found"

                          ? "linear-gradient(to right, #2563eb, #3b82f6)"

                          : "linear-gradient(to right, #059669, #10b981)",

                    padding: "8px 16px",

                    borderRadius: "999px",

                    fontSize: "13px",

                    fontWeight: "bold",

                    textTransform: "uppercase"
                  }}
                >

                  {item.status}

                </span>

              </div>

              {/* TITLE */}

              <h1
                style={{
                  fontSize: "52px",

                  marginBottom: "22px",

                  lineHeight: "1.1",

                  background:
                    "linear-gradient(to right, #60a5fa, #c084fc)",

                  WebkitBackgroundClip: "text",

                  WebkitTextFillColor:
                    "transparent"
                }}
              >

                {item.title}

              </h1>

              {/* DESCRIPTION */}

              <p
                style={{
                  color: "#cbd5e1",

                  lineHeight: "32px",

                  marginBottom: "35px",

                  fontSize: "17px"
                }}
              >

                {item.description}

              </p>

              {/* INFO GRID */}

              <div
                style={{
                  display: "grid",

                  gap: "18px",

                  marginBottom: "40px"
                }}
              >

                <div
                  style={{
                    ...theme.glassCard,

                    padding: "18px"
                  }}
                >

                  📂{" "}
                  <strong>
                    Category:
                  </strong>{" "}
                  {item.category}

                </div>

                <div
                  style={{
                    ...theme.glassCard,

                    padding: "18px"
                  }}
                >

                  📍{" "}
                  <strong>
                    Location:
                  </strong>{" "}
                  {item.location}

                </div>

                <div
                  style={{
                    ...theme.glassCard,

                    padding: "18px"
                  }}
                >

                  👤{" "}
                  <strong>
                    Posted By:
                  </strong>{" "}
                  {item.createdBy?.name}

                </div>

                <div
                  style={{
                    ...theme.glassCard,

                    padding: "18px"
                  }}
                >

                  🕒{" "}
                  <strong>
                    Posted On:
                  </strong>{" "}
                  {
                    new Date(
                      item.createdAt
                    ).toLocaleString()
                  }

                </div>

                {/* CONTACT DETAILS */}

                {
                  canViewContact && (

                    <div
                      style={{
                        ...theme.glassCard,

                        padding: "22px",

                        background:
                          "rgba(16,185,129,0.12)",

                        border:
                          "1px solid rgba(16,185,129,0.25)"
                      }}
                    >

                      <h3
                        style={{
                          marginTop: 0,

                          marginBottom: "18px",

                          color: "#6ee7b7"
                        }}
                      >

                        📞 Contact Information

                      </h3>

                      <p
                        style={{
                          marginBottom: "12px",

                          color: "#e2e8f0"
                        }}
                      >

                        <strong>
                          Name:
                        </strong>{" "}
                        {item.createdBy?.name}

                      </p>

                      <p
                        style={{
                          marginBottom: "12px",

                          color: "#e2e8f0"
                        }}
                      >

                        <strong>
                          Email:
                        </strong>{" "}
                        {
                          item.createdBy?.email
                          || "Not Available"
                        }

                      </p>

                      <p
                        style={{
                          marginBottom: 0,

                          color: "#e2e8f0"
                        }}
                      >

                        <strong>
                          Phone:
                        </strong>{" "}
                        {
                          item.createdBy?.phone
                          || "Not Available"
                        }

                      </p>

                    </div>

                  )
                }

                {/* CLAIM INFO */}

                {
                  item.status === "claimed" && (

                    <>
                      <div
                        style={{
                          ...theme.glassCard,

                          padding: "18px"
                        }}
                      >

                        ✅{" "}
                        <strong>
                          Claimed By:
                        </strong>{" "}
                        {item.claimedBy?.name}

                      </div>

                      <div
                        style={{
                          ...theme.glassCard,

                          padding: "18px"
                        }}
                      >

                        📅{" "}
                        <strong>
                          Claimed On:
                        </strong>{" "}
                        {
                          new Date(
                            item.claimedAt
                          ).toLocaleString()
                        }

                      </div>
                    </>

                  )
                }

              </div>

              {/* ACTION BUTTONS */}

              <div
                style={{
                  display: "flex",

                  gap: "18px",

                  flexWrap: "wrap"
                }}
              >

                {
                  item.createdBy?._id ===
                    user?.id && (

                    <button

                      onClick={() =>
                        navigate(
                          `/edit-item/${item._id}`
                        )
                      }

                      style={{
                        padding: "15px 30px",

                        border: "none",

                        borderRadius: "14px",

                        background:
                          "linear-gradient(to right, #2563eb, #7c3aed)",

                        color: "white",

                        cursor: "pointer",

                        fontWeight: "bold",

                        fontSize: "16px",

                        boxShadow:
                          "0 8px 25px rgba(37,99,235,0.35)"
                      }}
                    >

                      Edit Item

                    </button>

                  )
                }

                {
                  item.status !== "claimed"

                  &&

                  item.createdBy?._id !==
                    user?.id && (

                    <button

                      onClick={claimItem}

                      style={{
                        padding: "15px 30px",

                        border: "none",

                        borderRadius: "14px",

                        background:
                          "linear-gradient(to right, #059669, #10b981)",

                        color: "white",

                        cursor: "pointer",

                        fontWeight: "bold",

                        fontSize: "16px",

                        boxShadow:
                          "0 8px 25px rgba(16,185,129,0.35)"
                      }}
                    >

                      Claim Item

                    </button>

                  )
                }

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default ItemDetails;
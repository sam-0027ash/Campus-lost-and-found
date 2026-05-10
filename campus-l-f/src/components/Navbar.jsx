import {
  Link,
  useNavigate,
  useLocation
} from "react-router-dom";

import {
  useState,
  useEffect,
  useRef
} from "react";

function Navbar() {

  const navigate = useNavigate();

  const location = useLocation();

  const token =
    localStorage.getItem("token");

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [showDropdown, setShowDropdown] =
    useState(false);

  const dropdownRef = useRef();

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/");

  };

  useEffect(() => {

    const handleClickOutside = (event) => {

      if (

        dropdownRef.current &&

        !dropdownRef.current.contains(
          event.target
        )

      ) {

        setShowDropdown(false);

      }

    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

    };

  }, []);

  const navLink = (path) => ({

    color:
      location.pathname === path
        ? "#a78bfa"
        : "#e2e8f0",

    textDecoration: "none",

    fontWeight: "600",

    fontSize: "15px",

    transition: "0.3s",

    padding: "10px 14px",

    borderRadius: "12px",

    background:
      location.pathname === path
        ? "rgba(167,139,250,0.12)"
        : "transparent"

  });

  const dropdownItem = {

    display: "flex",

    alignItems: "center",

    gap: "12px",

    padding: "13px 14px",

    borderRadius: "14px",

    color: "#e2e8f0",

    textDecoration: "none",

    fontSize: "15px",

    fontWeight: "500",

    transition: "0.25s",

    cursor: "pointer"

  };

  return (

    <nav
      style={{
        position: "sticky",

        top: 0,

        zIndex: 999,

        backdropFilter: "blur(18px)",

        background:
          "rgba(15,23,42,0.82)",

        borderBottom:
          "1px solid rgba(255,255,255,0.08)",

        padding: "18px 35px"
      }}
    >

      <div
        style={{
          maxWidth: "1400px",

          margin: "0 auto",

          display: "flex",

          justifyContent:
            "space-between",

          alignItems: "center",

          gap: "20px",

          flexWrap: "wrap"
        }}
      >

        {/* LEFT */}

        <div
          style={{
            display: "flex",

            alignItems: "center",

            gap: "35px",

            flexWrap: "wrap"
          }}
        >

          {/* LOGO */}

          <Link
            to="/"

            style={{
              textDecoration: "none",

              display: "flex",

              alignItems: "center",

              gap: "12px"
            }}
          >

            <div
              style={{
                width: "46px",

                height: "46px",

                borderRadius: "16px",

                background:
                  "linear-gradient(to bottom right, #3b82f6, #8b5cf6)",

                display: "flex",

                justifyContent: "center",

                alignItems: "center",

                color: "white",

                fontWeight: "bold",

                fontSize: "20px",

                boxShadow:
                  "0 8px 25px rgba(59,130,246,0.35)"
              }}
            >

              C

            </div>

            <div>

              <h2
                style={{
                  margin: 0,

                  color: "white",

                  fontSize: "22px",

                  lineHeight: "1"
                }}
              >

                Campus Lost & Found

              </h2>

              <p
                style={{
                  margin: "4px 0 0 0",

                  color: "#94a3b8",

                  fontSize: "12px"
                }}
              >

                Find • Report • Reclaim

              </p>

            </div>

          </Link>

          {/* NAV LINKS */}

          <div
            style={{
              display: "flex",

              alignItems: "center",

              gap: "10px",

              flexWrap: "wrap"
            }}
          >

            <Link
              to="/home"
              style={navLink("/home")}
            >

              Browse

            </Link>

            <Link
              to="/about"
              style={navLink("/about")}
            >

              About

            </Link>

            <Link
              to="/contact"
              style={navLink("/contact")}
            >

              Contact

            </Link>

            {
              token && (

                <>

                  <Link
                    to="/dashboard"
                    style={navLink("/dashboard")}
                  >

                    Dashboard

                  </Link>

                  <Link
                    to="/post-item"
                    style={navLink("/post-item")}
                  >

                    Post Item

                  </Link>

                  <Link
                    to="/my-posts"
                    style={navLink("/my-posts")}
                  >

                    My Posts

                  </Link>

                </>

              )
            }

          </div>

        </div>

        {/* RIGHT */}

        <div
          ref={dropdownRef}

          style={{
            position: "relative"
          }}
        >

          {/* AVATAR */}

          <div

            onClick={() =>
              setShowDropdown(
                !showDropdown
              )
            }

            style={{
              display: "flex",

              alignItems: "center",

              gap: "14px",

              background:
                "rgba(255,255,255,0.05)",

              border:
                "1px solid rgba(255,255,255,0.08)",

              padding: "8px 14px",

              borderRadius: "18px",

              cursor: "pointer",

              transition: "0.3s",

              minWidth: "210px"
            }}
          >

            <div
              style={{
                width: "46px",

                height: "46px",

                borderRadius: "50%",

                background:
                  "linear-gradient(to bottom right, #60a5fa, #a78bfa)",

                display: "flex",

                justifyContent: "center",

                alignItems: "center",

                color: "white",

                fontWeight: "bold",

                fontSize: "18px",

                boxShadow:
                  "0 8px 20px rgba(96,165,250,0.35)"
              }}
            >

              {
                token

                  ? user?.name
                      ?.charAt(0)
                      ?.toUpperCase()

                  : "?"
              }

            </div>

            <div
              style={{
                display: "flex",

                flexDirection: "column"
              }}
            >

              <span
                style={{
                  color: "white",

                  fontWeight: "600",

                  fontSize: "14px"
                }}
              >

                {
                  token
                    ? user?.name
                    : "Guest User"
                }

              </span>

              <span
                style={{
                  color: "#94a3b8",

                  fontSize: "12px"
                }}
              >

                {
                  token
                    ? "Manage Account"
                    : "Login or Register"
                }

              </span>

            </div>

          </div>

          {/* DROPDOWN */}

          {
            showDropdown && (

              <div
                style={{
                  position: "absolute",

                  top: "78px",

                  right: 0,

                  width: "280px",

                  background:
                    "rgba(15,23,42,0.97)",

                  border:
                    "1px solid rgba(255,255,255,0.08)",

                  borderRadius: "24px",

                  padding: "14px",

                  boxShadow:
                    "0 18px 45px rgba(0,0,0,0.45)",

                  backdropFilter:
                    "blur(20px)"
                }}
              >

                {
                  token ? (

                    <>

                      <div
                        style={{
                          padding: "14px",

                          borderBottom:
                            "1px solid rgba(255,255,255,0.08)",

                          marginBottom: "10px"
                        }}
                      >

                        <p
                          style={{
                            margin: 0,

                            color: "white",

                            fontWeight: "bold",

                            fontSize: "17px"
                          }}
                        >

                          {user?.name}

                        </p>

                        <p
                          style={{
                            margin:
                              "6px 0 0 0",

                            color: "#94a3b8",

                            fontSize: "13px"
                          }}
                        >

                          {user?.email}

                        </p>

                      </div>

                      <Link
                        to="/profile"
                        style={dropdownItem}
                      >

                        👤 Profile

                      </Link>

                      <Link
                        to="/dashboard"
                        style={dropdownItem}
                      >

                        📊 Dashboard

                      </Link>

                      <Link
                        to="/my-posts"
                        style={dropdownItem}
                      >

                        📦 My Posts

                      </Link>

                      <Link
                        to="/claimed-items"
                        style={dropdownItem}
                      >

                        ✅ Claimed Items

                      </Link>

                      <Link
                        to="/contact"
                        style={dropdownItem}
                      >

                        📞 Contact

                      </Link>

                      <Link
                        to="/about"
                        style={dropdownItem}
                      >

                        ℹ️ About

                      </Link>

                      <div
                        style={{
                          height: "1px",

                          background:
                            "rgba(255,255,255,0.08)",

                          margin: "12px 0"
                        }}
                      />

                      <div

                        onClick={handleLogout}

                        style={{
                          ...dropdownItem,

                          color: "#fca5a5"
                        }}
                      >

                        🚪 Logout

                      </div>

                    </>

                  ) : (

                    <>

                      <div
                        style={{
                          padding: "14px",

                          borderBottom:
                            "1px solid rgba(255,255,255,0.08)",

                          marginBottom: "10px"
                        }}
                      >

                        <p
                          style={{
                            margin: 0,

                            color: "white",

                            fontWeight: "bold",

                            fontSize: "17px"
                          }}
                        >

                          Welcome 👋

                        </p>

                        <p
                          style={{
                            margin:
                              "6px 0 0 0",

                            color: "#94a3b8",

                            fontSize: "13px",

                            lineHeight: "20px"
                          }}
                        >

                          Login or create an account
                          to post and claim items.

                        </p>

                      </div>

                      <Link
                        to="/login"
                        style={dropdownItem}
                      >

                        🔐 Login

                      </Link>

                      <Link
                        to="/register"
                        style={dropdownItem}
                      >

                        ✨ Register

                      </Link>

                      <Link
                        to="/home"
                        style={dropdownItem}
                      >

                        🔎 Browse Items

                      </Link>

                      <Link
                        to="/about"
                        style={dropdownItem}
                      >

                        ℹ️ About

                      </Link>

                      <Link
                        to="/contact"
                        style={dropdownItem}
                      >

                        📞 Contact

                      </Link>

                    </>

                  )
                }

              </div>

            )
          }

        </div>

      </div>

    </nav>

  );

}

export default Navbar;
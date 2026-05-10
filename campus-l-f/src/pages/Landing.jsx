import { Link } from "react-router-dom";

import theme from "../styles/theme";

function LandingPage() {

  const demoItems = [

    {
      title: "Lost Wallet",

      image:
        "https://godbolegear.com/cdn/shop/files/SingleCashPocket-ClassicWallet-StuffedwithCardsandCash.jpg?v=1722840632",

      status: "Lost"
    },

    {
      title: "Found ID Card",

      image:
        "https://miro.medium.com/v2/resize:fit:1400/1*QwwFxZhBENDKWTz1IKCW7A@2x.jpeg",

      status: "Found"
    },

    {
      title: "Lost Phone",

      image:
        "https://images.unsplash.com/photo-1658817774209-28024d01be2c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8",

      status: "Lost"
    },

    {
      title: "Found Keys",

      image:
        "https://images.unsplash.com/photo-1643804926339-e94f0a655185?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2V5c3xlbnwwfHwwfHx8MA%3D%3D",

      status: "Found"
    }

  ];

  return (

    <div
      style={{
        ...theme.pageBackground,

        overflow: "hidden",

        padding: "70px 40px",

        position: "relative"
      }}
    >

      {/* BACKGROUND GLOWS */}

      <div
        style={{
          position: "absolute",

          width: "420px",

          height: "420px",

          background:
            "rgba(59,130,246,0.18)",

          borderRadius: "50%",

          filter: "blur(140px)",

          top: "-150px",

          left: "-120px",

          zIndex: 0
        }}
      />

      <div
        style={{
          position: "absolute",

          width: "420px",

          height: "420px",

          background:
            "rgba(168,85,247,0.18)",

          borderRadius: "50%",

          filter: "blur(140px)",

          bottom: "-150px",

          right: "-120px",

          zIndex: 0
        }}
      />

      {/* MAIN CONTENT */}

      <div
        style={{
          maxWidth: "1300px",

          margin: "0 auto",

          display: "flex",

          alignItems: "center",

          justifyContent: "space-between",

          gap: "60px",

          flexWrap: "wrap",

          position: "relative",

          zIndex: 1
        }}
      >

        {/* LEFT SIDE */}

        <div
          style={{
            flex: 1,

            minWidth: "320px"
          }}
        >

          <div
            style={{
              display: "inline-block",

              padding: "10px 18px",

              borderRadius: "999px",

              marginBottom: "25px",

              background:
                "rgba(255,255,255,0.06)",

              border:
                "1px solid rgba(255,255,255,0.08)",

              color: "#cbd5e1",

              fontSize: "14px",

              backdropFilter: "blur(12px)"
            }}
          >

            🎒 Smart Campus Recovery Platform

          </div>

          <h1
            style={{
              fontSize: "74px",

              lineHeight: "1.05",

              marginBottom: "25px",

              fontWeight: "bold",

              background:
                "linear-gradient(to right, #60a5fa, #c084fc)",

              WebkitBackgroundClip: "text",

              WebkitTextFillColor:
                "transparent"
            }}
          >

            Campus
            <br />
            Lost & Found

          </h1>

          <p
            style={{
              fontSize: "20px",

              color: "#cbd5e1",

              marginBottom: "40px",

              maxWidth: "560px",

              lineHeight: "34px"
            }}
          >

            Report, browse, search, and reclaim
            lost belongings across your campus
            with a modern and easy-to-use platform
            built for students.

          </p>

          {/* BUTTONS */}

          <div
            style={{
              display: "flex",

              gap: "20px",

              flexWrap: "wrap"
            }}
          >

            <Link
              to="/login"

              style={{
                padding: "16px 34px",

                borderRadius: "16px",

                textDecoration: "none",

                color: "white",

                fontWeight: "bold",

                fontSize: "16px",

                background:
                  "linear-gradient(to right, #2563eb, #7c3aed)",

                boxShadow:
                  "0 10px 25px rgba(37,99,235,0.35)",

                transition: "0.3s"
              }}
            >

              Login

            </Link>

            <Link
              to="/register"

              style={{
                padding: "16px 34px",

                borderRadius: "16px",

                textDecoration: "none",

                color: "white",

                fontWeight: "bold",

                fontSize: "16px",

                border:
                  "1px solid rgba(255,255,255,0.12)",

                background:
                  "rgba(255,255,255,0.05)",

                backdropFilter: "blur(12px)"
              }}
            >

              Register

            </Link>

          </div>

          {/* STATS */}

          <div
            style={{
              display: "flex",

              gap: "25px",

              marginTop: "55px",

              flexWrap: "wrap"
            }}
          >

            
          </div>

        </div>

        {/* RIGHT SIDE */}

        <div
          style={{
            flex: 1,

            minWidth: "340px",

            position: "relative",

            height: "650px",

            overflow: "hidden",

            maskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)"
          }}
        >

          <div
            style={{
              display: "flex",

              flexDirection: "column",

              gap: "24px",

              animation:
                "scrollCards 18s linear infinite"
            }}
          >

            {
              [...demoItems, ...demoItems].map(

                (item, index) => (

                  <div
                    key={index}

                    style={{
                      ...theme.glassCard,

                      overflow: "hidden",

                      padding: "0",

                      transition: "0.3s"
                    }}
                  >

                    <div
                      style={{
                        position: "relative"
                      }}
                    >

                      <img
                        src={item.image}

                        alt={item.title}

                        style={{
                          width: "100%",

                          height: "240px",

                          objectFit: "cover"
                        }}
                      />

                      <div
                        style={{
                          position: "absolute",

                          top: "18px",

                          right: "18px",

                          background:

                            item.status === "Lost"

                              ? "linear-gradient(to right, #dc2626, #ef4444)"

                              : "linear-gradient(to right, #2563eb, #3b82f6)",

                          padding: "7px 14px",

                          borderRadius: "999px",

                          fontSize: "12px",

                          fontWeight: "bold",

                          textTransform: "uppercase"
                        }}
                      >

                        {item.status}

                      </div>

                    </div>

                    <div
                      style={{
                        padding: "24px"
                      }}
                    >

                      <h3
                        style={{
                          fontSize: "24px",

                          marginBottom: "10px"
                        }}
                      >

                        {item.title}

                      </h3>

                      <p
                        style={{
                          color: "#cbd5e1",

                          lineHeight: "26px"
                        }}
                      >

                        Recently reported item on campus.

                      </p>

                    </div>

                  </div>

                )

              )
            }

          </div>

        </div>

      </div>

      {/* ANIMATION */}

      <style>
        {`

          @keyframes scrollCards {

            0% {
              transform: translateY(0);
            }

            100% {
              transform: translateY(-50%);
            }

          }

        `}
      </style>

    </div>

  );

}

export default LandingPage;
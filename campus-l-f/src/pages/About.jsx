import { Link } from "react-router-dom";

function About() {

  return (

    <div
      style={{
        minHeight: "100vh",

        background:
          "linear-gradient(to bottom right, #020617, #0f172a, #1e1b4b)",

        color: "white",

        padding: "70px 25px",

        fontFamily:
          "'Trebuchet MS', Arial, sans-serif"
      }}
    >

      <div
        style={{
          maxWidth: "1200px",

          margin: "0 auto"
        }}
      >

        {/* HERO */}

        <div
          style={{
            textAlign: "center",

            marginBottom: "80px"
          }}
        >

          <div
            style={{
              width: "90px",

              height: "90px",

              margin: "0 auto 25px",

              borderRadius: "24px",

              background:
                "linear-gradient(to bottom right, #3b82f6, #8b5cf6)",

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              fontSize: "38px",

              fontWeight: "bold",

              boxShadow:
                "0 15px 40px rgba(59,130,246,0.35)"
            }}
          >

            C

          </div>

          <h1
            style={{
              fontSize: "64px",

              marginBottom: "20px",

              lineHeight: "1.1",

              background:
                "linear-gradient(to right, #60a5fa, #c084fc)",

              WebkitBackgroundClip: "text",

              WebkitTextFillColor:
                "transparent"
            }}
          >

            About Campus Lost & Found

          </h1>

          <p
            style={{
              maxWidth: "850px",

              margin: "0 auto",

              color: "#cbd5e1",

              fontSize: "20px",

              lineHeight: "36px"
            }}
          >

            Campus Lost & Found is a smart
            platform designed to help students
            quickly report, search, and reclaim
            lost belongings across campus.
            Our goal is to simplify the recovery
            process and reconnect people with
            their valuables faster.

          </p>

        </div>

        {/* FEATURES */}

        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",

            gap: "25px",

            marginBottom: "80px"
          }}
        >

          <div
            style={{
              background:
                "rgba(15,23,42,0.75)",

              border:
                "1px solid rgba(255,255,255,0.08)",

              padding: "35px",

              borderRadius: "24px",

              backdropFilter: "blur(14px)"
            }}
          >

            <h2
              style={{
                marginBottom: "18px",

                fontSize: "28px"
              }}
            >

              🔎 Easy Search

            </h2>

            <p
              style={{
                color: "#cbd5e1",

                lineHeight: "30px"
              }}
            >

              Quickly browse lost and found
              items using smart filters,
              search functionality, and
              organized categories.

            </p>

          </div>

          <div
            style={{
              background:
                "rgba(15,23,42,0.75)",

              border:
                "1px solid rgba(255,255,255,0.08)",

              padding: "35px",

              borderRadius: "24px",

              backdropFilter: "blur(14px)"
            }}
          >

            <h2
              style={{
                marginBottom: "18px",

                fontSize: "28px"
              }}
            >

              📦 Item Posting

            </h2>

            <p
              style={{
                color: "#cbd5e1",

                lineHeight: "30px"
              }}
            >

              Users can post detailed lost
              or found item reports including
              images, location, category,
              and descriptions.

            </p>

          </div>

          <div
            style={{
              background:
                "rgba(15,23,42,0.75)",

              border:
                "1px solid rgba(255,255,255,0.08)",

              padding: "35px",

              borderRadius: "24px",

              backdropFilter: "blur(14px)"
            }}
          >

            <h2
              style={{
                marginBottom: "18px",

                fontSize: "28px"
              }}
            >

              🤝 Faster Recovery

            </h2>

            <p
              style={{
                color: "#cbd5e1",

                lineHeight: "30px"
              }}
            >

              The platform improves communication
              between students and increases the
              chances of successfully recovering
              lost belongings.

            </p>

          </div>

        </div>

        {/* HOW IT WORKS */}

        <div
          style={{
            marginBottom: "90px"
          }}
        >

          <h2
            style={{
              fontSize: "48px",

              marginBottom: "40px",

              textAlign: "center"
            }}
          >

            How It Works

          </h2>

          <div
            style={{
              display: "grid",

              gridTemplateColumns:
                "repeat(auto-fit, minmax(240px, 1fr))",

              gap: "25px"
            }}
          >

            {
              [

                "Create an account securely",

                "Post lost or found items",

                "Browse campus listings",

                "Claim and recover belongings"

              ].map((step, index) => (

                <div
                  key={index}

                  style={{
                    background:
                      "rgba(30,41,59,0.75)",

                    padding: "35px",

                    borderRadius: "22px",

                    textAlign: "center",

                    border:
                      "1px solid rgba(255,255,255,0.06)"
                  }}
                >

                  <div
                    style={{
                      width: "60px",

                      height: "60px",

                      margin:
                        "0 auto 20px",

                      borderRadius: "18px",

                      background:
                        "linear-gradient(to right, #2563eb, #8b5cf6)",

                      display: "flex",

                      justifyContent: "center",

                      alignItems: "center",

                      fontSize: "24px",

                      fontWeight: "bold"
                    }}
                  >

                    {index + 1}

                  </div>

                  <p
                    style={{
                      fontSize: "18px",

                      lineHeight: "30px",

                      color: "#e2e8f0"
                    }}
                  >

                    {step}

                  </p>

                </div>

              ))
            }

          </div>

        </div>

        {/* CTA */}

        <div
          style={{
            textAlign: "center",

            background:
              "linear-gradient(to right, rgba(37,99,235,0.18), rgba(139,92,246,0.18))",

            border:
              "1px solid rgba(255,255,255,0.08)",

            borderRadius: "30px",

            padding: "60px 30px"
          }}
        >

          <h2
            style={{
              fontSize: "46px",

              marginBottom: "20px"
            }}
          >

            Ready to Get Started?

          </h2>

          <p
            style={{
              color: "#cbd5e1",

              fontSize: "18px",

              marginBottom: "35px"
            }}
          >

            Join the platform and help make
            campus recovery easier for everyone.

          </p>

          <div
            style={{
              display: "flex",

              justifyContent: "center",

              gap: "20px",

              flexWrap: "wrap"
            }}
          >

            <Link
              to="/register"

              style={{
                padding: "15px 30px",

                borderRadius: "14px",

                textDecoration: "none",

                background:
                  "linear-gradient(to right, #2563eb, #8b5cf6)",

                color: "white",

                fontWeight: "bold",

                boxShadow:
                  "0 10px 25px rgba(59,130,246,0.3)"
              }}
            >

              Create Account

            </Link>

            <Link
              to="/home"

              style={{
                padding: "15px 30px",

                borderRadius: "14px",

                textDecoration: "none",

                border:
                  "1px solid rgba(255,255,255,0.2)",

                color: "white",

                fontWeight: "bold"
              }}
            >

              Browse Items

            </Link>

          </div>

        </div>

      </div>

    </div>

  );

}

export default About;
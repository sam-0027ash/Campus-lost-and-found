import {
  Mail,
  Phone,
  MapPin
} from "lucide-react";

function Contact() {

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right, #0f172a, #111827)",
        color: "white",
        padding: "60px 20px",
        fontFamily:
          "'Trebuchet MS', Arial, sans-serif"
      }}
    >

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto"
        }}
      >

        <div
          style={{
            textAlign: "center",
            marginBottom: "60px"
          }}
        >

          <h1
            style={{
              fontSize: "58px",
              marginBottom: "20px",
              background:
                "linear-gradient(to right, #60a5fa, #a78bfa)",
              WebkitBackgroundClip:
                "text",
              WebkitTextFillColor:
                "transparent"
            }}
          >

            Contact Us

          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "18px",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "30px"
            }}
          >

            Need help regarding lost items,
            claims, or technical issues?
            Reach out to us anytime.

          </p>

        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
            marginBottom: "50px"
          }}
        >

          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "35px",
              borderRadius: "20px"
            }}
          >

            <Mail size={38} />

            <h2
              style={{
                marginTop: "20px",
                marginBottom: "12px"
              }}
            >
              Email
            </h2>

            <p style={{ color: "#cbd5e1" }}>
              support@campuslostfound.com
            </p>

          </div>

          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "35px",
              borderRadius: "20px"
            }}
          >

            <Phone size={38} />

            <h2
              style={{
                marginTop: "20px",
                marginBottom: "12px"
              }}
            >
              Phone
            </h2>

            <p style={{ color: "#cbd5e1" }}>
              +91 9876543210
            </p>

          </div>

          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "35px",
              borderRadius: "20px"
            }}
          >

            <MapPin size={38} />

            <h2
              style={{
                marginTop: "20px",
                marginBottom: "12px"
              }}
            >
              Campus Office
            </h2>

            <p style={{ color: "#cbd5e1" }}>
              Student Services Block,
              Main Campus
            </p>

          </div>

        </div>

        <div
          style={{
            backgroundColor: "#1e293b",
            padding: "40px",
            borderRadius: "24px"
          }}
        >

          <h2
            style={{
              marginBottom: "25px",
              fontSize: "32px"
            }}
          >
            Send a Message
          </h2>

          <form>

            <input
              type="text"
              placeholder="Your Name"

              style={{
                width: "100%",
                padding: "16px",
                marginBottom: "20px",
                borderRadius: "12px",
                border: "none",
                backgroundColor: "#0f172a",
                color: "white"
              }}
            />

            <input
              type="email"
              placeholder="Your Email"

              style={{
                width: "100%",
                padding: "16px",
                marginBottom: "20px",
                borderRadius: "12px",
                border: "none",
                backgroundColor: "#0f172a",
                color: "white"
              }}
            />

            <textarea
              placeholder="Your Message"

              rows="6"

              style={{
                width: "100%",
                padding: "16px",
                marginBottom: "25px",
                borderRadius: "12px",
                border: "none",
                backgroundColor: "#0f172a",
                color: "white",
                resize: "none"
              }}
            />

            <button
              type="submit"

              style={{
                padding: "15px 28px",
                border: "none",
                borderRadius: "12px",
                background:
                  "linear-gradient(to right, #2563eb, #7c3aed)",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "16px"
              }}
            >

              Send Message

            </button>

          </form>

        </div>

      </div>

    </div>

  );

}

export default Contact;
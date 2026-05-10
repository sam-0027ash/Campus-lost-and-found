const theme = {

  pageBackground: {

    minHeight: "100vh",

    background:
      "linear-gradient(135deg, #020617, #0f172a, #111827)",

    color: "white",

    fontFamily:
      "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",

    position: "relative",

    overflow: "hidden"
  },

  glassCard: {

    background:
      "rgba(15, 23, 42, 0.75)",

    backdropFilter: "blur(12px)",

    border:
      "1px solid rgba(255,255,255,0.08)",

    borderRadius: "24px",

    boxShadow:
      "0 10px 30px rgba(0,0,0,0.35)"
  },

  input: {

    backgroundColor:
      "rgba(30,41,59,0.9)",

    color: "white",

    border:
      "1px solid rgba(255,255,255,0.08)",

    borderRadius: "14px",

    padding: "14px 16px",

    outline: "none",

    fontSize: "15px"
  },

  primaryButton: {

    background:
      "linear-gradient(to right, #3b82f6, #8b5cf6)",

    color: "white",

    border: "none",

    borderRadius: "14px",

    padding: "14px 22px",

    fontWeight: "bold",

    cursor: "pointer",

    transition: "0.3s"
  },

  secondaryButton: {

    background:
      "rgba(255,255,255,0.08)",

    color: "white",

    border:
      "1px solid rgba(255,255,255,0.08)",

    borderRadius: "14px",

    padding: "14px 22px",

    fontWeight: "bold",

    cursor: "pointer"
  }

};

export default theme;
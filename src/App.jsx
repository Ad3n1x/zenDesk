import React, { useState, useEffect } from "react";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);

  // Track screen width for responsiveness
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isTablet = width <= 768;
  const isMobile = width <= 480;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#e7f9b5",
        width: "100%",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          width: "100%",
          padding: 20,
          display: "flex",
          flexDirection: isTablet ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: isTablet ? 20 : 0,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img
            src="Screenshot 2026-05-15 180216.png"
            alt="Zendesk Logo"
            style={{
              width: isMobile ? 90 : 120,
              height: isMobile ? 70 : 100,
              objectFit: "cover",
              borderRadius: 8,
            }}
          />
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 10,
            width: isTablet ? "100%" : "auto",
            justifyContent: isTablet ? "center" : "flex-end",
          }}
        >
          <button
            style={{
              backgroundColor: "#d1f470",
              border: "none",
              padding: "10px 20px",
              height: 50,
              borderRadius: 10,
              width: isMobile ? "100%" : "auto",
            }}
          >
            Try For Free
          </button>

          <button
            style={{
              backgroundColor: "white",
              border: "2px solid black",
              padding: "10px 20px",
              height: 50,
              borderRadius: 10,
              width: isMobile ? "100%" : "auto",
            }}
          >
            View Demo
          </button>
        </div>
      </div>

      <hr style={{ width: "100%" }} />

      {/* SIGN-IN CARD */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: 40,
        }}
      >
        <div
          style={{
            width: "90%",
            maxWidth: 380,
            backgroundColor: "white",
            border: "1px solid #d1d1d1",
            borderRadius: 10,
            padding: 24,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <h1 style={{ margin: 0, fontSize: 24, fontWeight: 600 }}>Sign in to Zendesk</h1>
          <h4 style={{ margin: 0, color: "#666", fontWeight: 400 }}>yoursubdomain.zendesk.com</h4>

          {/* Input */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #d1d1d1",
              borderRadius: 8,
              padding: "12px 16px",
              backgroundColor: "#f7f7f7",
              flexWrap: "wrap",
              justifyContent:"center"
            }}
          >
            <input
              type="text"
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                background: "transparent",
                fontSize: 16,
              }}
              
            />
            <span style={{ fontSize: 16, color: "#555" }}>.zendesk.com</span>
          </div>

          <a href="#" style={{ color: "black", textDecoration: "none" }}>
            Forgot your subdomain?
          </a>

          <button
            style={{
              backgroundColor: "#d1f470",
              border: "none",
              padding: "10px 20px",
              borderRadius: 10,
              color: "white",
              fontSize: 16,
              width: "100%",
            }}
          >
            Sign In
          </button>

          <button
            style={{
              backgroundColor: "transparent",
              border: "1px solid black",
              padding: "10px 20px",
              borderRadius: 10,
              fontSize: 16,
              width: "100%",
            }}
          >
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              New here? Start free trial
            </a>
          </button>

          <hr />
        </div>
      </div>

      {/* LINKS */}
      <div
        style={{
          marginTop: 30,
          display: "flex",
          flexDirection: isTablet ? "column" : "row",
          gap: 20,
          textAlign: "center",
        }}
      >
        <a style={{ color: "black" }} href="">
          Sign In To Chat
        </a>
        <a style={{ color: "black" }} href="">
          Sign In To Sell
        </a>
        <a style={{ color: "black" }} href="">
          Sign In To Sunshine Conversation
        </a>
      </div>

      {/* FOOTER */}
      <div
        style={{
          marginTop: 50,
          backgroundColor: "white",
          padding: 30,
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <p>Terms of Use</p>
        <p>Privacy Notice</p>
        <p>Cookie Notice</p>
        <p>Cookie settings</p>
        <p>Trust Center</p>
        <p>© 2026 Zendesk, Inc.</p>
      </div>
    </div>
  );
};

export default App;

import React, { useState, useEffect, useRef } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [glow, setGlow] = useState(true);
  const boxRef = useRef(null);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => {
    if (count > 0) setCount(prev => prev - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setGlow(prev => !prev);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const animatedShadow = glow
    ? `
      0 0 15px rgba(255, 20, 147, 0.5),
      0 0 30px rgba(255, 105, 180, 0.4),
      0 0 45px rgba(238, 29, 133, 0.3)
    `
    : `
      0 0 8px rgba(255, 105, 180, 0.2),
      0 0 16px rgba(255, 20, 147, 0.15)
    `;

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: "radial-gradient(ellipse at top left, #5e075eff, #c598a7, #240742ff)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        ref={boxRef}
        style={{
          textAlign: "center",
          padding: "30px",
          border: "3px solid #c3154cff",
          borderRadius: "15px",
          boxShadow: animatedShadow,
          transition: "box-shadow 0.6s ease-in-out",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2 style={{ textShadow: animatedShadow, fontSize: "32px", color: "#c3154cff" }}>Counter</h2>
        <h3 style={{ textShadow: animatedShadow, fontSize: "36px", color: "#c3154cff" }}>{count}</h3>
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={decrement}
            style={{
              margin: "10px",
              padding: "10px 20px",
              backgroundColor: "#c6466eff",
              border: "2px solid #e41739",
              color: "#e1cfd9ff",
              borderRadius: "8px",
              cursor: "pointer",
              boxShadow: animatedShadow,
              transition: "all 0.3s ease",
            }}
          >
            ➖ Decrease
          </button>
          <button
            onClick={increment}
            style={{
              margin: "10px",
              padding: "10px 20px",
              backgroundColor: "#c6466eff",
              border: "2px solid #e41739",
              color: "#e1cfd9ff",
              borderRadius: "8px",
              cursor: "pointer",
              boxShadow: animatedShadow,
              transition: "all 0.3s ease",
            }}
          >
            ➕ Increase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
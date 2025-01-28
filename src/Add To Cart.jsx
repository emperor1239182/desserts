import { useState } from "react";

const CounterButton = () => {
  const [itemCount, setItemCount] = useState(0);

  const handleIncrement = () => setItemCount((prev) => prev + 1);
  const handleDecrement = () => setItemCount((prev) => Math.max(prev - 1, 0));

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem", // Spacing between elements
        backgroundColor: "hsl(14, 86%, 42%)",
        borderRadius: '10px', 
        width: "70%",
      }}
    >
      {/* Decrement Button */}
      {itemCount > 0 && (
        <button
          onClick={handleDecrement}
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            backgroundColor: "#F97316", // Matches the orange theme
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          aria-label="Decrement"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="2"
            fill="none"
            viewBox="0 0 10 2"
          >
            <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
          </svg>
        </button>
      )}

      {/* Count or "Add" Text */}
      <span
      
        style={{
          fontSize: "16px",
          fontWeight: "bold",
          color: itemCount > 0 ? "#000" : "#9CA3AF",
        }}
      >
        { itemCount > 0 ? itemCount : <span onClick={handleIncrement}>
      <svg xmlns="http://www.w3.org/2000/svg" 
width="21"
height="20" 
fill="none" 
viewBox="0 0 21 20">
<g fill="#C73B0F" clip-path="url(#a)">
<path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/>
<path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/>
</g><defs>
<clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs>
</svg>
Add to cart
      </span>}
      </span>

      {/* Increment Button */}
      {itemCount > 0 && (

      <button
        onClick={handleIncrement}
        style={{
          width: "16px",
          height: "16px",
          borderRadius: "50%",
           // Matches the orange theme
          border: "1px thin #fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        aria-label="Increment"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            fill="#fff"
            d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
          />
        </svg>
      </button>
      )}
    </div>
  );
};

export default CounterButton;

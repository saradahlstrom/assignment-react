import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

export default function App() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    });
  
  return (
    <div><h1>You have wasted {count} seconds on this website.</h1>
    <p>Having fun? &#129300;</p></div>
  );
  }



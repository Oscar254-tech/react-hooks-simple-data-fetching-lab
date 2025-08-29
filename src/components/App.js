// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch a random dog image
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.message); // API returns { message: "image_url" }
        setLoading(false);         // stop loading once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        setLoading(false);
      });
  }, []); // empty array = run once when component mounts

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Random Dog Image</h1>
      <img src={imageUrl} alt="A Random Dog" style={{ maxWidth: "400px" }} />
    </div>
  );
}

export default App;

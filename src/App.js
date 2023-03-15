import { useEffect, useState } from "react";
import "./App.css";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((response) => response.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [term]);
  // adding term as a dependency means that when term changes, the code should run again.

  const searchText = (text) => {
    setTerm(text);
  };

  let content = (
    <h1 className="text-6xl text-center mx-auto mt-32">Gallery not loaded!</h1>
  );
  let message;

  if (isLoading) {
    content = (
      <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
    );
  } else {
    content = (
      <>
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </>
    );
  }
  if (!isLoading && images.length === 0) {
    message = (
      <h1 className="text-xl text-center mx-auto mt-32">
        Oops! No images found!
      </h1>
    );
  }

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={searchText} />
      {message}

      <div className="grid grid-cols-3 gap-4">{content}</div>
    </div>
  );
}

export default App;

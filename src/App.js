import { useEffect, useState } from "react";
import "./App.css";
import ImageCard from "./components/ImageCard";


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
  }, []);

  let content = <h1>Gallery not loaded</h1>;

  if (isLoading) {
    content = <h1 className="text-6xl text-center mx-auto">Loading...</h1>;
  } else {
    content = (
      <>
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {content}
      </div>
    </div>
  );
}

export default App;

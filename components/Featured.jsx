import styles from '../styles/Featured.module.css';
import { useState, useEffect } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0); // Current image index
  const [showSeparator, setShowSeparator] = useState(false); // Toggle separator visibility
  const [showText, setShowText] = useState(false); // Toggle text visibility
  const [showSubtext, setShowSubtext] = useState(false); // Toggle subtext visibility
  const [showButton, setShowButton] = useState(false); // Toggle button visibility

  const images = [
    { src: "/img/logo6.jpg", text: "Welcome to Our Pizza Shop", subtext: "Experience the best pizza in town!" },
    { src: "/img/logo7.png", text: "Delicious Pizzas Made with Love", subtext: "Fresh ingredients, every time." },
    { src: "/img/indian_chicken_tikka.jpg", text: "Try Our Special Chicken Tikka", subtext: "A taste of India in every bite." },
  ];
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  useEffect(() => {
    // Function to handle the sequential display
    const toggleDisplay = async () => {
      // Reset all states
      setShowSeparator(false);
      setShowText(false);
      setShowSubtext(false);
      setShowButton(false);
  
      // Sequentially show elements with delays
      await delay(500); // Wait for 0.5 seconds
      setShowSeparator(true); // Show separator
  
      await delay(500); // Wait for 0.5 seconds
      setShowText(true); // Show text
  
      await delay(500); // Wait for 0.5 seconds
      setShowSubtext(true); // Show subtext
  
      await delay(500); // Wait for 0.5 seconds
      setShowButton(true); // Show button
    };
  
    // Call the function initially and then every 6 seconds
    toggleDisplay(); // Call immediately
    const interval = setInterval(() => {
      toggleDisplay();
      setIndex((prevIndex) => (prevIndex + 1) % images.length); // Change the image every 6 seconds
    }, 6000); // Total cycle: 3 seconds for sequential display + 3 seconds for reset
  
    return () => {
      clearInterval(interval); // Cleanup interval
    };
  }, [images.length]);

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : images.length - 1);
      setShowSeparator(false);
      setShowText(false);
      setShowSubtext(false);
      setShowButton(false);
    }
    if (direction === "r") {
      setIndex(index !== images.length - 1 ? index + 1 : 0);
      setShowSeparator(false);
      setShowText(false);
      setShowSubtext(false);
      setShowButton(false);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <img src="/img/arrowl.png" alt="Left Arrow" />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div
            className={`${styles.imgContainer} ${
              i === index ? styles.active : ""
            }`}
            key={i}
            style={{ backgroundImage: `url(${img.src})` }}
          >
            <div className={styles.textContainer}>
              {showSeparator && (
                <img
                  src="/img/separator.svg"
                  alt="Separator"
                  className={styles.separator}
                />
              )}
              {showText && <h1 className={styles.text}>{img.text}</h1>}
              {showSubtext && <p className={styles.subtext}>{img.subtext}</p>}
              {showButton && (
                <button className={styles.btn}>Menu Items</button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <img src="/img/arrowr.png" alt="Right Arrow" />
      </div>
    </div>
  );
};

export default Featured;
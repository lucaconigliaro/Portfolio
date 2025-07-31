import { useEffect, useState } from "react";

export default function Carousel() {
    const data = [
        { name: "JavaScript", logo: "/src/assets/logos/JavaScript.white.png" },
        { name: "React", logo: "src/assets/logos/React.png" },
        { name: "Vite", logo: "/src/assets/logos/Vite.svg" },
        { name: "TypeScript", logo: "/src/assets/logos/TypeScript.png" },
        { name: "Bootstrap", logo: "/src/assets/logos/Bootstrap.png" },
        { name: "Tailwind", logo: "/src/assets/logos/Tailwind.png" },
    ];

    const bgColors = {
        JavaScript: "#C3C89F",
        React: "#7E9CA6",
        TypeScript: "#8DA7C2",
        Bootstrap: "#9B8BB0",
        Tailwind: "#88C4D9",
        Vite: "#9A9ECB"
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    const carouselScroll = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const interval = setInterval(carouselScroll, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div>
            <div className="carousel-container">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="carousel-item"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                            backgroundColor: bgColors[item.name]
                        }}
                    >
                        <img src={item.logo} alt={item.name} style={{ width: "50px", height: "50px", marginBottom: "1rem" }} />
                        <h1>{item.name}</h1>
                    </div>
                ))}
            </div>

            {/* Indicatori */}
            <div className="dots">
                {data.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentIndex === index ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}
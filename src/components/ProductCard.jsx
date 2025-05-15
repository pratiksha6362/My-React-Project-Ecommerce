import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function ProductCard({ product }) {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const goToDetails = () => navigate(`/product/${product.id}`);

    // Styles (same as before, no changes)
    const cardStyle = {
        width: "250px",
        background: "linear-gradient(145deg, #2c003e, #3b0060)",
        color: "#fff",
        borderRadius: "12px",
        boxShadow: "0 0 15px rgba(255, 0, 255, 0.3)",
        overflow: "hidden",
        fontFamily: "'Orbitron', sans-serif",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease",
    };

    // Styles for the parent container that holds the cards
    const productContainerStyle = {
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",  // Adds gap between the cards
        justifyContent: "center", // Optionally, center the cards
    };

    const clickableStyle = {
        cursor: "pointer",
        padding: "15px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%"
    };

    const imageStyle = {
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderRadius: "8px",
        border: "2px solid #ff00ff",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        boxShadow: "0 0 10px #ff00ff55"
    };

    const titleStyle = {
        fontSize: "16px",
        fontWeight: "bold",
        margin: "10px 0",
        color: "#ffccff",
        textShadow: "0 0 5px #ff00ff",
    };

    const priceStyle = {
        color: "#39ff14",
        fontSize: "18px",
        marginBottom: "8px",
        textShadow: "0 0 5px #39ff14"
    };

    const detailsText = {
        color: "#aaaaff",
        fontSize: "14px",
        marginTop: "8px",
        fontWeight: "normal",
        textShadow: "0 0 3px #aaaaff"
    };

    const buttonStyle = {
        background: "linear-gradient(90deg, #00ffff, #ff00ff)",
        color: "#000",
        border: "none",
        padding: "12px 0",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        width: "100%",
        borderBottomLeftRadius: "12px",
        borderBottomRightRadius: "12px",
        transition: "all 0.3s ease",
        textShadow: "0 0 3px #fff",
    };

    const handleHover = (e, hover) => {
        e.target.style.background = hover
            ? "linear-gradient(90deg, #ff00ff, #00ffff)"
            : "linear-gradient(90deg, #00ffff, #ff00ff)";
        e.target.style.boxShadow = hover ? "0 0 12px #00ffff" : "none";
    };

    return (
        <div style={productContainerStyle}>
            <div
                style={cardStyle}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
                <div style={clickableStyle} onClick={goToDetails}>
                    <img src={product.image} alt={product.name} style={imageStyle} />
                    <h3 style={titleStyle}>{product.name}</h3>
                    <p style={priceStyle}>₹{product.price.toFixed(2)}</p>
                    <p style={detailsText}>View Details</p>
                </div>
                <button
                    style={buttonStyle}
                    onMouseEnter={(e) => handleHover(e, true)}
                    onMouseLeave={(e) => handleHover(e, false)}
                    onClick={() => addToCart(product)}
                >
                    🛒 Add to Cart
                </button>
            </div>
        </div>
    );
}

import { useCart } from "../context/cartContext";
import { useEffect } from "react";

export default function OrderSuccess() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, []);

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
            background: "linear-gradient(145deg, #0d0b29, #2c003e)",  // dark gradient background
            padding: "20px",
            fontFamily: "'Orbitron', sans-serif",  // Futuristic font for neon feel
        },
        title: {
            fontSize: "3rem",
            color: "#39ff14", // Neon green for vibrant effect
            marginBottom: "20px",
            textShadow: "0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14",  // Glowing neon green text
        },
        message: {
            fontSize: "1.5rem",
            color: "#fff",
            marginBottom: "30px",
            textShadow: "0 0 5px #fff, 0 0 10px #ff00ff, 0 0 15px #ff00ff", // Light white text with neon purple glow
        },
        button: {
            padding: "14px 30px",
            fontSize: "1.2rem",
            background: "linear-gradient(90deg, #ff00ff, #39ff14)", // Neon gradient background for the button
            color: "#000",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            textDecoration: "none",
            boxShadow: "0 0 10px #ff00ff, 0 0 20px #39ff14", // Glowing effect around the button
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>🎉 Order Placed Successfully!</h1>
            <p style={styles.message}>Thank you for shopping with us.</p>
            <a href="/" style={styles.button}>Go to Home</a>
        </div>
    );
}

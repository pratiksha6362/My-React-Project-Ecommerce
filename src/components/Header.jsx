import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function Header() {
    const { cart } = useCart();

    const headerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#8A3DFF", // light violet
        color: "#FFFFFF",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
        borderBottom: "2px solid #FF4D00", // Orange-red border for accent
    };

    const logoStyle = {
        fontSize: "28px",
        textDecoration: "none",
        color: "#FF4D00", // Orange-red for logo
        fontWeight: "bold",
        letterSpacing: "2px",
        textTransform: "uppercase",
    };

    const cartLinkStyle = {
        textDecoration: "none",
        color: "#FFFFFF",
        fontSize: "18px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontWeight: "600", // Slightly bolder for emphasis
    };

    const cartCountStyle = {
        backgroundColor: "#FF4D00", // Orange-red background for cart count
        color: "#FFFFFF", // White text for contrast
        borderRadius: "12px",
        padding: "4px 10px",
        marginLeft: "6px",
        fontSize: "14px",
        fontWeight: "bold",
    };

    return (
        <header style={headerStyle}>
            <Link to="/" style={logoStyle}>myShop</Link>
            <Link to="/cart" style={cartLinkStyle}>
                🛒 Cart
                <span style={cartCountStyle}>{cart.length}</span>
            </Link>
        </header>
    );
}

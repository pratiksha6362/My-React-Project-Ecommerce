
import { useState } from "react";
import { products } from "../date/product.js";
import ProductCard from "../components/ProductCard";
import { FaStoreAlt } from "react-icons/fa"; // Fancy store icon

export default function Home() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const filtered = products.filter(
        (p) =>
            (category === "All" || p.category === category) &&
            p.name.toLowerCase().includes(search.toLowerCase())
    );

    const categories = ["All", ...new Set(products.map((p) => p.category))];

    const styles = {
        container: {
            padding: "30px",
            fontFamily: "'Segoe UI', sans-serif",
            backgroundColor: "#f9f9ff",
            minHeight: "100vh",
            color: "#222",
        },
        heading: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "3rem", // Increased font size
            color: "#9C27B0", // Neon purple for a fancy touch
            gap: "15px",
            marginBottom: "40px",
            fontFamily: "'Brush Script MT', cursive", // Cursive font for a fancy look
            textShadow: "0 0 10px #FF00FF, 0 0 20px #FF00FF", // Neon glow effect
            letterSpacing: "2px",
            transition: "all 0.3s ease", // Smooth transition for hover
        },
        headingHover: {
            textShadow: "0 0 15px #FF00FF, 0 0 30px #FF00FF, 0 0 60px #FF00FF", // Intensified glow on hover
            color: "#FF00FF", // Neon pink color on hover
        },
        filters: {
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "40px",
            flexWrap: "wrap",
        },
        input: {
            padding: "12px",
            fontSize: "1.2rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            minWidth: "250px",
            backgroundColor: "#f1f1f1",
            transition: "all 0.3s ease",
        },
        inputFocus: {
            outline: "none",
            borderColor: "#FF00FF",
            boxShadow: "0 0 10px #FF00FF",
        },
        select: {
            padding: "12px",
            fontSize: "1.2rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            minWidth: "200px",
            backgroundColor: "#f1f1f1",
            transition: "all 0.3s ease",
        },
        selectFocus: {
            outline: "none",
            borderColor: "#FF00FF",
            boxShadow: "0 0 10px #FF00FF",
        },
        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
        },
        cardHover: {
            transform: "scale(1.05)",
            transition: "all 0.3s ease",
        },
    };

    return (
        <div style={styles.container}>
            <h1
                style={styles.heading}
                onMouseEnter={(e) => e.target.style = { ...styles.headingHover }}
                onMouseLeave={(e) => e.target.style = { ...styles.heading }}
            >
                <FaStoreAlt size={30} color="#9C27B0" />
                Explore MyProducts
            </h1>
            <div style={styles.filters}>
                <input
                    type="text"
                    placeholder="🔎 Search for products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={styles.input}
                    onFocus={(e) => e.target.style = { ...styles.inputFocus }}
                    onBlur={(e) => e.target.style = { ...styles.input }}
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={styles.select}
                    onFocus={(e) => e.target.style = { ...styles.selectFocus }}
                    onBlur={(e) => e.target.style = { ...styles.select }}
                >
                    {categories.map((cat) => (
                        <option key={cat}>{cat}</option>
                    ))}
                </select>
            </div>
            <div style={styles.grid}>
                {filtered.map((product) => (
                    <div
                        key={product.id + product.name}
                        style={styles.cardHover}
                    >
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}

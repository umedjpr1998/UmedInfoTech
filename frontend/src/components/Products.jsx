import React, { useEffect, useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products`) // Fetch from MongoDB
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error loading products:", error));
    }, []);


    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 style={{ fontFamily: "cursive", margin: "20px 0px 30px 0px" }}>Products</h1>
                <input
                    type="text"
                    placeholder="Search products..."
                    className="form-control w-25"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="row">
                {filteredProducts.map((product) => {
                    const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
                    return (
                        <div key={product.id} style={{ height: "500px", width: "320px" }} className="m-auto d-flex flex-wrap flex-between mb-5 me-1">
                            <div className="card shadow-sm h-100">
                                <img style={{ height: "300px", minHeight: "250px" }} src={product.image} className="card-img-top mb-3" alt={product.title} />
                                <div className="card-body">
                                    <h5 style={{ minHeight: "70px", maxHeight: "70px", overflow: "auto" }} className="card-title">{product.title}</h5>
                                    <p style={{ maxHeight: "70px", overflow: "auto" }} className="card-text">{product.description}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="fw-bold text-success">₹{product.price}</span>
                                        <span className="text-muted text-decoration-line-through">₹{product.originalPrice}</span>
                                        <span className="badge bg-success">{discountPercentage}% OFF</span>
                                    </div>
                                    <button className="btn btn-primary w-100 mt-3">Explore More</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Products;


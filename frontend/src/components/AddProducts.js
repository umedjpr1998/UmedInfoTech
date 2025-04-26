import React, { useState } from "react";

const AddProducts = () => {
    const [product, setProduct] = useState({
        title: "",
        description: "",
        price: "",
        originalPrice: "",
        category: "",
        image: null,
        rate: "",
        count: "",
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setProduct({ ...product, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", product.title);
        formData.append("description", product.description);
        formData.append("price", product.price);
        formData.append("originalPrice", product.originalPrice);
        formData.append("category", product.category);
        formData.append("rate", product.rate);
        formData.append("count", product.count);
        formData.append("image", product.image);

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/addProduct`, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                alert("Product added successfully!");
                setProduct({
                    title: "",
                    description: "",
                    price: "",
                    originalPrice: "",
                    category: "",
                    image: null,
                    rate: "",
                    count: "",
                });
            } else {
                alert("Error adding product");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" name="title" value={product.title} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" name="description" value={product.description} onChange={handleChange} required></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="number" className="form-control" name="price" value={product.price} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Original Price</label>
                    <input type="number" className="form-control" name="originalPrice" value={product.originalPrice} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <input type="text" className="form-control" name="category" value={product.category} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Rating</label>
                    <input type="number" className="form-control" name="rate" step="0.1" value={product.rate} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Number of Reviews</label>
                    <input type="number" className="form-control" name="count" value={product.count} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input type="file" className="form-control" onChange={handleImageChange} required />
                </div>
                <button type="submit" className="btn btn-success">Add Product</button>
            </form>
        </div>
    );
};

export default AddProducts;

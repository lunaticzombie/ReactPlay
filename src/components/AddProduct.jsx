import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [product, setProduct] = useState({
    prodName: "",
    price: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append(
      "product",
      new Blob([JSON.stringify(product)], { type: "application/json" })
    );

    axios
      .post("http://localhost:8080/api/product", new Blob([JSON.stringify(product)], { type: "application/json" }), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Product added successfully:", response.data);
        alert("Product added successfully");
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        alert("Error adding product");
      });
  };

  return (
    <div className="container">
    <div className="center-container">
      <form className="row g-3 pt-5" onSubmit={submitHandler}>
        <div className="col-md-6">
          <label className="form-label">
            <h6>Name</h6>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Product Name"
            onChange={handleInputChange}
            value={product.name}
            name="prodName"
          />
        </div>
        <div className="col-5">
          <label className="form-label">
            <h6>Price</h6>
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Eg: $1000"
            onChange={handleInputChange}
            value={product.price}
            name="price"
            id="price"
          />
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AddProduct;

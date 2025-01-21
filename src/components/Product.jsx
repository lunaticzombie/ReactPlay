import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../axios";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/products/${id}`);
                setProduct(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return (
        <h2 className="text-center" style={{ padding: "10rem" }}>
            Product not found for id: {id}
        </h2>
        );
    }

    return (
        <>
        <div className="containers">
          <div className="right-column">
            <div className="product-description">
              {/* <span>{product.category}</span> */}
              <h1>{product.prodName}</h1>
              {/* <h5>{product.brand}</h5> */}
              {/* <p>{product.description}</p> */}
            </div>

            <div className="product-price">
              <span>{"$" + product.price}</span>
            </div>
            <div className="update-button ">
              <button
                className="btn btn-primary"
                type="button"
              >
                Update
              </button>
            
              <button
                className="btn btn-primary"
                type="button"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        </>
    );
};

export default Product;
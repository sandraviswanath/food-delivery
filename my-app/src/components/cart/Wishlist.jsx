import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { cartscontext } from "./ShopRoute";

function Wishlist() {
  const [
    cart,
    setCart,
    total,
    settotal,
    products,
    setProducts,
    drop,
    setdrop,
    search,
    setsearch,
    wish,
    setwish,
  ] = useContext(cartscontext);

  const navigate = useNavigate();

  const addToCart = (product) => {
    setCart([...cart, product]);
    settotal((prevTotal) => prevTotal + product.price);
    navigate("/cart");
  };
  return (
    <div>
      <center>
        <h3 className="head">Your Wishlist</h3>
      </center>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {wish.map((product) => (
          <div key={product.id}>
            <Card id="card" style={{ width: "12rem", margin: 70 }}>
              <Card.Img
                id="cardimage2"
                height={200}
                variant="top"
                src={product.images[1]}
              />
              <Card.Body id="cardbody">
                <Card.Title id="title2">{product.title}</Card.Title>
                <p>Brand:{product.brand}</p>
                <p>Price : {product.price}/-</p>
                <Button
                  id="buttonadd"
                  onClick={() => addToCart(product)}
                  variant="primary"
                >
                  Add To Cart
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;

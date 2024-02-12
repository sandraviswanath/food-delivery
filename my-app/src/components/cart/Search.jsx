import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { FaHeart } from "react-icons/fa6";
import { cartscontext } from "./ShopRoute";

function Search() {
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

  const addToCart = (product) => {
    setCart([...cart, product]);
    settotal((prevTotal) => prevTotal + product.price);
    navigate("/cart");
  };

  const addToWish = (product) => {
    setwish([...wish, product]);
  };

  const navigate = useNavigate();
  return (
    <div>
      <center>
        <h3 className="head">Your Search Results</h3>
      </center>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products
          .filter((product) => product.category == search)
          .map((product) => (
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
                  <div style={{ display: "flex" }}>
                    <Button
                      id="buttonadd"
                      onClick={() => addToCart(product)}
                      variant="primary"
                    >
                      Add To Cart
                    </Button>
                    <p>
                      <FaHeart onClick={() => addToWish(product)} id="like" />
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Search;

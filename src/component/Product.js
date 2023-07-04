import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add } from "../store/CartSlice";

const Product = () => {

  const dispatchItem = useDispatch();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => {
        // console.log("result-->", result);
        setProducts(result);
      })
      .catch((err) => {
        console.log("err-->", err);
      });
  }, []);

  const addToCart = (productData)=>{
    console.log('productData--->',productData);
    // dispatch a add action
    dispatchItem(add(productData))
  }

  return (
    <>
    <div className="row my-3">
      <h1>Product Dashboard</h1>
    </div>
      <div className="container my-3">
      <div className="row">
        {products &&
          products.map((pData, pIndex) => (
            <div className="col-md-3" key={pData.id} style={{marginBottom:'10px'}}>
              <Card className="h-100">
                <div className="text-center">
                <Card.Img variant="top" src={pData.image} style={{width:'100px',height:'130px'}} />
                </div>
                <Card.Body>
                  <Card.Title>{pData.title}</Card.Title>
                  <Card.Text>
                    USD: ${pData.price}
                  </Card.Text>
                </Card.Body>
                <Card.Footer style={{background:'white'}}>
                  <Button variant="primary" onClick={()=>addToCart(pData)} >Add to Cart</Button>
                </Card.Footer>
              </Card>
            </div>
          ))}
      </div>
      </div>
     
    </>
  );
};

export default Product;

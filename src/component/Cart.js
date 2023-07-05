import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { remove } from '../store/CartSlice';

const Cart = () => {


  const cartProduct = useSelector(state=> state.Cart);
  const removeDispatch = useDispatch();

  const removeItem = (remId)=>{
    console.log('remId-->',remId);
    // despatch a remove action
    removeDispatch(remove(remId));
  }

  const cartItems = cartProduct && cartProduct.map((pData, pIndex) => (
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
            <Button variant="danger" onClick={()=>removeItem(pData.id)} >Remove Item</Button>
          </Card.Footer>
        </Card>
      </div>
    ))


  return (
    <>
     <h1>Cart</h1> 
     {/* {JSON.stringify(cartProduct)} */}
     <div className="container my-3">
      {cartItems}
     </div>
    </>
  )
}

export default Cart

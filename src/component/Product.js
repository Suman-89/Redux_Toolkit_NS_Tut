import React, { useEffect } from "react";
import { Alert, Button, Card, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/CartSlice";
import { getProducts } from "../store/ProductSlice";
import StatusCode from '../utils/StatusCode';

const Product = () => {
  const dispatchItem = useDispatch();
  const { data: dashboardItems, status } = useSelector(
    (state) => state.Product
  );

  // const [dashboardItems,setDashboardItems] = useState([]);

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => {
    //     // console.log("result-->", result);
    //     setDashboardItems(result);
    //   })
    //   .catch((err) => {
    //     console.log("err-->", err);
    //   });

    //api fetch through redux
    dispatchItem(getProducts());
  }, []);

  if (status === StatusCode.LOADING ) {
    return <Spinner animation="border" variant="info" />;
  }
  if (status === StatusCode.ERROR ) {
    return (
      <Alert key="danger" variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    );
  }

  const addToCart = (productData) => {
    console.log("productData--->", productData);
    // dispatch a add action
    dispatchItem(add(productData));
  };

  const cart = dashboardItems.map((pData, pIndex) => (
    <div className="col-md-3" key={pData.id} style={{ marginBottom: "10px" }}>
      <Card className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={pData.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{pData.title}</Card.Title>
          <Card.Text>USD: ${pData.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: "white" }}>
          <Button variant="primary" onClick={() => addToCart(pData)}>
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <div className="row my-3">
        <h1>Product Dashboard</h1>
      </div>
      <div className="container my-3">
        <div className="row">{cart}</div>
      </div>
    </>
  );
};

export default Product;

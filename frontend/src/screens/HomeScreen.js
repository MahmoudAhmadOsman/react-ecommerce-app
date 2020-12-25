import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import axios from "axios";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";
//import data from "../data";

export default function HomeScreen() {
  //Define a REACT Hook, UseState() function and set to empty array
  //To manage your React components
  const [products, setProducts] = useState([]);
  //Set for a loading hook and set to false initially
  const [loading, setLoading] = useState(false);
  //Hook for Error
  const [error, setError] = useState(false);

  //UseEffect(para1, para2) in this case UseEffect(()=>{},[]);
  //Now send AJAX request to the backend and fetch products from the backend
  //step:1
  useEffect(() => {
    const fecthData = async () => {
      try {
        //Show the loading before axios request or loading data from the backend
        setLoading(true);

        //step:2 Fetch data using axios get request
        const { data } = await axios.get("/api/products");
        setLoading(false); // Set the loading to false after data is fetched from the backend

        //step:3 Now set the data to the setProducts
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fecthData();
  }, []);

  return (
    <div>
      {/* Before using axios function
      {data.products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))} */}

      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      )}
    </div>
  );
}

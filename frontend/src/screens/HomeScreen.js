// import React, { useEffect, useState } from "react";
import React, { useEffect } from "react";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
//import data from "../data";

export default function HomeScreen() {
	//Now use redux store instead of using react hooks
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);

	//Now, get the values, loading, error and products from productsLists function
	const { loading, error, products } = productList;

	/*No need to have the fetch data function anymore because, we're using store now*/
	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	return (
		<div>
			{loading ? (
				<LoadingBox></LoadingBox>
			) : error ? (
				<MessageBox variant="danger text-center mt-4">{error}</MessageBox>
			) : (
				<>
					<Product products={products}></Product>
				</>
			)}
		</div>
	);
}

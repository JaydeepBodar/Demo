"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import Pagination from "react-js-pagination";
import Productcard from "@/component/Productcard";
import Loader from "@/component/Loader";
import axios from "axios";
const Home = () => {
  const productdata=useSelector((state)=>state.demo)
  console.log("productdataproductdata",productdata)
  const [product, setProduct] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    axios
      .get(`${process.env.URL}allproduct`)
      .then((res) => setProduct(res?.data))
      .catch((e) => console.log("e", e))
      .finally(() => setloading(false));
  }, [loading]);
  const { getAllproduct, totalproduct, itemsperpage } = product;
  return (
    <>
      {loading === true ? (
        <Loader />
      ) : (
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          boxShadow: " 0 4px 8px rgba(0, 0, 0, 0.1)",
          columnGap: "15px",
          rowGap: "15px",
          padding: "0 20px",
        }}
      >
        {getAllproduct?.map((data, index) => (
          <Productcard data={data} key={index} />
        ))}
      </section>
      )}
    </>
  );
};

export default Home;
